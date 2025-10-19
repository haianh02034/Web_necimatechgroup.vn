import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Package, Shield, Users2, FileText } from "lucide-react";

const benefits = [
  {
    icon: Package,
    title: "Giải pháp trọn gói",
    description:
      "Bao gồm toàn bộ chi phí triển khai, vận hành và hỗ trợ kỹ thuật 24/7",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Không chi phí ẩn",
    description:
      "Mọi gói dịch vụ đều được cam kết giá trọn gói, minh bạch và rõ ràng",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users2,
    title: "Đội ngũ chuyên gia",
    description:
      "Với đội ngũ giàu kinh nghiệm, luôn cập nhật xu hướng mới nhất",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Hóa đơn VAT",
    description:
      "Hỗ trợ xuất hóa đơn VAT đầy đủ, giúp dễ dàng kê khai tài chính",
    color: "from-orange-500 to-red-500",
  },
];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4">
            Lợi ích khi hợp tác cùng Necimatech
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cam kết mang đến giá trị tốt nhất cho doanh nghiệp của bạn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Icon container with gradient */}
                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-4 shadow-lg`}
                    whileHover={{
                      rotate: [0, -15, 15, -15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>

                  {/* Decorative gradient line on hover */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} rounded-b-2xl`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
