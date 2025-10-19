import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, DollarSign, TrendingUp, FileBarChart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const commitments = [
  {
    icon: Award,
    title: 'Lựa chọn KOL/KOC chất lượng và uy tín',
    description: 'Necimatech cam kết tất cả KOL/KOC được lựa chọn đều có độ tin cậy cao, lượng theo dõi thật và phù hợp với ngành hàng.'
  },
  {
    icon: DollarSign,
    title: 'Tối ưu chi phí cho chiến dịch',
    description: 'Tư vấn và xây dựng chiến lược booking hợp lý, phân bổ ngân sách hiệu quả giữa các KOL/KOC và hình thức nội dung.'
  },
  {
    icon: TrendingUp,
    title: 'Đảm bảo hiệu quả truyền thông và ROI cao',
    description: 'Theo dõi sát sao các chỉ số như tương tác, lượt tiếp cận, tỷ lệ chuyển đổi và doanh số để tối ưu chiến dịch.'
  },
  {
    icon: FileBarChart,
    title: 'Báo cáo chi tiết kết quả chiến dịch',
    description: 'Gửi báo cáo đầy đủ về lượt tiếp cận, tương tác, lượt click, chuyển đổi và ROI, đảm bảo tính minh bạch.'
  }
];

export function Commitments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Cam kết từ Necimatech
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Đồng hành cùng bạn với sự chuyên nghiệp và trách nhiệm
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <commitment.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-gray-900">{commitment.title}</h3>
                    <p className="text-gray-600">{commitment.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjA1MDg2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Social Media Analytics"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
