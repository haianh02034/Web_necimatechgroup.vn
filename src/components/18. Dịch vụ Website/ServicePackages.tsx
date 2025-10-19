import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Sparkles, Rocket, Crown, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const packages = [
  {
    name: "Basic",
    icon: Sparkles,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Thiết kế website theo yêu cầu (Profile hoặc E-commerce)",
      "Thiết kế giao diện UI/UX chuyên nghiệp",
      "Tối ưu SEO Onpage và tốc độ tải trang",
      "Hỗ trợ kỹ thuật toàn diện",
      "Đăng ký tên miền & email doanh nghiệp",
      "Cung cấp Hosting/VPS và chứng chỉ SSL",
      "Tư vấn chiến lược website dài hạn",
    ],
    popular: false,
  },
  {
    name: "Pro",
    icon: Rocket,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Tất cả tính năng gói Basic",
      "Tối ưu tốc độ tải trang & Core Web Vitals",
      "Dịch vụ đăng bài viết chuyên nghiệp",
      "Tích hợp công cụ đo lường Google Analytics",
      "Phân tích dữ liệu chuyên sâu",
      "Tối ưu chuyển đổi khách hàng",
      "Hỗ trợ ưu tiên",
    ],
    popular: true,
  },
  {
    name: "Premium",
    icon: Crown,
    gradient: "from-orange-500 to-red-500",
    features: [
      "Tất cả tính năng gói Pro",
      "Tối ưu giao diện UI/UX chuyên sâu",
      "Phân tích hành vi người dùng",
      "Dịch vụ đăng bài viết không giới hạn",
      "Chăm sóc, bảo trì website 24/7",
      "Cập nhật và bảo trì thường xuyên",
      "Tư vấn chiến lược marketing online",
    ],
    popular: false,
  },
];

export function ServicePackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
            Chi Tiết Các Gói Dịch Vụ Thiết Kế Website
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu và quy mô doanh nghiệp của bạn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${pkg.popular ? "md:-mt-4" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm z-10 shadow-lg">
                  Phổ Biến Nhất
                </div>
              )}

              <Card className={`h-full p-8 hover:shadow-2xl transition-all duration-300 border-2 ${
                pkg.popular ? "border-purple-200 shadow-xl" : "border-slate-200"
              } group relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-block bg-gradient-to-br ${pkg.gradient} p-4 rounded-2xl mb-6 shadow-lg`}
                  >
                    <pkg.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl mb-2 text-slate-900">Gói {pkg.name}</h3>
                  <p className="text-slate-600 mb-6">Liên hệ tư vấn để được báo giá chi tiết</p>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`bg-gradient-to-br ${pkg.gradient} p-1 rounded-full flex-shrink-0 mt-0.5`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${pkg.gradient} hover:shadow-lg transition-all duration-300 text-white group/btn`}
                  >
                    Liên Hệ Ngay
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
