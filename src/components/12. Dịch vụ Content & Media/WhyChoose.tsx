import { AnimatedSection } from './AnimatedSection';
import { motion } from 'motion/react';
import { Briefcase, Users, Layers } from 'lucide-react';

const reasons = [
  {
    icon: Briefcase,
    title: 'Kinh nghiệm đa ngành nghề',
    description: 'Triển khai thành công cho đa dạng đối tượng: từ startup, SME đến doanh nghiệp lớn',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Đội ngũ chuyên nghiệp',
    description: 'Nhân viên, kỹ thuật viên kết hợp giữa sáng tạo nội dung, chiến lược marketing và công nghệ',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Layers,
    title: 'Giải pháp linh hoạt',
    description: 'Các gói dịch vụ thiết kế phù hợp với từng giai đoạn phát triển của doanh nghiệp',
    gradient: 'from-orange-500 to-red-500'
  }
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Lý do chọn Necimatech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Đối tác đáng tin cậy cho hành trình chuyển đổi số của bạn
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <motion.div
                    className="relative inline-block mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${reason.gradient} blur-xl`}
                    />
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${reason.gradient} flex items-center justify-center`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-2xl mb-4">{reason.title}</h3>
                  <p className="text-gray-600 max-w-sm mx-auto">{reason.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
