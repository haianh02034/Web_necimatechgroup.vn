import { Monitor, Facebook, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl">Necimatech</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Đồng hành cùng doanh nghiệp xây dựng tài sản số bền vững và phát triển mạnh mẽ trên thị trường online.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Thiết kế Website</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO & Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bảo trì Website</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tư vấn Chiến lược</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Về Chúng Tôi</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dự án</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Đối tác</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Kết Nối</h4>
            <div className="flex gap-3 mb-4">
              {[Facebook, Linkedin, Twitter, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-slate-800 p-2 rounded-lg hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Theo dõi chúng tôi để cập nhật những xu hướng mới nhất
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 Necimatech. All rights reserved. Thiết kế bởi Necimatech.</p>
        </div>
      </div>
    </footer>
  );
}
