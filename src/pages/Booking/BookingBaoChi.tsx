import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { Hero } from "../../components/6. Booking Báo chí/Hero";
import { ServiceIntro } from "../../components/6. Booking Báo chí/Introduction";
import { Pricing } from "../../components/6. Booking Báo chí/Pricing";
import { Benefits } from "../../components/6. Booking Báo chí/Benefits";
import { Process } from "../../components/6. Booking Báo chí/Process";
import { Testimonials } from "../../components/6. Booking Báo chí/Testimonials";
import { MediaGallery  } from "../../components/6. Booking Báo chí/MediaGallery";
import { Commitment } from "../../components/6. Booking Báo chí/Commitment";
export default function BookingBaoChi() {
  return (
    <>
      <SeoHelmet
        title="Booking Báo chí - Dịch vụ đăng bài PR trên báo chí uy tín - Necimatech Group"
        description="Dịch vụ booking báo chí chuyên nghiệp. Đăng bài PR, tin tức doanh nghiệp trên các tờ báo uy tín, tăng độ tin cậy và nhận diện thương hiệu."
        url="https://necimatech.com/booking/bao-chi"
        image="https://necimatech.com/og-booking-baochi.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <Hero />
      <ServiceIntro />
      <Pricing />
      <Benefits />
      <MediaGallery />
      <Process />
      <Commitment />
      <Testimonials />
      
      
      <Footer />
      </div>
    </>
  );
}
