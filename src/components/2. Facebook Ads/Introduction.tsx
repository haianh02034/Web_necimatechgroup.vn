import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, BarChart3, Award } from "lucide-react";

export default function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      value: "84%",
      label: "Doanh nghiệp tìm được khách hàng mới",
      color: "from-blue-500 to-cyan-500",
      hover: "from-blue-600 to-indigo-500",
    },
    {
      icon: BarChart3,
      value: "1.5-2x",
      label: "ROI cao hơn kênh truyền thống",
      color: "from-indigo-500 to-purple-500",
      hover: "from-violet-500 to-pink-500",
    },
    {
      icon: Award,
      value: "2-3h",
      label: "Người dùng dành mỗi ngày trên Facebook",
      color: "from-pink-500 to-red-500",
      hover: "from-rose-500 to-orange-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-gray-900 font-semibold">
            Facebook Ads là gì? Vì sao doanh nghiệp cần đầu tư?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Facebook Ads là nền tảng quảng cáo trả phí của Facebook, cho phép doanh nghiệp hiển thị
            sản phẩm/dịch vụ đến đúng nhóm khách hàng tiềm năng dựa trên hành vi, độ tuổi, vị trí, sở thích.
          </p>
        </motion.div>

        {/* Thống kê */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
          <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative group cursor-pointer"
            >
              <div
                className={`relative overflow-hidden p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white group-hover:shadow-2xl transition-all duration-500`}
              >
                {/* Hiệu ứng nền đổi màu khi hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.hover} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Text chuyển màu khi hover */}
                <div className="relative z-10 text-center">
                  <h3 className={`text-4xl font-semibold mb-3 transition-all duration-500 text-gray-900 group-hover:bg-gradient-to-r group-hover:${stat.hover} group-hover:bg-clip-text group-hover:text-transparent`}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA cuối */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg"
        >
          <p className="text-xl md:text-2xl leading-relaxed">
            Nếu doanh nghiệp muốn cạnh tranh trong kỷ nguyên số,{" "}
            <strong className="font-semibold text-yellow-300">đầu tư vào Facebook Ads</strong> là
            <strong> lựa chọn bắt buộc</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
