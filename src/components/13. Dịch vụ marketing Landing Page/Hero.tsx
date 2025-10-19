import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  const scrollToContact = () => {
    const ctaSection = document.getElementById("contact");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 md:py-32"style={{ minHeight: 'calc(100vh - 4rem)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Giải pháp tối ưu chuyển đổi số</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl mb-6"
          >
            Dịch vụ Marketing{" "}
            <span className="text-yellow-300">Landing Page</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto"
          >
            Tối ưu hiệu quả marketing và gia tăng tỷ lệ chuyển đổi cho doanh
            nghiệp của bạn với giải pháp Landing Page chuyên nghiệp từ
            NECIMATECH
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8"
              onClick={scrollToContact}
            >
              Liên hệ ngay <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                pricingSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Xem bảng giá
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-8 text-sm"
          >
            <div>
              <div className="text-3xl mb-1">500+</div>
              <div className="text-blue-200">Dự án hoàn thành</div>
            </div>
            <div className="h-12 w-px bg-white/30" />
            <div>
              <div className="text-3xl mb-1">98%</div>
              <div className="text-blue-200">Khách hàng hài lòng</div>
            </div>
            <div className="h-12 w-px bg-white/30" />
            <div>
              <div className="text-3xl mb-1">24/7</div>
              <div className="text-blue-200">Hỗ trợ tận tâm</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
