import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { Problems } from "../../components/14. Dịch vụ doanh nghiệp truyền thống/Problems";
import { Services } from "../../components/14. Dịch vụ doanh nghiệp truyền thống/Services";
import { Benefits } from "../../components/14. Dịch vụ doanh nghiệp truyền thống/Benefits";
import { Process } from "../../components/14. Dịch vụ doanh nghiệp truyền thống/Process";
import { Testimonials } from "../../components/14. Dịch vụ doanh nghiệp truyền thống/Testimonials";

import { Hero } from "../../components/14. Dịch vụ doanh nghiệp truyền thống/Hero";
export default function DNTruyenThong() {
  return (
    <>
      <SeoHelmet
        title="Đào tạo & Truyền thông - Dịch vụ đào tạo và truyền thông doanh nghiệp - Necimatech Group"
        description="Dịch vụ đào tạo và truyền thông doanh nghiệp chuyên nghiệp. Đào tạo kỹ năng số, xây dựng văn hóa doanh nghiệp và phát triển đội ngũ nhân sự chất lượng cao."
        url="https://necimatech.com/dich-vu/dn-truyen-thong"
        image="https://necimatech.com/og-dn-truyenthong.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <Hero />
             <Problems />
      <Services />
      <Benefits />
      <Process />
      <Testimonials />

        <Footer />
      </div>
    </>
  );
}
