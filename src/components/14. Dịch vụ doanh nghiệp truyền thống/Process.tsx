import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Lightbulb, Users, TrendingUp, Network } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Tư vấn và đồng hành",
    description:
      "Cung cấp tư vấn chuyên sâu, giúp xác định đúng mục tiêu, khách hàng và chiến lược marketing phù hợp",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Xây dựng đội ngũ và quy trình",
    description:
      "Thiết lập quy trình làm việc hiệu quả, đào tạo và hỗ trợ nhân sự nội bộ",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Tối ưu hóa nguồn lực",
    description:
      "Lựa chọn giải pháp phù hợp với ngân sách, đảm bảo mỗi khoản đầu tư mang lại hiệu quả cao nhất",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Network,
    title: "Đồng bộ hóa các kênh",
    description:
      "Xây dựng hệ sinh thái marketing toàn diện, đảm bảo mọi kênh hoạt động ăn ý và hỗ trợ lẫn nhau",
    color: "from-purple-500 to-pink-500",
  },
];

export function Process() {
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
            Necimatech giúp DN truyền thống chuyển đổi số như thế nào?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chuyển đổi số không chỉ là xu hướng, mà là yêu cầu tất yếu để tồn
            tại và phát triển
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Step number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="absolute -top-4 -left-4 w-12 h-12 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center shadow-lg z-10"
                  >
                    <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {index + 1}
                    </span>
                  </motion.div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color} mb-4`}
                      whileHover={{
                        rotate: [0, 10, -10, 10, 0],
                        scale: [1, 1.15, 1],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-lg text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
