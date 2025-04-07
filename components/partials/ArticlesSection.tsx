import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ArticlesSection = () => {
  return (
   <section className="py-16 bg-zinc-950">
   <div className="container mx-auto px-4">
     <div className="flex justify-between items-center mb-12">
       <h2 className="text-3xl font-bold text-white">مقالات اخیر</h2>
       <Link
         href="/articles"
         className="text-red-500 hover:text-red-400 flex items-center gap-1"
       >
         <span>همه مقالات</span>
         <ChevronRight className="h-4 w-4" />
       </Link>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {[1, 2, 3].map((item) => (
         <div
           key={item}
           className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-red-900 transition-colors group"
         >
           <div className="relative h-48">
             <img
               src={`/placeholder.svg?height=300&width=500&text=Article+${item}`}
               alt={`Article ${item}`}
               className="object-cover"
             />
           </div>
           <div className="p-6">
             <span className="text-xs text-red-500 font-semibold">
               انگیزشی
             </span>
             <h3 className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-red-500 transition-colors">
               چگونه با چالش‌های زندگی مقابله کنیم
             </h3>
             <p className="text-gray-400 mb-4 line-clamp-2">
               در این مقاله به بررسی روش‌های مؤثر برای مقابله با چالش‌های
               زندگی و تبدیل آن‌ها به فرصت‌های رشد می‌پردازیم.
             </p>
             <div className="flex justify-between items-center">
               <span className="text-sm text-gray-500">۳ روز پیش</span>
               <Link
                 href={`/articles/${item}`}
                 className="text-red-500 hover:text-red-400 flex items-center gap-1 text-sm"
               >
                 <span>ادامه مطلب</span>
                 <ChevronRight className="h-3 w-3" />
               </Link>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>
 </section>
  )
}

export default ArticlesSection