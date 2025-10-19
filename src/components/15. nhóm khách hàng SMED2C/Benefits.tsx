import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Package, DollarSign, Users, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Package,
    title: "Giải pháp trọn gói",
    description:
      "Bao gồm toàn bộ chi phí triển khai, vận hành và hỗ trợ kỹ thuật 24/7. Bạn không cần lo lắng về việc quản lý nhiều nhà cung cấp.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "Minh bạch và trọn gói",
    description:
      "Mọi gói dịch vụ đều được cam kết giá trọn gói, không phát sinh chi phí ẩn. Chúng tôi minh bạch trong mọi hoạt động và báo cáo.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Đội ngũ chuyên gia",
    description:
      "Với đội ngũ giàu kinh nghiệm, chúng tôi luôn cập nhật xu hướng mới nhất để tối ưu hiệu quả cho bạn.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ toàn diện",
    description:
      "Chúng tôi cung cấp sự hỗ trợ liên tục, xuất hóa đơn VAT đầy đủ, giúp bạn dễ dàng trong việc quản lý tài chính.",
    color: "from-orange-500 to-red-500",
  },
];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Lợi ích khi hợp tác cùng{" "}
            <span className="text-blue-600">Necimatech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Đối tác đáng tin cậy cho hành trình phát triển của bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                animate={
                  isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}
                }
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group"
                style={{ perspective: 1000 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.color} mb-4`}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Animated glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
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
