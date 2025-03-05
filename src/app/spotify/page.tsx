"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/lib/redux/slices/dataSlice";
import { AppDispatch, RootState } from "@/lib/redux/store";

import { Flex, Splitter, Typography } from 'antd';
import SplitterFirstComponent from "./components/splitter-first-components";
import SplitterSecondComponent from "./components/splitter-second-components";

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
	<Flex justify="center" align="center" style={{ height: '100%' }}>
		<Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
			{props.text}
		</Typography.Title>
	</Flex>
);


export default function Page() {
	const dispatch = useDispatch<AppDispatch>();
	const { data, loading, error } = useSelector((state: RootState) => state.data);

	const [userId, setUserId] = useState<number | undefined>(undefined);

	// useEffect(() => {
	// 	dispatch(fetchData({ userId })); // ส่ง params ไปยัง Redux
	// }, [dispatch, userId]);

	return (
		<SplitterSecondComponent />
	);
}
