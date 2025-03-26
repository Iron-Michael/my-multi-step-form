"use client";  
import { configureStore, createSlice } from '@reduxjs/toolkit';


const stepSlice = createSlice({
    name:'step',
    initialState:1,
    reducers: {
    nextStep: (state) => (state < 4 ? state + 1 : state), // ไปข้างหน้า
    prevStep: (state) => (state > 1 ? state - 1 : state), // กลับหลัง
    setStep: (state, action) => action.payload, // กำหนด step ตรง ๆ
  },
})

export const { nextStep, prevStep, setStep } = stepSlice.actions;

// สร้าง store
const store = configureStore({
  reducer: {
    step: stepSlice.reducer,
  },
});



// Export store และ type ของ state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;