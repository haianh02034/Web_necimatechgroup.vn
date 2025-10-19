import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const testimonials = [
    {
      name: "Nguyễn Văn An",
      role: "CEO - Công ty ABC Tech",
      company: "ABC Tech",
      content:
        "Necimatech đã giúp chúng tôi tăng tỷ lệ chuyển đổi lên 250% chỉ sau 2 tháng triển khai Landing Page. Đội ngũ chuyên nghiệp, tận tâm và luôn sẵn sàng hỗ trợ 24/7.",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Trần Thị Bích",
      role: "Marketing Manager",
      company: "XYZ Fashion",
      content:
        "Chi phí quảng cáo của chúng tôi giảm 40% trong khi doanh thu tăng vượt bậc. Landing Page được thiết kế đẹp mắt và tối ưu hoàn hảo cho mobile. Rất hài lòng!",
      rating: 5,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Lê Minh Tuấn",
      role: "Founder",
      company: "Startup Education",
      content:
        "Với gói Basic, startup của chúng tôi đã có một Landing Page chuyên nghiệp với chi phí hợp lý. Tỷ lệ đăng ký khóa học tăng 180%. Đội ngũ Necimatech rất nhiệt tình!",
      rating: 5,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Phạm Thu Hà",
      role: "Digital Marketing Lead",
      company: "MNO Corporation",
      content:
        "Gói Premium đáp ứng hoàn hảo nhu cầu của doanh nghiệp chúng tôi. 10 Landing Page đa dạng mục tiêu, A/B Testing liên tục giúp tối ưu hiệu quả từng ngày. Tuyệt vời!",
      rating: 5,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Hoàng Minh Khoa",
      role: "E-commerce Director",
      company: "PQR Store",
      content:
        "Tích hợp CRM và email marketing rất mượt mà. Tracking chi tiết giúp chúng tôi hiểu rõ hành vi khách hàng. ROI tăng 300% so với trước. Đáng từng đồng bỏ ra!",
      rating: 5,
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Võ Thị Lan",
      role: "Brand Manager",
      company: "STU Beauty",
      content:
        "Landing Page không chỉ đẹp mà còn chuyên nghiệp, nâng cao uy tín thương hiệu. Khách hàng tin tưởng hơn và tỷ lệ chốt đơn tăng đáng kể. Cảm ơn Necimatech!",
      rating: 5,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hơn 500+ doanh nghiệp đã tin tưởng và đồng hành cùng Necimatech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />

                {/* Quote icon */}
                <motion.div
                  className={`absolute top-6 right-6 opacity-10`}
                  whileHover={{ scale: 1.2, rotate: 180, opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="w-16 h-16 text-gray-400" />
                </motion.div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 italic relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Avatar className={`w-12 h-12 border-2 border-transparent bg-gradient-to-br ${testimonial.color}`}>
                      <AvatarFallback className="text-white">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Animated corner decoration */}
                <motion.div
                  className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-tl-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
