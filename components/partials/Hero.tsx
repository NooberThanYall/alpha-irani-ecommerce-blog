import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
   <section className="relative pt-24 pb-16 bg-img">
   <div className="absolute inset-0 z-0 opacity-80">
     <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
   </div>
   <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
     <div className="max-w-3xl mx-auto text-center">
       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
         <span className="text-red-600 font-extrabold text-7xl">
           تبدیل
         </span>{" "}
         به بهترین نسخه خودت
       </h1>
       <p className="text-lg md:text-xl text-gray-300 mb-8">
         رشد شخصی و موفقیت در مسیر زندگی با آلفا ایرانی
       </p>
       <div className="flex flex-col sm:flex-row justify-center gap-4">
         <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6">
           شروع کنید
         </Button>
         <Button
           variant="outline"
           className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-6"
         >
           بیشتر بدانید
         </Button>
       </div>
     </div>
   </div>
 </section>
  )
}

export default Hero