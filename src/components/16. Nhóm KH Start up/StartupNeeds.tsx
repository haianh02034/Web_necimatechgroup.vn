import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, Globe, Target, DollarSign, BarChart3 } from "lucide-react";

const needs = [
  {
    icon: Users,
    title: "Xác định khách hàng mục tiêu",
    description: "Phân tích thị trường để tìm ra 'chân dung' khách hàng lý tưởng, những người thực sự cần giải pháp của bạn.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Tạo dựng điểm chạm chuyên nghiệp",
    description: "Xây dựng một website hoặc landing page thật sự thuyết phục, giúp khách hàng tiềm năng dễ dàng tìm hiểu và trải nghiệm sản phẩm.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Tiếp cận khách hàng tiềm năng",
    description: "Sử dụng các kênh quảng cáo tập trung, hướng đến đúng đối tượng để thu thập những khách hàng đầu tiên.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: DollarSign,
    title: "Tối ưu chi phí",
    description: "Tận dụng ngân sách một cách thông minh, tập trung vào các chiến dịch mang lại hiệu quả chuyển đổi cao nhất.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Đo lường và phân tích",
    description: "Thiết lập các công cụ để theo dõi hành vi người dùng, đánh giá hiệu quả của từng chiến dịch.",
    color: "from-indigo-500 to-blue-500"
  }
];

export function StartupNeeds() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Startup cần gì ở giai đoạn khởi đầu?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ở giai đoạn đầu, mục tiêu của các startup không phải là phủ sóng rộng rãi, mà là xác nhận sản phẩm phù hợp với thị trường (Product-Market Fit).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {needs.map((need, index) => (
            <NeedCard key={index} need={need} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NeedCard({ need, index, isInView }: { need: typeof needs[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className={`inline-block bg-gradient-to-br ${need.color} p-4 rounded-xl mb-4`}
      >
        <need.icon className="w-8 h-8 text-white" />
      </motion.div>
      <h3 className="text-xl mb-3 text-gray-900">{need.title}</h3>
      <p className="text-gray-600">{need.description}</p>
    </motion.div>
  );
}