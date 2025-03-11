import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

  // ดึง token จาก cookies
  const token = request.cookies.get('token')?.value;
  
  // ดึง path ที่ผู้ใช้พยายามเข้าถึง
  const path = request.nextUrl.pathname;
  // ตรวจสอบว่าเป็น path ที่ต้องมีการยืนยันตัวตนหรือไม่
  const isProtectedRoute = path.startsWith('/members');
  // ถ้าเป็น protected route แต่ไม่มี token

  const redirectUrl = new URL('/signin', request.url);

  if (isProtectedRoute && !token) {
    // สร้าง URL สำหรับ redirect
    const redirectUrl = new URL('/signin', request.url);
    // เพิ่ม parameter returnTo เพื่อให้กลับมาหน้าเดิมหลังจาก signin
    redirectUrl.searchParams.set('returnTo', path);
    
    // ทำการ redirect ไปยังหน้า signin
    return NextResponse.redirect(redirectUrl);
  }
  
  // ถ้ามี token แล้วแต่พยายามเข้าหน้า signin หรือหน้าสมัครสมาชิก
  if (token && (path === '/signin' || path === '/register')) {
    // redirect ไปหน้า members dashboard
    return NextResponse.redirect(new URL('/members', request.url));
    
  }
  
  // ถ้าไม่มีเงื่อนไขพิเศษ ให้ดำเนินการต่อตามปกติ
  return NextResponse.next();
}

// กำหนด path ที่ middleware นี้จะทำงาน (เฉพาะ path ที่ระบุ)
export const config = {
  matcher: [
    // ตรวจสอบหน้า login และ register
    '/signin',
    '/register',
    // ตรวจสอบทุกหน้าใน members
    '/members/:path*',
  ],
};