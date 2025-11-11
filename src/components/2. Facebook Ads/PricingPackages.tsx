import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "../ui/button";

export default function PricingPackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const packages = [
    {
      name: "Basic",
      price: "10.000.000",
      fee: "+ 5% ngân sách",
      description: "Phù hợp cho startup hoặc SME mới bắt đầu với Facebook Ads",
      popular: false,
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Tư vấn chiến lược quảng cáo",
        "Thiết lập & quản lý chiến dịch",
        "15 bài content/tháng",
        "Phân tích dữ liệu quảng cáo",
        "Seeding & đánh giá (30 bài)",
      ],
    },
    {
      name: "Pro",
      price: "25.000.000",
      fee: "+ 3% ngân sách",
      description: "Phù hợp cho doanh nghiệp đã có tệp khách hàng, muốn tăng trưởng mạnh mẽ",
      popular: true,
      gradient: "from-indigo-600 to-purple-600",
      features: [
        "Toàn bộ dịch vụ của Basic",
        "30 bài content/tháng",
        "Quản trị và phát triển Fanpage",
        "Facebook Insights & Audience Research",
        "Seeding & đánh giá (80 bài)",
        "Tặng 3 phần mềm/công cụ hỗ trợ",
      ],
    },
    {
      name: "Premium",
      price: "75.000.000",
      fee: "+ 1% ngân sách",
      description: "Giải pháp toàn diện cho thương hiệu lớn hoặc DN truyền thống muốn chuyển đổi số",
      popular: false,
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Toàn bộ dịch vụ Pro",
        "Targeting nâng cao & tối ưu chuyển đổi",
        "50 Content + 10 Video Ads/tháng",
        "Quản trị Fanpage & Group cộng đồng",
        "Chatbot & Automation",
        "Training & Workshop cho đội ngũ",
        "Seeding & đánh giá (200 bài)",
      ],
    },
  ];

  return (
    <section id="pricing-packages" ref={ref} className=" py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-gray-900">
            Chi tiết các gói dịch vụ
          </h2>
          <p className="text-xl text-gray-600">
            Chọn gói dịch vụ phù hợp với quy mô và mục tiêu của doanh nghiệp bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${pkg.popular ? "lg:-mt-4" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    <span>Phổ biến nhất</span>
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-white rounded-2xl overflow-hidden ${
                  pkg.popular ? "border-2 border-indigo-500 shadow-2xl" : "border border-gray-200 shadow-lg"
                }`}
              >
                <div className={`bg-gradient-to-r ${pkg.gradient} p-8 text-white`}>
                  <h3 className="text-2xl mb-2">{pkg.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl">{pkg.price}</span>
                    <span className="text-xl ml-2">VNĐ</span>
                  </div>
                  <p className="text-blue-100">{pkg.fee}</p>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 mb-6 min-h-[80px]">{pkg.description}</p>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-5 h-5 bg-gradient-to-r ${pkg.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    } text-white`}
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
