import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import logger from "redux-logger"; // Import redux-logger
import playListReducer from "./slices/playList";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    playList: playListReducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Add redux-logger as middleware
});

// กำหนด RootState และ AppDispatch เพื่อใช้ใน components อื่นๆ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
