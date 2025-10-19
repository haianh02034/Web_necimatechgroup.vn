"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      position: "CEO",
      company: "Tech Startup ABC",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      content:
        "Dịch vụ booking báo chí của Necimatech Group đã giúp startup của chúng tôi được biết đến rộng rãi. Hiệu quả vượt mong đợi với chi phí hợp lý!",
      rating: 5,
      // Giữ nguyên màu sắc cho Quote Icon và Avatar Highlight vì chúng là điểm nhấn
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Trần Thị B",
      position: "Marketing Director",
      company: "Fashion Brand XYZ",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content:
        "Đội ngũ chuyên nghiệp, tư vấn tận tình. Chiến dịch PR của chúng tôi đã xuất hiện trên nhiều báo lớn, giúp doanh số tăng 40% chỉ sau 2 tháng.",
      rating: 5,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Lê Minh C",
      position: "Founder",
      company: "E-commerce Platform",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      content:
        "Từ một thương hiệu mới, giờ chúng tôi đã có độ tin cậy vững chắc nhờ các bài PR chất lượng. Rất hài lòng với dịch vụ!",
      rating: 5,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Phạm Thu D",
      position: "Brand Manager",
      company: "Beauty & Wellness",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content:
        "Necimatech Group không chỉ booking báo mà còn tư vấn chiến lược toàn diện. Đầu tư xứng đáng cho thương hiệu của bạn!",
      rating: 5,
      color: "from-orange-500 to-red-500",
    },
  ];

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      // 1. Đổi nền: từ dark gradient sang light/white gradient
      className="py-24 bg-gradient-to-br from-white via-slate-50 to-white text-slate-800 relative overflow-hidden"
    >
      {/* 🔮 Animated Background (Giữ màu sắc làm điểm nhấn, giảm opacity) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-purple-200 rounded-full blur-3xl opacity-30" // Giảm độ đậm, tăng opacity nhẹ
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-200 rounded-full blur-3xl opacity-30" // Giảm độ đậm, tăng opacity nhẹ
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 🌟 Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* 2. Đổi màu chữ/nền cho Span */}
          <span className="inline-block px-4 py-2 bg-slate-200/50 backdrop-blur-sm text-slate-700 rounded-full mb-4">
            Khách hàng nói gì về chúng tôi
          </span>
          {/* 3. Đổi màu chữ cho Title */}
          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-slate-900 drop-shadow-none">
            Câu chuyện thành công
          </h2>
          {/* 4. Đổi màu chữ cho Paragraph */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto drop-shadow-none">
            Hơn 500 doanh nghiệp đã tin tưởng và đạt được kết quả vượt mong đợi
          </p>
        </motion.div>

        {/* 💬 Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              {/* Giữ nền trắng, điều chỉnh viền và đổ bóng */}
              <div className="bg-white text-slate-900 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl">
                {/* Icon (Giữ nguyên màu sắc nổi bật) */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Rating (Giữ nguyên) */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>

                {/* Content (Giữ text-slate-700 là hợp lý) */}
                <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed italic">
                  “{testimonials[currentIndex].content}”
                </p>

                {/* Author (Giữ nguyên màu chữ tối) */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      // Đổi viền avatar từ border-slate-100 (rất sáng) sang border-white (ít nổi) hoặc bỏ đi
                      className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-full blur-lg opacity-40`}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {testimonials[currentIndex].position} – {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ⏪ Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              // 5. Đổi nút điều hướng: từ nền sáng/chữ sáng sang nền tối/chữ tối (hoặc nền trắng/chữ tối)
              className="w-12 h-12 bg-slate-100 text-slate-700 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-slate-200 transition border border-slate-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              // 5. Đổi nút điều hướng
              className="w-12 h-12 bg-slate-100 text-slate-700 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-slate-200 transition border border-slate-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  // 6. Đổi indicator: từ trắng/trắng mờ sang tối/tối mờ
                  index === currentIndex ? "bg-slate-700 w-8" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 🧩 Thumbnail Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.button
              key={t.name}
              whileHover={{ scale: 1.05, y: -4 }}
              onClick={() => setCurrentIndex(index)}
              // 7. Đổi màu thumbnail: từ nền sáng/chữ sáng sang nền sáng/chữ tối
              className={`p-4 rounded-xl transition-all shadow-md ${
                index === currentIndex
                  ? "bg-slate-200 border-2 border-slate-400"
                  : "bg-white border border-slate-200"
              }`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full mx-auto mb-2 shadow"
              />
              {/* 8. Đổi màu chữ thumbnail */}
              <div className="text-sm truncate text-slate-800 font-semibold">{t.name}</div>
              <div className="text-xs text-slate-500 truncate">{t.company}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}