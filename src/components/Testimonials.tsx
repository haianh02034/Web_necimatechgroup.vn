import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { AnimatedIcon } from "./AnimatedIcon";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      position: "CEO",
      company: "Startup Technology",
      rating: 5,
      content: "Dịch vụ chuyên nghiệp, hỗ trợ tận tâm từ A-Z. Necimatech Group đã giúp chúng tôi tối ưu hóa quy trình vận hành và tăng trưởng doanh thu đáng kể.",
      avatar: "NA",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Trần Thị B",
      position: "Marketing Director",
      company: "XYZ Corporation",
      rating: 5,
      content: "Giải pháp marketing số của Necimatech rất hiệu quả. Trong vòng 3 tháng, lượng khách hàng tiềm năng của chúng tôi đã tăng gấp 3 lần.",
      avatar: "TB",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      name: "Lê Minh C",
      position: "Founder",
      company: "E-commerce Startup",
      rating: 5,
      content: "Độ tin cậy cao, cam kết bảo mật thông tin tuyệt đối. Dịch vụ ổn định và an toàn, đội ngũ support 24/7 rất chuyên nghiệp.",
      avatar: "LC",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      name: "Phạm Thu D",
      position: "Operations Manager",
      company: "Manufacturing Corp",
      rating: 5,
      content: "Hệ thống tự động hóa do Necimatech triển khai đã giúp chúng tôi tiết kiệm 40% thời gian xử lý và giảm 30% chi phí vận hành.",
      avatar: "PD",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      position: "Digital Manager",
      company: "Traditional Business",
      rating: 5,
      content: "Quá trình chuyển đổi số diễn ra rất suôn sẻ. Necimatech không chỉ cung cấp giải pháp mà còn đào tạo đội ngũ để chúng tôi tự vận hành.",
      avatar: "HE",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 6,
      name: "Vũ Thị F",
      position: "Brand Manager",
      company: "Fashion Retail",
      rating: 5,
      content: "Chiến dịch TikTok và Facebook Ads do Necimatech thực hiện đã mang lại kết quả vượt ngoài mong đợi. ROI tăng 250% so với trước.",
      avatar: "VF",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const benefits = [
    {
      title: "Dịch vụ chuyên nghiệp",
      description: "Hỗ trợ tận tâm, tư vấn chi tiết và đồng hành từ A–Z",
      percentage: "98%",
      icon: "🎯"
    },
    {
      title: "Giải pháp hiệu quả",
      description: "Mang lại kết quả thực tế, giúp doanh nghiệp tăng trưởng rõ rệt",
      percentage: "95%",
      icon: "🚀"
    },
    {
      title: "Độ tin cậy",
      description: "Cam kết bảo mật thông tin tuyệt đối, dịch vụ ổn định và an toàn",
      percentage: "100%",
      icon: "🛡️"
    }
  ];

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollAnimation direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Đánh giá từ khách hàng
            </h2>
            <p className="text-lg text-gray-600">
              Khách hàng của Necimatech Group luôn đánh giá cao chất lượng dịch vụ và hiệu quả mang lại
            </p>
          </motion.div>
        </ScrollAnimation>

        {/* Benefits Stats */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-16" delay={0.1}>
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-8">
                    <motion.div 
                      className="text-5xl mb-4"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <motion.div 
                      className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    >
                      {benefit.percentage}
                    </motion.div>
                    <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Main Testimonial Carousel */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="relative max-w-4xl mx-auto mb-16">
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`relative p-12 bg-gradient-to-br ${currentTestimonial.color} text-white`}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-white/20" style={{
                        backgroundImage: 'linear-gradient(45deg, transparent 30%, white 30%, white 50%, transparent 50%)',
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>

                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6"
                      >
                        <Quote className="w-12 h-12 text-white/80" />
                      </motion.div>

                      {/* Rating */}
                      <motion.div 
                        className="flex items-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                          >
                            <Star className="w-6 h-6 fill-yellow-300 text-yellow-300 mr-1" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Content */}
                      <motion.p 
                        className="text-xl leading-relaxed mb-8 italic"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        "{currentTestimonial.content}"
                      </motion.p>

                      {/* Author */}
                      <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Avatar className="h-16 w-16 mr-4 border-3 border-white/50">
                            <AvatarFallback className="bg-white/20 text-white font-bold text-lg backdrop-blur-sm">
                              {currentTestimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>
                        <div>
                          <div className="font-bold text-xl text-white">{currentTestimonial.name}</div>
                          <div className="text-white/90">{currentTestimonial.position}</div>
                          <div className="text-white/80 text-sm">{currentTestimonial.company}</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={prevTestimonial}
                          className="text-white hover:bg-white/20 rounded-full w-12 h-12"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </Button>
                      </motion.div>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={nextTestimonial}
                          className="text-white hover:bg-white/20 rounded-full w-12 h-12"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoPlay(false);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation direction="scale" delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 border-0 overflow-hidden relative">
              <CardContent className="p-8 lg:p-12 relative z-10">
                {/* Background animation */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-white/20 animate-pulse" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <div className="text-center relative z-10">
                  <motion.h3 
                    className="text-2xl lg:text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    Trở thành khách hàng tiếp theo của chúng tôi
                  </motion.h3>
                  <motion.p 
                    className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Hãy để Necimatech Group đồng hành cùng bạn trong hành trình chuyển đổi số và nâng tầm doanh nghiệp
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                        Tư vấn miễn phí
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
                      >
                        Xem case study
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
}