'use client';

import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

import { ClockCircleOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import { PlayListMusicInterface } from '../page';

interface MusicType {
  key: string;
  name: string;
  album: string;
  date: string;
  time: string;
}

interface TableMusicProps {
  musics: PlayListMusicInterface[];
}

const delMusic = () => {
  console.log('===addMusic==');
};

const menu = (
  <Menu>
    <Menu.Item key="1" onClick={delMusic}>
      <FontAwesomeIcon icon={faRemove} size="1x" style={{ color: '#b3b3b3' }} />
      ลบออกจากคอลเลกชันของคุณ
    </Menu.Item>
  </Menu>
);


const columns: TableProps<MusicType>['columns'] = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
    render: (text) => <a>{text}</a>,
    width: 20,
  },
  {
    title: 'ชื่อ',
    dataIndex: 'name',
    key: 'name',
    width: 500,
  },
  {
    title: 'อัลบั้ม',
    dataIndex: 'album',
    key: 'album',
    width: 350,
  },
  {
    title: 'วันที่เพิ่ม',
    dataIndex: 'date',
    key: 'date',
    width: 350,
    render: (text) => <a>{text}</a>,
  },
  {
    title: <ClockCircleOutlined />,
    dataIndex: 'time',
    key: 'time',
    width: 100,
    render: (text) => (
      <div className="flex flex-row items-center">
        <span>{text}</span>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button
            type="primary"
            shape="circle"
            icon={<FontAwesomeIcon icon={faEllipsis} size="1x" />}
            className="ml-4"
            style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}
          />
        </Dropdown>
      </div>
    ),
  },

];

const TableMusic: React.FC<TableMusicProps> = ({ musics }) => {
  const data: MusicType[] = musics.map((music, index) => ({
    key: String(index + 1),
    name: music.mu_name,
    album: music.al_name,
    date: new Date(music.mu_created_at).toLocaleDateString(),
    time: `${music.mu_music_time.minutes}:${music.mu_music_time.seconds.toString().padStart(2, '0')}`,
  }));

  return (
    <div className="">
      <Table<MusicType>
        columns={columns}
        dataSource={data}
        className="bg-transparent"
        pagination={false}
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
        components={{
          header: {
            cell: (props: any) => (
              <th
                {...props}
                style={{
                  backgroundColor: '#121212',
                  color: 'white',
                }}
              />
            ),
          },
          body: {
            row: (props: any) => (
              <tr
                {...props}
                style={{
                  backgroundColor: '#121212',
                  color: 'white',
                  transition: 'none',
                  borderBottom: 'none',
                }}
              />
            ),
          },
        }}
      />
    </div>
  );
};

export default TableMusic;
