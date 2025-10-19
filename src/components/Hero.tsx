import { motion } from 'motion/react';
import { Button } from "./ui/button";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { AnimatedIcon } from "./AnimatedIcon";
import { Zap, Shield, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollAnimation direction="left" duration={0.8}>
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Giải pháp toàn diện{" "}
                  <motion.span 
                    className="text-blue-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    nâng tầm doanh nghiệp
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Necimatech Group ra đời với sứ mệnh mang đến những giải pháp toàn diện, 
                  giúp doanh nghiệp không chỉ tối ưu vận hành mà còn nâng tầm thương hiệu 
                  trong kỷ nguyên số.
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="px-8 py-4">
                    Tư vấn miễn phí
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="px-8 py-4">
                    Xem dịch vụ
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <StaggerContainer className="grid grid-cols-3 gap-6 pt-8" delay={0.2}>
                <StaggerItem>
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold text-blue-600"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1, type: "spring" }}
                    >
                      3+
                    </motion.div>
                    <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold text-blue-600"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
                    >
                      100+
                    </motion.div>
                    <div className="text-sm text-gray-600">Dự án hoàn thành</div>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold text-blue-600"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
                    >
                      50+
                    </motion.div>
                    <div className="text-sm text-gray-600">Khách hàng tin tưởng</div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </ScrollAnimation>

          {/* Image */}
          <ScrollAnimation direction="right" duration={0.8} delay={0.3}>
            <div className="relative">
              <motion.div 
                className="aspect-square relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center space-y-4 relative z-10">
                  <motion.div 
                    className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                    whileHover={{ 
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                    }}
                  >
                    <AnimatedIcon icon={Zap} className="text-white" size={32} delay={1.2} animation="glow" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Công nghệ tiên tiến
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    AI & Automation
                  </motion.p>
                </div>

                {/* Background decoration */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Floating cards */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <AnimatedIcon icon={Award} className="text-blue-600" size={16} delay={2} animation="bounce" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">AI & Automation</div>
                    <div className="text-xs text-gray-600">Công nghệ tiên tiến</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <AnimatedIcon icon={Shield} className="text-green-600" size={16} delay={2.2} animation="pulse" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">24/7 Support</div>
                    <div className="text-xs text-gray-600">Hỗ trợ tận tâm</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}