import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Target, Lightbulb, Layers, GraduationCap } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Chiến lược trúng đích",
    description: "Nghiên cứu kỹ ngành hàng & hành vi khách hàng trước khi triển khai",
  },
  {
    icon: Lightbulb,
    title: "Nội dung sáng tạo – đúng trend",
    description: "Bắt kịp xu hướng TikTok giúp thương hiệu luôn nổi bật",
  },
  {
    icon: Layers,
    title: "Đa dạng hình thức triển khai",
    description: "Quảng cáo, TikTok Shop, KOL, livestream",
  },
  {
    icon: GraduationCap,
    title: "Đào tạo nội bộ",
    description: "Giúp doanh nghiệp chủ động vận hành kênh lâu dài",
  },
];

export function Differentiators() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Điểm khác biệt của Necimatech Group
          </h2>
          <p className="max-w-3xl mx-auto text-white/90">
            Những yếu tố tạo nên sự khác biệt vượt trội của chúng tôi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl text-white mb-3">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
