"use server";

import {getRequestConfig} from 'next-intl/server';
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  
  let locale = 'en';

  let lang = await cookieStore.get("lang");
  console.log(lang)

  if(lang) {
    locale = lang.value;
  }
  
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});