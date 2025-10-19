import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Shield, TrendingUp, Award } from "lucide-react";

export function ServiceIntro() {
  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...slideInLeft}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1582510246824-e89d845cd3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBqb3VybmFsaXN0JTIwd3JpdGluZ3xlbnwxfHx8fDE3NjA1MjE2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Journalist writing newspaper article"
                 className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          <motion.div {...slideInRight}>
            <Badge className="mb-4 bg-purple-100 text-purple-700">
              Về dịch vụ
            </Badge>
            <h2 className="mb-6 text-gray-900">
              Dịch vụ Booking Báo chí là gì?
            </h2>
            <p className="mb-6 text-gray-600">
              Booking Báo chí là hình thức đặt bài viết PR (quảng bá thương hiệu, sản phẩm hoặc sự kiện) 
              trên các kênh báo điện tử, tạp chí online uy tín. Khác với các hình thức quảng cáo truyền thống, 
              booking báo chí mang tính bền vững hơn bởi:
            </p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-gray-900">Độ tin cậy cao</h3>
                  <p className="text-gray-600">Bài viết xuất hiện trên báo chí chính thống giúp thương hiệu dễ dàng được công chúng tin tưởng.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-gray-900">Tính lan tỏa mạnh mẽ</h3>
                  <p className="text-gray-600">Nội dung có thể được chia sẻ lại trên mạng xã hội, website hoặc các tài liệu marketing.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-gray-900">Xây dựng thương hiệu lâu dài</h3>
                  <p className="text-gray-600">Không chỉ quảng bá ngắn hạn, bài báo còn định vị thương hiệu trong tâm trí khách hàng.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
