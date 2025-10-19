import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Check, Zap, Rocket, Crown } from "lucide-react";

const services = [
  {
    name: "Basic",
    icon: Zap,
    tagline: "Hiện diện và Nền tảng số",
    description:
      "Giải pháp hoàn hảo cho những doanh nghiệp mới bắt đầu hành trình số",
    price: "Liên hệ",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Website chuyên nghiệp với UI/UX tối ưu",
      "Quảng cáo Facebook và Google Search",
      "Content Calendar đều đặn",
      "SEO Audit cơ bản",
      "Quản lý Social Media",
    ],
  },
  {
    name: "Premium",
    icon: Rocket,
    tagline: "Chuyển đổi số toàn diện",
    description:
      "Tối ưu hóa toàn bộ hành trình khách hàng từ nhận biết đến trung thành",
    price: "Liên hệ",
    gradient: "from-purple-500 to-pink-500",
    popular: true,
    features: [
      "Paid Media Full-Funnel (Search, GDN, PMax, YouTube)",
      "Hệ sinh thái nội dung & PR đa nền tảng",
      "Phát triển kênh TikTok với Hashtag Challenge",
      "Tích hợp Chatbot và AI",
      "Kế hoạch dự phòng khủng hoảng truyền thông",
    ],
  },
  {
    name: "Pro",
    icon: Crown,
    tagline: "Tăng độ phủ & Quản trị thương hiệu",
    description:
      "Dành cho doanh nghiệp lớn muốn mở rộng thị trường và nâng tầm thương hiệu",
    price: "Liên hệ",
    gradient: "from-orange-500 to-red-500",
    features: [
      "Chiến dịch GDN/YouTube quy mô lớn với TVC",
      "Hợp tác KOL/Influencer & PR uy tín",
      "Website thiết kế riêng với A/B Testing",
      "Quản trị cộng đồng toàn diện",
      "Đội ngũ chuyên trách 24/7",
    ],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4">
            Giải pháp toàn diện từ Necimatech
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lộ trình tăng trưởng chuyên biệt - Mỗi doanh nghiệp có một câu
            chuyện và mục tiêu riêng
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {service.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm shadow-lg">
                      Phổ biến nhất
                    </span>
                  </motion.div>
                )}

                <Card
                  className={`relative overflow-hidden h-full border-2 ${
                    service.popular
                      ? "border-purple-200 shadow-2xl"
                      : "border-gray-200 shadow-lg"
                  } hover:shadow-2xl transition-shadow duration-300`}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.gradient}`}
                  />

                  <div className="p-8">
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                        {service.price}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mt-0.5`}
                          >
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:opacity-90 transition-opacity`}
                    >
                      Chọn gói {service.name}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
