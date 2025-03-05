"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import TitleList from "./components/title-list";
import ListMusic from "./components/list-music";

export default function SpotifyDetailPage({ params }: { params: { id: string } }) {
  const [playlist, setPlaylist] = useState<PlayListDetailInterface | null>(null);
  const [playlistMusic, setPlaylistMusic] = useState<PlayListMusicInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/playlist/${params.id}`);

        if (!data.success) {
          throw new Error(data.message || "Failed to fetch playlist");
        }

        setPlaylist(data.data.play_list);
        setPlaylistMusic(data.data.playListMusic);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [params.id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!playlist) return <p>No playlist found</p>;

  return (
    <div className="flex flex-col w-full">
      <TitleList playlist={playlist} />
      <ListMusic playlist={playlist} musics={playlistMusic} />
    </div>
  );
}

export interface PlayListDetailInterface {
  id: string;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  created_by: any;
  updated_by: any;
  time_all: TimeAll;
  musics: number;
}

export interface TimeAll {
  minutes: number;
  seconds: number;
}

export interface PlayListMusicInterface {
  playlist_music_id: string
  mu_id: string
  mu_name: string
  mu_image: string
  mu_created_at: string
  mu_music_time: MuMusicTime
  mu_music_path: string
  al_id: string
  al_name: string
  al_image: string
}

export interface MuMusicTime {
  minutes: number
  seconds: number
  milliseconds: number
}
