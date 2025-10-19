import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Minh Tuấn",
    position: "CEO - TechViet Solutions",
    content: "Necimatech đã giúp chúng tôi tối ưu chi phí quảng cáo xuống 40% trong khi doanh số tăng gấp đôi. Đội ngũ rất chuyên nghiệp và tận tâm!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Trần Thị Mai",
    position: "Founder - EduTech Startup",
    content: "Từ khi hợp tác với Necimatech, chúng tôi đã tìm được Product-Market Fit và có hơn 10,000 người dùng đầu tiên. Đây là đối tác không thể thiếu!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "Lê Hoàng Nam",
    position: "Co-founder - FinTech Vietnam",
    content: "Gói Premium thực sự đáng giá! Chúng tôi đã mở rộng ra 3 thị trường Đông Nam Á chỉ sau 6 tháng. ROI vượt mọi kỳ vọng.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    name: "Phạm Thu Hương",
    position: "Marketing Director - SaaS Platform",
    content: "Báo cáo minh bạch, đo lường chính xác, và support nhanh chóng. Necimatech hiểu rõ nỗi đau của startup và biết cách giải quyết hiệu quả.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="inline-block mb-4"
          >
            <Quote className="w-12 h-12 text-purple-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Khách hàng nói gì về chúng tôi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những câu chuyện thành công thực tế từ các startup đã tin tưởng Necimatech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: hoveredIndex === index ? 2 : 0 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
            >
              {/* Background decoration */}
              <motion.div
                animate={{ 
                  scale: hoveredIndex === index ? 1.5 : 1,
                  rotate: hoveredIndex === index ? 180 : 0
                }}
                transition={{ duration: 0.6 }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20"
              />

              <div className="relative z-10">
                {/* Stars */}
                <motion.div 
                  className="flex gap-1 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.4 + i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.3, rotate: 360 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-purple-200">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-20 right-10 text-purple-300 opacity-50"
        >
          <Quote className="w-20 h-20" />
        </motion.div>
      </div>
    </section>
  );
}