'use client';

import { useState, useEffect } from 'react';
import Hero from "@/components/partials/Hero";
import ArticlesSection from "@/components/partials/ArticlesSection";
import ProductsSection from "@/components/partials/ProductsSection";
import CTASection from "@/components/partials/CTASection";
import Notification from "@/components/partials/Notification";

export default function Home({ searchParams }) {
  const success = searchParams.subscription;
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (success === 'success') {
      // Show notification after 3 seconds
      const showTimer = setTimeout(() => {
        setShowNotification(true);

        // Hide notification after 5 seconds (total 8 seconds from page load)
        const hideTimer = setTimeout(() => {
          setShowNotification(false);
        }, 3000);

        // Cleanup the hide timer if component unmounts
        return () => clearTimeout(hideTimer);
      }, 100);

      // Cleanup the show timer if component unmounts
      return () => clearTimeout(showTimer);
    }
  }, [success]);

  return (
    <>
      <Hero />
      <ArticlesSection />
      <ProductsSection />
      <CTASection />
      {success === 'success' && showNotification && (<Notification>
        <h3 className='text-black text-xl'>با موفقیت عضو شدید</h3>
        </Notification>)}
    </>
  );
}