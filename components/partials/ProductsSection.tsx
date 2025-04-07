import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const ProductsSection = () => {
  return (
   <section className="py-16 bg-black">
   <div className="container mx-auto px-4">
     <div className="flex justify-between items-center mb-12">
       <h2 className="text-3xl font-bold text-white">محصولات</h2>
       <Link
         href="/products"
         className="text-red-500 hover:text-red-400 flex items-center gap-1"
       >
         <span>همه محصولات</span>
         <ChevronRight className="h-4 w-4" />
       </Link>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       {[1, 2, 3, 4].map((item) => (
         <div
           key={item}
           className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-red-600 transition-all group"
         >
           <div className="relative h-56">
             <img
               src={`/placeholder.svg?height=300&width=300&text=Product+${item}`}
               alt={`Product ${item}`}
               fill
               className="object-cover group-hover:scale-105 transition-transform duration-300"
             />
             <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
               جدید
             </div>
           </div>
           <div className="p-5">
             <h3 className="text-lg font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
               دوره آموزشی آلفا
             </h3>
             <p className="text-gray-400 text-sm mb-3 line-clamp-2">
               دوره جامع خودسازی و موفقیت در زندگی شخصی و حرفه‌ای
             </p>
             <div className="flex justify-between items-center">
               <span className="font-bold text-red-500">
                 ۴۹۹,۰۰۰ تومان
               </span>
               <Button
                 size="sm"
                 className="bg-zinc-800 hover:bg-red-600 text-white"
               >
                 خرید
               </Button>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>
 </section>
  )
}

export default ProductsSection