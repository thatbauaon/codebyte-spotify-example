'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { AppDispatch, RootState } from '@/lib/redux/store';

import { Avatar } from 'antd';

import { PushpinFilled } from "@ant-design/icons";
import { fetchPlayList } from '@/lib/redux/slices/playList';

const PlaylistItem = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.playList.fetchData);

  useEffect(() => {
    dispatch(fetchPlayList("/playlist"));
  }, [dispatch]);

  const onClickDetail = (playlistId: string) => {
    console.log('===[onClickDetail]====');
    router.push(`/spotify/playlist/${playlistId}`);
  }

  return (
    <div>
      {loading && <p className='text-red-600'>Loading...</p>}
      {data.length > 0 && data.map((item) =>
        <div key={item.id} className="flex items-center space-x-3 p-2 bg-black rounded-lg" onClick={() => onClickDetail(item.id)}>
          <Avatar
            shape="square"
            size={50}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <div className="flex flex-col leading-tight">
            <p className="text-white text-sm font-medium">{item.name}</p>
            <div className="flex items-center text-gray-400 text-xs">
              <PushpinFilled className="text-green-500 mr-1" />
              <span>เพลย์ลิสต์ • {item.musics} เพลง</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PlaylistItem;