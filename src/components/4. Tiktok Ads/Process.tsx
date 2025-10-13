import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Phân tích & tư vấn mục tiêu",
    description: "Nghiên cứu kỹ lưỡng ngành hàng và xác định mục tiêu cụ thể",
  },
  {
    number: "02",
    title: "Xây dựng chiến lược – phân bổ ngân sách",
    description: "Lập kế hoạch chi tiết và tối ưu phân bổ ngân sách hiệu quả",
  },
  {
    number: "03",
    title: "Sản xuất nội dung quảng cáo & triển khai",
    description: "Tạo nội dung bắt trend và triển khai chiến dịch quảng cáo",
  },
  {
    number: "04",
    title: "Theo dõi – tối ưu liên tục",
    description: "A/B Testing, targeting, tối ưu nội dung liên tục",
  },
  {
    number: "05",
    title: "Báo cáo hiệu suất chi tiết",
    description: "Phân tích dữ liệu và đề xuất cải thiện cho chiến dịch tiếp theo",
  },
];

export function Process() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Quy trình triển khai dịch vụ TikTok Ads
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl">
            Quy trình chuyên nghiệp, bài bản đảm bảo hiệu quả tối ưu
          </p>
        </motion.div>

        {/* Responsive layout */}
        <div className="relative pb-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 sm:gap-6 lg:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="relative flex-1 flex flex-col items-center group min-w-0 md:mb-0 mb-12"
              >
                {/* Line nối giữa các bước */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 
                               md:h-1 h-28 md:w-[calc(100%+1rem)] w-1"
                    style={{
                      top: "calc(50%)",
                      left: "50%",
                      zIndex: 0,
                      transformOrigin: "left",
                      filter:
                        "drop-shadow(0 2px 4px rgba(168, 85, 247, 0.2))",
                    }}
                    initial={{ scaleX: 0, scaleY: 0 }}
                    animate={
                      isInView
                        ? { scaleX: 1, scaleY: 1 }
                        : { scaleX: 0, scaleY: 0 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                      ease: "easeOut",
                    }}
                  />
                )}

                {/* Circle số */}
                <motion.div
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 
                             bg-gradient-to-br from-purple-500 to-pink-500 
                             rounded-full flex items-center justify-center 
                             mb-6 sm:mb-8 relative z-10 shadow-2xl flex-shrink-0"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow:
                      "0 25px 50px -12px rgba(168, 85, 247, 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    {step.number}
                  </span>

                  {/* Hiệu ứng pulse */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-purple-400"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>

                {/* Tiêu đề */}
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-5 text-center leading-tight text-base sm:text-lg lg:text-xl px-2">
                  {step.title}
                </h3>

                {/* Mô tả */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center leading-relaxed px-2 max-w-xs sm:max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
