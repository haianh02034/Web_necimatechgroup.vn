import { Button } from "../ui/button";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { useState } from "react";

export function Pricing() {
  const [ref, isInView] = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const plans = [
    {
      name: "Basic",
      subtitle: "Khởi đầu vững chắc",
      price: "2.550.000",
      period: "/năm",
      description: "Phù hợp: Doanh nghiệp nhỏ, startup, thương hiệu mới",
      features: [
        "Tạo lập và xác thực OA (tích xanh)",
        "Thiết lập chatbot cơ bản & kịch bản CSKH",
        "Quản lý chiến dịch ZNS cơ bản",
        "Gửi thông báo giao dịch, khuyến mãi",
        "Hỗ trợ kỹ thuật 24/7",
      ],
      highlight: false,
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Pro",
      subtitle: "Mở rộng chuyên nghiệp",
      price: "4.250.000",
      period: "/năm",
      description: "Phù hợp: Doanh nghiệp vừa và nhỏ muốn nâng cao hiệu quả",
      features: [
        "Toàn bộ tính năng Basic",
        "Thiết lập OA Shop: upload sản phẩm",
        "Cấu hình thanh toán, vận chuyển",
        "Báo cáo & dashboard chi tiết",
        "Tư vấn & tối ưu chiến dịch Zalo Ads",
        "Đào tạo vận hành OA nội bộ",
      ],
      highlight: true,
      icon: Rocket,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Premium",
      subtitle: "Toàn diện & khác biệt",
      price: "13.500.000",
      period: "/năm",
      description: "Phù hợp: Doanh nghiệp lớn, thương hiệu muốn bứt phá",
      features: [
        "Toàn bộ tính năng Pro",
        "Phát triển Mini App/Mini Game",
        "Quiz, vòng quay may mắn, bốc thăm",
        "Tổ chức sự kiện & livestream trên OA",
        "Kết hợp voucher, coupon, minigame",
        "Workshop nội bộ Marketing, CSKH, Sales",
        "Tư vấn chiến lược 6-12 tháng",
        "Cam kết SLA & hỗ trợ chuyên sâu",
      ],
      highlight: false,
      icon: Crown,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section 
      id="pricing" 
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Optimized background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl will-change-transform"
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl" ref={ref}>
        {/* Header - Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            id="pricing-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Bảng giá dịch vụ Zalo OA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Lựa chọn gói dịch vụ phù hợp với quy mô và nhu cầu của doanh nghiệp bạn
          </motion.p>
        </motion.div>

        {/* Pricing Cards - Optimized Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.12,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden will-change-transform ${
                plan.highlight 
                  ? 'border-4 border-purple-500 lg:-mt-4 lg:mb-4' 
                  : 'border-2 border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlight && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
                  className="absolute top-0 right-8 transform -translate-y-1/2"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Phổ biến nhất
                  </div>
                </motion.div>
              )}

              {/* Optimized gradient background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-5' : 'opacity-0'}`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.subtitle}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">đ{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full mb-6 ${
                    plan.highlight 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black'
                  } shadow-lg hover:shadow-xl transition-all`}
                >
                  Chọn gói {plan.name}
                </Button>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.12 + idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlight ? 'text-purple-600' : 'text-green-600'
                      }`} />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Optimized glow effect */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-3xl blur transition-opacity duration-300 -z-10 ${hoveredIndex === index ? 'opacity-20' : 'opacity-0'}`}
              />
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-lg">
            💡 Mọi gói đều được <span className="font-semibold text-blue-600">tư vấn miễn phí</span> và 
            <span className="font-semibold text-green-600"> hỗ trợ 24/7</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
