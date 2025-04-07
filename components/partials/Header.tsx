import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

const Header = () => {
  return (
   <header className="border-b border-red-900/30 bg-black/90 backdrop-blur-sm fixed w-full z-50">
   <div className="container mx-auto flex items-center justify-between py-4 px-4">
     <Link href="/" className="flex items-center">
       <span className="text-2xl font-bold text-red-600">ALPHA IRANI</span>
     </Link>
     <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
       <Link
         href="/articles"
         className="text-white hover:text-red-500 transition-colors font-medium"
       >
         مقالات
       </Link>
       <Link
         href="/products"
         className="text-white hover:text-red-500 transition-colors font-medium"
       >
         محصولات
       </Link>
       <Link
         href="/about"
         className="text-white hover:text-red-500 transition-colors font-medium"
       >
         درباره ما
       </Link>
       <Link
         href="/contact"
         className="text-white hover:text-red-500 transition-colors font-medium"
       >
         تماس با ما
       </Link>
     </nav>
     <div className="flex items-center space-x-4 space-x-reverse">
       <Link
         href="https://instagram.com/alpha_irani"
         target="_blank"
         rel="noopener noreferrer"
       >
         <Instagram className="h-5 w-5 text-white hover:text-red-500 transition-colors" />
       </Link>
       <Button
         variant="outline"
         className="hidden md:flex border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
       >
         ورود
       </Button>
       <Button className="md:hidden" variant="ghost" size="icon">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className="h-6 w-6"
         >
           <line x1="4" x2="20" y1="12" y2="12" />
           <line x1="4" x2="20" y1="6" y2="6" />
           <line x1="4" x2="20" y1="18" y2="18" />
         </svg>
       </Button>
     </div>
   </div>
 </header>
  )
}

export default Header