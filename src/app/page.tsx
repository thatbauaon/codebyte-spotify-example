'use client'; // ใช้สำหรับ App Router

import { Button } from 'antd';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ padding: 20 }}>
        <h1>Welcome to Next.js 13 + Ant Design</h1>
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="outlined">
          Outlined
        </Button>
        <Button color="primary" variant="dashed">
          Dashed
        </Button>
        <Button color="primary" variant="filled">
          Filled
        </Button>
        <Button color="primary" variant="text">
          Text
        </Button>
        <Button color="primary" variant="link">
          Link
        </Button>
      </div>
    </main>
  )
}
