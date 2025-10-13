import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { TrendingUp, Target, Wallet, MapPin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function StrategySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const strategies = [
    {
      icon: TrendingUp,
      title: "Phân tích ngành hàng & thị trường",
      description: "Xác định hành vi khách hàng, đối thủ cạnh tranh, xu hướng tìm kiếm"
    },
    {
      icon: Target,
      title: "Xác định mục tiêu theo phễu marketing",
      description: "Nhận diện thương hiệu → Tạo nhu cầu → Chuyển đổi → Remarketing"
    },
    {
      icon: Wallet,
      title: "Chiến lược ngân sách rõ ràng",
      description: "Phân bổ chi phí hợp lý theo từng giai đoạn, kênh, khu vực địa lý"
    },
    {
      icon: MapPin,
      title: "Lộ trình triển khai chi tiết",
      description: "Từ chuẩn bị → Chạy thử → Đo lường → Tối ưu → Mở rộng"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">
            Hỗ trợ xây dựng chiến lược quảng cáo chuyên nghiệp
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Necimatech không chỉ "chạy Ads" mà còn xây dựng chiến lược marketing toàn diện
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <strategy.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">{strategy.title}</h3>
                    <p className="text-gray-600">{strategy.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc1OTc1NDEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Growth Chart"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg"
            >
              <p className="text-lg italic">
                "Đây chính là yếu tố giúp Necimatech khác biệt với các đơn vị chỉ dừng ở việc 'set quảng cáo'"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
