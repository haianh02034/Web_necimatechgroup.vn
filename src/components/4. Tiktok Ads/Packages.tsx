import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Gói Basic",
    subtitle: "Khởi đầu bền vững",
    price: "5.000.000",
    commission: "+ 5% ngân sách",
    badge: null,
    features: [
      "Tư vấn chiến lược TikTok Ads không giới hạn",
      "Thiết lập & tối ưu chiến dịch quảng cáo cơ bản",
      "Targeting nâng cao",
      "Xây dựng kênh TikTok & TikTok Shop cơ bản",
      "Báo cáo hiệu suất chiến dịch",
      "Seeding & Đánh giá (30 bài)",
    ],
    suitable: "Doanh nghiệp mới bắt đầu – cần thử nghiệm thị trường",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Gói Pro",
    subtitle: "Tăng trưởng mạnh mẽ",
    price: "15.000.000",
    commission: "+ 3% ngân sách",
    badge: "Phổ biến",
    features: [
      "Bao gồm toàn bộ dịch vụ gói Basic",
      "Sản xuất 10 video TikTok bắt trend",
      "Quản lý & vận hành kênh chuyên nghiệp",
      "Phân tích kênh TikTok Organic Insight",
      "Seeding & Đánh giá (50 bài)",
    ],
    suitable: "SME hoặc thương hiệu đã có kênh TikTok, muốn tăng trưởng doanh số",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Gói Premium",
    subtitle: "Bứt phá toàn diện",
    price: "40.000.000",
    commission: "+ 1% ngân sách",
    badge: "Đề xuất",
    features: [
      "Bao gồm toàn bộ dịch vụ gói Pro",
      "Sản xuất 20 video TikTok theo trend",
      "Triển khai Hashtag Challenge viral",
      "Livestream bán hàng chuyên nghiệp",
      "Booking KOL/Influencer TikTok",
      "Đào tạo đội ngũ nội bộ (3 buổi)",
      "Seeding & Đánh giá (100 bài)",
    ],
    suitable: "Doanh nghiệp lớn – cần chiến lược toàn diện, phủ sóng mạnh mẽ",
    color: "from-orange-500 to-red-500",
  },
];

export function Packages() {
  const [ref, isInView] = useInView();

  return (
    <section id="packages" ref={ref} className="py-20 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Các gói dịch vụ Quảng cáo TikTok Ads
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với giai đoạn phát triển của doanh nghiệp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {pkg.badge}
                  </Badge>
                </div>
              )}
              <Card className={`p-8 h-full border-2 ${pkg.badge ? 'border-purple-300 shadow-2xl scale-105' : 'border-gray-100'} hover:shadow-2xl transition-all duration-300 group`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${pkg.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`} />
                
                <h3 className="text-2xl mb-1">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.subtitle}</p>
                
                <div className="mb-6">
                  <div className="text-3xl mb-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      {pkg.price} VNĐ
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">{pkg.commission}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-600">
                    <span className="text-gray-900">Phù hợp: </span>
                    {pkg.suitable}
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Chọn gói này
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
