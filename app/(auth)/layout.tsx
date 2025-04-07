// 'use client';
import type React from "react";
import "@/app/globals.css";
import { Vazirmatn } from "next/font/google";
import Header from "@/components/partials/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


const vazir = Vazirmatn({
  subsets: ["arabic"], // برای پشتیبانی از فارسی
  weight: ["500", "700", "800"], // وزن‌های مورد نیاز
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Alpha Irani | پلتفرم انگیزشی و خودسازی",
//   description:
//     "پلتفرم انگیزشی و خودسازی برای ایرانیان که به دنبال رشد و موفقیت هستند.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = cookies().get('session');

  if(!session) redirect('/')
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} dark`}>
        <div className="min-h-screen bg-black text-white">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
