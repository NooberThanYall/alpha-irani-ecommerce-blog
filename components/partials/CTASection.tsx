'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const CTASection = () => {
  const [email, setEmail] = useState('')

  const router = useRouter();

  return (
   <section className="py-16 bg-gradient-to-r from-black to-red-950">
   <div className="container mx-auto px-4">
     <div className="max-w-3xl mx-auto text-center">
       <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
         به جامعه <span className="text-red-500">آلفا ایرانی</span>{" "}
         بپیوندید
       </h2>
       <p className="text-lg text-gray-300 mb-8">
         برای دریافت آخرین مقالات، محصولات و محتوای انگیزشی در خبرنامه ما
         عضو شوید
       </p>
       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
         <input
           type="email"
           dir='ltr'
           placeholder="ایمیل خود را وارد کنید"
           className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-red-500 text-white w-full"
           value={email}
           onChange={e => setEmail(e.currentTarget.value)}
         />
         <Button className="bg-red-600 hover:bg-red-700 text-white whitespace-nowrap" onClick={e => {
          router.push(`/register?email=${email}`)
         }}>
           عضویت
         </Button>
       </div>
     </div>
   </div>
 </section>
  )
}

export default CTASection