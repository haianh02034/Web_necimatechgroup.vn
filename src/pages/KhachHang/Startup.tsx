import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { Hero } from "../../components/16. Nhóm KH Start up/Hero";
import { StartupNeeds } from "../../components/16. Nhóm KH Start up/StartupNeeds";
import { Challenges } from "../../components/16. Nhóm KH Start up/Challenges";
import { ServicePackages } from "../../components/16. Nhóm KH Start up/ServicePackages";
import { WhyChooseUs } from "../../components/16. Nhóm KH Start up/WhyChooseUs";
import { Testimonials } from "../../components/16. Nhóm KH Start up/Testimonials";


export default function Startup() {
  return (
    <>
      <SeoHelmet
        title="Startup - Đồng hành cùng doanh nghiệp khởi nghiệp - Necimatech Group"
        description="Giải pháp toàn diện dành cho doanh nghiệp Startup. Từ ý tưởng đến sản phẩm hoàn thiện, chúng tôi đồng hành cùng bạn trong hành trình khởi nghiệp thành công."
        url="https://necimatech.com/khach-hang/startup"
        image="https://necimatech.com/og-startup.jpg"
        keywords="startup, khởi nghiệp, doanh nghiệp khởi nghiệp, ý tưởng sản phẩm, phát triển sản phẩm, MVP, scale up"
      />
      <div className="min-h-screen">
        <Header />
      <Hero />
      <StartupNeeds />
      <Challenges />
      <ServicePackages />
      <WhyChooseUs />
      <Testimonials />

        <Footer />
      </div>
    </>
  );
}
