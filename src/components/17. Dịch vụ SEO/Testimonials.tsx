import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      position: "Giám đốc",
      company: "Công ty TNHH ABC",
      content: "Sau 3 tháng làm việc với Neciatech, website của chúng tôi đã lên top 3 Google với nhiều từ khóa quan trọng. Doanh số tăng 150% so với trước khi làm SEO!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      name: "Trần Thị B",
      position: "Marketing Manager",
      company: "Thương hiệu thời trang XYZ",
      content: "Đội ngũ Neciatech rất chuyên nghiệp, báo cáo chi tiết và luôn tư vấn nhiệt tình. Chi phí quảng cáo của chúng tôi giảm 60% nhờ traffic tự nhiên từ SEO.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Lê Văn C",
      position: "Chủ cửa hàng",
      company: "Cửa hàng điện tử DEF",
      content: "Từ một cửa hàng nhỏ, giờ chúng tôi nhận được hàng trăm đơn hàng mỗi tháng từ Google. Cảm ơn Neciatech đã giúp chúng tôi phát triển vượt bậc!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    {
      name: "Phạm Thị D",
      position: "CEO",
      company: "Startup GHI",
      content: "SEO là khoản đầu tư tốt nhất chúng tôi từng làm. Neciatech không chỉ giúp tăng traffic mà còn cải thiện chất lượng khách hàng tiềm năng đáng kể.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hơn 500 doanh nghiệp đã tin tưởng và đạt được kết quả vượt trội với dịch vụ SEO của chúng tôi
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main featured testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative"
            >
              {/* Quote icon */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 right-8 opacity-10"
              >
                <Quote className="w-24 h-24 text-purple-600" />
              </motion.div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-purple-200 shadow-xl">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <div>
                    <h4 className="text-gray-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonials[activeIndex].position} - {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIndex(index)}
                className={`bg-white rounded-2xl p-4 shadow-lg transition-all duration-300 ${
                  activeIndex === index 
                    ? 'ring-4 ring-purple-400 shadow-xl' 
                    : 'hover:shadow-xl'
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <motion.div
                    animate={activeIndex === index ? {
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{
                      duration: 1,
                      repeat: activeIndex === index ? Infinity : 0,
                    }}
                    className={`w-16 h-16 rounded-full overflow-hidden ring-2 ${
                      activeIndex === index ? 'ring-purple-400' : 'ring-gray-200'
                    }`}
                  >
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="text-center">
                    <p className="text-sm text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
