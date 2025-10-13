import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";

const stats = [
  { value: "1M+", label: "Khách hàng tiếp cận" },
  { value: "200+", label: "Dự án thành công" },
  { value: "95%", label: "Khách hàng hài lòng" },
  { value: "5x", label: "ROI trung bình" },
];

export function Stats() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
