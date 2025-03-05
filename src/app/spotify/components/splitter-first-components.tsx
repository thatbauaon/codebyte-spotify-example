'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Flex, Button, Row, Tooltip, Input } from 'antd';
import { DatabaseFilled } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SearchOutlined } from '@ant-design/icons';
import PlaylistItem from './play-list-Item';
import { addPlayList, fetchPlayList } from '@/lib/redux/slices/playList';
import { AppDispatch } from '@/lib/redux/store';

const SplitterFirstComponent: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [hover, setHover] = useState(false);

	const handleAddPlaylist = async () => {
		try {
			const newPlaylist = {
				name: "",
				image: "chill.jpg",
				musics: 0,
			};

			await dispatch(addPlayList(newPlaylist)).unwrap();
			console.log("✅ Playlist added successfully!");
			dispatch(fetchPlayList("/playlist"));
		} catch (error) {
			console.error("❌ Failed to add playlist:", error);
		}
	};
	
	return (
		<Flex vertical style={{ width: '100%' }}> {/* ✅ ใช้ Flex แนวตั้ง */}
			<Flex style={boxStyle} justify={'space-between'} align={'flex-start'}>
				<Row>
					<Tooltip title="คอลเลคชั่นของคุณ">
						<Button type="primary" icon={<DatabaseFilled className='bg-[#b3b3b3]' />} className='bg-[#121212]'>
							คอลเลคชั่นของคุณ
						</Button>
					</Tooltip>
				</Row>
				<Tooltip title="สร้าง Playlist">
					<Button
						shape="circle"
						icon={<FontAwesomeIcon icon={hover ? faTimes : faPlus} size="1x" style={{ color: '#b3b3b3' }} />}
						className={`bg-[#121212] ${hover ? 'bg-red-500' : ''} hover:bg-red-500`}
						onClick={handleAddPlaylist}
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					/>
				</Tooltip>

			</Flex>
			<div className='my-4'>
				<Flex justify="start" align="start" style={{ height: '100%' }} className=''>
					<Input placeholder="ค้นหาคอลเลคชั่นของคุณ" prefix={<SearchOutlined />} />
				</Flex>
			</div>
			<div>
				<PlaylistItem />
			</div>
		</Flex>
	);
}

export default SplitterFirstComponent;

const boxStyle: React.CSSProperties = {
	width: '100%',
	borderRadius: 6,
};
