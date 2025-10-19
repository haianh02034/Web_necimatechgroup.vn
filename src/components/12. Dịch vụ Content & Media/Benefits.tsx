import { AnimatedSection, SlideIn } from './AnimatedSection';
import { motion } from 'motion/react';
import { 
  Target, 
  TrendingUp, 
  MousePointerClick, 
  Users, 
  Mail, 
  Video, 
  Share2, 
  BarChart 
} from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Nền tảng vững chắc',
    description: 'Tạo nền tảng vững chắc cho toàn bộ hoạt động content marketing. Tối ưu nguồn lực, đảm bảo nội dung có định hướng và nhất quán theo thương hiệu.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Phát triển lâu dài',
    description: 'Giúp doanh nghiệp duy trì sản xuất nội dung đều đặn, có định hướng phát triển lâu dài. Chủ động phối hợp với các hoạt động marketing khác.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: MousePointerClick,
    title: 'Tăng tỷ lệ chuyển đổi',
    description: 'Tăng tỷ lệ click và chuyển đổi từ quảng cáo. Truyền tải thông điệp súc tích, rõ ràng và hấp dẫn người đọc ngay từ dòng đầu.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Users,
    title: 'Trải nghiệm người dùng',
    description: 'Giúp người dùng hiểu nhanh, tin tưởng và thực hiện đúng hành động (mua, đăng ký, liên hệ...). Nâng cao trải nghiệm và hình ảnh chuyên nghiệp.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Mail,
    title: 'Email Marketing hiệu quả',
    description: 'Tăng chuyển đổi trong phễu nuôi dưỡng khách hàng. Giữ liên kết thường xuyên và bền vững với khách hàng tiềm năng và hiện tại.',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Video,
    title: 'Video hấp dẫn',
    description: 'Thu hút người xem, tạo ấn tượng ban đầu mạnh mẽ. Tăng khả năng chia sẻ và tương tác trên các kênh social nhằm đa dạng hóa truyền thông.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Share2,
    title: 'Viral nhanh chóng',
    description: 'Tăng độ nhận diện thương hiệu nhanh chóng và dễ viral trên các trang mạng xã hội. Phù hợp với thói quen xem nhanh của người dùng hiện đại.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: BarChart,
    title: 'Tối ưu hiệu suất',
    description: 'Tối ưu hiệu suất tổng thể và tiết kiệm chi phí sản xuất nội dung mới. Cải thiện thứ hạng SEO và trải nghiệm người dùng.',
    gradient: 'from-teal-500 to-cyan-500'
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Lợi ích doanh nghiệp nhận được
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Đầu tư vào Content & Media chính là đầu tư cho sự phát triển bền vững
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isEven = index % 2 === 0;
            
            return (
              <SlideIn 
                key={index} 
                delay={index * 0.05} 
                direction={isEven ? 'left' : 'right'}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              </SlideIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
