import { motion } from "motion/react";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "../ui/button";

const packages = [
  {
    name: "Basic",
    subtitle: "Khởi đầu an toàn",
    price: "10.000.000",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Booking PR cơ bản",
      "Tư vấn chiến lược booking KOL",
      "Hỗ trợ lựa chọn KOL phù hợp",
      "Báo cáo kết quả chiến dịch",
    ],
    target: "Doanh nghiệp nhỏ, startup mới bắt đầu",
    popular: false,
  },
  {
    name: "Pro",
    subtitle: "Chuyên nghiệp toàn diện",
    price: "25.000.000",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    features: [
      "Tất cả tính năng Basic",
      "Booking KOL đa nền tảng",
      "Quản lý nội dung & brief chuyên nghiệp",
      "Đo lường & báo cáo chi tiết",
      "Tư vấn chiến lược chuyên sâu",
    ],
    target: "Doanh nghiệp vừa, chiến dịch chuyên nghiệp",
    popular: true,
  },
  {
    name: "Premium",
    subtitle: "Giải pháp trọn gói",
    price: "50.000.000",
    icon: Crown,
    color: "from-orange-500 to-red-500",
    features: [
      "Tất cả tính năng Pro",
      "Full dịch vụ từ A-Z",
      "Tổ chức influencer marketing event",
      "Xử lý khủng hoảng truyền thông",
      "Đội ngũ chuyên gia riêng",
      "Ưu tiên hỗ trợ 24/7",
    ],
    target: "Thương hiệu lớn, chiến dịch quy mô",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Các gói dịch vụ <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Booking KOL</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của doanh nghiệp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${pkg.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full z-10 shadow-lg"
                >
                  Phổ biến nhất
                </motion.div>
              )}

              <div className={`bg-white rounded-3xl p-8 shadow-xl h-full relative overflow-hidden ${pkg.popular ? 'border-2 border-purple-200' : 'border border-gray-100'}`}>
                {/* Gradient overlay */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${pkg.color} opacity-10`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${pkg.color} mb-6`}
                  >
                    <pkg.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.subtitle}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-gray-900">{pkg.price}</span>
                      <span className="text-gray-600">VNĐ</span>
                    </div>
                  </div>

                  <div className="mb-8 p-4 bg-gray-50 rounded-xl">
                    <p className="text-gray-700">{pkg.target}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`p-1 rounded-full bg-gradient-to-br ${pkg.color} flex-shrink-0 mt-0.5`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : ''}`}
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
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
