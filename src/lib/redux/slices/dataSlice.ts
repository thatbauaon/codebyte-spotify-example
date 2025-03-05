import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ประกาศ Type ของข้อมูล
interface DataItem {
  id: number;
  title: string;
}

interface DataState {
  data: DataItem[];
  loading: boolean;
  error: string | null;
}

// สร้าง initial state
const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

// สร้าง async thunk สำหรับเรียก API
// ปรับ fetchData ให้รับ params
export const fetchData = createAsyncThunk(
    "data/fetchData",
    async (params: { userId?: number }) => {
      const queryString = params.userId ? `?userId=${params.userId}` : "";
      const response = await fetch(`/api/data${queryString}`);
      const data = await response.json();
      return data as DataItem[];
    }
  );

// สร้าง slice
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {}, // ถ้ามี reducers อื่นให้ใส่ที่นี่
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

// Export reducer เพื่อนำไปใช้ใน store
export default dataSlice.reducer;
