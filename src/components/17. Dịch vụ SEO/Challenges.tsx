import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { AlertCircle, Clock, TrendingDown } from "lucide-react";

export function Challenges() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const challenges = [
    {
      icon: AlertCircle,
      title: "Thiếu kiến thức chuyên môn",
      description: "SEO là lĩnh vực phức tạp và luôn thay đổi. Khó cập nhật các thuật toán mới nhất của Google mà không có đội ngũ chuyên gia.",
      color: "bg-red-500",
    },
    {
      icon: Clock,
      title: "Tốn kém thời gian và nguồn lực",
      description: "Nghiên cứu từ khóa, viết bài chuẩn SEO, tối ưu kỹ thuật và xây dựng liên kết đòi hỏi rất nhiều thời gian và công sức.",
      color: "bg-orange-500",
    },
    {
      icon: TrendingDown,
      title: "Khó đo lường hiệu quả",
      description: "Không có công cụ chuyên dụng và kiến thức phân tích, doanh nghiệp khó biết chiến lược có hiệu quả và cần điều chỉnh như thế nào.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Những khó khăn khi tự triển khai SEO</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Việc tự triển khai SEO có thể gặp nhiều thách thức, đặc biệt với các doanh nghiệp nhỏ và vừa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-6 h-full border border-red-100"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className={`w-14 h-14 ${challenge.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <challenge.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="mb-3 text-gray-900">{challenge.title}</h3>
                <p className="text-sm text-gray-600">{challenge.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
