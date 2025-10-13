import { AlertCircle, Clock, TrendingDown, Users, ArrowRight, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { useState } from "react";

export function Problems() {
  const [ref, isInView] = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const problems = [
    {
      icon: Clock,
      title: "Thiếu thời gian quản lý",
      description: "Không đủ nhân sự để vận hành OA hiệu quả và chuyên nghiệp",
      gradient: "from-red-500 to-orange-600",
      impact: "Mất cơ hội",
    },
    {
      icon: TrendingDown,
      title: "Chi phí quảng cáo cao",
      description: "Chạy ads không hiệu quả, tỷ lệ chuyển đổi thấp, lãng phí ngân sách",
      gradient: "from-orange-500 to-yellow-600",
      impact: "Lãng phí",
    },
    {
      icon: AlertCircle,
      title: "Thiếu chuyên môn",
      description: "Không nắm rõ các tính năng và cách tối ưu Zalo OA",
      gradient: "from-pink-500 to-red-600",
      impact: "Hiệu quả thấp",
    },
    {
      icon: Users,
      title: "Khó tiếp cận khách hàng",
      description: "Không biết cách xây dựng chiến lược content và chăm sóc khách hàng",
      gradient: "from-purple-500 to-pink-600",
      impact: "Tương tác thấp",
    },
  ];

  return (
    <section 
      id="problems" 
      className="py-24 px-4 bg-gradient-to-b from-gray-50 via-red-50/30 to-white relative overflow-hidden"
      aria-labelledby="problems-heading"
    >
      {/* Optimized background - reduced complexity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-red-400 to-orange-400 rounded-full blur-3xl will-change-transform"
        />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Header with optimized entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Alert badge - simplified animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-full">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="text-red-700 font-medium">⚠️ Bạn đang gặp những vấn đề này?</span>
            </div>
          </motion.div>
          
          <motion.h2 
            id="problems-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent"
          >
            Doanh nghiệp của bạn đang gặp khó khăn?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Nhiều doanh nghiệp gặp thách thức khi quản lý và tối ưu Zalo OA. 
            <span className="block mt-2 text-red-600 font-medium">Chúng tôi hiểu những khó khăn này và có giải pháp phù hợp! 💡</span>
          </motion.p>
        </motion.div>

        {/* Problems Grid - Optimized */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white p-6 rounded-2xl border-2 border-red-100 hover:border-red-200 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group will-change-transform"
            >
              {/* Optimized gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-5' : 'opacity-0'}`}
              />

              <div className="flex items-start gap-4 relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${problem.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <problem.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  {/* Impact badge */}
                  <div className={`inline-block px-3 py-1 mb-2 rounded-full text-xs font-medium bg-gradient-to-r ${problem.gradient} text-white`}>
                    {problem.impact}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>

              {/* Optimized glow effect */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r ${problem.gradient} rounded-2xl blur transition-opacity duration-300 -z-10 ${hoveredIndex === index ? 'opacity-20' : 'opacity-0'}`}
              />
            </motion.article>
          ))}
        </div>

        {/* Solution CTA - Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#why-choose-us"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <span className="text-lg font-semibold">Necimatech Group mang đến giải pháp toàn diện</span>
            <ArrowRight className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
