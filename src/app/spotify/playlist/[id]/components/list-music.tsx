'use client';

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from '@/lib/redux/store';

import { Avatar, Button, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faEllipsis, faRemove } from '@fortawesome/free-solid-svg-icons';
import TableMusic from './table-music';
import { PlayListDetailInterface, PlayListMusicInterface } from '../page';
import { delPlayList, fetchPlayList } from '@/lib/redux/slices/playList';

interface ListMusicProps {
  musics: PlayListMusicInterface[];
  playlist: PlayListDetailInterface;
}

const ListMusic: React.FC<ListMusicProps> = ({ musics, playlist }) => {
  const dispatch = useDispatch<AppDispatch>();

  const onRemove = async () => {
    console.log('===addPlaylist==');
    await dispatch(delPlayList(playlist?.id)).unwrap();
    dispatch(fetchPlayList("/playlist"));
  };

  const menu = (
    <Menu>
      {/* <Menu.Item key="1" onClick={addPlaylist}>
        <FontAwesomeIcon icon={faPlus} size="1x" style={{ color: '#b3b3b3' }} />
        เพิ่มลงในคอลเลกชันของคุณ
      </Menu.Item> */}
      <Menu.Item key="2" onClick={onRemove}>
        <FontAwesomeIcon icon={faRemove} size="1x" style={{ color: '#b3b3b3' }} />
        ลบคอลเลกชันของคุณ
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="w-full bg-gradient-to-b from-[#e35d5b] to-[#a04744] p-6 flex items-center">
        <div className="flex flex-row justify-start items-center">
          <Avatar size={50} style={{ backgroundColor: '#32be62' }} icon={<FontAwesomeIcon icon={faPlay} color='#000000' />} />
          <Button
            type="primary"
            shape="circle"
            icon={<FontAwesomeIcon icon={faPlus} size="1x" />}
            className="mx-4"
            style={{ backgroundColor: 'transparent', border: '2px solid #ababab', color: '#ababab', boxShadow: 'none' }}
          />
          <Dropdown overlay={menu} trigger={['click']}>
            <Button
              type="primary"
              shape="circle"
              icon={<FontAwesomeIcon icon={faEllipsis} size="1x" />}
              className="mx-4"
              style={{ backgroundColor: 'transparent', border: 'none', color: 'none', boxShadow: 'none' }}
            />
          </Dropdown>
        </div>
      </div>

      <div>
        <TableMusic musics={musics} />
      </div>
    </>
  );
};

export default ListMusic;
