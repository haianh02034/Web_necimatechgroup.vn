import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Zap,
  Star,
  Crown,
  Check,
  Facebook,
  Search,
  Globe,
  TrendingUp,
  Users,
  BarChart,
} from "lucide-react";
import { Button } from "../ui/button";

const packages = [
  {
    name: "FASTSALE",
    subtitle: "Giải pháp tăng trưởng doanh số siêu tốc",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    borderColor: "border-orange-500",
    features: [
      {
        icon: Facebook,
        title: "Quảng cáo tập trung",
        items: [
          "Facebook Ads chuyên sâu",
          "Google Search Ads hiệu quả",
          "Targeting chính xác khách hàng mục tiêu",
        ],
      },
      {
        icon: Globe,
        title: "Hạ tầng bán hàng",
        items: [
          "Landing Page chuyển đổi cao",
          "Tối ưu UX/UI chuyên nghiệp",
          "Nội dung thuyết phục",
        ],
      },
      {
        icon: BarChart,
        title: "Đo lường hiệu quả",
        items: [
          "GA4 tracking chi tiết",
          "Facebook Pixel/CAPI",
          "Báo cáo minh bạch",
        ],
      },
    ],
    highlight: false,
  },
  {
    name: "PREMIUM",
    subtitle: "Xây dựng thương hiệu và tối ưu chuyển đổi bền vững",
    icon: Star,
    color: "from-blue-500 to-indigo-600",
    borderColor: "border-blue-500",
    features: [
      {
        icon: TrendingUp,
        title: "Quảng cáo đa kênh",
        items: [
          "Performance Max (PMax)",
          "Remarketing chiến lược",
          "Video Ads sáng tạo",
          "Chiến lược đa nền tảng",
        ],
      },
      {
        icon: Users,
        title: "Phát triển thương hiệu",
        items: [
          "Hợp tác KOL/KOC chuyên nghiệp",
          "Xây dựng uy tín thương hiệu",
          "Tạo lòng tin khách hàng",
        ],
      },
      {
        icon: Search,
        title: "Tối ưu chuyên sâu",
        items: [
          "SEO E-commerce",
          "SEO Content mở rộng",
          "A/B Testing liên tục",
          "Website tùy chỉnh theo yêu cầu",
        ],
      },
    ],
    highlight: true,
  },
  {
    name: "PRO",
    subtitle: "Nâng tầm thương hiệu và tối ưu hóa hệ thống",
    icon: Crown,
    color: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500",
    features: [
      {
        icon: Globe,
        title: "Chiến dịch toàn diện",
        items: [
          "GDN/YouTube quy mô lớn",
          "Facebook Ads tối ưu",
          "Content Calendar toàn diện",
          "Multi-channel marketing",
        ],
      },
      {
        icon: Users,
        title: "Xây dựng cộng đồng",
        items: [
          "Seeding/Đánh giá chuyên nghiệp",
          "Quản trị Fanpage nâng cao",
          "Xử lý khủng hoảng truyền thông",
          "Cộng đồng khách hàng trung thành",
        ],
      },
      {
        icon: TrendingUp,
        title: "Chiến lược bền vững",
        items: [
          "SEO chuyên sâu",
          "Tư vấn kế hoạch tổng thể",
          "Phân tích thị trường",
          "Định hướng dài hạn",
        ],
      },
    ],
    highlight: false,
  },
];

export function ServicePackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Các gói dịch vụ <span className="text-blue-600">linh hoạt</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Được thiết kế để phù hợp với từng giai đoạn và mục tiêu kinh doanh khác
            nhau của bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative ${
                  pkg.highlight ? "lg:-mt-8 lg:mb-0" : ""
                }`}
              >
                <div
                  className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border-2 ${
                    pkg.highlight ? pkg.borderColor : "border-transparent"
                  }`}
                >
                  {pkg.highlight && (
                    <div
                      className={`bg-gradient-to-r ${pkg.color} text-white text-center py-2 text-sm`}
                    >
                      PHỔ BIẾN NHẤT
                    </div>
                  )}

                  <div className="p-8">
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${pkg.color} mb-6`}
                      whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="text-3xl mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-8">{pkg.subtitle}</p>

                    <div className="space-y-6 mb-8">
                      {pkg.features.map((feature, fIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div key={fIndex}>
                            <div className="flex items-center gap-2 mb-3">
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                              >
                                <FeatureIcon
                                  className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${pkg.color}`}
                                  style={{
                                    filter: "drop-shadow(0 0 8px currentColor)",
                                  }}
                                />
                              </motion.div>
                              <h4 className="text-lg">{feature.title}</h4>
                            </div>
                            <ul className="space-y-2 ml-8">
                              {feature.items.map((item, iIndex) => (
                                <motion.li
                                  key={iIndex}
                                  className="flex items-start gap-2 text-gray-600"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={
                                    isInView ? { opacity: 1, x: 0 } : {}
                                  }
                                  transition={{
                                    delay: index * 0.2 + iIndex * 0.1,
                                  }}
                                >
                                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${pkg.color} text-white hover:opacity-90`}
                      size="lg"
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Tìm hiểu thêm
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
