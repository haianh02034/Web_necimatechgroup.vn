import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import "../../google-ads.css"; // Import the specific CSS for Google Ads page
import { Hero } from "../../components/3. Google Ads/Hero";
import { BenefitsSection } from "../../components/3. Google Ads/BenefitsSection";
import { BenefitsGrid } from "../../components/3. Google Ads/BenefitsGrid";
import { AdvantagesSection } from "../../components/3. Google Ads/AdvantagesSection";
import { StrategySection } from "../../components/3. Google Ads/StrategySection";
import { AdFormatsSection } from "../../components/3. Google Ads/AdFormatsSection";

import { PricingCards } from "../../components/3. Google Ads/PricingCards";
import { PartnerBadges } from "../../components/3. Google Ads/PartnerBadges";

export default function GoogleAds() {
  return (
    <>
      <SeoHelmet
        title="Google Ads - Dịch vụ quảng cáo Google chuyên nghiệp - Necimatech Group"
        description="Dịch vụ chạy quảng cáo Google Ads (AdWords) chuyên nghiệp. Tối ưu hóa chiến dịch tìm kiếm, display và shopping ads để đạt hiệu quả cao nhất với ngân sách hợp lý."
        url="https://necimatech.com/quang-cao/google-ads"
        image="https://necimatech.com/og-google-ads.jpg"
        keywords="Google Ads, AdWords, quảng cáo Google, tìm kiếm ads, display ads, shopping ads, tối ưu hóa chiến dịch, SEM"
      />
      <div className="min-h-screen flex flex-col"> {/* Added flex flex-col */}
        <Header />
      <Hero />
      <PartnerBadges />
      <BenefitsSection />
      <PricingCards />
      <BenefitsGrid />
      <AdvantagesSection />
      <StrategySection />
      <AdFormatsSection />

      <Footer />
      </div>
    </>
  );
}
