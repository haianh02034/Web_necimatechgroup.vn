import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Check, Star, Sparkles, Crown } from "lucide-react";

export function PricingCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const plans = [
    {
      name: "Basic",
      price: "8.000.000",
      fee: "5% ngân sách",
      icon: Star,
      color: "blue",
      recommended: false,
      features: [
        "Tư vấn chiến lược",
        "Thiết lập chiến dịch",
        "Google Search Ads",
        "Audit hiệu suất (1 lần)",
        "Báo cáo chi tiết"
      ],
      benefits: [
        "Phù hợp startup, shop nhỏ",
        "Tập trung Search Ads hiệu quả",
        "Thử nghiệm thị trường",
        "Hiểu rõ hiệu quả quảng cáo"
      ]
    },
    {
      name: "Pro",
      price: "15.000.000",
      fee: "3% ngân sách",
      icon: Sparkles,
      color: "indigo",
      recommended: true,
      features: [
        "Toàn bộ gói Basic",
        "Quản lý & tối ưu liên tục",
        "Google Display Network (GDN)",
        "Remarketing",
        "Audit chuyên sâu (1 lần)",
        "Tối ưu đa kênh"
      ],
      benefits: [
        "Mở rộng tệp khách hàng",
        "Kéo khách quay lại",
        "Tăng tỷ lệ chuyển đổi",
        "Giảm chi phí quảng cáo",
        "Dành cho SME mở rộng"
      ]
    },
    {
      name: "Premium",
      price: "Báo giá",
      fee: "trọn gói",
      icon: Crown,
      color: "purple",
      recommended: false,
      features: [
        "Toàn bộ gói Pro",
        "Google Shopping Ads",
        "YouTube Ads",
        "Performance Max",
        "Audit nâng cao (3 lần)",
        "Chiến lược toàn diện"
      ],
      benefits: [
        "Bao phủ toàn bộ hành trình",
        "Tối ưu đa nền tảng",
        "Video Marketing",
        "Tự động hóa thông minh",
        "Dành cho TMĐT & tập đoàn"
      ]
    }
  ];

  const colorSchemes = {
    blue: {
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
      text: "text-blue-600",
      hover: "hover:shadow-blue-200"
    },
    indigo: {
      gradient: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      hover: "hover:shadow-indigo-200"
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      bg: "bg-purple-50",
      text: "text-purple-600",
      hover: "hover:shadow-purple-200"
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">
            Các gói dịch vụ đa dạng, phù hợp mọi nhu cầu
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Necimatech mang đến 3 gói dịch vụ linh hoạt, tối ưu cho từng giai đoạn phát triển của doanh nghiệp
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const scheme = colorSchemes[plan.color as keyof typeof colorSchemes];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className={`relative bg-white rounded-2xl shadow-xl ${scheme.hover} transition-all ${
                  plan.recommended ? "ring-2 ring-indigo-500 lg:scale-105" : ""
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm shadow-lg">
                      Phổ biến nhất
                    </div>
                  </div>
                )}

                <div className={`p-8 bg-gradient-to-r ${scheme.gradient} rounded-t-2xl text-white`}>
                  <plan.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl">{plan.price}</span>
                    {plan.price !== "Báo giá" && <span className="text-lg">VNĐ</span>}
                  </div>
                  <p className="mt-2 text-blue-100">+ {plan.fee}</p>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Thành phần</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex gap-3">
                          <Check className={`h-5 w-5 ${scheme.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Lợi ích</h4>
                    <ul className="space-y-2">
                      {plan.benefits.map((benefit, i) => (
                        <li key={i} className={`text-sm ${scheme.bg} ${scheme.text} px-3 py-2 rounded-lg`}>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${scheme.gradient} hover:opacity-90 text-white`}
                    size="lg"
                  >
                    Chọn gói {plan.name}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
