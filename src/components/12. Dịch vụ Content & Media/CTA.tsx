import { motion } from 'motion/react';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Sẵn sàng nâng tầm thương hiệu?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Trong kỷ nguyên số vươn mình của dân tộc, Content & Media không chỉ là công cụ truyền thông mà còn là đòn bẩy thúc đẩy tăng trưởng doanh nghiệp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 gap-2 text-lg px-8 py-6">
              <Phone className="w-5 h-5" />
              Gọi ngay: 1900-xxxx
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 gap-2 text-lg px-8 py-6">
              <MessageCircle className="w-5 h-5" />
              Tư vấn miễn phí
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Phone, title: 'Hotline 24/7', info: '1900-xxxx' },
            { icon: Mail, title: 'Email', info: 'contact@necimatech.com' },
            { icon: MessageCircle, title: 'Live Chat', info: 'Luôn sẵn sàng hỗ trợ' }
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20 text-white text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex w-14 h-14 rounded-full bg-white/20 items-center justify-center mb-4"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="mb-2">{contact.title}</h3>
                  <p className="text-white/80">{contact.info}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-white/80 mt-12"
        >
          <p className="text-lg">
            Bắt đầu hành trình xây dựng thương hiệu vững mạnh hôm nay!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
