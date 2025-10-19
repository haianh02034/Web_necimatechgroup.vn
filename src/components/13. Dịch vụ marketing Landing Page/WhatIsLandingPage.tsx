import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Target, MousePointerClick, TrendingUp } from "lucide-react";

export function WhatIsLandingPage() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Target,
      title: "Tập trung mục tiêu",
      description: "Thiết kế chuyên biệt cho một mục tiêu duy nhất",
    },
    {
      icon: MousePointerClick,
      title: "Tối ưu chuyển đổi",
      description: "Tăng tỷ lệ khách hàng thực hiện hành động mong muốn",
    },
    {
      icon: TrendingUp,
      title: "Hiệu quả cao",
      description: "Công cụ quan trọng trong chiến dịch marketing",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Landing Page là gì?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Landing Page là một trang web chuyên biệt, được thiết kế tập trung
            vào một mục tiêu duy nhất như thu thập thông tin khách hàng, bán sản
            phẩm hoặc giới thiệu dịch vụ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
