"use client";

import { Avatar } from 'antd';
import { PushpinFilled } from "@ant-design/icons";
import TitleList from './components/title-list';
import ListMusic from './components/list-music';

export default function SpotifyDetailPage({
  params
}: {
  params: { slug: string }
}) {
  return (
    <div className='flex flex-col w-full'>
      <TitleList />
      <ListMusic />
    </div>
  );
}