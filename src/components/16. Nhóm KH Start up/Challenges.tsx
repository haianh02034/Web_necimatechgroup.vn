import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { AlertCircle, DollarSign, Clock, TrendingDown } from "lucide-react";

const challenges = [
  {
    icon: AlertCircle,
    title: "Thiếu kinh nghiệm chuyên môn",
    description: "Các nhà sáng lập thường tập trung vào sản phẩm, thiếu kiến thức sâu về quảng cáo đa kênh, dẫn đến việc thiết lập chiến dịch không hiệu quả.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: DollarSign,
    title: "Ngân sách hạn chế",
    description: "Việc phân bổ ngân sách sai cách hoặc chạy thử nghiệm không có chiến lược rõ ràng có thể gây lãng phí lớn.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Clock,
    title: "Tốn thời gian và công sức",
    description: "Việc tự học hỏi, chạy và tối ưu các chiến dịch quảng cáo đòi hỏi rất nhiều thời gian, làm sao nhãng các hoạt động kinh doanh cốt lõi khác.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingDown,
    title: "Khó khăn trong việc đo lường hiệu quả",
    description: "Thiếu các công cụ và kỹ năng phân tích dữ liệu, startup không thể đánh giá chính xác ROI (Tỷ suất hoàn vốn) của các chiến dịch.",
    color: "from-blue-500 to-indigo-500"
  }
];

export function Challenges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Thách thức Startup gặp phải khi tự quảng cáo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những rào cản phổ biến khiến startup khó có thể tự triển khai quảng cáo hiệu quả
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-transparent hover:border-red-500"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
                className={`inline-block bg-gradient-to-br ${challenge.color} p-4 rounded-xl mb-4`}
              >
                <challenge.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl mb-3 text-gray-900">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}