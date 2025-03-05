import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// ประกาศ Type ของข้อมูล
export interface PlayListInterface {
  id: string
  name: string
  image: string
  created_at: string
  updated_at: string
  created_by: any
  updated_by: any
  time_all: TimeAll
  musics: number
}

export interface TimeAll {
  minutes: number
  seconds: number
}


interface DataState {
  fetchData: {
    data: PlayListInterface[];
    loading: boolean;
    error: string | null;
  };
  addData: {
    data: string;
    loading: boolean;
    error: string | null;
  };
  delData: {
    data: string;
    loading: boolean;
    error: string | null;
  };
}

// สร้าง initial state
const initialState: DataState = {
  fetchData: {
    data: [],
    loading: false,
    error: null,
  },
  addData: {
    data: '',
    loading: false,
    error: null,
  },
  delData: {
    data: '',
    loading: false,
    error: null,
  },
};


// สร้าง async thunk สำหรับเรียก API
// ปรับ fetchPlayList ให้รับ params
export const fetchPlayList = createAsyncThunk(
  "data/fetchPlayList",
  async (pathUrl: string) => {
    const response = await fetch(`/api/data?pathUrl=${encodeURIComponent(pathUrl)}`);

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || "Failed to fetch data");
    }
    return data.data.play_lists as PlayListInterface[];
  }
);

export const addPlayList = createAsyncThunk(
  "data/addPlayList",
  async (playlistData: { name: string; image: string; musics: number }) => {
    const response = await fetch(`/api/data?pathUrl=${encodeURIComponent('/playlist')}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playlistData),
    });

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || "Failed to add playlist");
    }
    return data.message;
  }
);

export const delPlayList = createAsyncThunk(
  "data/delPlayList",
  async (playlistId: string) => {
    const response = await fetch(`/api/data?pathUrl=${encodeURIComponent(`/playlist/${playlistId}`)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || "Failed to delete playlist");
    }
    return data.message;
  }
);

const playListSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayList.pending, (state) => {
        state.fetchData.loading = true;
        state.fetchData.error = null;
      })
      .addCase(fetchPlayList.fulfilled, (state, action) => {
        state.fetchData.loading = false;
        state.fetchData.data = action.payload;
      })
      .addCase(fetchPlayList.rejected, (state, action) => {
        state.fetchData.loading = false;
        state.fetchData.error = action.error.message || "Something went wrong";
      })
      .addCase(addPlayList.pending, (state) => {
        state.addData.loading = true;
        state.addData.error = null;
      })
      .addCase(addPlayList.fulfilled, (state, action) => {
        state.addData.loading = false;
        state.addData.data = action.payload;
      })
      .addCase(addPlayList.rejected, (state, action) => {
        state.addData.loading = false;
        state.addData.error = action.error.message || "Something went wrong";
      })
      .addCase(delPlayList.pending, (state) => {
        state.delData.loading = true;
        state.delData.error = null;
      })
      .addCase(delPlayList.fulfilled, (state, action) => {
        state.delData.loading = false;
        state.delData.data = action.payload;
      })
      .addCase(delPlayList.rejected, (state, action) => {
        state.delData.loading = false;
        state.delData.error = action.error.message || "Something went wrong";
      });
  },
});

// Export reducer เพื่อนำไปใช้ใน store
export default playListSlice.reducer;
