import { CheckCircle2, MessageSquare, Shield, Settings, TrendingUp, BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { useState } from "react";

export function Process() {
  const [ref, isInView] = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Tư vấn & Lựa chọn gói",
      description: "Phân tích nhu cầu và lựa chọn gói dịch vụ phù hợp với quy mô doanh nghiệp",
      color: "from-blue-500 to-blue-600",
      duration: "30 phút",
    },
    {
      number: 2,
      icon: Shield,
      title: "Thiết lập & Xác thực OA",
      description: "Tạo lập và xác thực Zalo OA nhanh chóng, đảm bảo đúng quy định",
      color: "from-purple-500 to-purple-600",
      duration: "1-2 ngày",
    },
    {
      number: 3,
      icon: Settings,
      title: "Cấu hình Chatbot & Menu",
      description: "Thiết lập chatbot, menu, OA Shop để hoàn thiện hành trình khách hàng",
      color: "from-pink-500 to-pink-600",
      duration: "2-3 ngày",
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Xây dựng chiến dịch Ads",
      description: "Quản lý chiến dịch quảng cáo Zalo Ads, tối ưu targeting và ngân sách",
      color: "from-orange-500 to-orange-600",
      duration: "3-5 ngày",
    },
    {
      number: 5,
      icon: BarChart3,
      title: "Theo dõi & Tối ưu",
      description: "Báo cáo định kỳ, phân tích KPI và tối ưu liên tục để đạt mục tiêu",
      color: "from-green-500 to-green-600",
      duration: "Liên tục",
    },
  ];

  return (
    <section 
      id="process" 
      className="py-20 px-4 bg-white relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Optimized Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(90deg, #3B82F6 1px, transparent 1px), linear-gradient(#3B82F6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl" ref={ref}>
        {/* Header - Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Quy trình triển khai dịch vụ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Quy trình chuyên nghiệp, minh bạch từ tư vấn đến triển khai và tối ưu
          </motion.p>
        </motion.div>

        {/* Timeline - Optimized for performance */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.12,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="relative mb-12 last:mb-0"
              >
                <div className={`flex gap-6 items-start ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Number Circle */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.12 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1 }}
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white z-10 relative shadow-xl`}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold">{step.number}</div>
                      </div>
                    </motion.div>
                    
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: '4rem' } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.12 + 0.3,
                          ease: "easeOut"
                        }}
                        className={`absolute top-20 ${isEven ? 'left-10' : 'right-10'} w-1 bg-gradient-to-b ${step.color} overflow-hidden rounded-full`}
                      />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="flex-1 bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group will-change-transform"
                  >
                    {/* Optimized gradient background */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-5' : 'opacity-0'}`}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-md`}>
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${step.color} text-white`}>
                              {step.duration}
                            </div>
                          </div>
                        </div>
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isInView ? { scale: 1, rotate: 0 } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.12 + 0.4,
                            type: "spring"
                          }}
                        >
                          <CheckCircle2 className="w-7 h-7 text-green-600 flex-shrink-0" />
                        </motion.div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Optimized glow effect */}
                    <div 
                      className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl blur transition-opacity duration-300 -z-10 ${hoveredIndex === index ? 'opacity-20' : 'opacity-0'}`}
                    />
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Commitment Card - Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 text-center bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-green-200 shadow-xl relative overflow-hidden"
        >
          <h3 className="text-2xl font-bold mb-3 text-green-800">⚡ Cam kết thời gian triển khai</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Chúng tôi cam kết hoàn thiện thiết lập OA trong vòng{" "}
            <span className="font-bold text-green-600">3-5 ngày làm việc</span>
            {" "}và bắt đầu chạy chiến dịch quảng cáo trong vòng{" "}
            <span className="font-bold text-blue-600">7 ngày</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
