'use client';

import React, { useState } from 'react';
import { Input, Row, Col, Layout, Button, Flex, Avatar } from 'antd';

import { useRouter } from 'next/navigation';
const { Header } = Layout;

import { SearchOutlined, HomeFilled } from '@ant-design/icons';


const HeaderComponent: React.FC = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Header className='bg-[#000000]' >
        <Row className='flex justify-center mt-3'>
          <Col span={10} className=''>
            <Flex justify={'center'} align={'center'} gap="middle">
              <Button type="primary" shape="circle" icon={<HomeFilled />} size={'large'} className='bg-[#1f1f1f]' onClick={() => router.push('/spotify')} />
              <Input size="large" placeholder="ค้นหาเพลง" prefix={<SearchOutlined />} />
            </Flex>
          </Col>
        </Row>
      </Header>
    </>
  );
}

export default HeaderComponent;