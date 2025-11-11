import { motion } from "motion/react";
import { ArrowRight, Sparkles, TrendingUp, Target } from "lucide-react";
import { Button } from "../ui/button";
import { useCustomerContactModal } from "../CustomerContactModalProvider";

export function HeroSection() {
  const { openModal } = useCustomerContactModal();

  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="relative w-full flex items-center justify-center overflow-hidden pt-32 pb-20 px-4"style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Dịch Vụ Website Chuyên Nghiệp</span>
            </motion.div>
             <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dịch Vụ Website
              </h1>


            <h1 className="text-5xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Nâng Tầm Thương Hiệu Cùng Website Chuyên Nghiệp
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Bạn có bao giờ tự hỏi: <span className="text-blue-600">Tại sao website của đối thủ luôn đứng top Google</span>, trong khi trang web của bạn lại mờ nhạt và ít khách hàng tìm thấy?
            </p>

            <p className="text-slate-700 mb-8 leading-relaxed">
              Trong kỷ nguyên số, một website không chỉ là một kênh bán hàng, mà còn là tấm gương phản chiếu thương hiệu và là <span className="text-purple-600">tài sản số chiến lược</span> của doanh nghiệp.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 group" onClick={openModal}>
                Nhận Tư Vấn Miễn Phí
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-slate-50" onClick={handleServicesClick}>
                Xem Dịch Vụ
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl"
              >
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Tăng trưởng</p>
                      <p className="text-2xl text-slate-900">+245%</p>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-end p-4 gap-2">
                    {[40, 65, 45, 80, 60, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Chuyển đổi</p>
                    <p className="text-xl text-slate-900">32.4%</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
