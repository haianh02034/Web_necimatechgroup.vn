import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Building2, Trophy } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Giải quyết bài toán doanh số",
    description:
      "Tối ưu hóa hiệu quả quảng cáo để đạt được doanh thu mong muốn",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    icon: Building2,
    title: "Xây dựng nền tảng vững chắc",
    description:
      "Chuẩn hóa hạ tầng marketing số, tạo tiền đề cho sự phát triển bền vững",
    color: "bg-gradient-to-br from-blue-500 to-indigo-500",
  },
  {
    icon: Trophy,
    title: "Nâng cao vị thế thương hiệu",
    description:
      "Tạo dựng hình ảnh chuyên nghiệp và uy tín, nổi bật giữa thị trường",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
];

export function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Necimatech -{" "}
            <span className="text-blue-600">
              Giải pháp toàn diện cho hành trình tăng trưởng
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi không chỉ là một đơn vị cung cấp dịch vụ quảng cáo mà còn là
            một đối tác chiến lược, đồng hành cùng bạn trên từng bước phát triển
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  <motion.div
                    className={`inline-flex p-5 rounded-2xl ${solution.color} mb-6 relative z-10`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl mb-4 relative z-10">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {solution.description}
                  </p>

                  {/* Animated particles */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-tl from-blue-100 to-transparent rounded-full opacity-0 group-hover:opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
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
