import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { AnimatedIcon } from "./AnimatedIcon";
import { useCustomerContactModal } from "./CustomerContactModalProvider";
import { Link } from "react-router-dom";

import { 
  Globe, 
  Video, 
  Search, 
  Rocket, 
  Building2, 
  Factory, 
  FileText, 
  MessageCircle,
  MousePointer,
  Facebook,
  PenTool,
  Star
} from 'lucide-react';

export function Services() {
  const { openModal } = useCustomerContactModal();

const services = [
  {
    icon: Globe,
    title: "Website",
    description: "Thiết kế website chuyên nghiệp, chuẩn SEO, tối ưu trải nghiệm người dùng",
    features: ["Responsive Design", "SEO Optimized", "CMS Integration"],
    badge: "Phổ biến",
    link: "/dich-vu/website"
  },
  {
    icon: Video,
    title: "TikTok",
    description: "Xây dựng kênh TikTok sáng tạo, bắt trend nhanh chóng, tiếp cận giới trẻ",
    features: ["Content Strategy", "Trend Analysis", "Community Building"],
    badge: "Trending",
    link: "/quang-cao/tiktok-ads"
  },
  {
    icon: Search,
    title: "SEO",
    description: "Tối ưu công cụ tìm kiếm, đưa website lên top Google, gia tăng traffic",
    features: ["Keyword Research", "On-page SEO", "Link Building"],
    badge: "Hiệu quả",
    link: "/dich-vu/seo"
  },
  {
    icon: Rocket,
    title: "Startup/SAAS",
    description: "Giải pháp marketing tinh gọn, tiết kiệm chi phí cho startup và SAAS",
    features: ["MVP Development", "Growth Hacking", "Analytics"],
    badge: "Startup",
    link: "/khach-hang/startup"
  },
  {
    icon: Building2,
    title: "SME/D2C",
    description: "Tư vấn chiến lược marketing số cho doanh nghiệp vừa và nhỏ",
    features: ["E-commerce", "CRM Integration", "Multi-channel"],
    badge: "SME",
    link: "/khach-hang/smed2c"
  },
  {
    icon: Factory,
    title: "Doanh nghiệp truyền thống",
    description: "Hỗ trợ chuyển đổi số toàn diện, nâng cao hiệu quả vận hành",
    features: ["Digital Transformation", "Process Automation", "Training"],
    badge: "Enterprise",
    link: "/dich-vu/dn-truyen-thong"
  },
  {
    icon: FileText,
    title: "Landing Page",
    description: "Thiết kế trang đích tối ưu chuyển đổi, gia tăng leads",
    features: ["Conversion Optimization", "A/B Testing", "Analytics"],
    badge: "Conversion",
    link: "/dich-vu/landing-page"
  },
  {
    icon: MessageCircle,
    title: "Zalo OA",
    description: "Xây dựng và quản lý Official Account Zalo hiệu quả",
    features: ["Automation", "Customer Service", "Broadcasting"],
    badge: "Local",
    link: "/quang-cao/zalo-oa"
  },
  {
    icon: MousePointer,
    title: "Google Ads",
    description: "Triển khai chiến dịch Google Ads tối ưu chi phí, đúng target",
    features: ["Keyword Strategy", "Campaign Management", "ROI Optimization"],
    badge: "Performance",
    link: "/quang-cao/google-ads"
  },
  {
    icon: Facebook,
    title: "Facebook Ads",
    description: "Tư vấn và chạy quảng cáo Facebook hiệu quả, tăng brand awareness",
    features: ["Audience Targeting", "Creative Strategy", "Retargeting"],
    badge: "Social",
    link: "/quang-cao/facebook-ads"
  },
  {
    icon: PenTool,
    title: "Content & Media",
    description: "Sản xuất nội dung sáng tạo, hình ảnh và video chuyên nghiệp",
    features: ["Content Strategy", "Video Production", "Graphic Design"],
    badge: "Creative",
    link: "/dich-vu/content-media"
  },
  {
    icon: Star,
    title: "Booking Báo chí & KOL",
    description: "Kết nối thương hiệu với KOL, báo chí uy tín",
    features: ["KOL Network", "PR Strategy", "Media Relations"],
    badge: "Influence",
    link: "/booking/kol"
  }
];


  const serviceCategories = [
    {
      title: "Giải pháp công nghệ & chuyển đổi số",
      description: "Hỗ trợ doanh nghiệp số hóa quy trình, nâng cao hiệu suất"
    },
    {
      title: "Phát triển phần mềm & tự động hóa",
      description: "Thiết kế hệ thống phần mềm tùy chỉnh, đáp ứng nhu cầu đặc thù"
    },
    {
      title: "Marketing & truyền thông đa kênh",
      description: "Tư vấn, triển khai chiến dịch marketing sáng tạo"
    },
    {
      title: "Ứng dụng AI trong vận hành",
      description: "Giải pháp phân tích dữ liệu, tự động hóa chăm sóc khách hàng"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Gói dịch vụ vượt trội
          </h2>
          <p className="text-lg text-gray-600">
            Necimatech Group mang đến các giải pháp toàn diện cho mọi loại hình doanh nghiệp
          </p>
        </ScrollAnimation>

        {/* Service Categories */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" delay={0.1}>
          {serviceCategories.map((category, index) => (
            <StaggerItem key={index}>
              <Card className="text-center border-l-4 border-l-blue-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2">{category.title}</h4>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" delay={0.1}>
          {services.slice(0, 9).map((service, index) => (
            <StaggerItem key={index}>
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      <AnimatedIcon 
                        icon={service.icon} 
                        className="text-blue-600 group-hover:text-white transition-colors" 
                        size={24}
                        delay={index * 0.1}
                        animation="bounce"
                      />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                      {service.badge}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{service.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                  >
                    <Link to={service.link}>Tìm hiểu thêm</Link>
                  </Button>

                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Sẵn sàng nâng tầm doanh nghiệp của bạn?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Liên hệ ngay với Necimatech Group để được tư vấn miễn phí và nhận báo giá tốt nhất
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-4" onClick={openModal}>
              Tư vấn miễn phí ngay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
