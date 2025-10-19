import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MessageSquare, Search, Code, CheckCircle, Settings } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tiếp nhận và Tư vấn",
    description: "Chúng tôi lắng nghe chi tiết nhu cầu và mục tiêu của bạn để tư vấn gói dịch vụ phù hợp nhất.",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Phân tích & Lập kế hoạch",
    description: "Phân tích thị trường, đối thủ cạnh tranh và xây dựng lộ trình phát triển website cụ thể.",
    icon: Search,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Thiết kế & Xây dựng",
    description: "Thực hiện thiết kế giao diện, lập trình và tích hợp các tính năng cần thiết.",
    icon: Code,
    color: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    title: "Bàn giao & Hướng dẫn",
    description: "Bàn giao website hoàn chỉnh và hướng dẫn chi tiết cách quản trị, vận hành.",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "05",
    title: "Vận hành & Bảo trì",
    description: "Tiếp tục hỗ trợ kỹ thuật, cập nhật và bảo trì định kỳ để website luôn hoạt động hiệu quả.",
    icon: Settings,
    color: "from-indigo-500 to-purple-500",
  },
];

export function ProcessSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="process" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            Quy Trình Triển Khai Dịch Vụ Tại Necimatech
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Quy trình được xây dựng khoa học và chuyên nghiệp, đảm bảo mọi dự án đều đạt kết quả tốt nhất
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 group">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`bg-gradient-to-br ${step.color} p-4 rounded-xl shadow-lg flex-shrink-0`}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <div className={`inline-block bg-gradient-to-r ${step.color} bg-clip-text text-transparent text-4xl mb-2`}>
                          {step.number}
                        </div>
                        <h3 className="text-xl mb-3 text-slate-900">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className={`h-1 bg-gradient-to-r ${step.color} mt-6 rounded-full`}
                    />
                  </div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                  className="hidden lg:block relative z-10"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full shadow-lg flex items-center justify-center`}>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <step.icon className={`w-6 h-6 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
