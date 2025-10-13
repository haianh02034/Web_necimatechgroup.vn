import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    position: "CEO - Thời Trang Trendy",
    avatar: "NMA",
    content: "Necimatech đã giúp thương hiệu của chúng tôi tăng 300% doanh số chỉ sau 2 tháng chạy TikTok Ads. Đội ngũ chuyên nghiệp, chiến lược rõ ràng và hiệu quả vượt mong đợi!",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Trần Văn Hùng",
    position: "Founder - Mỹ Phẩm Organic",
    avatar: "TVH",
    content: "Từ một startup nhỏ, giờ đây chúng tôi có hơn 100K followers và đơn hàng tăng đều đặn. Cảm ơn Necimatech đã đồng hành cùng chúng tôi!",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Lê Thị Hương",
    position: "Marketing Manager - F&B Group",
    avatar: "LTH",
    content: "Dịch vụ livestream và KOL booking của Necimatech rất xuất sắc. Mỗi buổi livestream đều đạt hàng nghìn đơn hàng. Highly recommended!",
    rating: 5,
    gradient: "from-green-500 to-emerald-500",
  },
];

export function Testimonials() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-purple-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Những phản hồi chân thực từ khách hàng đã sử dụng dịch vụ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="p-8 h-full relative overflow-hidden border-2 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl">
                {/* Background gradient decoration */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${testimonial.gradient} rounded-full opacity-10 blur-3xl`} />
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center mb-6`}
                >
                  <Quote className="w-6 h-6 text-white" />
                </motion.div>

                <p className="text-gray-700 mb-6 relative z-10">{testimonial.content}</p>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={`bg-gradient-to-br ${testimonial.gradient} text-white`}>
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
