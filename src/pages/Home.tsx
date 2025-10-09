import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Achievements } from "../components/Achievements";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
import SeoHelmet from "../components/SeoHelmet";

export default function Home() {
  return (
    <>
      <SeoHelmet
        title="Trang chủ - Necimatech Group - Giải pháp công nghệ hàng đầu"
        description="Necimatech Group cung cấp giải pháp công nghệ tiên tiến, phát triển phần mềm và dịch vụ chuyển đổi số. Trao quyền cho doanh nghiệp với các giải pháp công nghệ sáng tạo."
        url="https://necimatech.com/"
        image="https://necimatech.com/og-image.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Achievements />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
}
