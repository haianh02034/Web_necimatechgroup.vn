import { motion } from "motion/react";
import { ClipboardList, Users, FileEdit, Rocket, BarChart, Settings } from "lucide-react";
import { useState } from "react";

const steps = [
  { icon: ClipboardList, title: "Tiếp nhận yêu cầu & tư vấn", description: "Phân tích mục tiêu, ngân sách, khách hàng mục tiêu của doanh nghiệp", color: "from-blue-500 to-cyan-500" },
  { icon: Users, title: "Lựa chọn KOL phù hợp", description: "Dựa trên ngành hàng, tệp follower và mức độ ảnh hưởng", color: "from-purple-500 to-pink-500" },
  { icon: FileEdit, title: "Soạn thảo brief & quản lý nội dung", description: "Đảm bảo KOL truyền tải đúng thông điệp thương hiệu", color: "from-green-500 to-emerald-500" },
  { icon: Rocket, title: "Booking & triển khai", description: "Liên hệ, thương thảo, triển khai đồng bộ trên nhiều kênh", color: "from-orange-500 to-red-500" },
  { icon: BarChart, title: "Theo dõi – đo lường – báo cáo", description: "Cung cấp số liệu chi tiết từng KOL và tổng thể chiến dịch", color: "from-indigo-500 to-purple-500" },
  { icon: Settings, title: "Tối ưu & xử lý khủng hoảng", description: "Điều chỉnh kịp thời, hỗ trợ truyền thông trong tình huống khẩn cấp", color: "from-pink-500 to-rose-500" },
];

export function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quy trình triển khai <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">6 bước</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Quy trình chuẩn mực đảm bảo hiệu quả cao nhất cho chiến dịch của bạn
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "5rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
                    className={`absolute top-20 ${isEven ? "left-8" : "right-8"} w-1 bg-gradient-to-b ${step.color} rounded-full`}
                  />
                )}

                <div className={`flex flex-col md:flex-row items-start gap-6 mb-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl relative z-10`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ y: -5 }}
                    className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl blur bg-gradient-to-r ${step.color} -z-10 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-20" : "opacity-0"}`}
                    />
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Optional Commitment Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-green-200 shadow-xl relative overflow-hidden"
        >
          <h3 className="text-2xl font-bold mb-3 text-green-800">⚡ Cam kết triển khai nhanh chóng</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Chúng tôi đảm bảo hoàn thiện chiến dịch trong vòng{" "}
            <span className="font-bold text-green-600">7 ngày làm việc</span>, theo dõi liên tục và tối ưu hiệu quả.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
