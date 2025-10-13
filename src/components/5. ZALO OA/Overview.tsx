import { MessageSquare, Bot, Bell, Smartphone, ShoppingBag, BarChart3, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { useState } from "react";

export function Overview() {
  const [ref, isInView] = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: MessageSquare,
      title: "Tương tác hai chiều",
      description: "Kết nối trực tiếp với khách hàng qua tin nhắn, gọi thoại",
      gradient: "from-blue-500 to-blue-600",
      stat: "Real-time",
    },
    {
      icon: Bot,
      title: "Chatbot thông minh",
      description: "Tự động chăm sóc khách hàng 24/7 với AI",
      gradient: "from-purple-500 to-purple-600",
      stat: "24/7",
    },
    {
      icon: Bell,
      title: "ZNS Marketing",
      description: "Gửi thông báo giao dịch, khuyến mãi chính xác",
      gradient: "from-pink-500 to-pink-600",
      stat: "98% Open",
    },
    {
      icon: ShoppingBag,
      title: "OA Shop",
      description: "Quản lý bán hàng trực tiếp trên Zalo",
      gradient: "from-orange-500 to-orange-600",
      stat: "E-commerce",
    },
    {
      icon: Smartphone,
      title: "Mini App",
      description: "Tích hợp ứng dụng tùy chỉnh cho thương hiệu",
      gradient: "from-green-500 to-green-600",
      stat: "Custom",
    },
    {
      icon: BarChart3,
      title: "Báo cáo chi tiết",
      description: "Phân tích insight và đo lường hiệu quả",
      gradient: "from-cyan-500 to-cyan-600",
      stat: "Analytics",
    },
  ];

  return (
    <section 
      id="overview" 
      className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
      aria-labelledby="overview-heading"
    >
      {/* Optimized Background - Reduced animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }} 
        />
        
        {/* Single gradient orb - more performant */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl will-change-transform"
        />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Header with optimized animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 border border-blue-200"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Nền tảng Marketing #1 Việt Nam</span>
          </motion.div>

          <motion.h2 
            id="overview-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Tổng quan về Zalo OA
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Zalo Official Account là kênh chính thức của doanh nghiệp trên nền tảng Zalo, 
            cho phép kết nối và tương tác hai chiều với hơn <span className="text-blue-600 font-semibold">80 triệu người dùng</span> tại Việt Nam
          </motion.p>
        </motion.div>

        {/* Features Grid - Optimized animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.06,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-white p-6 rounded-2xl border border-blue-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group will-change-transform"
            >
              {/* Optimized gradient background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-5' : 'opacity-0'}`} 
              />
              
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md relative z-10`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Stat badge */}
              <div className={`inline-block px-3 py-1 mb-3 rounded-full text-xs font-medium bg-gradient-to-r ${feature.gradient} text-white`}>
                {feature.stat}
              </div>
              
              <h3 className="mb-2 text-xl font-semibold relative z-10">{feature.title}</h3>
              <p className="text-gray-600 relative z-10 leading-relaxed">{feature.description}</p>

              {/* Optimized glow effect */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur transition-opacity duration-300 -z-10 ${hoveredIndex === index ? 'opacity-20' : 'opacity-0'}`} 
              />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA Card - Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)',
              backgroundSize: '40px 40px',
            }}
          />
          
          <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { title: "Doanh nghiệp", desc: "Công ty kinh doanh" },
              { title: "Cơ quan Nhà nước", desc: "Dịch vụ công ích" },
              { title: "Cộng đồng", desc: "Sự kiện & nhóm" },
              { title: "Thương hiệu", desc: "Nhãn hàng cá nhân" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <div className="text-lg font-semibold mb-2">{item.title}</div>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
