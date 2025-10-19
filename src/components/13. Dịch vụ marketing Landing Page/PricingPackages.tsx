import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Check, Star, Sparkles, Crown } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function PricingPackages() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const packages = [
    {
      name: "Basic",
      price: "3.000.000",
      icon: Star,
      badge: "Phổ biến",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Thiết kế 1 Landing Page theo mục tiêu",
        "Viết nội dung (copywriting) chuẩn chuyển đổi",
        "CTA hấp dẫn",
        "Tích hợp form đăng ký/báo giá/liên hệ",
        "Responsive mobile",
      ],
      benefits: [
        "Tăng hiệu quả quảng cáo",
        "Chi phí hợp lý",
        "Triển khai nhanh chóng",
        "Phù hợp startup & doanh nghiệp nhỏ",
      ],
    },
    {
      name: "Pro",
      price: "6.000.000",
      icon: Sparkles,
      badge: "Được đề xuất",
      popular: true,
      color: "from-purple-500 to-pink-500",
      features: [
        "3 Landing Page theo mục tiêu khác nhau",
        "Nội dung chuyên sâu cho từng sản phẩm/dịch vụ",
        "Lập trình tính năng phức tạp",
        "Tích hợp API, CRM, email marketing",
        "Form và công cụ hỗ trợ nâng cao",
        "A/B Testing tối ưu chuyển đổi",
      ],
      benefits: [
        "Thử nghiệm nhiều chiến dịch cùng lúc",
        "Tăng tỷ lệ chốt đơn",
        "Tiết kiệm thời gian quản lý",
        "Phù hợp doanh nghiệp đang tăng trưởng",
      ],
    },
    {
      name: "Premium",
      price: "15.000.000",
      icon: Crown,
      badge: "Chuyên nghiệp",
      color: "from-orange-500 to-red-500",
      features: [
        "10 Landing Page đa dạng mục tiêu",
        "Nội dung chuyên nghiệp, sáng tạo USP",
        "UI/UX hiện đại, chuẩn mobile",
        "Lập trình nâng cao: CRM, automation",
        "Hệ thống tracking chi tiết",
        "Theo dõi hành vi người dùng",
        "A/B Testing liên tục",
        "Quản trị và bảo trì dài hạn",
      ],
      benefits: [
        "Tối ưu ngân sách quảng cáo",
        "Giảm thiểu rủi ro",
        "Landing Page luôn ổn định",
        "Phù hợp doanh nghiệp lớn",
      ],
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Các gói dịch vụ Marketing Landing Page
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với quy mô và mục tiêu của doanh nghiệp
            bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                    <Sparkles className="w-3 h-3 mr-1 inline" />
                    {pkg.badge}
                  </Badge>
                </div>
              )}

              <div
                className={`bg-white rounded-2xl border-2 ${
                  pkg.popular
                    ? "border-purple-500 shadow-2xl scale-105"
                    : "border-gray-200 hover:border-gray-300"
                } transition-all duration-300 h-full flex flex-col`}
              >
                <div className={`bg-gradient-to-br ${pkg.color} p-8 rounded-t-2xl`}>
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <pkg.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl text-white mb-2">Gói {pkg.name}</h3>
                  <div className="flex items-baseline text-white">
                    <span className="text-4xl">{pkg.price}</span>
                    <span className="ml-2">VNĐ</span>
                  </div>
                  {!pkg.popular && (
                    <Badge className="mt-3 bg-white/20 text-white border-white/30">
                      {pkg.badge}
                    </Badge>
                  )}
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-sm mb-4 text-gray-500 uppercase tracking-wider">
                      Thành phần chính
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm mb-4 text-gray-500 uppercase tracking-wider">
                      Lợi ích
                    </h4>
                    <ul className="space-y-3">
                      {pkg.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + (pkg.features.length + idx) * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${pkg.color} flex-shrink-0 mt-2`} />
                          <span className="text-gray-600">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full mt-auto ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        : "bg-gradient-to-r " + pkg.color + " hover:opacity-90"
                    } text-white`}
                    onClick={() => {
                      const ctaSection = document.getElementById("contact");
                      ctaSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Chọn gói {pkg.name}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
