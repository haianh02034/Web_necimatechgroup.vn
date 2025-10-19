import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    role: "Marketing Director",
    company: "BeautyTech Vietnam",
    content: "Necimatech đã giúp chúng tôi kết nối với những beauty blogger uy tín nhất. Doanh số tăng 350% chỉ sau 2 tháng triển khai chiến dịch KOL!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Minh",
  },
  {
    name: "Trần Hoàng Nam",
    role: "CEO",
    company: "TechGear Store",
    content: "Quy trình chuyên nghiệp, báo cáo chi tiết, ROI vượt mong đợi. Đội ngũ Necimatech thực sự hiểu rõ thị trường và biết cách tối ưu ngân sách.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nam",
  },
  {
    name: "Lê Thu Hương",
    role: "Brand Manager",
    company: "FoodHub",
    content: "Từ startup nhỏ đến thương hiệu được biết đến rộng rãi, Necimatech đã đồng hành và giúp chúng tôi phát triển vượt bậc thông qua các KOL phù hợp.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Huong",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Khách hàng nói gì về <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Necimatech</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hơn 500+ doanh nghiệp đã tin tưởng và đạt được thành công cùng chúng tôi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group perspective-1000"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Quote icon background */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="absolute -top-4 -right-4"
                >
                  <Quote className="w-32 h-32 text-purple-600" />
                </motion.div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-200 flex-shrink-0"
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover gradient effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
