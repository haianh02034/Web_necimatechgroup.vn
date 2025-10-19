import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  BookX,
  DollarSign,
  Users,
  GitBranch,
} from "lucide-react";

const problems = [
  {
    icon: BookX,
    title: "Thiếu kiến thức và kinh nghiệm",
    description:
      "Chưa có đội ngũ chuyên trách am hiểu về marketing số, các công cụ, nền tảng quảng cáo và cách thức vận hành hiệu quả.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: DollarSign,
    title: "Nguồn lực hạn chế",
    description:
      "Ngân sách và nhân sự dành cho marketing số chưa được đầu tư đúng mức, gây khó khăn trong việc cạnh tranh với các đối thủ có tiềm lực mạnh hơn.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Users,
    title: "Tập trung vào sản phẩm, bỏ quên khách hàng",
    description:
      "Quá quen với việc kinh doanh truyền thống, doanh nghiệp chưa hiểu rõ hành vi, nhu cầu và thói quen tìm kiếm thông tin của khách hàng trên không gian mạng.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: GitBranch,
    title: "Vận hành rời rạc",
    description:
      "Các kênh marketing không được liên kết, dẫn đến thiếu sự đồng bộ và lãng phí nguồn lực.",
    color: "from-purple-500 to-pink-500",
  },
];

export function Problems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4">
            Những khó khăn mà doanh nghiệp truyền thống gặp phải?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Đứng trước bối cảnh chuyển đổi số mạnh mẽ, các doanh nghiệp truyền
            thống cần sự thay đổi và bứt phá để phù hợp hơn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300" />
                <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${problem.color} mb-6`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
