import { Button } from "../ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "framer-motion";
import { Users, TrendingUp, Clock } from "lucide-react";


const stats = [
  { value: "84%", label: "Doanh nghiệp tìm được khách hàng mới", icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" /> },
  { value: "2x", label: "ROI cao hơn kênh truyền thống", icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" /> },
  { value: "3h", label: "Thời gian online mỗi ngày", icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" /> },
];

const scrollToPricing = () => {
  const element = document.getElementById('pricing-packages');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Hero() {
  return (
    <section
      id="home"
  className="relative w-full flex flex-col justify-start items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[calc(100vh-4rem)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                🚀 Giải pháp tăng trưởng doanh nghiệp
              </div>
              
              <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Facebook Ads
                <span className="text-blue-600 block">Bứt phá doanh thu</span>
                cùng Necimatech Group
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Với hơn 3 tỷ người dùng toàn cầu, Facebook Ads là công cụ mạnh mẽ giúp doanh nghiệp 
                tiếp cận đúng khách hàng mục tiêu, tối ưu chi phí và gia tăng doanh số bền vững.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg px-8 py-3 transition-transform transform hover:scale-105 shadow-lg">
                Bắt đầu ngay hôm nay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button onClick={scrollToPricing} variant="outline" size="lg" className="text-lg px-8 py-3 border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Xem gói dịch vụ
              </Button>
            </div>

            {/* Stats */}
               <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="flex-1 flex flex-col items-center gap-2 bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-100 hover:via-white hover:to-blue-50 hover:shadow-2xl"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2, duration: 0.6 }}
                    >
                      <div className="p-3 bg-white/70 rounded-full shadow-md">
                        {stat.icon}
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">{stat.value}</div>
                      <div className="mt-1 text-sm sm:text-base text-gray-700 text-center">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1621184078903-6bfe9482d935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDF8fHx8MTc1OTc1MTAxNXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Facebook Ads Marketing"
  className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[600px] xl:h-[500px] object-cover object-center rounded-2xl shadow-2xl"
            />
            
            {/* Overlay gradient for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
