import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FacebookAds from "../pages/QuangCao/FacebookAds";
import GoogleAds from "../pages/QuangCao/GoogleAds";
import TikTokAds from "../pages/QuangCao/TikTokAds";
import ZaloOA from "../pages/QuangCao/ZaloOA";

import BookingBaoChi from "../pages/Booking/BookingBaoChi";
import BookingKOL from "../pages/Booking/BookingKOL";

import ContentMedia from "../pages/DichVu/ContentMedia";
import LandingPage from "../pages/DichVu/LandingPage";
import SEO from "../pages/DichVu/SEO";
import Website from "../pages/DichVu/Website";
import DNTruyenThong from "../pages/DichVu/DNTruyenThong";

import SMED2C from "../pages/KhachHang/SMED2C";
import Startup from "../pages/KhachHang/Startup";
import { useDynamicCSS } from "../hooks/useDynamicCSS";
import ScrollToTop from "../components/ScrollToTop";

function RouterContent() {
  // Sử dụng hook để load CSS động dựa trên route hiện tại
  useDynamicCSS();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Quảng cáo */}
        <Route path="/quang-cao/facebook-ads" element={<FacebookAds />} />
        <Route path="/quang-cao/google-ads" element={<GoogleAds />} />
        <Route path="/quang-cao/tiktok-ads" element={<TikTokAds />} />
        <Route path="/quang-cao/zalo-oa" element={<ZaloOA />} />

        {/* Booking */}
        <Route path="/booking/bao-chi" element={<BookingBaoChi />} />
        <Route path="/booking/kol" element={<BookingKOL />} />

        {/* Dịch vụ */}
        <Route path="/dich-vu/content-media" element={<ContentMedia />} />
        <Route path="/dich-vu/landing-page" element={<LandingPage />} />
        <Route path="/dich-vu/seo" element={<SEO />} />
        <Route path="/dich-vu/website" element={<Website />} />
        <Route path="/dich-vu/dn-truyen-thong" element={<DNTruyenThong />} />

        {/* Khách hàng */}
        <Route path="/khach-hang/smed2c" element={<SMED2C />} />
        <Route path="/khach-hang/startup" element={<Startup />} />
      </Routes>
    </>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  );
}
