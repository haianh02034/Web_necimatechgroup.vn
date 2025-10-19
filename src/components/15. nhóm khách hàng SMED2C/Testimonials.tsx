import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "CEO",
    company: "ABC Fashion",
    content:
      "Necimatech đã giúp chúng tôi tăng doanh số lên 300% chỉ trong 3 tháng. Đội ngũ chuyên nghiệp, nhiệt tình và luôn sẵn sàng hỗ trợ. Tôi rất hài lòng với dịch vụ!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenVanA",
  },
  {
    name: "Trần Thị B",
    role: "Founder",
    company: "BeautyShop D2C",
    content:
      "Trước khi hợp tác với Necimatech, chúng tôi rất loay hoay với quảng cáo online. Giờ đây, mọi thứ đã được tối ưu hóa và doanh số tăng đều đặn mỗi tháng.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=TranThiB",
  },
  {
    name: "Lê Minh C",
    role: "Marketing Manager",
    company: "TechGadget Store",
    content:
      "Gói Premium của Necimatech thực sự đáng giá. SEO, quảng cáo đa kênh và KOL marketing đều được thực hiện chuyên nghiệp. Thương hiệu của chúng tôi đã lên một tầm cao mới!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=LeMinhC",
  },
  {
    name: "Phạm Thu D",
    role: "Chủ doanh nghiệp",
    company: "Organic Foods",
    content:
      "Tôi đánh giá cao sự minh bạch và chuyên nghiệp của Necimatech. Báo cáo chi tiết, tư vấn tận tâm và kết quả vượt mong đợi. Đây là đối tác tuyệt vời!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=PhamThuD",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Khách hàng nói gì về{" "}
            <span className="text-blue-600">Necimatech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những câu chuyện thành công thực tế từ đối tác của chúng tôi
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated background decoration */}
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 20 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              {/* Quote icon with animation */}
              <motion.div
                className="mb-6"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Quote className="w-12 h-12 text-blue-500 opacity-50" />
              </motion.div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial content */}
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-500">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Animated ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-500"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <div>
                  <div className="font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role} •{" "}
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full w-12 h-12 hover:bg-blue-50 hover:border-blue-500"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 h-3 bg-blue-500"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full w-12 h-12 hover:bg-blue-50 hover:border-blue-500"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
