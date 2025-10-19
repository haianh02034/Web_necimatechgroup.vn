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
    <section ref={ref} className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Điểm khác biệt của Necimatech Group
          </h2>
          <p className="max-w-3xl mx-auto text-white/90 text-lg">
            Những yếu tố tạo nên sự khác biệt vượt trội so với các đối thủ khác trên thị trường
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg"
              >
                <item.icon className="w-7 h-7 text-purple-600" />
              </motion.div>
              <h3 className="text-xl text-white mb-3">{item.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 inline-block">
            <p className="text-white text-lg mb-2">
              🏆 Được tin tưởng bởi hơn <span className="text-2xl mx-1">500+</span> doanh nghiệp
            </p>
            <p className="text-white/80">
              từ SME, Startup đến các Tập đoàn lớn trên toàn quốc
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
