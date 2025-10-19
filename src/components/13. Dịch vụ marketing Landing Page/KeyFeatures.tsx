import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import {
  Zap,
  Users,
  DollarSign,
  FileCheck,
  Settings,
  Clock,
} from "lucide-react";

export function KeyFeatures() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Zap,
      title: "Triển khai nhanh chóng",
      description:
        "Từ thiết kế đến nội dung, đảm bảo tiến độ phù hợp với từng chiến dịch marketing",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Đội ngũ chuyên gia 24/7",
      description:
        "Hỗ trợ tư vấn, chỉnh sửa, xử lý yêu cầu của khách hàng bất cứ lúc nào",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: DollarSign,
      title: "Chi phí minh bạch, trọn gói",
      description:
        "Cam kết không phát sinh chi phí ngoài dự kiến, rõ ràng từ đầu",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: FileCheck,
      title: "Đầy đủ hóa đơn VAT",
      description:
        "Thuận tiện cho doanh nghiệp kê khai và quản lý tài chính chuyên nghiệp",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Settings,
      title: "Giải pháp toàn diện",
      description:
        "Tích hợp từ thiết kế, copywriting, lập trình, tracking, A/B Testing đến quản trị",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Clock,
      title: "Bảo trì dài hạn",
      description:
        "Không chỉ xây dựng mà còn quản trị, bảo trì, đảm bảo vận hành mượt mà",
      color: "from-red-400 to-rose-500",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Điểm nổi bật của dịch vụ Necimatech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi mang đến trải nghiệm dịch vụ toàn diện và chuyên nghiệp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>

                <motion.div
                  className={`mt-6 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
