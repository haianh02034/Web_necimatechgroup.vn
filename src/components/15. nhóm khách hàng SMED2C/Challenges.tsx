import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { DollarSign, Award, Users, TrendingDown } from "lucide-react";

const challenges = [
  {
    icon: DollarSign,
    title: "Thách thức về ngân sách và hiệu quả quảng cáo",
    description:
      "Với nguồn lực hạn chế, mỗi đồng chi phí quảng cáo đều phải mang lại hiệu quả cao nhất. Việc chạy quảng cáo thiếu chiến lược và không tối ưu có thể dẫn đến lãng phí, không thu về doanh số.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Khó khăn trong việc xây dựng thương hiệu và uy tín",
    description:
      "Giữa hàng ngàn đối thủ cạnh tranh, làm thế nào để khách hàng nhớ đến và tin tưởng thương hiệu của bạn? Việc xây dựng một hình ảnh chuyên nghiệp và một câu chuyện thương hiệu nhất quán đòi hỏi sự đầu tư lớn về thời gian và công sức.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingDown,
    title: "Cạnh tranh gay gắt trên các nền tảng trực tuyến",
    description:
      "Từ Facebook, Google cho đến TikTok, mọi nền tảng đều là một 'chiến trường' khốc liệt. Nếu không có chiến lược rõ ràng, doanh nghiệp rất dễ bị lu mờ trước những đối thủ lớn hơn.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Thiếu kiến thức và đội ngũ chuyên môn",
    description:
      "Các chủ doanh nghiệp SME/D2C thường phải kiêm nhiệm nhiều vai trò, thiếu thời gian và chuyên môn để theo dõi, phân tích và tối ưu các chiến dịch marketing số phức tạp.",
    color: "from-green-500 to-teal-500",
  },
];

export function Challenges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Thách thức của doanh nghiệp SME/D2C{" "}
            <span className="text-blue-600">trong kỷ nguyên số</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trong thế giới kinh doanh hiện đại, các doanh nghiệp vừa và nhỏ đang đối
            mặt với nhiều áp lực lớn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${challenge.color} mb-6`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl mb-4">{challenge.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                  
                  {/* Animated corner decoration */}
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
