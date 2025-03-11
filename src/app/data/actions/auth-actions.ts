"use server";

import { cookies } from "next/headers";

export async function login(values: { email: string; password: string, role: string, firebase: string }) {
  try {

    const response = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Login failed");
    }

    // ✅ แปลง token เป็น string เพื่อความปลอดภัย
    const token = String(data.token);

    // ✅ แก้ไข sameSite เป็น "strict"
    cookies().set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    // Server-side redirection after successful login
    return { success: true };

  } catch (error) {
    console.error('==[error]==')
    console.error(error)
    return { error: error instanceof Error ? error.message : "An error occurred" };
  }
}
