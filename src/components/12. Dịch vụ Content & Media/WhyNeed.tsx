import { AnimatedSection } from './AnimatedSection';
import { motion } from 'motion/react';
import { Users, TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { Card } from '../ui/card';

const challenges = [
  {
    icon: Users,
    title: 'Thiếu nhân sự chuyên môn',
    description: 'Không có đội ngũ copywriter, designer, marketer đồng bộ',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Thiếu chiến lược dài hạn',
    description: 'Hoạt động rời rạc, không gắn kết',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Calendar,
    title: 'Khó duy trì đều đặn',
    description: 'Nội dung đăng tải ngắt quãng, thiếu nhất quán thương hiệu',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: DollarSign,
    title: 'Chi phí cao',
    description: 'Nếu phải tự xây dựng đội ngũ in-house',
    color: 'from-green-500 to-emerald-500'
  }
];

export function WhyNeed() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Lý do doanh nghiệp cần Dịch vụ Content & Media
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trong bức tranh cạnh tranh khốc liệt hiện nay, nội dung chất lượng chính là cầu nối giữa thương hiệu và khách hàng
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 h-full border-2 hover:border-blue-200 transition-colors bg-white">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="mb-3">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </Card>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-xl">
              Với dịch vụ Content & Media của <span className="font-semibold">Necimatech</span>, mọi rào cản trên đều được giải quyết, giúp doanh nghiệp tập trung vào kinh doanh trong khi hoạt động marketing vận hành trơn tru.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
