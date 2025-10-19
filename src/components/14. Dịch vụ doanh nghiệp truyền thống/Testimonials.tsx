import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";

const testimonials = [
  {
    name: "Nguyễn Văn A",
    position: "Giám đốc",
    company: "Công ty TNHH ABC",
    content:
      "Necimatech đã giúp chúng tôi chuyển đổi số thành công. Doanh số tăng 150% chỉ sau 6 tháng hợp tác. Đội ngũ chuyên nghiệp, tận tâm và luôn sẵn sàng hỗ trợ.",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Trần Thị B",
    position: "Marketing Manager",
    company: "Doanh nghiệp XYZ",
    content:
      "Trước đây chúng tôi rất lúng túng với marketing online. Necimatech đã tư vấn và triển khai hiệu quả, giúp chúng tôi tiếp cận đúng khách hàng mục tiêu.",
    rating: 5,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Lê Văn C",
    position: "CEO",
    company: "Tập đoàn DEF",
    content:
      "Dịch vụ chuyên nghiệp, giá cả hợp lý và hiệu quả vượt mong đợi. Chúng tôi đã tìm được đối tác tin cậy cho hành trình chuyển đổi số của mình.",
    rating: 5,
    color: "from-orange-500 to-red-500",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="px-6 py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Những câu chuyện thành công từ các doanh nghiệp đã đồng hành cùng
            Necimatech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateY: 0 }
                  : { opacity: 0, y: 60, rotateY: -15 }
              }
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="perspective-1000"
            >
              <Card className="relative overflow-hidden h-full border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                {/* Gradient border on top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color}`}
                />

                {/* Animated quote icon */}
                <motion.div
                  className="absolute top-6 right-6 opacity-10"
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Quote className="w-16 h-16 text-gray-400" />
                </motion.div>

                <div className="relative p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + i * 0.1,
                          type: "spring",
                        }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Avatar className="w-12 h-12">
                        <AvatarFallback
                          className={`bg-gradient-to-br ${testimonial.color} text-white`}
                        >
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <div className="text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
