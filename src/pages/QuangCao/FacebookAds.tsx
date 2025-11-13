import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { Hero } from "../../components/2. Facebook Ads/Hero";
import { motion } from "motion/react";

import {ServicesOverview} from "../../components/2. Facebook Ads/ServicesOverview";
import PricingPackages from "../../components/2. Facebook Ads/PricingPackages";
import {WhyChooseUs}  from "../../components/2. Facebook Ads/Differentiators";
import {BenefitsSection} from "../../components/2. Facebook Ads/Benefits";
import {CaseStudies} from "../../components/2. Facebook Ads/Testimonials";

import { AboutFacebookAds } from "../../components/2. Facebook Ads/Introduction";
import { ChallengesSection } from "../../components/2. Facebook Ads/ChallengesSection";
import "../../facebook-ads.css"; // Import the specific CSS for Google Ads page

export default function FacebookAds() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="min-h-screen"
    >
      <SeoHelmet
        title="Facebook Ads - Dịch vụ quảng cáo Facebook chuyên nghiệp - Necimatech Group"
        description="Dịch vụ chạy quảng cáo Facebook Ads chuyên nghiệp. Tối ưu hóa chiến dịch, tăng tỷ lệ chuyển đổi và tiếp cận khách hàng mục tiêu hiệu quả với đội ngũ chuyên gia giàu kinh nghiệm."
        url="https://necimatech.com/quang-cao/facebook-ads"
        image="https://necimatech.com/og-facebook-ads.jpg"
        keywords="Facebook Ads, quảng cáo Facebook, chạy quảng cáo Facebook, tối ưu hóa chiến dịch, tăng chuyển đổi, tiếp cận khách hàng, quảng cáo số"
      />
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <AboutFacebookAds />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <ChallengesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <ServicesOverview />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <PricingPackages />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <BenefitsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <CaseStudies />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
      
      </motion.div>

      <Footer />
    </motion.div>
  );
}
