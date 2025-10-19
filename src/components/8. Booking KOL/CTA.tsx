import { motion } from "motion/react";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block mb-8"
            >
              <div className="p-6 rounded-full bg-white/20 backdrop-blur-lg">
                <MessageCircle className="w-16 h-16" />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-5xl mb-6">
              Sẵn sàng đưa thương hiệu lên tầm cao mới?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Liên hệ ngay hôm nay để nhận tư vấn miễn phí và bảng báo giá chi tiết!
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 group"
              >
                Tư vấn miễn phí
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Xem bảng giá
              </Button>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                { icon: Phone, text: "1900 xxxx", label: "Hotline" },
                { icon: Mail, text: "contact@necimatech.com", label: "Email" },
                { icon: MessageCircle, text: "Necimatech Group", label: "Messenger" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <contact.icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-white/80 mb-1">{contact.label}</div>
                  <div>{contact.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
}
