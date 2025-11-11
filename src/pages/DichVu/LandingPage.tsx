import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { WhatIsLandingPage } from "../../components/13. Dịch vụ marketing Landing Page/WhatIsLandingPage";
import { WhyNeedLandingPage } from "../../components/13. Dịch vụ marketing Landing Page/WhyNeedLandingPage";
import { PricingPackages } from "../../components/13. Dịch vụ marketing Landing Page/PricingPackages";
import { KeyFeatures } from "../../components/13. Dịch vụ marketing Landing Page/KeyFeatures";
import { Benefits } from "../../components/13. Dịch vụ marketing Landing Page/Benefits";
import { Testimonials } from "../../components/13. Dịch vụ marketing Landing Page/Testimonials";

import { Hero } from "../../components/13. Dịch vụ marketing Landing Page/Hero";
import { Toaster } from "../../components/ui/sonner";

export default function LandingPage() {
  return (
    <>
      <SeoHelmet
        title="Landing Page - Thiết kế và tối ưu hóa Landing Page chuyên nghiệp - Necimatech Group"
        description="Dịch vụ thiết kế Landing Page chuyên nghiệp với tỷ lệ chuyển đổi cao. Tối ưu hóa UX/UI, tốc độ tải trang và các yếu tố thúc đẩy hành vi mua hàng."
        url="https://necimatech.com/dich-vu/landing-page"
        image="https://necimatech.com/og-landing-page.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <Hero />
              <WhatIsLandingPage />
      <WhyNeedLandingPage />
      <PricingPackages />
      <KeyFeatures />
      <Benefits />
      <Testimonials />

      <Toaster />
        <Footer />
      </div>
    </>
  );
}
