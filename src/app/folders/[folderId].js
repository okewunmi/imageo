// "use client";
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

import React from "react";

const IndexId = () => {
  return (
    <div>
      <h1>folder here</h1>
    </div>
  );
};

export default IndexId;
