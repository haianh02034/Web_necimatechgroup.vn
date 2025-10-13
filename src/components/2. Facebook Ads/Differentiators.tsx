import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { BarChart, Layers, Users2, Award } from "lucide-react";

export default function Differentiators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const differentiators = [
    {
      icon: BarChart,
      title: "Chiến lược dựa trên dữ liệu",
      description:
        "Không chạy theo cảm tính, mà phân tích hành vi khách hàng, đối thủ và thị trường.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Layers,
      title: "Tích hợp đa công cụ",
      description:
        "Content Marketing, Video Ads, Chatbot, Seeding – giúp chiến dịch toàn diện và hiệu quả.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Users2,
      title: "Đội ngũ chuyên gia giàu kinh nghiệm",
      description:
        "Đã triển khai thành công cho nhiều ngành nghề khác nhau, mang lại hiệu quả thực tế.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Cam kết hiệu quả",
      description:
        "Ngân sách minh bạch, báo cáo chi tiết, tối ưu chi phí và đảm bảo kết quả cam kết.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-gray-900 font-semibold">
            Điểm khác biệt của Necimatech Group
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Những lý do khiến hàng trăm doanh nghiệp tin tưởng và chọn chúng tôi
          </p>
        </motion.div>

        {/* Lưới nội dung */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.article
              key={item.title}
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
              {/* Nền gradient mờ khi hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-10" : "opacity-0"
                }`}
              />

              {/* Icon với hiệu ứng xoay + phóng nhẹ */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 shadow-md relative z-10`}
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Nội dung */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 relative z-10">
                {item.title}
              </h3>
              <p className="text-gray-600 relative z-10 leading-relaxed">
                {item.description}
              </p>

              {/* Hiệu ứng glow mờ bên ngoài */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur transition-opacity duration-300 -z-10 ${
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
