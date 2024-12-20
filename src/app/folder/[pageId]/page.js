"use client";
import { storage } from "../../../../lib/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Wrapper } from "@/app/styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

export default function FolderImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get folderId from pathname
  const pathname = usePathname();
  const folderId = pathname?.split("/").pop();

  useEffect(() => {
    const fetchImages = async () => {
      if (!folderId) {
        setError("Folder ID is required");
        setLoading(false);
        return;
      }

      try {
        // Debug logs
        console.log("Current pathname:", pathname);
        console.log("Extracted folderId:", folderId);

        const folderPath = `folders/${folderId}`;
        console.log("Attempting to fetch from path:", folderPath);

        const folderRef = ref(storage, folderPath);
        const result = await listAll(folderRef);

        console.log("Files found in folder:", result.items.length);

        if (result.items.length === 0) {
          setImages([]);
          setLoading(false);
          return;
        }

        const imagePromises = result.items.map(async (imageRef) => {
          try {
            const url = await getDownloadURL(imageRef);
            return {
              url,
              name: imageRef.name.replace(/^photo/, ""),
              fullPath: imageRef.fullPath,
              timestamp: new Date().toISOString(),
            };
          } catch (downloadError) {
            console.error("Error getting download URL:", downloadError);
            return null;
          }
        });

        const loadedImages = (await Promise.all(imagePromises))
          .filter(Boolean)
          .sort((a, b) => b.timestamp.localeCompare(a.timestamp));

        console.log("Successfully loaded images:", loadedImages.length);
        setImages(loadedImages);
      } catch (err) {
        console.error("Error in fetchImages:", err);
        setError(`Failed to load images: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (folderId) {
      fetchImages();
    }
  }, [folderId, pathname]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="text-lg">Loading images from folder {folderId}...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-red-600">Error</h2>
          <p className="text-red-500">{error}</p>
          <p className="text-sm text-red-400 mt-2">Path: {pathname}</p>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="p-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold">No Images Found</h2>
          <p>No images were found in folder: {folderId}</p>
        </div>
      </div>
    );
  }

  return (
    <Wrapper className="container mx-auto px-4 py-8">
      <header></header>
      <div className="great">
        <h3 className="great_txt">
          Hello <span>✋,</span>
        </h3>
        <p>We’re glad you’re here to experience them</p>
      </div>
      {/* <h1 className="text-2xl font-bold mb-6">Images in folder: {folderId}</h1> */}

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.fullPath}>
            <Image
              className="img"
              src={image.url}
              alt={image.name}
              width={290}
              height={405}
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.fullPath}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                loading="lazy"
                onError={(e) => {
                  console.error("Image failed to load:", image.name);
                  e.target.classList.add("error");
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate" title={image.name}>
                {image.name}
              </h3>
              <p className="text-sm text-gray-500">
                {new Date(image.timestamp).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </Wrapper>
  );
}
