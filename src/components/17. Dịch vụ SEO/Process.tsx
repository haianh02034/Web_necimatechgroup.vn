import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { PhoneCall, Search, Rocket, BarChart3 } from "lucide-react";

export function Process() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const steps = [
    {
      icon: PhoneCall,
      title: "Tiếp nhận yêu cầu & Tư vấn",
      description: "Lắng nghe nhu cầu và mục tiêu của bạn để đề xuất gói dịch vụ phù hợp nhất",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Search,
      title: "Phân tích & Lập chiến lược",
      description: "SEO Audit, phân tích thị trường và đối thủ để xây dựng chiến lược SEO tổng thể",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Triển khai",
      description: "Thực hiện các công việc trong chiến lược: tối ưu kỹ thuật, nội dung và xây dựng liên kết",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: BarChart3,
      title: "Báo cáo & Tối ưu",
      description: "Báo cáo định kỳ kết quả, phân tích dữ liệu và điều chỉnh chiến lược liên tục",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Quy trình triển khai dịch vụ SEO</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Quy trình chuyên nghiệp và minh bạch, đảm bảo khách hàng luôn nắm rõ tiến độ và hiệu quả công việc
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-center gap-6">
                {/* Step number and icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative flex-shrink-0"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100"
                  >
                    <span className="text-sm text-gray-700">{index + 1}</span>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                  className="w-0.5 h-12 bg-gradient-to-b from-blue-300 to-purple-300 ml-10 my-2"
                  style={{ transformOrigin: 'top' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
