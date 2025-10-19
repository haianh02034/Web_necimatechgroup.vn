import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Sẵn sàng bứt phá doanh thu
            <span className="text-blue-600 block">cùng Necimatech Group?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hãy để chúng tôi đồng hành cùng bạn xây dựng chiến lược Facebook Ads hiệu quả. 
            Liên hệ ngay để được tư vấn miễn phí!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Đăng ký tư vấn miễn phí
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <Input placeholder="Nhập họ và tên của bạn" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại *
                  </label>
                  <Input placeholder="Nhập số điện thoại" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input type="email" placeholder="Nhập email của bạn" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tên doanh nghiệp
                </label>
                <Input placeholder="Nhập tên doanh nghiệp" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gói dịch vụ quan tâm
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn gói dịch vụ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Gói Basic - 10.000.000 VNĐ + 5%</SelectItem>
                    <SelectItem value="pro">Gói Pro - 25.000.000 VNĐ + 3%</SelectItem>
                    <SelectItem value="premium">Gói Premium - 75.000.000 VNĐ + 1%</SelectItem>
                    <SelectItem value="custom">Tư vấn gói phù hợp</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ngân sách dự kiến (VNĐ/tháng)
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn mức ngân sách" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50m">Dưới 50 triệu</SelectItem>
                    <SelectItem value="50-100m">50 - 100 triệu</SelectItem>
                    <SelectItem value="100-200m">100 - 200 triệu</SelectItem>
                    <SelectItem value="200-500m">200 - 500 triệu</SelectItem>
                    <SelectItem value="over-500m">Trên 500 triệu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mô tả dự án và mục tiêu
                </label>
                <Textarea 
                  placeholder="Chia sẻ về doanh nghiệp, sản phẩm/dịch vụ và mục tiêu kinh doanh của bạn..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Gửi yêu cầu tư vấn
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Thông tin liên hệ
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hotline</h4>
                    <p className="text-gray-600">1900 xxxx (miễn phí)</p>
                    <p className="text-gray-600">0912 xxx xxx</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@necimatech.com</p>
                    <p className="text-gray-600">sales@necimatech.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Địa chỉ</h4>
                    <p className="text-gray-600">Tầng 15, Tòa nhà ABC</p>
                    <p className="text-gray-600">123 Đường XYZ, Quận 1, TP.HCM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Giờ làm việc</h4>
                    <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                    <p className="text-gray-600">Thứ 7: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Summary */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">
                Tại sao chọn Necimatech Group?
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span>Chiến lược rõ ràng, dựa trên dữ liệu</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span>Triển khai trọn gói, chuyên nghiệp</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span>Tối ưu chi phí và hiệu quả liên tục</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span>Đội ngũ chuyên gia 5+ năm kinh nghiệm</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span>Hỗ trợ 24/7, cam kết hiệu quả</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-blue-400">
         
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trong thế giới kinh doanh số hóa, Facebook Ads không chỉ là lựa chọn, 
              mà là yếu tố sống còn!
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Hãy để Necimatech Group đồng hành cùng bạn bứt phá doanh thu ngay hôm nay! 
              Liên hệ để được tư vấn miễn phí và chọn gói dịch vụ phù hợp nhất cho doanh nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Tư vấn miễn phí ngay
              </Button>
              <Button size="lg" variant="outline">
                Tải brochure dịch vụ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}