import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { DollarSign, Clock, BarChart3, Target } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Tối ưu chi phí hiệu quả",
    description: "Chúng tôi biết cách sử dụng ngân sách một cách thông minh, tập trung vào các kênh mang lại hiệu quả cao nhất để tránh lãng phí.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    title: "Tiết kiệm thời gian và nhân lực",
    description: "Đội ngũ chuyên gia của chúng tôi sẽ thay bạn thực hiện toàn bộ quy trình quảng cáo, từ lên kế hoạch, triển khai đến tối ưu.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Đo lường và báo cáo minh bạch",
    description: "Chúng tôi cung cấp các báo cáo chi tiết, dễ hiểu, giúp bạn nắm rõ hiệu quả của từng chiến dịch.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Phù hợp với từng giai đoạn phát triển",
    description: "Với các gói dịch vụ đa dạng từ Basic, Pro đến Premium, chúng tôi đảm bảo có một giải pháp phù hợp với quy mô và mục tiêu phát triển của startup bạn.",
    color: "from-orange-500 to-red-500"
  }
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tại sao nên chọn Necimatech?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Đối tác chiến lược đồng hành cùng bạn trên mọi bước đường phát triển
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className={`inline-block bg-gradient-to-br ${reason.color} p-5 rounded-2xl mb-4`}
              >
                <reason.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl mb-3 text-gray-900">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}