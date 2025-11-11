import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useCustomerContactModal } from "../CustomerContactModalProvider";
export function Hero() {
  const { openModal } = useCustomerContactModal();

  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-20 md:py-32"style={{ minHeight: 'calc(100vh - 4rem)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Dịch vụ doanh nghiệp truyền thống</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6 max-w-4xl mx-auto leading-tight"
          >
            Giải pháp phát triển từ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              truyền thống
            </span>{" "}
            đến{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              hiện đại
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            Tiếp cận kỷ nguyên số - Necimatech đồng hành cùng doanh nghiệp
            truyền thống chuyển đổi số, vượt qua thách thức và nắm bắt cơ hội
            mới trong thời đại công nghệ 4.0
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg group"onClick={openModal}
            >
              Nhận tư vấn miễn phí
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg" onClick={handleServicesClick}>
              Tìm hiểu thêm
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "500+", label: "Doanh nghiệp tin tưởng" },
            { number: "95%", label: "Tỷ lệ hài lòng" },
            { number: "10+", label: "Năm kinh nghiệm" },
            { number: "24/7", label: "Hỗ trợ khách hàng" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <div className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
