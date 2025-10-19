import { motion } from "motion/react";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function CTA() {
  const contactMethods = [
    {
      icon: Phone,
      label: "Hotline 24/7",
      value: "1900-xxxx",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@necimatech.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      value: "Tư vấn trực tuyến",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Sẵn sàng nâng tầm thương hiệu?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Liên hệ ngay với Necimatech Group để được tư vấn chi tiết và nhận báo giá 
            ưu đãi cho chiến dịch booking báo chí của bạn
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-12 py-7 shadow-2xl"
            >
              Đăng ký tư vấn miễn phí
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className="text-lg text-white/80 mb-1">{method.label}</div>
                <div className="text-xl text-white">{method.value}</div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
