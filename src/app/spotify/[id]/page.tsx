"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '@/lib/redux/store';
import { Album, fetchAlbum, fetchAlbumDetail, Music } from '@/lib/redux/slices/album';

import TitleList from './components/title-list';
import ListMusic from './components/list-music';

export default function SpotifyDetailPage({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.album.albumMusicDetail);
  const [albumState, setAlbumState] = useState<Album | null>(null);
  const [albumMusicState, setAlbumMusicState] = useState<Music[]>([]);

  useEffect(() => {
    setAlbumState(null);
    setAlbumMusicState([]);
  }, [loading]);

  useEffect(() => {
    dispatch(fetchAlbumDetail(params.id));
  }, [dispatch]);

  useEffect(() => {
    if (data != null) {
      setAlbumState(data?.album);
      setAlbumMusicState(data?.musics);
    }
  }, [data]);

  return (
    <div className='flex flex-col w-full'>
      {albumState != null && <TitleList item={albumState ?? {}} musicAmount={albumMusicState.length} />}
      {albumState != null && <ListMusic album={albumState} musics={albumMusicState} />}
    </div>
  );
}