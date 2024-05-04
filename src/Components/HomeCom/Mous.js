import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import './Mous.css'
const Mous = () => {

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 600,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        speed={400}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        // pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
         {items.map(item => (
        <SwiperSlide key={item.id} >
          <div className='card111' style={{ backgroundColor: "white",
  boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "240px",
  border: "none",
  borderRadius: "10px",
  padding: "30px 0px 0px 0px"}}> <img className="iomg" src="./imgs/BU.png" /></div>
        </SwiperSlide>
          ))}
        {/* <SwiperSlide>
          <div className='card111'> <img className="iomg" src="./imgs/BU.png" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card111'> <img className="iomg" src="./imgs/BU.png" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card111'> <img className="iomg" src="./imgs/BU.png" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card111'> <img className="iomg" src="./imgs/BU.png" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card111'> <img className="iomg" src="./imgs/BU.png" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card111'> <img className="iomg" src="./imgs/BU.png" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card111'> <img className="iomg" src="./imgs/BU.png" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card111'> <img className="iomg" src="./imgs/BU.png" /></div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 3' },
  { id: 5, name: 'Item 3' },
  { id: 6, name: 'Item 3' }
];
export default Mous