import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { TrendingUp, Users, Award, DollarSign } from "lucide-react";

const stats = [
  { value: "1M+", label: "Khách hàng tiếp cận", icon: Users, color: "from-blue-500 to-cyan-500" },
  { value: "500+", label: "Dự án thành công", icon: Award, color: "from-purple-500 to-pink-500" },
  { value: "98%", label: "Khách hàng hài lòng", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
  { value: "8x", label: "ROI trung bình", icon: DollarSign, color: "from-orange-500 to-red-500" },
];

export function Stats() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                <motion.div
                  animate={isInView ? { rotate: 360 } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto opacity-10 group-hover:opacity-20 transition-opacity`}
                />
                <stat.icon className={`w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className={`text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
