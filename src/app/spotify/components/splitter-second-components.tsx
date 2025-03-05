'use client';

import React from 'react';
import { Flex } from 'antd';
import MusicCarousel from './MusicCarousel';

const SplitterSecondComponent: React.FC = () => {
  return (
    <Flex vertical style={{ width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
      <div className="">
        <div className="flex flex-row justify-between px-10 pt-4">
          <h2 className="text-2xl text-white">อั้ลบั้มและซิงเกิลยอดนิยม</h2>
          <span className="text-[#acacac]">แสดงทั้งหมด</span>
        </div>
				<MusicCarousel />
      </div>

    </Flex>
  );
};

export default SplitterSecondComponent;
