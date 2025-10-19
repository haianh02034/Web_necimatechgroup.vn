import { motion } from "motion/react";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "../ui/button";

export function Pricing() {
  const packages = [
    {
      name: "Basic",
      price: "10.000.000",
      icon: Star,
      color: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        "5 bài PR trên báo điện tử",
        "Theo đúng ngành nghề và mục tiêu",
        "Tư vấn chiến lược booking KOL/Influencer",
        "Hỗ trợ chiến dịch truyền thông",
        "Phù hợp startup & doanh nghiệp nhỏ",
      ],
    },
    {
      name: "Pro",
      price: "25.000.000",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      popular: true,
      features: [
        "10 bài PR trên báo điện tử",
        "Dịch vụ viết bài PR chuyên nghiệp",
        "Xây dựng chiến dịch PR tổng thể",
        "Kết hợp báo chí – social – KOL",
        "Đo lường & báo cáo chi tiết",
        "Lý tưởng cho doanh nghiệp đang tăng trưởng",
      ],
    },
    {
      name: "Premium",
      price: "50.000.000",
      icon: Crown,
      color: "from-orange-500 to-red-500",
      popular: false,
      features: [
        "15 bài PR + viết bài chuyên nghiệp",
        "Chiến dịch PR đa kênh toàn diện",
        "Quản lý nội dung & brief KOL",
        "Tổ chức chiến dịch Influencer Marketing",
        "Đo lường hiệu quả chuyên sâu",
        "Xử lý khủng hoảng truyền thông",
        "Cho doanh nghiệp lớn & chiến dịch toàn quốc",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Bảng giá dịch vụ
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            Chọn gói phù hợp với bạn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            3 gói dịch vụ linh hoạt, đáp ứng mọi nhu cầu từ startup đến doanh nghiệp lớn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative"
              >
                {pkg.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm shadow-lg">
                      Phổ biến nhất
                    </span>
                  </motion.div>
                )}

                <div
                  className={`relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 ${
                    pkg.popular ? "border-purple-500" : "border-gray-200"
                  } overflow-hidden`}
                >
                  {/* Background Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />

                  <div className="p-8">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl mb-2">{pkg.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                      <span className="text-gray-500 ml-2">VNĐ</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, fIndex) => (
                        <motion.li
                          key={fIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 text-green-500`} />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      }`}
                    >
                      Chọn gói {pkg.name}
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
