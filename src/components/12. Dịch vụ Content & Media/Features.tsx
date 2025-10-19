import { AnimatedSection } from './AnimatedSection';
import { motion } from 'motion/react';
import { 
  Lightbulb, 
  FileText, 
  Share2, 
  DollarSign, 
  BarChart3, 
  Headphones 
} from 'lucide-react';
import { Card } from '../ui/card';

const features = [
  {
    icon: Lightbulb,
    title: 'Chiến lược rõ ràng',
    description: 'Phân tích doanh nghiệp, khách hàng mục tiêu, xây dựng khung nội dung dài hạn',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: FileText,
    title: 'Nội dung chất lượng',
    description: 'Ads Copy, SEO blog, Landing Page, Email, Social Media được tối ưu theo insight',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Share2,
    title: 'Truyền thông đa kênh',
    description: 'Facebook, TikTok, Website, Email, Video Marketing toàn diện',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: DollarSign,
    title: 'Tối ưu chi phí',
    description: 'Cam kết trọn gói, không phát sinh, tiết kiệm ngân sách',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Đo lường & tối ưu',
    description: 'Báo cáo minh bạch, Audit nội dung để cải thiện liên tục',
    color: 'from-red-400 to-rose-500'
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ chuyên gia sẵn sàng xử lý nhanh mọi yêu cầu',
    color: 'from-indigo-400 to-blue-500'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] -z-10" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Điểm nổi bật trong dịch vụ của Necimatech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Giải pháp toàn diện từ chiến lược đến thực thi
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-8 h-full border-2 hover:border-blue-200 transition-all bg-white hover:shadow-xl">
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                        }}
                        transition={{ 
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 blur-xl`}
                      />
                      <motion.div
                        whileHover={{ 
                          rotate: [0, -15, 15, -15, 0],
                          y: [0, -10, 0]
                        }}
                        transition={{ duration: 0.5 }}
                        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>

                    <h3 className="mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
