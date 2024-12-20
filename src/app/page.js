"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// Import required modules
import { EffectCards } from "swiper/modules";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/firebase";
import { Wrapper } from "./styles";
import Image from "next/image";

const Page = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch all images in folders
  const fetchImages = async () => {
    try {
      const storageRef = ref(storage, "folders"); // Root folder reference
      const folderList = await listAll(storageRef); // List all folders

      const imageUrls = [];

      // Iterate over each folder and fetch its images
      for (const folderRef of folderList.prefixes) {
        const folderContent = await listAll(folderRef);

        for (const fileRef of folderContent.items) {
          const url = await getDownloadURL(fileRef);
          imageUrls.push(url); // Add image URL to the array
        }
      }

      setImages(imageUrls); // Set fetched image URLs to state
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Wrapper>
      <header></header>

      <div className="great">
        <h3 className="great_txt">
          Hello <span>✋,</span>
        </h3>
      </div>
      {loading ? (
        <p>Loading images...</p>
      ) : images.length > 0 ? (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <Image
                className="img"
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={320}
                height={430}
                style={{ objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No images found.</p>
      )}
    </Wrapper>
  );
};

export default Page;
