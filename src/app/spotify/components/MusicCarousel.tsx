'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '@/lib/redux/store';
import { fetchAlbum } from '@/lib/redux/slices/album';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CardAlbum from './card-album';

const MusicCarousel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.album.albums);

  useEffect(() => {
    dispatch(fetchAlbum());
  }, [dispatch]);

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        slidesPerView={6}
        navigation
        loop={false}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {data.length > 0 && data.map((item, index) => (
          <SwiperSlide key={index}>
            <CardAlbum album={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MusicCarousel;
