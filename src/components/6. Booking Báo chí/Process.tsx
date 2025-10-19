import { motion } from "motion/react";
import { Search, FileText, Rocket, BarChart, CheckCircle } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Khảo sát & tư vấn",
      description: "Phân tích ngành nghề, mục tiêu và ngân sách để lựa chọn gói phù hợp nhất",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Đề xuất kế hoạch",
      description: "Đề xuất danh sách báo chí & kế hoạch truyền thông phù hợp mục tiêu",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Triển khai booking",
      description: "Nội dung được biên tập chuẩn báo chí, đăng đúng thời điểm vàng",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart,
      title: "Quản lý & đo lường",
      description: "Theo dõi hiệu suất, tương tác và độ phủ của chiến dịch",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: CheckCircle,
      title: "Báo cáo & tối ưu",
      description: "Tổng hợp kết quả và đề xuất cải thiện cho chiến dịch tiếp theo",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-4">
            Quy trình làm việc
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            5 bước triển khai chuyên nghiệp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quy trình làm việc minh bạch, chuyên nghiệp từ khảo sát đến báo cáo cuối cùng
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white shadow-lg z-10"
                    >
                      {index + 1}
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                    >
                      {/* Animated Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1 + 0.3,
                          type: "spring"
                        }}
                        className="mb-4"
                      >
                        <motion.div
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                          className={`w-16 h-16 mx-auto bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg relative`}
                        >
                          <Icon className="w-8 h-8 text-white" />

                          {/* Pulse effect */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-xl`}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          />
                        </motion.div>
                      </motion.div>

                      <h3 className="text-lg mb-2 text-center">{step.title}</h3>
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress bar */}
                      <motion.div
                        className={`mt-4 h-1 bg-gradient-to-r ${step.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline visual for mobile */}
        <div className="lg:hidden mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2"
          >
            {steps.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${steps[index].color}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
