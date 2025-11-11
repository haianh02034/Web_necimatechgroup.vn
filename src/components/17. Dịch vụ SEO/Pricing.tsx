import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "../ui/button";

export function Pricing() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const packages = [
    {
      name: "Basic",
      icon: Sparkles,
      price: "Liên hệ",
      description: "Lý tưởng cho doanh nghiệp mới bắt đầu",
      features: [
        "SEO Audit - Kiểm tra tổng thể website",
        "SEO Technical - Tối ưu kỹ thuật",
        "SEO Local - Tối ưu địa phương",
        "SEO E-commerce (1 lần tối ưu)",
        "SEO Content",
        "Tư vấn và triển khai công cụ đo lường",
      ],
      color: "from-blue-500 to-cyan-500",
      highlighted: false,
    },
    {
      name: "Pro",
      icon: Zap,
      price: "Liên hệ",
      description: "Giải pháp toàn diện cho doanh nghiệp phát triển",
      features: [
        "SEO Audit (7 lần kiểm tra)",
        "Chiến lược SEO tổng thể",
        "SEO Technical, Local, E-commerce (chọn 2)",
        "SEO Content chất lượng cao",
        "Tư vấn và triển khai công cụ đo lường",
        "Báo cáo chi tiết hàng tháng",
      ],
      color: "from-purple-500 to-pink-500",
      highlighted: true,
    },
    {
      name: "Premium",
      icon: Crown,
      price: "Liên hệ",
      description: "Gói cao cấp nhất cho kết quả tối đa",
      features: [
        "Tất cả dịch vụ SEO Audit",
        "SEO Technical toàn diện",
        "SEO Local chuyên sâu",
        "Chiến lược SEO tổng thể dài hạn",
        "SEO E-commerce chuyên nghiệp",
        "SEO Content với từ khóa chính xác",
        "Công cụ đo lường và phân tích nâng cao",
        "Hỗ trợ ưu tiên 24/7",
      ],
      color: "from-amber-500 to-orange-500",
      highlighted: false,
    },
  ];

  return (
    <section ref={ref} id="pricing" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Các gói dịch vụ SEO hấp dẫn</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Chọn gói dịch vụ phù hợp với quy mô và nhu cầu của doanh nghiệp bạn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${pkg.highlighted ? 'md:-mt-4 md:mb-0' : ''}`}
            >
              {pkg.highlighted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm z-10"
                >
                  Phổ biến nhất
                </motion.div>
              )}

              <div className={`bg-white rounded-3xl p-8 h-full shadow-xl ${pkg.highlighted ? 'border-2 border-purple-300' : ''}`}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <pkg.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="mb-2 text-gray-900">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-blue-600">{pkg.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.15 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      >
                        <Check className="w-3 h-3 text-green-600" />
                      </motion.div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${pkg.highlighted ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  Chọn gói {pkg.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
