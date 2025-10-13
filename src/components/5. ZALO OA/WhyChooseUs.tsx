import { Award, Shield, Zap, TrendingUp, Headphones, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { useState } from "react";

export function WhyChooseUs() {
  const [ref, isInView] = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const benefits = [
    {
      icon: Award,
      title: "Đối tác cấp cao Zalo Ads",
      description: "Chuyên môn sâu, kinh nghiệm triển khai cho nhiều ngành nghề khác nhau",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Zap,
      title: "Giải pháp trọn gói",
      description: "Từ tạo lập, xác thực OA đến cài đặt chatbot, quản trị quảng cáo",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Tối ưu chiến dịch",
      description: "Chuyên sâu Zalo Ads, giúp tiết kiệm ngân sách mà vẫn tăng hiệu quả",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Bảo mật & tuân thủ",
      description: "Hỗ trợ pháp lý, bảo mật dữ liệu, tuân thủ quy định chống spam",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ kỹ thuật sẵn sàng xử lý mọi sự cố, hỗ trợ liên tục",
      gradient: "from-red-400 to-rose-500",
    },
    {
      icon: GraduationCap,
      title: "Đào tạo chuyên sâu",
      description: "Workshop nội bộ về Marketing, CSKH, Sales để doanh nghiệp chủ động",
      gradient: "from-indigo-400 to-blue-500",
    },
  ];

  return (
    <section 
      id="solutions" 
      className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      aria-labelledby="solutions-heading"
    >
      {/* Optimized background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl" ref={ref}>
        {/* Header - Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            id="solutions-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Tại sao chọn Necimatech Group?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Chúng tôi không chỉ là đơn vị triển khai mà còn là đối tác đồng hành 
            trong hành trình chuyển đổi số của doanh nghiệp
          </motion.p>
        </motion.div>

        {/* Benefits Grid - Optimized */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group will-change-transform"
            >
              {/* Optimized gradient background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-10' : 'opacity-0'}`}
              />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>

              {/* Optimized glow effect */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur transition-opacity duration-300 -z-10 ${hoveredIndex === index ? 'opacity-20' : 'opacity-0'}`}
              />
            </motion.article>
          ))}
        </div>

        {/* Stats Section - Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { value: "500+", label: "Doanh nghiệp tin tưởng" },
            { value: "98%", label: "Khách hàng hài lòng" },
            { value: "24/7", label: "Hỗ trợ khách hàng" },
            { value: "5+", label: "Năm kinh nghiệm" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 shadow-md"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
