import { motion } from "motion/react";
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl mb-4">Necimatech</h3>
            <p className="text-sm mb-4">
              Đối tác tin cậy đồng hành cùng doanh nghiệp truyền thống chuyển
              đổi số thành công
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Dịch vụ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gói Basic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gói Premium
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gói Pro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tư vấn chuyên sâu
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Về chúng tôi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Đội ngũ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Khách hàng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tin tức
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>1900-xxxx</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@necimatech.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © 2025 Necimatech. All rights reserved. Designed with love for
            traditional businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
