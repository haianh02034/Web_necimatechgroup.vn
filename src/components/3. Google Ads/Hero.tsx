import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight, TrendingUp, Target, BarChart3 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useCustomerContactModal } from "../CustomerContactModalProvider";
export function Hero() {
   const { openModal } = useCustomerContactModal();
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white  "style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
            >
              <span className="text-sm">✨ Google Partner & Meta Business Partner</span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-5xl xl:text-6xl mb-6 leading-tight">
              Dịch vụ Quảng cáo Google Ads
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Giải pháp bứt phá doanh thu cho doanh nghiệp
            </p>
            
            <p className="text-lg mb-8 text-blue-50 leading-relaxed">
              Tiếp cận khách hàng mục tiêu nhanh chóng, chính xác và đo lường được hiệu quả. 
              Necimatech Group mang đến gói dịch vụ Google Ads trọn gói, tối ưu cho mọi nhu cầu.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" onClick={openModal}>
                  Tư vấn miễn phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10" onClick={() => { document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Xem gói dịch vụ
                </Button>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Target, label: "Nhắm chính xác", value: "100%" },
                { icon: TrendingUp, label: "Tăng doanh thu", value: "3x" },
                { icon: BarChart3, label: "ROI tối ưu", value: "250%" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                  <div className="text-2xl mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
  className="relative flex justify-center items-center"
>
  {/* Ảnh chính với hiệu ứng trôi và nghiêng nhẹ */}
  <motion.div
    animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="relative rounded-2xl overflow-hidden shadow-2xl"
  >
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        alt="Digital Marketing Team"
        className="w-full h-auto"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
      {/* Ánh sáng mờ */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-25" />
    </div>
  </motion.div>

  {/* Card thống kê với hiệu ứng tương tự, trôi nhẹ đối lập để tạo cân bằng */}
   
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <motion.div
    animate={{ 
      y: [0, -12, 0],
      rotate: [0, 3, 0, -3, 0]
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "loop"
    }}
      className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-2xl border border-gray-100"

  >
    <div className="text-3xl mb-1 font-semibold">1000+</div>
    <div className="text-sm text-gray-600">Doanh nghiệp tin tưởng</div>
  </motion.div>
</motion.div>


  </motion.div>



        </div>
      </div>
    </section>
  );
}
