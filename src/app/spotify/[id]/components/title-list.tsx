
'use client';

import { Album } from '@/lib/redux/slices/album';
import React, { useState } from 'react';

interface TitleListProps {
  item: Album;
  musicAmount: number;
}

const TitleList: React.FC<TitleListProps> = ({ item, musicAmount }) => {
  return (
    <div className="w-full h-[250px] bg-gradient-to-b from-[#e35d5b] to-[#a04744] p-6 flex items-center rounded-t-lg">
      <div className="relative">
        <img
          alt={item.image}
          src={item.image}
          className="w-[150px] h-[150px] rounded-lg shadow-lg"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </div>

      <div className="flex flex-col pl-6 text-white">
        <p className="text-sm font-light leading-none m-0 p-0">เพลย์ลิสต์</p>

        <p className="text-6xl font-bold leading-none my-4 py-2 max-w-[600px] truncate overflow-hidden text-ellipsis whitespace-nowrap">
          {item.name}
        </p>

        {/* <p className="text-md font-light leading-none m-0 p-0">กับ แท็กซี่, Loso, Zeal และอีกมาก</p> */}

        <div className="flex items-center mt-2 text-sm text-gray-200">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Spotify" className="h-5 mr-2" />
          <span>บันทึก 0 ครั้ง • {musicAmount} เพลง, ประมาณ {item.time_all.minutes}:{item.time_all.minutes} นาที</span>
        </div>
      </div>
    </div>
  );
};

export default TitleList;