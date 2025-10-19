import { Button } from "../ui/button";
import { ArrowRight, Zap, Users, TrendingUp, Sparkles, Target, BarChart3, MessageSquare, CheckCircle2, Star, Shield } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Hero() {
  return (
    <section 
      className="relative pt-16 pb-24 px-4 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white"
      aria-label="Hero Section - Giới thiệu dịch vụ Zalo OA"
    >
      {/* Optimized Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient orbs - optimized with will-change */} 
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-purple-400/30 to-pink-400/30 rounded-full blur-3xl will-change-transform"
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl border border-blue-400/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span className="relative">🔥 Đối tác Chính thức Zalo Ads Platform</span>
            </motion.div>
            
            {/* Main Headline - SEO Optimized H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 bg-clip-text text-transparent drop-shadow-sm">
                Quảng Cáo Zalo OA
              </span>
              <span className="block text-gray-900 mt-2 text-4xl md:text-5xl lg:text-6xl">
                Tiếp Cận 80 Triệu Khách Hàng
              </span>
            </motion.h1>
            
            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 mb-8 text-lg leading-relaxed"
            >
              Giải pháp Marketing toàn diện trên nền tảng Zalo - Mạng xã hội #1 Việt Nam. 
              <span className="block mt-2 text-blue-600">
                ✨ Tăng doanh thu, xây dựng thương hiệu, và kết nối khách hàng hiệu quả
              </span>
            </motion.p>

            {/* Key Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {[
                { icon: Target, label: "Targeting chính xác" },
                { icon: BarChart3, label: "ROI cao hơn 300%" },
                { icon: MessageSquare, label: "Tương tác 2 chiều" },
                { icon: Shield, label: "Bảo mật tuyệt đối" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-blue-100"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all group px-8 py-6 text-lg relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative flex items-center gap-2">
                    Đăng ký ngay
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                  Tư vấn miễn phí
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Users, value: "80M+", label: "Người dùng Zalo", color: "from-blue-500 to-blue-600" },
                { icon: TrendingUp, value: "300%", label: "Tăng trưởng ROI", color: "from-green-500 to-green-600" },
                { icon: Star, value: "5.0", label: "Đánh giá KH", color: "from-yellow-500 to-orange-600" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`bg-gradient-to-br ${stat.color} p-1.5 rounded-lg`}>
                      <stat.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>{stat.value}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Phone Mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{ zIndex: 5 }}
            >
              <motion.div
                whileHover={{ scale: 1.03, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-[2.5rem] shadow-2xl p-3 overflow-hidden"
              >
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-30" />
                
                {/* Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden relative">
                  <ImageWithFallback
                    src="/images/zalo.png"
                    alt="Zalo OA Interface"
                    className="w-full h-[500px] object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent" />
                </div>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
              </motion.div>
            </motion.div>
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-10 -left-4 lg:left-0"
              style={{ zIndex: 10 }}
            >
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-2xl p-4 max-w-[180px] border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">Tin nhắn đã gửi</span>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-2 rounded-lg">
                  +2,450 khách hàng/ngày
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-10 -right-4 lg:right-0"
              style={{ zIndex: 10 }}
            >
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-2xl p-4 max-w-[180px] border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-700">Tăng trưởng</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-3 py-2 rounded-lg">
                  ROI: +385%
                </div>
              </motion.div>
            </motion.div>

            {/* Animated Background Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30 blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full opacity-30 blur-3xl"
            />
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}
