import { Quote, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      position: "CEO",
      company: "ABC Corporation",
      content: "Dịch vụ Zalo OA của Necimatech đã giúp chúng tôi tăng 300% tương tác với khách hàng chỉ sau 3 tháng. Đội ngũ chuyên nghiệp, tận tâm và luôn sẵn sàng hỗ trợ.",
      rating: 5,
      avatar: "NA",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Trần Thị B",
      position: "Marketing Manager",
      company: "XYZ Store",
      content: "Chi phí quảng cáo giảm 40% nhưng doanh số lại tăng gấp đôi. Chatbot thông minh giúp chúng tôi chăm sóc khách hàng 24/7 một cách hiệu quả.",
      rating: 5,
      avatar: "TB",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Lê Văn C",
      position: "Founder",
      company: "Tech Startup",
      content: "Gói Premium thực sự đáng giá! Mini game và livestream trên OA đã tạo sự kiện viral, thu hút hàng ngàn khách hàng mới. Highly recommended!",
      rating: 5,
      avatar: "LC",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Phạm Thị D",
      position: "Sales Director",
      company: "Fashion Brand",
      content: "OA Shop được thiết lập chuyên nghiệp, khách hàng có thể mua hàng trực tiếp trên Zalo rất thuận tiện. Doanh thu online tăng vượt kỳ vọng.",
      rating: 5,
      avatar: "PD",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-blue-50 via-purple-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hàng trăm doanh nghiệp đã tin tưởng và đạt được kết quả vượt mong đợi với dịch vụ của chúng tôi
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative min-h-[350px] md:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 h-full flex flex-col relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonials[activeIndex].gradient}`} />
                  
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${testimonials[activeIndex].gradient} rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
                    >
                      <span>{testimonials[activeIndex].avatar}</span>
                    </motion.div>
                    
                    <div className="flex-1">
                      <h4 className="mb-1">{testimonials[activeIndex].name}</h4>
                      <p className="text-gray-600 mb-2">
                        {testimonials[activeIndex].position} - {testimonials[activeIndex].company}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        rotate: [0, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Quote className="w-12 h-12 text-blue-200 hidden sm:block" />
                    </motion.div>
                  </div>

                  <p className="text-gray-700 flex-1 italic">
                    "{testimonials[activeIndex].content}"
                  </p>

                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonials[activeIndex].gradient} rounded-2xl blur opacity-10 -z-10`} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="group"
              >
                <div
                  className={`h-3 rounded-full transition-all ${
                    index === activeIndex 
                      ? `bg-gradient-to-r ${testimonial.gradient} w-8 shadow-lg` 
                      : "bg-gray-300 w-3"
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Stats with images */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {[
            { 
              number: "500+", 
              label: "Doanh nghiệp tin tưởng",
              image: "https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk5MjM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              gradient: "from-blue-500 to-cyan-500",
            },
            { 
              number: "98%", 
              label: "Khách hàng hài lòng",
              image: "https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk5OTU2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              gradient: "from-purple-500 to-pink-500",
            },
            { 
              number: "300%", 
              label: "Tăng trưởng trung bình",
              image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTk3NDc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              gradient: "from-orange-500 to-red-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative text-center p-6 bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ImageWithFallback
                  src={stat.image}
                  alt={stat.label}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-90`} />
              </div>
              
              <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                <div className={`mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:text-white`}>
                  {stat.number}
                </div>
                <p className="text-gray-600 group-hover:text-white">{stat.label}</p>
              </div>

              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
