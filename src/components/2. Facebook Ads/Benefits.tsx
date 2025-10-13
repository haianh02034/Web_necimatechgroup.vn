import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Heart, Lightbulb, Target, TrendingUp } from "lucide-react";

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: Heart,
      title: "Thấu hiểu nỗi đau khách hàng",
      items: [
        "Lắng nghe và phân tích nhu cầu thực tế",
        "Đánh giá thị trường, hành vi khách hàng & đối thủ",
        "Xây dựng kế hoạch dài hạn, định hướng bền vững",
      ],
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Content is King",
      items: [
        "Phân tích Insight, thấu hiểu khách hàng chính xác",
        "Lên tuyến nội dung theo mô hình AIDA",
        "Xây dựng nội dung lôi cuốn, đa dạng, tạo điểm nhấn",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Thiết lập chiến dịch bài bản",
      items: [
        "Phân tích đúng tệp khách hàng mục tiêu",
        "Lên kế hoạch ngân sách tối ưu cho từng giai đoạn",
        "Triển khai remarketing gia tăng hiệu quả CTA",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Đo lường chính xác & tối ưu liên tục",
      items: [
        "Theo dõi số liệu theo thời gian thực",
        "Phân tích hiệu quả từng nhóm đối tượng",
        "Tối ưu chiến dịch liên tục với chatbot & remarketing",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-gray-900 font-semibold">
            Lợi ích khi hợp tác cùng Necimatech Group
          </h2>
          <p className="text-xl text-gray-600">
            Không chỉ là "quảng cáo", mà còn là "chiến lược thấu hiểu khách hàng"
          </p>
        </motion.div>

        {/* Lưới nội dung */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group will-change-transform"
            >
              {/* Gradient nền mờ khi hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-10" : "opacity-0"
                }`}
              />

              {/* Header: Icon + Tiêu đề */}
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 flex-1">
                  {benefit.title}
                </h3>
              </div>

              {/* Danh sách lợi ích */}
              <ul className="space-y-3 relative z-10">
                {benefit.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.15 + i * 0.08,
                    }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${benefit.gradient}`}
                    />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hiệu ứng glow bên ngoài */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur transition-opacity duration-300 -z-10 ${
                  hoveredIndex === index ? "opacity-20" : "opacity-0"
                }`}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
