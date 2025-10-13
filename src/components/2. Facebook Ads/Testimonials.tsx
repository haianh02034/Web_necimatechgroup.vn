import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      company: "Startup Mỹ Phẩm",
      industry: "Mỹ phẩm",
      result: "Tăng trưởng doanh thu gấp 3 lần",
      duration: "6 tháng",
      quote: "Sau 6 tháng sử dụng gói Pro của Necimatech, doanh thu của chúng tôi đã tăng gấp 3 lần. Đội ngũ rất chuyên nghiệp và hiểu rõ insight khách hàng.",
      name: "Nguyễn Thị Mai",
      position: "CEO",
      rating: 5,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      company: "Thương hiệu F&B",
      industry: "F&B",
      result: "Tăng 40% khách quay lại",
      duration: "8 tháng",
      quote: "Necimatech đã giúp chúng tôi xây dựng được cộng đồng Facebook Group hơn 20.000 thành viên. Tỷ lệ khách hàng quay lại tăng 40%, điều này vượt xa mong đợi.",
      name: "Trần Văn Hùng",
      position: "Giám đốc Marketing",
      rating: 5,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      company: "SME Giáo Dục",
      industry: "Giáo dục",
      result: "Tăng 55% chuyển đổi học viên",
      duration: "4 tháng",
      quote: "Gói Premium với chiến lược Content + Video Ads kết hợp đã giúp chúng tôi tăng tỷ lệ chuyển đổi học viên đăng ký khóa học thêm 55%. Đầu tư xứng đáng!",
      name: "Lê Thị Hương",
      position: "Founder",
      rating: 5,
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-gray-900">
            Case Study thành công từ khách hàng
          </h2>
          <p className="text-xl text-gray-600">
            Những kết quả thực tế từ các doanh nghiệp đã tin tưởng và hợp tác với chúng tôi
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20">
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Testimonials carousel */}
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : index < activeIndex ? -100 : 100,
                  scale: index === activeIndex ? 1 : 0.8,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`${index === activeIndex ? "relative" : "absolute inset-0 pointer-events-none"}`}
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${testimonial.gradient} p-8 md:p-12`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={index === activeIndex && isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6"
                    >
                      <Quote className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={index === activeIndex && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6"
                    >
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-white/80 text-sm mb-1">Ngành</div>
                        <div className="text-white">{testimonial.industry}</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-white/80 text-sm mb-1">Kết quả</div>
                        <div className="text-white">{testimonial.result}</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 col-span-2 md:col-span-1">
                        <div className="text-white/80 text-sm mb-1">Thời gian</div>
                        <div className="text-white">{testimonial.duration}</div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-8 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={index === activeIndex && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={index === activeIndex && isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                          >
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>

                      <div className="border-t pt-6">
                        <div className="text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600">
                          {testimonial.position} - {testimonial.company}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex ? "w-8 h-3 bg-blue-600" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
