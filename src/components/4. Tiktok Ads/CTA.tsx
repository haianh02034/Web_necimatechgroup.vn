import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function CTA() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1.5, 1, 1.5],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Sẵn sàng bứt phá doanh thu cùng TikTok Ads?
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            Liên hệ ngay hôm nay để được tư vấn miễn phí và lựa chọn gói dịch vụ phù hợp nhất!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <h3 className="text-2xl mb-6">Thông tin liên hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Hotline</div>
                    <div className="text-lg">1900 xxxx</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Email</div>
                    <div className="text-lg">contact@necimatech.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Địa chỉ</div>
                    <div className="text-lg">Hà Nội, Việt Nam</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-xl">
                <p className="text-sm text-white/90">
                  <span className="text-white">Lưu ý: </span>
                  Figma Make không được thiết kế để thu thập thông tin cá nhân (PII) 
                  hoặc bảo mật dữ liệu nhạy cảm. Đây chỉ là demo giao diện.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl mb-6">Đăng ký tư vấn miễn phí</h3>
              
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Họ và tên *" 
                    className="bg-input-background border-gray-200"
                  />
                </div>
                
                <div>
                  <Input 
                    placeholder="Số điện thoại *" 
                    className="bg-input-background border-gray-200"
                  />
                </div>
                
                <div>
                  <Input 
                    placeholder="Email *" 
                    type="email"
                    className="bg-input-background border-gray-200"
                  />
                </div>
                
                <div>
                  <Input 
                    placeholder="Tên doanh nghiệp" 
                    className="bg-input-background border-gray-200"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Mô tả nhu cầu của bạn" 
                    rows={4}
                    className="bg-input-background border-gray-200 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  size="lg"
                >
                  Gửi thông tin
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
