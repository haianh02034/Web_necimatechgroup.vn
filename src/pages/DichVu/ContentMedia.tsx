import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { WhyNeed } from "../../components/12. Dịch vụ Content & Media/WhyNeed";
import { Features } from "../../components/12. Dịch vụ Content & Media/Features";
import { Pricing } from "../../components/12. Dịch vụ Content & Media/Pricing";
import { Benefits } from "../../components/12. Dịch vụ Content & Media/Benefits";
import { Testimonials } from "../../components/12. Dịch vụ Content & Media/Testimonials";
import { WhyChoose } from "../../components/12. Dịch vụ Content & Media/WhyChoose";

import { Hero } from "../../components/12. Dịch vụ Content & Media/Hero";

export default function ContentMedia() {
  return (
    <>
      <SeoHelmet
        title="Content & Media - Dịch vụ sản xuất nội dung và truyền thông - Necimatech Group"
        description="Dịch vụ sản xuất content và media chuyên nghiệp. Tạo nội dung sáng tạo, hấp dẫn cho website, mạng xã hội và các kênh truyền thông số."
        url="https://necimatech.com/dich-vu/content-media"
        image="https://necimatech.com/og-content-media.jpg"
      />
      <div className="min-h-screen">
        <Header />
      <Hero />
      <WhyNeed />
      <Features />
      <Pricing />
      <Benefits />
      <Testimonials />
      <WhyChoose />
 
        <Footer />
      </div>
    </>
  );
}
