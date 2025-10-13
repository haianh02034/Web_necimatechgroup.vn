import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import Hero from "../../components/2. Facebook Ads/Hero";
import Introduction from "../../components/2. Facebook Ads/Introduction";
import Challenges from "../../components/2. Facebook Ads/Challenges";
import ServiceOverview from "../../components/2. Facebook Ads/ServiceOverview";
import PricingPackages from "../../components/2. Facebook Ads/PricingPackages";
import Differentiators from "../../components/2. Facebook Ads/Differentiators";
import Benefits from "../../components/2. Facebook Ads/Benefits";
import Testimonials from "../../components/2. Facebook Ads/Testimonials";
import CTA from "../../components/2. Facebook Ads/CTA";
import "../../facebook-ads.css"; // Import the specific CSS for Google Ads page

export default function FacebookAds() {
  return (
    <>
      <SeoHelmet
        title="Facebook Ads - Dịch vụ quảng cáo Facebook chuyên nghiệp - Necimatech Group"
        description="Dịch vụ chạy quảng cáo Facebook Ads chuyên nghiệp. Tối ưu hóa chiến dịch, tăng tỷ lệ chuyển đổi và tiếp cận khách hàng mục tiêu hiệu quả với đội ngũ chuyên gia giàu kinh nghiệm."
        url="https://necimatech.com/quang-cao/facebook-ads"
        image="https://necimatech.com/og-facebook-ads.jpg"
      />
      {/* <div className="min-h-screen"> */}
        <Header />
      <Hero />
      <Introduction />
      <Challenges />
      <ServiceOverview />
      <PricingPackages />
      <Differentiators />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
      {/* </div> */}
    </>
  );
}
