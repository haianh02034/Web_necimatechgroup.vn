import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import {
  TrendingUp,
  PiggyBank,
  Award,
  BarChart3,
  HeartHandshake,
} from "lucide-react";

export function Benefits() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Tăng hiệu quả marketing",
      description:
        "Thiết kế tối ưu, đúng mục tiêu giúp tăng lead và tỷ lệ chốt đơn đáng kể",
      stats: "+150%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: PiggyBank,
      title: "Tiết kiệm chi phí",
      description:
        "Giảm bớt chi phí quảng cáo nhờ tỷ lệ chuyển đổi cao hơn, ROI tối ưu",
      stats: "-40%",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Nâng cao hình ảnh",
      description:
        "Landing Page đẹp, chuyên nghiệp tạo uy tín và sự tin cậy từ khách hàng",
      stats: "+98%",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Đo lường & tối ưu",
      description:
        "Dễ dàng tracking hành vi khách hàng, từ đó đưa ra các điều chỉnh hợp lý",
      stats: "100%",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: HeartHandshake,
      title: "Đồng hành lâu dài",
      description:
        "Không chỉ xây dựng mà còn quản trị, bảo trì, đảm bảo vận hành mượt mà",
      stats: "24/7",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Lợi ích khi sử dụng dịch vụ Landing Page
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tối ưu hóa ngân sách marketing và gia tăng doanh thu bền vững
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10 blur-sm`} />

                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center`}
                    whileHover={{ scale: 1.15, rotate: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    className={`text-3xl bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    {benefit.stats}
                  </motion.div>
                </div>

                <h3 className="text-xl mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>

                {/* Animated line */}
                <motion.div
                  className="mt-6 h-1 rounded-full overflow-hidden bg-gray-100"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r ${benefit.color}`}
                    initial={{ x: "-100%" }}
                    animate={isInView ? { x: 0 } : {}}
                    transition={{ duration: 1, delay: index * 0.15 + 0.6 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
