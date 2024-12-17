"use server";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
// import firebaseApp from "@/lib/firebase"; // Firebase configuration

// const FolderPage = () => {
//   const router = useRouter();
//   const { folderId } = router.query; // Fetch current folderId dynamically
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImages = async () => {
//       if (!folderId) return; // Exit if folderId is undefined

//       try {
//         const storage = getStorage(firebaseApp);
//         const folderRef = ref(storage, `folders/${folderId}`);
//         const folderItems = await listAll(folderRef);

//         // Fetch download URLs for all images
//         const urls = await Promise.all(
//           folderItems.items.map((itemRef) => getDownloadURL(itemRef))
//         );

//         setImages(urls);
//       } catch (error) {
//         console.error("Error fetching folder images:", error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, [folderId]);

//   if (loading) return <p>Loading folder images...</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Folder Images</h1>
//       {images.length === 0 ? (
//         <p>No images found in this folder.</p>
//       ) : (
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//           {images.map((url, index) => (
//             <img
//               key={index}
//               src={url}
//               alt={`Folder Image ${index}`}
//               style={{ width: "200px", height: "auto", borderRadius: "8px" }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FolderPage;

import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { useRouter } from "next/router";
const pageId = () => {
  const router = useRouter();
  const { folderId } = router.query;
  const [folderName, setFolderName] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFolderDetails = async () => {
      try {
        // Fetch folder metadata from Firestore
        const folderRef = doc(db, "folders", folderId);
        const folderSnapshot = await getDoc(folderRef);

        if (folderSnapshot.exists()) {
          const folderData = folderSnapshot.data();
          console.log("Fetched Folder Data:", folderData);

          setFolderName(folderData.name || "Unnamed Folder");
          navigation.setOptions({ title: folderData.name || "Folder Details" });

          // Fetch images from Firebase Storage
          const storage = getStorage();
          const folderStorageRef = ref(storage, `folders/${folderId}`);
          const folderList = await listAll(folderStorageRef);

          const imageUrls = await Promise.all(
            folderList.items.map((itemRef) => getDownloadURL(itemRef))
          );

          // console.log("Fetched Image URLs:", imageUrls);
          setImages(imageUrls);
        } else {
          console.error("Folder not found.");
        }
      } catch (error) {
        console.error("Error fetching folder details:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (folderId) fetchFolderDetails();
  }, [folderId]);

  if (loading) return <p>Loading folder images...</p>;

  return (
    <div>
      <h1>{setFolderName}</h1>
    </div>
  );
};

export default pageId;
