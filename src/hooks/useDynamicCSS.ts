import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Định nghĩa mapping giữa routes và CSS files
const routeCSSMapping: Record<string, string> = {
  '/': 'index.css',
  '/quang-cao/facebook-ads': 'facebook-ads.css',
  '/quang-cao/google-ads': 'google-ads.css',
  '/quang-cao/tiktok-ads': 'tiktok-ads.css',
  '/quang-cao/zalo-oa': 'zalo-oa.css',
  '/booking/bao-chi': 'booking.css',
  '/booking/kol': 'booking.css',
  '/dich-vu/content-media': 'content-media.css',
  '/dich-vu/landing-page': 'landing-page.css',
  '/dich-vu/seo': 'seo.css',
  '/dich-vu/website': 'website.css',
  '/dich-vu/dn-truyen-thong': 'dn-truyen-thong.css',
  '/khach-hang/smed2c': 'smed2c.css',
  '/khach-hang/startup': 'startup.css',
};

export function useDynamicCSS() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const cssFile = routeCSSMapping[currentPath] || 'index.css';

    // Kiểm tra xem CSS đã được load chưa
    const existingLink = document.querySelector(`link[href*="${cssFile}"]`);
    if (existingLink) {
      return;
    }

    // Xóa tất cả các CSS động hiện tại (trừ index.css và globals.css)
    const dynamicLinks = document.querySelectorAll('link[href*="src/"]:not([href*="index.css"]):not([href*="globals.css"])');
    dynamicLinks.forEach(link => link.remove());

    // Import CSS mới nếu không phải index.css (đã được load sẵn)
    if (cssFile !== 'index.css') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `src/${cssFile}`;
      document.head.appendChild(link);
    }
  }, [location.pathname]);
}
