import Link from "next/link";
import React from "react";
import { ExternalLink, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-xl font-bold text-red-600">
                ALPHA IRANI
              </span>
            </Link>
            <p className="text-gray-400 mb-4 text-sm">
              پلتفرم انگیزشی و خودسازی برای ایرانیان که به دنبال رشد و موفقیت
              هستند.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-red-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500">
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/articles"
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  مقالات
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">دسته‌بندی‌ها</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  انگیزشی
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  خودسازی
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  موفقیت
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  سبک زندگی
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">تماس با ما</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                ایمیل: info@alphairani.com
              </li>
              <li className="text-gray-400 text-sm">
                اینستاگرام: @alpha_irani
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-900 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} آلفا ایرانی. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
