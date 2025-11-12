import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Linkedin,
  Youtube,
  Instagram
} from 'lucide-react';
import { Link } from "react-router-dom";


export function Footer() {
  const services = [
    { name: "Website", path: "/dich-vu/website" },
    { name: "TikTok Marketing", path: "/quang-cao/tiktok-ads" },
    { name: "SEO", path: "/dich-vu/seo" },
    { name: "Google Ads", path: "/quang-cao/google-ads" },
    { name: "Facebook Ads", path: "/quang-cao/facebook-ads" },
    { name: "Landing Page", path: "/dich-vu/landing-page" },
    { name: "Zalo OA", path: "/quang-cao/zalo-oa" },
    { name: "Content & Media", path: "/dich-vu/content-media" }
  ];

  const solutions = [
    { name: "Startup / SAAS", path: "/khach-hang/startup" },
    { name: "SME / D2C", path: "/khach-hang/smed2c" },
    { name: "Doanh nghiệp truyền thống", path: "/dich-vu/dn-truyen-thong" },
    { name: "Chuyển đổi số", path: "/dich-vu/dn-truyen-thong" },
    { name: "Tự động hóa", path: "/dich-vu/seo" },
    { name: "AI Solutions", path: "/dich-vu/content-media" }
  ];

  const quickLinks = [
    { name: "Giới thiệu", path: "/gioi-thieu" },
    { name: "Dịch vụ", path: "/dich-vu/website" },
    { name: "Thành tựu", path: "/thanh-tuu" },
    { name: "Đánh giá", path: "/danh-gia" },
    { name: "Liên hệ", path: "/lien-he" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Necimatech Group</h3>
              <p className="text-gray-300 leading-relaxed">
                Giải pháp toàn diện nâng tầm doanh nghiệp trong kỷ nguyên số. 
                Đồng hành cùng bạn từ ý tưởng đến thành công.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Trụ sở chính</div>
                  <div className="text-gray-300 text-sm">
                    Số 27, Ngõ 4, Cụm 4, Thôn 3<br />
                    Xã Hòa Lạc, TP Hà Nội
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">Hotline</div>
                  <div className="text-gray-300 text-sm">1900 368 628</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300 text-sm">info@necimatechgroup.vn</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">Giờ làm việc</div>
                  <div className="text-gray-300 text-sm">
                    T2-T6: 8:00 - 17:30<br />
                    T7: 8:00 - 12:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              {services.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-4">Giải pháp</h4>
            <ul className="space-y-2">
              {solutions.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-medium mb-3">Theo dõi chúng tôi</h5>
              <div className="flex space-x-3">
             <a
                href="https://www.facebook.com/necimatechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h4 className="font-bold text-lg mb-2">Đăng ký nhận tin tức mới nhất</h4>
              <p className="text-gray-300 text-sm mb-4 lg:mb-0">
                Nhận thông tin về các xu hướng công nghệ và giải pháp kinh doanh mới nhất
              </p>
            </div>
            <div className="lg:w-1/2 lg:ml-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-400 text-white"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg transition-colors">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © 2024 Necimatech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.privacypolicies.com/live/62e31212-8b9c-4577-8be0-9834b219438c" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
              Chính sách bảo mật
            </a>
            <a href="https://www.termsfeed.com/live/b541fae2-bcfd-445d-baa0-cb6f8455de3d" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
              Điều khoản sử dụng
            </a>
            <a href="#" id="open_preferences_center" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}