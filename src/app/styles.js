"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 97vh;
  width: 60vw;
  justify-self: center;
  background-color: #fff;
  border-radius: 1.5rem;

  header {
    height: 2.7rem;
    width: 100%;
    background-color: burlywood;
    justify-content: space-between;
    border-radius: 1.5rem;
  }
  .great {
    padding: 1rem 3rem;

    &_txt {
      font-size: 1.3rem;
      font-weight: lighter;
      /* margin-top: 1.2rem; */
    }
  }
  .swiper {
    width: 350px;
    height: 480px;
    /* margin-top: 1rem; */
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    /* font-size: 22px;
    font-weight: bold;
    color: #fff; */
  }

  .swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
  }

  .swiper-slide:nth-child(2n) {
    background-color: rgb(0, 140, 255);
  }

  .swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
  }

  .swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
  }

  .swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
  }

  .swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
  }

  .swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
  }

  .swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
  }

  .swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
  }

  .swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
  }
`;
