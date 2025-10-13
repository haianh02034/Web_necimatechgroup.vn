import { Button } from "../ui/button";
import { ArrowRight, Phone, Mail, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-700 text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758526213756-9aecbea6bcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG9ubGluZSUyMGVjb21tZXJjZSUyMG1vYmlsZXxlbnwxfHx8fDE3NTk5OTU2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30"
            >
              <Sparkles className="w-5 h-5" />
              <span>Ưu đãi đặc biệt cho 50 khách hàng đầu tiên</span>
            </motion.div>

            <h2 className="mb-6">
              Sẵn sàng bứt phá doanh thu với Zalo OA?
            </h2>
            
            <p className="text-blue-100 mb-8">
              Đăng ký ngay hôm nay để trải nghiệm dịch vụ quảng cáo ZALO OA trọn gói, 
              minh bạch và chuyên nghiệp từ Necimatech Group
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 group shadow-2xl">
                Đăng ký ngay
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm">
                Tư vấn miễn phí
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Phone, text: "0123 456 789", label: "Hotline", gradient: "from-green-400 to-emerald-500" },
              { icon: Mail, text: "contact@necimatech.com", label: "Email", gradient: "from-blue-400 to-cyan-500" },
              { icon: MessageCircle, text: "Zalo: Necimatech", label: "Zalo", gradient: "from-purple-400 to-pink-500" },
            ].map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all relative overflow-hidden group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg`}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </motion.div>
                <p className="text-blue-100 mb-1">{contact.label}</p>
                <p>{contact.text}</p>

                {/* Shimmer effect */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated decorative elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-400 rounded-full opacity-20 blur-3xl"
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              bottom: '10%',
            }}
          />
        ))}
      </div>
    </section>
  );
}
