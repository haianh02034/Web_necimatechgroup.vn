import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface CustomerContactSectionProps {
  onSubmitted?: () => void;
}

export function CustomerContactSection({ onSubmitted }: CustomerContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    service: '',
    budget: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong vòng 24 giờ.');
    onSubmitted?.();
  };

  const handleClick = (e: React.MouseEvent) => {
    // Prevent event from bubbling up to close modal
    e.stopPropagation();
  };

  const benefits = [
    'Chiến lược rõ ràng, dựa trên dữ liệu',
    'Triển khai trọn gói, chuyên nghiệp',
    'Tối ưu chi phí và hiệu quả liên tục',
    'Đội ngũ chuyên gia 5+ năm kinh nghiệm',
    'Hỗ trợ 24/7, cam kết hiệu quả'
  ];

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8 px-4">
          <h1 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">
            Sẵn sàng bứt phá doanh thu
            <br />
            <span className="text-blue-600">cùng Necimatech Group?</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg lg:text-xl">
            Hãy để chúng tôi đồng hành cùng bạn xây dựng chiến lược Facebook Ads hiệu quả.
            <br />
            Liên hệ ngay để được tư vấn miễn phí!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column - Form */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6" onClick={handleClick}>
            <h2 className="text-gray-900 mb-6 text-xl md:text-2xl font-semibold">Đăng ký tư vấn miễn phí</h2>

            <form onSubmit={handleSubmit} className="space-y-4" onClick={handleClick}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" onClick={handleClick}>
                <div onClick={handleClick}>
                  <Label htmlFor="fullName">
                    Họ và tên <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Nhập họ và tên của bạn"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="mt-1.5"
                    onClick={handleClick}
                  />
                </div>

                <div onClick={handleClick}>
                  <Label htmlFor="phone">
                    Số điện thoại <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-1.5"
                    onClick={handleClick}
                  />
                </div>
              </div>

              <div onClick={handleClick}>
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-1.5"
                  onClick={handleClick}
                />
              </div>

              <div onClick={handleClick}>
                <Label htmlFor="companyName">Tên doanh nghiệp</Label>
                <Input
                  id="companyName"
                  placeholder="Nhập tên doanh nghiệp"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="mt-1.5"
                  onClick={handleClick}
                />
              </div>

              <div onClick={handleClick}>
                <Label htmlFor="service">Gói dịch vụ quan tâm</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger id="service" className="mt-1.5" onClick={handleClick}>
                    <SelectValue placeholder="Chọn gói dịch vụ" />
                  </SelectTrigger>
                <SelectContent style={{ zIndex: 110 }} onClick={handleClick}>
                    <SelectItem value="facebook-ads" onClick={handleClick}>Facebook Ads</SelectItem>
                    <SelectItem value="google-ads" onClick={handleClick}>Google Ads</SelectItem>
                    <SelectItem value="tiktok-ads" onClick={handleClick}>TikTok Ads</SelectItem>
                    <SelectItem value="zalo-oa" onClick={handleClick}>ZALO OA</SelectItem>
                    <SelectItem value="booking-bao-chi" onClick={handleClick}>Booking Báo chí</SelectItem>
                    <SelectItem value="booking-kol" onClick={handleClick}>Booking KOL</SelectItem>
                    <SelectItem value="content-media" onClick={handleClick}>Content & Media</SelectItem>
                    <SelectItem value="landing-page" onClick={handleClick}>Landing Page</SelectItem>
                    <SelectItem value="seo" onClick={handleClick}>SEO</SelectItem>
                    <SelectItem value="website" onClick={handleClick}>Website</SelectItem>
                    <SelectItem value="dn-truyen-thong" onClick={handleClick}>DN Truyền thống</SelectItem>
                    <SelectItem value="smed2c" onClick={handleClick}>SMED2C</SelectItem>
                    <SelectItem value="startup" onClick={handleClick}>Start up</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div onClick={handleClick}>
                <Label htmlFor="budget">Ngân sách dự kiến (VNĐ/tháng)</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                >
                  <SelectTrigger id="budget" className="mt-1.5" onClick={handleClick}>
                    <SelectValue placeholder="Chọn mức ngân sách" />
                  </SelectTrigger>
                  <SelectContent style={{ zIndex: 110 }} onClick={handleClick}>
                    <SelectItem value="5-10" onClick={handleClick}>5 - 10 triệu</SelectItem>
                    <SelectItem value="10-20" onClick={handleClick}>10 - 20 triệu</SelectItem>
                    <SelectItem value="20-50" onClick={handleClick}>20 - 50 triệu</SelectItem>
                    <SelectItem value="50-100" onClick={handleClick}>50 - 100 triệu</SelectItem>
                    <SelectItem value="100+" onClick={handleClick}>Trên 100 triệu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div onClick={handleClick}>
                <Label htmlFor="description">Mô tả dự án và mục tiêu</Label>
                <Textarea
                  id="description"
                  placeholder="Chia sẻ về doanh nghiệp, sản phẩm/dịch vụ và mục tiêu kinh doanh của bạn..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="mt-1.5"
                  onClick={handleClick}
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Gửi yêu cầu tư vấn
              </Button>

              <p className="text-center text-gray-500 text-sm">
                Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ
              </p>
            </form>
          </div>

          {/* Right Column - Contact Info & Why Choose Us */}
          <div className="space-y-4 md:space-y-6" onClick={handleClick}>
            {/* Contact Info Card */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 space-y-4 md:space-y-6" onClick={handleClick}>
              <h2 className="text-gray-900 text-lg md:text-xl font-semibold">Thông tin liên hệ</h2>

              <div className="space-y-3 md:space-y-4" onClick={handleClick}>
                <div className="flex gap-3 md:gap-4" onClick={handleClick}>
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 text-base md:text-lg font-medium">Hotline</div>
                    <div className="text-gray-600 text-sm md:text-base">1900 368 628</div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4" onClick={handleClick}>
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 text-base md:text-lg font-medium">Email</div>
                    <div className="text-gray-600 text-sm md:text-base">info@necimatechgroup.vn</div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4" onClick={handleClick}>
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 text-base md:text-lg font-medium">Địa chỉ</div>
                    <div className="text-gray-600 text-sm md:text-base">Số nhà 27, Ngõ 4, Cụm 4, Thôn 3</div>
                    <div className="text-gray-600 text-sm md:text-base">Xã Thạch Hoà, Huyện Thạch Thất, Hà Nội</div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4" onClick={handleClick}>
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 text-base md:text-lg font-medium">Giờ làm việc</div>
                    <div className="text-gray-600 text-sm md:text-base">Thứ 2 - Thứ 6: 8:00 - 17:30</div>
                    <div className="text-gray-600 text-sm md:text-base">Thứ 7: 8:00 - 12:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-blue-600 rounded-lg p-4 md:p-6 text-white" onClick={handleClick}>
              <h2 className="mb-4 md:mb-6 text-lg md:text-xl font-semibold">Tại sao chọn Necimatech Group?</h2>

              <ul className="space-y-3" onClick={handleClick}>
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2" onClick={handleClick}>
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
