import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Award, CheckCircle2 } from "lucide-react";

export function PartnerBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const badges = [
    {
      icon: Shield,
      title: "Google Partner",
      description: "Đối tác chính thức được Google chứng nhận",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Meta Business Partner",
      description: "Đối tác kinh doanh được Meta công nhận",
      color: "from-purple-500 to-pink-500",
    },
      {
      icon: CheckCircle2,
      title: "Chứng nhận chất lượng",
      description: "Cam kết hiệu quả và chuyên nghiệp",
      color: "from-green-500 to-emerald-500",
      bgHover: "from-green-50 to-emerald-50",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Hiệu ứng nền sáng động */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 opacity-40 blur-3xl"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-gray-900">
            Necimatech – Đối tác cao cấp được chứng nhận
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Necimatech Group tự hào là đối tác chính thức được công nhận về năng lực triển khai quảng cáo – 
            khẳng định uy tín, chuyên nghiệp và cam kết mang lại hiệu quả tối ưu.
          </p>
        </motion.div>

        {/* Các thẻ đối tác */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Lớp ánh sáng nền hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className={`w-20 h-20 bg-gradient-to-br ${badge.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md`}
              >
                <badge.icon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Nội dung */}
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-3">
                {badge.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {badge.description}
              </p>

              {/* Viền phát sáng nhẹ khi hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-br ${badge.color}`}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
