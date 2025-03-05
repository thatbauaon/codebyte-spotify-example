"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/lib/redux/slices/dataSlice";
import { AppDispatch, RootState } from "@/lib/redux/store";

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.data);
  
  const [userId, setUserId] = useState<number | undefined>(undefined);

  // useEffect(() => {
  //   dispatch(fetchData({ userId })); // ส่ง params ไปยัง Redux
  // }, [dispatch, userId]);

  return (
    <div>
      <h1>Data from API (Redux)</h1>

      {/* Dropdown เลือก userId */}
      <select onChange={(e) => setUserId(Number(e.target.value) || undefined)}>
        <option value="">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.length > 0 ? (
          data.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
}
