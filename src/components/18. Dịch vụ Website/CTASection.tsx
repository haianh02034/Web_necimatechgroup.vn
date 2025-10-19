import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
            Sẵn Sàng Nâng Tầm Thương Hiệu Của Bạn?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-4">
            Một website chuyên nghiệp chính là khoản đầu tư thông minh và hiệu quả nhất cho tương lai của doanh nghiệp bạn.
          </p>
          <p className="text-slate-700 max-w-3xl mx-auto">
            Nó giúp bạn xây dựng hình ảnh uy tín, tiếp cận khách hàng mọi lúc mọi nơi và tối ưu hóa quy trình kinh doanh.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-purple-600" />
                <h3 className="text-2xl text-slate-900">Nhận Tư Vấn Miễn Phí</h3>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-slate-700">Họ và tên</label>
                  <Input placeholder="Nhập họ và tên của bạn" className="border-slate-300" />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700">Email</label>
                  <Input type="email" placeholder="email@example.com" className="border-slate-300" />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700">Số điện thoại</label>
                  <Input type="tel" placeholder="0123 456 789" className="border-slate-300" />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700">Nội dung</label>
                  <Textarea
                    placeholder="Chia sẻ nhu cầu của bạn..."
                    rows={4}
                    className="border-slate-300"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 group">
                  Gửi Yêu Cầu Tư Vấn
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Main CTA Card */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
              <div className="absolute inset-0 bg-black/20" />
              
              <div className="relative p-8 text-white">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                />

                <h3 className="text-2xl mb-4">Đừng Ngần Ngại Liên Hệ!</h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Hãy để Necimatech đồng hành cùng bạn xây dựng một website mơ ước, mở ra cánh cửa thành công trên thị trường số!
                </p>

                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur rounded-xl">
                  <Sparkles className="w-6 h-6 flex-shrink-0" />
                  <p className="text-sm">
                    Tư vấn miễn phí 100% - Báo giá chi tiết - Hỗ trợ tận tâm
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "contact@necimatech.com",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Phone,
                  title: "Hotline",
                  value: "1900 xxxx",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: MapPin,
                  title: "Địa chỉ",
                  value: "Hà Nội, Việt Nam",
                  color: "from-orange-500 to-red-500",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-slate-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`bg-gradient-to-br ${contact.color} p-3 rounded-lg`}
                    >
                      <contact.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-500">{contact.title}</p>
                      <p className="text-slate-900">{contact.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
