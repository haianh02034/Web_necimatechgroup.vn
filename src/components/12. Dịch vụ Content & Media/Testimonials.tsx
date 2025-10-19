import { AnimatedSection } from './AnimatedSection';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';

const testimonials = [
  {
    name: 'Nguyễn Minh Tuấn',
    position: 'CEO',
    company: 'Tech Startup ABC',
    content: 'Necimatech đã giúp chúng tôi xây dựng một chiến lược content hoàn chỉnh. Trong 3 tháng, lượng tương tác tăng 300% và doanh số cải thiện đáng kể. Đội ngũ rất chuyên nghiệp!',
    rating: 5,
    avatar: 'NMT',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Trần Thị Hương',
    position: 'Marketing Director',
    company: 'Fashion Brand XYZ',
    content: 'Chất lượng nội dung vượt mong đợi. Từ thiết kế, copy đến video đều rất chỉn chu. Đặc biệt là team luôn sẵn sàng hỗ trợ và điều chỉnh theo feedback của chúng tôi.',
    rating: 5,
    avatar: 'TTH',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Lê Văn Khoa',
    position: 'Founder',
    company: 'E-commerce Platform',
    content: 'ROI từ chiến dịch content marketing của Necimatech vượt xa kỳ vọng. Chi phí hợp lý, hiệu quả cao. Đây chính là đối tác chiến lược lâu dài mà chúng tôi tìm kiếm.',
    rating: 5,
    avatar: 'LVK',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Phạm Thu Hà',
    position: 'Brand Manager',
    company: 'FMCG Company',
    content: 'Từ khi hợp tác với Necimatech, thương hiệu của chúng tôi được nhận diện rộng rãi hơn trên thị trường. Nội dung luôn đúng insight và phù hợp với từng kênh truyền thông.',
    rating: 5,
    avatar: 'PTH',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Hoàng Minh Đức',
    position: 'COO',
    company: 'SaaS Company',
    content: 'Đội ngũ Necimatech không chỉ tạo content mà còn tư vấn chiến lược rất bài bản. Họ hiểu rõ thị trường B2B và biết cách tiếp cận đúng đối tượng khách hàng.',
    rating: 5,
    avatar: 'HMĐ',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Vũ Thị Mai',
    position: 'Marketing Lead',
    company: 'Education Startup',
    content: 'Gói Premium của Necimatech giúp chúng tôi có được bộ content đa ngôn ngữ chất lượng cao. Đặc biệt là các video TVC rất sáng tạo và thu hút học viên mới hiệu quả.',
    rating: 5,
    avatar: 'VTM',
    color: 'from-pink-500 to-rose-500'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 128, 0.3), transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hơn 200+ doanh nghiệp đã tin tưởng và đồng hành cùng Necimatech
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="p-6 h-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    className="mb-4"
                  >
                    <Quote className="w-10 h-10 text-purple-300 opacity-50" />
                  </motion.div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-gray-200 mb-6 italic">"{testimonial.content}"</p>

                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Avatar className={`w-12 h-12 bg-gradient-to-br ${testimonial.color}`}>
                        <AvatarFallback className="text-white bg-transparent">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-300">{testimonial.position}</div>
                      <div className="text-sm text-purple-300">{testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
