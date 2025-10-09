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

export function Footer() {
  const services = [
    "Website",
    "TikTok Marketing",
    "SEO",
    "Google Ads",
    "Facebook Ads",
    "Landing Page",
    "Zalo OA",
    "Content & Media"
  ];

  const solutions = [
    "Startup/SAAS",
    "SME/D2C",
    "Doanh nghiệp truyền thống",
    "Chuyển đổi số",
    "Tự động hóa",
    "AI Solutions"
  ];

  const quickLinks = [
    "Giới thiệu",
    "Dịch vụ",
    "Thành tựu",
    "Đánh giá",
    "Liên hệ",
    "Blog"
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
                  <div className="text-gray-300 text-sm">0123 456 789</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300 text-sm">contact@necimatech.com</div>
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
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-4">Giải pháp</h4>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-medium mb-3">Theo dõi chúng tôi</h5>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
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
            <a href="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}