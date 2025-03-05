'use client';

import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { AlbumInterface } from '@/lib/redux/slices/album';
import { time } from 'console';

interface CardAlbumProps {
  album: AlbumInterface;
}


const CardAlbum: React.FC<CardAlbumProps> = ({ album }) => {
  const router = useRouter();

  const onClickDetail = (id: string) => {
    router.push(`/spotify/${id}`);
  }

  return (
    <>
      <div className='flex justify-center items-center w-[220px] h-[270px] rounded-md m-4 hover:bg-[#1e1e1e] group' onClick={() => onClickDetail(album.id)}>
        <div className="flex justify-center items-center w-[200px] h-[250px]">
          <div className='flex flex-col justify-center items-center'>
            <div className='relative'>
              <img
                alt="example"
                src={album.image}
                className="w-[200px] h-[200px] object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
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
              {album.name}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAlbum;
