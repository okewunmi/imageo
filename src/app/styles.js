"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 96vh;
  width: 60vw;
  justify-self: center;
  background-color: #fff;
  border-radius: 1.5rem;

  @media (max-width: 900px) {
    height: 100vh;
    width: 100vw;
  }
  @media (max-width: 500px) {
    border-radius: 0;
  }
  header {
    height: 2.7rem;
    width: 100%;
    background-color: burlywood;
    justify-content: space-between;
    border-radius: 1.5rem;

    @media (max-width: 500px) {
      display: none;
    }
  }
  .great {
    padding: 1rem 3rem;

    @media (max-width: 500px) {
      padding: 2rem;
    }

    &_txt {
      font-size: 1.3rem;
      font-weight: bold;
      font-family: lato;
      padding-bottom: 0.6rem;
      @media (max-width: 500px) {
        font-size: 1.3rem;
      }

      /* margin-top: 1.2rem; */
    }
    p {
      font-size: 0.9rem;
      @media (max-width: 500px) {
        font-size: 0.8rem;
      }
    }
  }
  .swiper {
    width: 350px;
    height: 460px;
    @media (max-width: 500px) {
      padding-top: 3.5rem;
    }
    /* margin-top: 1rem; */

    @media (max-width: 500px) {
      width: 300px;
      height: 420px;
    }
    @media (max-width: 390px) {
      width: 220px;
      height: 420px;
    }
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
  .img {
    border-radius: 18px;
    width: 95%;
    height: 95%;
    object-fit: cover;
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
    background-color: rgb(14, 174, 186);
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

  .swiper-slide:nth-child(1n) {
    background-color: rgb(204, 78, 78);
  }

  .swiper-slide:nth-child(2n) {
    background-color: rgb(38, 157, 255);
  }

  .swiper-slide:nth-child(3n) {
    background-color: rgb(35, 176, 117);
  }

  .swiper-slide:nth-child(4n) {
    background-color: rgb(203, 143, 65);
  }

  .swiper-slide:nth-child(5n) {
    background-color: rgb(91, 124, 15);
  }

  .swiper-slide:nth-child(6n) {
    background-color: rgb(143, 41, 63);
  }

  .swiper-slide:nth-child(7n) {
    background-color: rgb(48, 97, 34);
  }

  .swiper-slide:nth-child(8n) {
    background-color: rgb(0, 48, 180);
  }

  .swiper-slide:nth-child(9n) {
    background-color: rgb(175, 35, 175);
  }

  .swiper-slide:nth-child(10n) {
    background-color: rgb(78, 103, 91);
  }
`;
