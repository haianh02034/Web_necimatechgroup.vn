import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, DollarSign, Zap, Users, ThumbsUp, Clock } from "lucide-react";

export function AdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Award,
      title: "Đối tác chính thức của Google",
      description: "Đảm bảo triển khai theo chuẩn quốc tế, được Google công nhận",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: DollarSign,
      title: "Chi phí cạnh tranh",
      description: "Mang lại giá trị tối đa cho từng đồng chi tiêu của bạn",
      color: "from-orange-400 to-amber-500",
    },
    {
      icon: Zap,
      title: "Triển khai tối ưu",
      description: "Áp dụng quy trình khoa học, tiết kiệm thời gian và chi phí",
      color: "from-teal-400 to-emerald-500",
    },
    {
      icon: Users,
      title: "Đội ngũ giàu kinh nghiệm",
      description: "Am hiểu đa ngành, tối ưu cho từng lĩnh vực cụ thể",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: ThumbsUp,
      title: "Dịch vụ chất lượng cao",
      description: "Chăm sóc khách hàng chuyên nghiệp, tận tâm 24/7",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Cam kết đúng tiến độ",
      description: "Đồng hành cùng kế hoạch kinh doanh của doanh nghiệp",
      color: "from-amber-400 to-yellow-500",
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
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
            Lợi thế vượt trội chỉ có tại Necimatech
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Những giá trị cốt lõi khiến chúng tôi trở thành đối tác đáng tin cậy của hàng nghìn doanh nghiệp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
            >
              {/* Hiệu ứng nền đổi màu khi hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${adv.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Nội dung chính */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 bg-gradient-to-br ${adv.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <adv.icon className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {adv.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
