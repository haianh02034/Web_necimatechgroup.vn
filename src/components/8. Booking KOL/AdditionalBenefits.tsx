import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Eye, Target, Sparkles, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const benefits = [
  {
    icon: Eye,
    title: 'Tăng nhận diện thương hiệu',
    description: 'KOL/KOC đăng bài hoặc livestream sẽ giúp thương hiệu xuất hiện trực tiếp trước hàng triệu người theo dõi, nâng cao độ phủ sóng và uy tín.'
  },
  {
    icon: Target,
    title: 'Lựa chọn chính xác & hiệu quả',
    description: 'Necimatech lựa chọn KOL/KOC dựa trên dữ liệu hành vi và phân tích chuyên sâu, đảm bảo độ phủ, tệp khách hàng phù hợp và hiệu quả tối đa cho doanh nghiệp. Đồng thời, Necimatech sở hữu hệ thống KOL/KOC đa dạng, sẵn sàng đáp ứng chiến dịch truyền thông mọi ngành nghề.'
  },
  {
    icon: Sparkles,
    title: 'Nội dung sáng tạo & thu hút',
    description: 'Các chiến dịch booking KOL/KOC được triển khai với nội dung sáng tạo, livestream trải nghiệm chân thực, giúp khách hàng dễ dàng tin tưởng và yêu thích sản phẩm, từ đó tăng tỷ lệ tương tác và nhận diện thương hiệu trên thị trường.'
  },
  {
    icon: TrendingUp,
    title: 'Thúc đẩy doanh số bán hàng',
    description: 'Booking KOL/KOC là cách nhanh chóng xây dựng niềm tin và tạo động lực để khách hàng đưa ra quyết định mua hàng nhanh hơn.'
  }
];

export function AdditionalBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636971828014-0f3493cba88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvcnxlbnwxfHx8fDE3NjA0MjQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Content Creator"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent" />
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Lợi ích khi Booking KOL/KOC
              </h2>
            </motion.div>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
