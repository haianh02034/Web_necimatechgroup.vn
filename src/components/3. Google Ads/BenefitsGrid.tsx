import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Percent, CreditCard, ShieldCheck, Headphones } from "lucide-react";

export function BenefitsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits = [
    {
      icon: Percent,
      title: "0% Thuế VAT",
      description: "Tiết kiệm chi phí quảng cáo tối đa cho doanh nghiệp"
    },
    {
      icon: CreditCard,
      title: "Tài khoản Invoice linh hoạt",
      description: "Chủ động ngân sách, dễ kiểm soát dòng tiền"
    },
    {
      icon: ShieldCheck,
      title: "Không chi phí ẩn",
      description: "Cam kết minh bạch, giá trọn gói rõ ràng"
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ chuyên gia luôn đồng hành, xử lý kịp thời"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">
            Quyền lợi hấp dẫn TOP đầu
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Khi hợp tác với Necimatech, bạn nhận được nhiều ưu đãi độc quyền
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6"
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
