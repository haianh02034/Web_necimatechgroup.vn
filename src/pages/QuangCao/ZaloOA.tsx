import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { Hero } from "../../components/5. ZALO OA/Hero";
import { Overview } from "../../components/5. ZALO OA/Overview";
import { Problems } from "../../components/5. ZALO OA/Problems";
import { WhyChooseUs } from "../../components/5. ZALO OA/WhyChooseUs";
import { Pricing } from "../../components/5. ZALO OA/Pricing";
import { Process } from "../../components/5. ZALO OA/Process";
import { Testimonials } from "../../components/5. ZALO OA/Testimonials";
import { CTA } from "../../components/5. ZALO OA/CTA";
import "../../zalo-oa.css"; // Import the specific CSS for Zalo OA page
export default function ZaloOA() {
  return (
    <>
      <SeoHelmet
        title="Zalo OA - Dịch vụ quản lý Official Account Zalo - Necimatech Group"
        description="Dịch vụ quản lý Zalo Official Account chuyên nghiệp. Xây dựng kênh chăm sóc khách hàng, tăng tương tác và hỗ trợ bán hàng hiệu quả trên nền tảng Zalo."
        url="https://necimatech.com/quang-cao/zalo-oa"
        image="https://necimatech.com/og-zalo-oa.jpg"
      />
      <div className="min-h-screen">
        <Header />
      <Hero />
      <Overview />
      <Problems />
      <WhyChooseUs />
      <Pricing />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
      </div>
    </>
  );
}
