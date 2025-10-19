import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Globe, TrendingUp, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Bộ Mặt Thương Hiệu",
    description: "Website là nơi khách hàng đầu tiên tìm đến để tìm hiểu về sản phẩm, dịch vụ và uy tín của bạn.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Công Cụ Bán Hàng",
    description: "Công cụ mạnh mẽ để bán hàng, marketing và xây dựng lòng tin với khách hàng.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Vận Hành 24/7",
    description: "Website giúp doanh nghiệp tiếp cận thị trường rộng lớn và vận hành hiệu quả mọi lúc.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Doanh Thu Bền Vững",
    description: "Với một nền tảng vững chắc, website tạo ra doanh thu bền vững cho doanh nghiệp.",
    color: "from-green-500 to-emerald-500",
  },
];

export function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            Website - Tài Sản Số Chiến Lược Cho Doanh Nghiệp
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Trong thời đại công nghệ số bùng nổ, website không chỉ là một địa chỉ online mà còn là tài sản số chiến lược của mọi doanh nghiệp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl" 
                     style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`inline-block bg-gradient-to-br ${feature.color} p-4 rounded-xl mb-6 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${feature.color} mt-6 rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
