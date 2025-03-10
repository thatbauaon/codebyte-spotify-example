"use client";
import { useState } from "react";
import Image from 'next/image';

import { useRouter } from "next/navigation";

import { useTranslations } from "next-intl";
import { SigninFormMember } from "@/app/components/forms/signin-form-member";



export default function SignInRoute() {
  const t = useTranslations();
  const router = useRouter();

  const goToMemberPage = (newStep: number) => {
    router.push("/member");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="w-full max-w-md bg-red-100">
          <h1 className="text-center text-red-500">Welcome ddd</h1>
          <div className="mt-4 mb-10 flex flex-col items-center justify-center">
            {/* <Image
              src="/image/tr/pvd-logo-tr.png"
              width={250}
              height={500}
              alt="pvd-logo-tr.png"
            /> */}
          </div>
          <SigninFormMember />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4 text-center w-full">
        <p className="font-bold text-sm">For more information, please contact Metha Team +66 2 025 6919 or contact@methaam.com</p>
        <p className="font-bold text-sm">Copyright © 2024 Metha Asset Management Co., Ltd.</p>
      </footer>
    </div>
  );
}
