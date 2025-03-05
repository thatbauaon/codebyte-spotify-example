'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CardAlbum from './card-album';

const MusicCarousel = () => {
  const playlists = [
    { title: 'ป้าง นครินทร์', img: '/images/pang.jpg' },
    { title: 'ชิลล์ ฟูลส์', img: '/images/chillfools.jpg' },
    { title: 'Bruno Mars', img: '/images/bruno.jpg' },
    { title: 'Jeff Satur', img: '/images/jeff.jpg' },
    { title: 'Ariana Grande', img: '/images/ariana.jpg' },
    { title: 'Illslick', img: '/images/illslick.jpg' },
    { title: 'PUN', img: '/images/pun.jpg' },
  ];

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
        {playlists.map((playlist, index) => (
          <SwiperSlide key={index}>
            <CardAlbum />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MusicCarousel;
