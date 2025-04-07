import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import UserProvider from "@/context/UserProvider";

const vazir = Vazirmatn({
  subsets: ["arabic"], // برای پشتیبانی از فارسی
  weight: ["500", "700", "800"], // وزن‌های مورد نیاز
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Irani | پلتفرم توسعه فردی",
  description:
    "پلتفرم انگیزشی و خودسازی برای ایرانیان که به دنبال رشد و موفقیت هستند.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className}`}>
        <UserProvider>
          <div className="min-h-screen bg-black text-white">
            <Header />
            {children}
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
