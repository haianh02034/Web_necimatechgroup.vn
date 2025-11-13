import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { WhatIsSEO } from "../../components/17. Dịch vụ SEO/WhatIsSEO";
import { SEOTypes } from "../../components/17. Dịch vụ SEO/SEOTypes";
import { Challenges } from "../../components/17. Dịch vụ SEO/Challenges";
import { Pricing } from "../../components/17. Dịch vụ SEO/Pricing";
import { Process } from "../../components/17. Dịch vụ SEO/Process";
import { Testimonials } from "../../components/17. Dịch vụ SEO/Testimonials";

import { Hero } from "../../components/17. Dịch vụ SEO/Hero";

export default function SEO() {
  return (
    <>
      <SeoHelmet
        title="SEO - Dịch vụ tối ưu hóa công cụ tìm kiếm chuyên nghiệp - Necimatech Group"
        description="Dịch vụ SEO chuyên nghiệp giúp website đạt thứ hạng cao trên Google. Tối ưu hóa On-page, Off-page, Technical SEO và Content Marketing."
        url="https://necimatech.com/dich-vu/seo"
        image="https://necimatech.com/og-seo.jpg"
        keywords="SEO, tối ưu hóa công cụ tìm kiếm, Google ranking, On-page SEO, Off-page SEO, Technical SEO, Content Marketing"
      />
      <div className="min-h-screen">
        <Header />
        <Hero />
              <WhatIsSEO />
      <SEOTypes />
      <Challenges />
      <Pricing />
      <Process />
      <Testimonials />

        <Footer />
      </div>
    </>
  );
}
