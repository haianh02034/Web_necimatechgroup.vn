import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { HeroSection } from "../../components/18. Dịch vụ Website/HeroSection";
import { ValueProposition } from "../../components/18. Dịch vụ Website/ValueProposition";
import { ServicePackages } from "../../components/18. Dịch vụ Website/ServicePackages";
import { ProcessSteps } from "../../components/18. Dịch vụ Website/ProcessSteps";
import { Benefits } from "../../components/18. Dịch vụ Website/Benefits";
import { CTASection } from "../../components/18. Dịch vụ Website/CTASection";

export default function Website() {
  return (
    <>
      <SeoHelmet
        title="Website - Thiết kế và phát triển website chuyên nghiệp - Necimatech Group"
        description="Dịch vụ thiết kế và phát triển website chuyên nghiệp. Từ website doanh nghiệp, thương mại điện tử đến các ứng dụng web phức tạp với công nghệ hiện đại."
        url="https://necimatech.com/dich-vu/website"
        image="https://necimatech.com/og-website.jpg"
      />
      <div className="min-h-screen">
        <Header />
               <HeroSection />
        <ValueProposition />
        <ServicePackages />
        <ProcessSteps />
        <Benefits />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
