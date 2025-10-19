import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Users, TrendingUp, Target } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Độc quyền & Chuyên nghiệp",
    description: "Thiết kế theo yêu cầu, làm nổi bật thương hiệu của bạn.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Tối ưu trải nghiệm người dùng",
    description: "Giao diện đẹp, dễ sử dụng, tốc độ tải nhanh, giữ chân khách hàng lâu hơn.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Hỗ trợ kinh doanh",
    description: "Tích hợp các tính năng bán hàng và marketing giúp tăng doanh thu.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Target,
    title: "Phát triển bền vững",
    description: "Website được xây dựng với tầm nhìn dài hạn, trở thành một tài sản số có giá trị lâu dài.",
    color: "from-green-500 to-emerald-500",
  },
];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
            Lợi Ích Khi Sử Dụng Dịch Vụ Của Necimatech
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Khi lựa chọn Necimatech, bạn không chỉ sở hữu một website mà còn nhận được những lợi ích vượt trội
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                <div className="relative bg-white rounded-2xl p-8 h-full border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block bg-gradient-to-br ${benefit.color} p-4 rounded-xl mb-6 shadow-lg`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl mb-4 text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`h-1 bg-gradient-to-r ${benefit.color} mt-6 rounded-full origin-left`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Dự án hoàn thành" },
            { number: "98%", label: "Khách hàng hài lòng" },
            { number: "24/7", label: "Hỗ trợ kỹ thuật" },
            { number: "100%", label: "Cam kết chất lượng" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
