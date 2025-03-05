'use client';

import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

import { ClockCircleOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Button, Dropdown, Menu } from 'antd';

interface DataType {
  key: string;
  name: string;
  album: string;
  date: string;
  time: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    album: 'John Brown',
    date: '',
    time: 'John Brown',
  },
  {
    key: '2',
    name: 'John Brown',
    album: 'John Brown',
    date: '',
    time: 'John Brown',
  },
  {
    key: '3',
    name: 'John Brown',
    album: 'John Brown',
    date: '',
    time: 'John Brown',
  },
  {
    key: '4',
    name: 'John Brown',
    album: 'John Brown',
    date: '',
    time: 'John Brown',
  },
  {
    key: '5',
    name: 'John Brown',
    album: 'John Brown',
    date: '',
    time: 'John Brown',
  },
];

const addMusic = () => {
  console.log('===addMusic==');
};

const menu = (
  <Menu>
    <Menu.Item key="1" onClick={addMusic}>
      <FontAwesomeIcon icon={faPlus} size="1x" style={{ color: '#b3b3b3' }} />
      เพิ่มลงในคอลเลกชันของคุณ
    </Menu.Item>
  </Menu>
);


const columns: TableProps<DataType>['columns'] = [
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
    width: 150,
    render: (text) => <div className='flex flex-row'>
      <a>{'-:--'}
        <Dropdown overlay={menu} trigger={['click']}>
          <Button
            type="primary"
            shape="circle"
            icon={<FontAwesomeIcon icon={faEllipsis} size="1x" />}
            className="mx-4"
            style={{ backgroundColor: 'transparent', border: 'none', color: 'none', boxShadow: 'none' }}
          />
        </Dropdown>
      </a>
    </div>,
  },

];

const TableMusic: React.FC = () => {
  return (
    <div className="">
      <Table<DataType>
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
