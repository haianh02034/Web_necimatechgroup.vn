import { AnimatedSection } from './AnimatedSection';
import { motion } from 'motion/react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const packages = [
  {
    name: 'Basic',
    price: '5.999.000',
    icon: Star,
    color: 'from-blue-500 to-cyan-500',
    badge: 'Startup',
    badgeColor: 'bg-blue-100 text-blue-700',
    description: 'Phù hợp với doanh nghiệp nhỏ, startup muốn xây dựng sự hiện diện ổn định',
    features: [
      'Tư vấn chiến lược Content tổng thể',
      'Lập kế hoạch Content Calendar',
      '30 bài viết quảng cáo (Ads Copy)',
      '30 thiết kế hình ảnh Social Media'
    ]
  },
  {
    name: 'Pro',
    price: '15.999.000',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    badge: 'Phổ biến',
    badgeColor: 'bg-purple-100 text-purple-700',
    popular: true,
    description: 'Doanh nghiệp đã có tệp khách hàng, mong muốn nâng tầm hình ảnh chuyên nghiệp',
    features: [
      'Toàn bộ quyền lợi gói Basic',
      '2 bài viết Landing Page/Website',
      '5 nội dung Email Marketing/Automation',
      '3 video ngắn (Short-form Video)'
    ]
  },
  {
    name: 'Premium',
    price: '39.999.000',
    icon: Crown,
    color: 'from-orange-500 to-red-500',
    badge: 'Doanh nghiệp lớn',
    badgeColor: 'bg-orange-100 text-orange-700',
    description: 'Định hướng tăng trưởng bền vững, mở rộng thương hiệu ra thị trường quốc tế',
    features: [
      'Toàn bộ quyền lợi gói Pro',
      '25 bài SEO Website/Blog',
      '50 Ads Copy & 50 Social Media Design',
      '10 video ngắn + 2 TVC/Animation',
      'Đo lường hiệu quả chiến dịch & Audit Content',
      '50 nội dung dịch thuật/Localize Content'
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Các gói dịch vụ Content & Media
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn gói phù hợp với quy mô và nhu cầu phát triển của doanh nghiệp bạn
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className={`p-8 h-full relative overflow-hidden ${pkg.popular ? 'border-2 border-purple-500 shadow-xl' : 'border-2 hover:border-gray-300'} transition-all`}>
                    {pkg.popular && (
                      <motion.div
                        initial={{ rotate: 45, x: 60, y: -60 }}
                        animate={{ rotate: 45, x: 60, y: -60 }}
                        className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-1 transform"
                      >
                        <span className="text-sm">Phổ biến nhất</span>
                      </motion.div>
                    )}

                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <Badge className={`${pkg.badgeColor} mb-4`}>
                      {pkg.badge}
                    </Badge>

                    <h3 className="text-3xl mb-2">{pkg.name}</h3>
                    
                    <div className="mb-4">
                      <span className="text-4xl">{pkg.price}</span>
                      <span className="text-gray-600"> VNĐ</span>
                    </div>

                    <p className="text-gray-600 mb-6">{pkg.description}</p>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Check className="w-5 h-5 text-green-500" />
                            </motion.div>
                          </div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : ''}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                    >
                      Chọn gói {pkg.name}
                    </Button>
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
