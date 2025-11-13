import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { Hero } from "../../components/4. Tiktok Ads/Hero";
import { Stats } from "../../components/4. Tiktok Ads/Stats";
import { WhatIsTikTokAds } from "../../components/4. Tiktok Ads/WhatIsTikTokAds";
import { Benefits } from "../../components/4. Tiktok Ads/Benefits";
import { Services } from "../../components/4. Tiktok Ads/Services";
import { Packages } from "../../components/4. Tiktok Ads/Packages";
import { Differentiators } from "../../components/4. Tiktok Ads/Differentiators";
import { Process } from "../../components/4. Tiktok Ads/Process";
import { Testimonials } from "../../components/4. Tiktok Ads/Testimonials";
import { FAQ } from "../../components/4. Tiktok Ads/FAQ";

import "../../tiktok-ads.css"; // Import the specific CSS for TikTok Ads page

export default function TikTokAds() {
  return (
    <>
      <SeoHelmet
        title="TikTok Ads - Dịch vụ quảng cáo TikTok chuyên nghiệp - Necimatech Group"
        description="Dịch vụ chạy quảng cáo TikTok Ads chuyên nghiệp. Tiếp cận thế hệ Gen Z và Millennial với nội dung sáng tạo, thu hút và có tính lan truyền cao."
        url="https://necimatech.com/quang-cao/tiktok-ads"
        image="https://necimatech.com/og-tiktok-ads.jpg"
        keywords="TikTok Ads, quảng cáo TikTok, chạy quảng cáo TikTok, Gen Z, Millennial, nội dung sáng tạo, viral content, quảng cáo video"
      />
      <div className="min-h-screen">
        <Header />
      <Hero />
      <Stats />
      <WhatIsTikTokAds />
      <Benefits />
      <Services />
      <Packages />
      <Differentiators />
      <Process />
      <Testimonials />
      <FAQ />
   
      <Footer />
      </div>
    </>
  );
}
