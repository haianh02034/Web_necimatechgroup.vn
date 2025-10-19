import { motion } from "motion/react";
import { Rocket, TrendingUp, Target } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-20 px-4"style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full mb-6"
          >
            <Rocket className="w-5 h-5" />
            <span>Dịch vụ nhóm KH Startup</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Giải pháp tối ưu hóa chi phí,
            <br />
            bứt phá doanh thu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Trong thế giới kinh doanh đầy biến động, startup và các công ty SaaS luôn phải đối mặt với một thách thức chung: làm sao để tiếp cận đúng khách hàng, tối ưu chi phí và bứt phá doanh thu khi nguồn lực còn hạn chế?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            <FloatingIcon icon={Target} label="Mục tiêu rõ ràng" delay={0.2} />
            <FloatingIcon icon={TrendingUp} label="Tăng trưởng nhanh" delay={0.4} />
            <FloatingIcon icon={Rocket} label="Bứt phá thị trường" delay={0.6} />
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  );
}

function FloatingIcon({ icon: Icon, label, delay }: { icon: any; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="flex flex-col items-center gap-2 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay }}
        className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-xl"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <span className="text-sm text-gray-700">{label}</span>
    </motion.div>
  );
}