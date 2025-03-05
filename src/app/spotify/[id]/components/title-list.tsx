
'use client';

import React, { useState } from 'react';

const TitleList = () => {
  return (
    <div className="w-full h-[250px] bg-gradient-to-b from-[#e35d5b] to-[#a04744] p-6 flex items-center rounded-t-lg">
      <div className="relative">
        <img
          className="w-[150px] h-[150px] rounded-lg shadow-lg"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt="Spotify Playlist"
        />
      </div>

      <div className="flex flex-col pl-6 text-white">
        <p className="text-sm font-light leading-none m-0 p-0">เพลย์ลิสต์</p>

        <p className="text-6xl font-bold leading-none my-4 py-2 max-w-[600px] truncate overflow-hidden text-ellipsis whitespace-nowrap">
          โหมดวิทยุป้าง นครินทร์
        </p>

        <p className="text-md font-light leading-none m-0 p-0">กับ แท็กซี่, Loso, Zeal และอีกมาก</p>

        <div className="flex items-center mt-2 text-sm text-gray-200">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Spotify" className="h-5 mr-2" />
          <span>บันทึก 3,471 ครั้ง • 50 เพลง, ประมาณ 3 ชม. 15 นาที</span>
        </div>
      </div>
    </div>
  );
};

export default TitleList;