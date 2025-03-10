"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from 'next/server';

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // จำลองการเชื่อมต่อกับ API หรือฐานข้อมูล
  try {
    // ตัวอย่างการตรวจสอบ username และ password
    if (username === 'test' && password === 'password123') {
      // จำลองการส่ง response หลังจาก login สำเร็จ
      return NextResponse.json({
        data: {
          token: 'sample-token',
          firstLogin: false,
        },
      });
    } else {
      // หากข้อมูลไม่ถูกต้อง
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred during login' }, { status: 500 });
  }
}
