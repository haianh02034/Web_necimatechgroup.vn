import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { Features } from "../../components/8. Booking KOL/Features";
import { Benefits } from "../../components/8. Booking KOL/Benefits";
import { Pricing } from "../../components/8. Booking KOL/Pricing";
import { Process } from "../../components/8. Booking KOL/Process";
import { Commitments } from "../../components/8. Booking KOL/Commitments";
import { Testimonials } from "../../components/8. Booking KOL/Testimonials";
import { CTA } from "../../components/8. Booking KOL/CTA";
import { Hero } from "../../components/8. Booking KOL/Hero";
import { Introduction } from "../../components/8. Booking KOL/Introduction";
import { Stats } from "../../components/8. Booking KOL/Stats";
import  {SocialPlatforms}  from "../../components/8. Booking KOL/Platforms";
import {Showcase} from "../../components/8. Booking KOL/Showcase";
import { AdditionalBenefits } from "../../components/8. Booking KOL/AdditionalBenefits";
import { Gallery } from "../../components/8. Booking KOL/Gallery";


export default function BookingKOL() {
  return (
    <>
      <SeoHelmet
        title="Booking KOL - Dịch vụ kết nối với Influencer và KOL hàng đầu - Necimatech Group"
        description="Dịch vụ booking KOL và Influencer chuyên nghiệp. Kết nối thương hiệu với những người ảnh hưởng hàng đầu trong lĩnh vực, tạo nên chiến dịch marketing hiệu quả."
        url="https://necimatech.com/booking/kol"
        image="https://necimatech.com/og-booking-kol.jpg"
      />
      <div className="min-h-screen">
        
      <Header />
      <Hero />
      <Introduction />
      <Stats />
      <Features />
      <SocialPlatforms />
      <Showcase />
      <Benefits />
      <Pricing />
      <Process />
      <AdditionalBenefits />
      <Gallery />
      <Commitments />
      <Testimonials />
      <CTA />
      <Footer />
      </div>
    </>
  );
}
