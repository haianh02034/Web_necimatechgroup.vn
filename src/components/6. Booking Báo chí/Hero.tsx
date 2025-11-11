import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Newspaper,
  FileText,
  Megaphone,
  Phone,
  Globe,
  CheckCircle2,
  TrendingUp,
  BarChart3
} from "lucide-react";
import { useCustomerContactModal } from "../CustomerContactModalProvider";

export function Hero() {
  const { openModal } = useCustomerContactModal();

  const handlePricingClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...slideInLeft}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-blue-100 text-blue-700">
                <Newspaper className="w-3 h-3 mr-1" />
                Booking Báo Chí
              </Badge>
              <Badge className="bg-purple-100 text-purple-700">
                <FileText className="w-3 h-3 mr-1" />
                Viết Bài PR
              </Badge>
              <Badge className="bg-green-100 text-green-700">
                <Megaphone className="w-3 h-3 mr-1" />
                KOL Marketing
              </Badge>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-5xl lg:text-6xl mb-6 text-gray-900"
            >
              Dịch vụ Booking Báo chí & PR truyền thông
             
            </motion.h1>

             <span className="block text-blue-600 mt-2">
                Đăng bài trên 100+ báo điện tử uy tín
              </span>
            <p className="mb-6 text-gray-600 text-lg">
              Đặt bài PR trên <strong>VnExpress, Dân Trí, Zing News, Thanh Niên, Tuổi Trẻ</strong> và hàng trăm báo điện tử uy tín khác. 
              Chúng tôi cung cấp dịch vụ booking báo chí chuyên nghiệp, giúp doanh nghiệp xây dựng uy tín thương hiệu và tiếp cận hàng triệu độc giả.
            </p>

            {/* Key Service Features */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Newspaper className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Đăng báo điện tử</div>
                  <p className="text-sm text-gray-600">100+ tờ báo uy tín</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Viết bài PR chuyên nghiệp</div>
                  <p className="text-sm text-gray-600">Chuẩn báo chí, SEO tốt</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Megaphone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Booking KOL/Influencer</div>
                  <p className="text-sm text-gray-600">Lan tỏa đa kênh</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Báo cáo chi tiết</div>
                  <p className="text-sm text-gray-600">Đo lường hiệu quả</p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={openModal}>
                <Phone className="w-5 h-5 mr-2" />
                Tư vấn miễn phí
              </Button>
              <Button size="lg" variant="outline" onClick={handlePricingClick}>
                <FileText className="w-5 h-5 mr-2" />
                Xem bảng giá
              </Button>
            </div>
            
            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Doanh nghiệp tin dùng</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="text-blue-600 mb-1">2000+</div>
                <div className="text-sm text-gray-600">Bài PR đã đăng</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="text-blue-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Khách hài lòng</div>
              </motion.div>
            </div>

            {/* Media Partners Badge */}
            <motion.div
              className="mt-8 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Đối tác báo chí:</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-gray-700">
                <span className="px-2 py-1 bg-gray-100 rounded">VnExpress</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Dân Trí</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Zing News</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Thanh Niên</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Tuổi Trẻ</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">+95 báo khác</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div {...slideInRight} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1716399409349-e1a11a2d789f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzcyUyMGNvbmZlcmVuY2UlMjBtZWRpYXxlbnwxfHx8fDE3NjA1MjE2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dịch vụ booking báo chí PR truyền thông - Đăng bài trên báo điện tử VnExpress, Dân Trí, Zing News"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Overlay info cards */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-600">Đang hoạt động</span>
                </div>
                <div className="text-2xl text-blue-600">100+</div>
                <div className="text-xs text-gray-600">Báo điện tử</div>
              </div>
            </div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Uy tín được</div>
                  <div className="text-green-600">Chứng minh</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8" />
                <div>
                  <div className="text-xs opacity-90">SEO Ranking</div>
                  <div className="text-lg">Top 10</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-50"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
