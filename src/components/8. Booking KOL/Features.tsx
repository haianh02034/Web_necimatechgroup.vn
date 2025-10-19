import { motion } from "motion/react";
import { Target, DollarSign, Share2, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Đúng người, đúng ngành",
    description: "Mỗi KOL có tệp người theo dõi riêng, phù hợp với từng lĩnh vực",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Share2,
    title: "Đa dạng hình thức",
    description: "Livestream, review, TikTok, Instagram, YouTube, Facebook và nhiều hơn nữa",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: DollarSign,
    title: "Tối ưu chi phí",
    description: "Lựa chọn KOL phù hợp với ngân sách, đảm bảo ROI cao nhất",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Hiệu quả lan tỏa",
    description: "Thông điệp được khuếch đại bởi uy tín cá nhân và hiệu ứng cộng đồng",
    color: "from-orange-500 to-red-500",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Đặc điểm nổi bật của <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Booking KOL</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khác với quảng cáo truyền thống, KOL có khả năng tác động trực tiếp đến quyết định mua hàng
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
