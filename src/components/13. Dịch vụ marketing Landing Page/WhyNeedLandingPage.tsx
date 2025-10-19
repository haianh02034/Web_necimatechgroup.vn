import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import {
  Target,
  DollarSign,
  TrendingUp,
  Award,
  Zap,
  BarChart3,
} from "lucide-react";

export function WhyNeedLandingPage() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const reasons = [
    {
      icon: Target,
      title: "Tập trung đúng mục tiêu",
      description:
        "Không giống website tổng hợp nhiều thông tin, Landing Page chỉ tập trung vào một mục tiêu duy nhất, giúp khách hàng không bị phân tâm và dễ dàng đưa ra hành động mong muốn.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Tối ưu chi phí quảng cáo",
      description:
        "Landing Page chuyên nghiệp có khả năng thuyết phục cao hơn, giúp tăng tỷ lệ chuyển đổi, từ đó giảm chi phí cho mỗi khách hàng tiềm năng.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Tăng hiệu quả marketing",
      description:
        "Dễ dàng theo dõi và phân tích hành vi người dùng, tối ưu nội dung – giao diện – CTA để cải thiện liên tục hiệu suất chiến dịch.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Xây dựng uy tín thương hiệu",
      description:
        "Thiết kế đẹp mắt, nội dung thuyết phục và trải nghiệm người dùng mượt mà sẽ nâng cao hình ảnh chuyên nghiệp, tạo niềm tin nơi khách hàng.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Tại sao doanh nghiệp cần Landing Page chuyên nghiệp?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tăng trưởng bền vững với công cụ marketing hiệu quả nhất
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-3 text-gray-900">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>

                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
