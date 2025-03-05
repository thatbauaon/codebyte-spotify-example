import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface AlbumInterface {
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

export interface AlbumMusicInterface {
  album: Album;
  musics: Music[];
}

export interface Album {
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

export interface Music {
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
}


interface DataState {
  albums: {
    data: AlbumInterface[];
    loading: boolean;
    error: string | null;
  };
  albumMusicDetail: {
    data: AlbumMusicInterface | null;
    loading: boolean;
    error: string | null;
  };
}

const initialState: DataState = {
  albums: {
    data: [],
    loading: false,
    error: null,
  },
  albumMusicDetail: {
    data: null,
    loading: false,
    error: null,
  },
};

// ✅ Fetch Albums
export const fetchAlbum = createAsyncThunk(
  "data/fetchAlbum",
  async () => {
    const response = await fetch(`/api/data?pathUrl=${encodeURIComponent("/album")}`);

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || "Failed to fetch data");
    }
    return data.data.albums as AlbumInterface[];
  }
);

// ✅ Fetch Album Detail
export const fetchAlbumDetail = createAsyncThunk(
  "data/fetchAlbumDetail",
  async (albumId: string) => {
    const response = await fetch(`/api/data?pathUrl=${encodeURIComponent(`/album/${albumId}`)}`); // ✅ แก้ตรงนี้

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || "Failed to fetch data");
    }
    return data.data as AlbumMusicInterface;
  }
);

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbum.pending, (state) => {
        state.albums.loading = true;
        state.albums.error = null;
      })
      .addCase(fetchAlbum.fulfilled, (state, action) => {
        state.albums.loading = false;
        state.albums.data = action.payload;
      })
      .addCase(fetchAlbum.rejected, (state, action) => {
        state.albums.loading = false;
        state.albums.error = action.error.message || "Something went wrong";
      })

      .addCase(fetchAlbumDetail.pending, (state) => {
        state.albumMusicDetail.loading = true;
        state.albumMusicDetail.error = null;
      })
      .addCase(fetchAlbumDetail.fulfilled, (state, action) => {
        state.albumMusicDetail.loading = false;
        state.albumMusicDetail.data = action.payload;
      })
      .addCase(fetchAlbumDetail.rejected, (state, action) => {
        state.albumMusicDetail.loading = false;
        state.albumMusicDetail.error = action.error.message || "Something went wrong";
      });
  },
});

export default albumSlice.reducer;
