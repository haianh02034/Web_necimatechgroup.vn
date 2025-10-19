import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { Hero } from "../../components/15. nhóm khách hàng SMED2C/Hero";
import { Challenges } from "../../components/15. nhóm khách hàng SMED2C/Challenges";
import { Solutions } from "../../components/15. nhóm khách hàng SMED2C/Solutions";
import { ServicePackages } from "../../components/15. nhóm khách hàng SMED2C/ServicePackages";
import { Benefits } from "../../components/15. nhóm khách hàng SMED2C/Benefits";
import { Testimonials } from "../../components/15. nhóm khách hàng SMED2C/Testimonials";
import { CTA } from "../../components/15. nhóm khách hàng SMED2C/CTA";
import { Toaster } from "../../components/ui/sonner";

export default function SMED2C() {
  return (
    <>
      <SeoHelmet
        title="SMED2C - Giải pháp dành cho doanh nghiệp vừa và nhỏ - Necimatech Group"
        description="Giải pháp toàn diện dành cho doanh nghiệp SMED2C (Small and Medium Enterprises Direct to Consumer). Chuyển đổi số, marketing và bán hàng trực tuyến hiệu quả."
        url="https://necimatech.com/khach-hang/smed2c"
        image="https://necimatech.com/og-smed2c.jpg"
      />
      <div className="min-h-screen">
        <Header />
              <Hero />
      <Challenges />
      <Solutions />
      <ServicePackages />
      <Benefits />
      <Testimonials />
      <CTA />
      <Toaster />
        <Footer />
      </div>
    </>
  );
}
