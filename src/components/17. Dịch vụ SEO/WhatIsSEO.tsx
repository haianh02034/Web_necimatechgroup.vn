import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Search, BarChart3, Users, DollarSign } from "lucide-react";

export function WhatIsSEO() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const benefits = [
    {
      icon: Search,
      title: "Tăng khả năng hiển thị",
      description: "Website xuất hiện ở vị trí cao trên Google, dễ dàng tiếp cận khách hàng tiềm năng",
    },
    {
      icon: BarChart3,
      title: "Tăng lượng truy cập",
      description: "Thu hút traffic tự nhiên chất lượng cao không cần trả phí quảng cáo",
    },
    {
      icon: Users,
      title: "Xây dựng uy tín",
      description: "Tăng độ tin cậy và uy tín thương hiệu trong mắt khách hàng",
    },
    {
      icon: DollarSign,
      title: "Tiết kiệm chi phí",
      description: "Đầu tư dài hạn, mang lại doanh thu bền vững mà không phụ thuộc quảng cáo",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Dịch vụ SEO là gì?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            SEO (Search Engine Optimization) hay còn gọi là Tối ưu hóa công cụ tìm kiếm, là một tập hợp các phương pháp 
            nhằm cải thiện thứ hạng của website trên các trang kết quả tìm kiếm như Google, Bing, hay Cốc Cốc.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4"
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
