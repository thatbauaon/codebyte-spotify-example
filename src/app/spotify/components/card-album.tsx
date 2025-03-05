'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const CardAlbum = () => {
  const router = useRouter();

  const onClickDetail = () => {
    console.log('===[onClickDetail]====');
    router.push('/spotify/33');
  }

  return (
    <>
      <div className='flex justify-center items-center w-[220px] h-[270px] rounded-md m-4 hover:bg-[#1e1e1e] group' onClick={onClickDetail}>
        <div className="flex justify-center items-center w-[200px] h-[250px]">
          <div className='flex flex-col justify-center items-center'>
            <div className='relative'>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                className="w-[200px] h-[200px] object-cover rounded-lg"
              />
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Avatar size={50} style={{ backgroundColor: '#32be62' }} icon={<FontAwesomeIcon icon={faPlay} color='#000000' />} />
              </div>
            </div>
            <span
              className="block text-[#acacac] text-sm overflow-hidden mt-2"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              อันตรกิริยาแชมป์กุนซือคอมเมนต์ซีนีเพล็กซ์ แหม็บเลิฟเครปเฉิ่มไฮกุ ไลน์ แชมพูฟลุคคาแรคเตอร์ออดิทอเรียม อีสต์แคร์เทคโนแครตโซน โซนคูลเลอร์โบรกเกอร์แพนด้า อีสเตอร์คอร์สโทรรองรับโก๊ะ เทียมทานโปรเจ็คท์ริกเตอร์แมชีนจตุคาม โมเต็ลซาดิสม์โก๊ะสกาย บอร์ด ภารตะจึ๊ก ลิมูซีนผลักดันโลชั่น โค้กเบญจมบพิตรปิกอัพอาร์ติสต์ เรตติ้งติ๋ม วอลนัทเวิลด์ นพมาศ
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAlbum;
