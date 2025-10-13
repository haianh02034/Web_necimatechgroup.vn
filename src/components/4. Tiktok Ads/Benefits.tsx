import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Target, DollarSign, TrendingUp, Award } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Tiếp cận chính xác khách hàng mục tiêu",
    description: "Nhờ hệ thống targeting nâng cao (độ tuổi, giới tính, hành vi, sở thích...)",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "Tối ưu ngân sách quảng cáo",
    description: "Thông qua A/B Testing, báo cáo chi tiết, giảm thiểu lãng phí",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Tăng tỷ lệ chuyển đổi",
    description: "Tích hợp TikTok Shop, livestream bán hàng, seeding cộng đồng",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Xây dựng thương hiệu bền vững",
    description: "Nội dung sáng tạo, đúng trend, giúp thương hiệu luôn hiện diện",
    color: "from-orange-500 to-red-500",
  },
];

export function Benefits() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Giải pháp tối ưu cho doanh nghiệp
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Không chỉ đơn thuần là chạy quảng cáo, dịch vụ TikTok Ads mang lại 
            hàng loạt lợi ích chiến lược
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl" 
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
