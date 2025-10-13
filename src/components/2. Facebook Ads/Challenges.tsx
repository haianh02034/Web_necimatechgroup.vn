import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { FileText, MessageCircle, Bot, Phone } from "lucide-react";

export default function ServiceOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: FileText,
      title: "XÂY DỰNG CONTENT",
      description:
        "Tạo nội dung bài viết, hình ảnh, video độc đáo, phù hợp với doanh nghiệp và đúng insight khách hàng.",
      gradient: "from-blue-500 to-cyan-500",
      stat: "01",
    },
    {
      icon: MessageCircle,
      title: "SEEDING TƯƠNG TÁC",
      description:
        "Lan tỏa nội dung, tăng tương tác thật với khách hàng mục tiêu giúp thương hiệu nổi bật hơn.",
      gradient: "from-purple-500 to-pink-500",
      stat: "02",
    },
    {
      icon: Bot,
      title: "TẠO BOTCHAT TỰ ĐỘNG",
      description:
        "Tối ưu phản hồi khách hàng 24/7, tự động chốt đơn và chăm sóc khách hàng qua Messenger.",
      gradient: "from-green-500 to-emerald-500",
      stat: "03",
    },
    {
      icon: Phone,
      title: "QUÉT DATA SỐ ĐIỆN THOẠI",
      description:
        "Thu thập và phân tích dữ liệu khách hàng tiềm năng giúp nâng cao hiệu quả quảng cáo.",
      gradient: "from-orange-500 to-red-500",
      stat: "04",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Phần tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-gray-900 font-semibold">
            Dịch vụ Facebook Ads trọn gói của Necimatech Group
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Necimatech Group cung cấp dịch vụ Facebook Ads trọn gói theo nhiều cấp độ khác nhau,
            phù hợp với mọi quy mô doanh nghiệp — từ startup, SME đến tập đoàn lớn.
          </p>
        </motion.div>

        {/* Lưới dịch vụ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
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
              className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group will-change-transform"
            >
              {/* Hiệu ứng gradient nền khi hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-10" : "opacity-0"
                }`}
              />

              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-md relative z-10`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Số thứ tự (badge nhỏ) */}
              <div
                className={`inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-gradient-to-r ${service.gradient} text-white relative z-10`}
              >
                {service.stat}
              </div>

              {/* Tiêu đề và mô tả */}
              <h3 className="text-lg font-semibold mb-3 text-gray-900 relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-600 relative z-10 leading-relaxed">
                {service.description}
              </p>

              {/* Hiệu ứng glow ngoài khung */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur transition-opacity duration-300 -z-10 ${
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
