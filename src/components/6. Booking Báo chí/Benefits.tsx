import { motion } from "motion/react";
import { Shield, Target, Share2, BarChart3, AlertCircle, TrendingUp } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Gia tăng uy tín thương hiệu",
      description: "Xuất hiện trên các báo điện tử uy tín giúp thương hiệu trở nên đáng tin cậy hơn trong mắt công chúng và đối tác",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Tiếp cận đúng đối tượng",
      description: "Nhờ tư vấn chiến lược booking KOL và lựa chọn báo chí phù hợp, tiếp cận chính xác nhóm khách hàng mục tiêu",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Share2,
      title: "Lan tỏa đa kênh",
      description: "Kết hợp cùng social media, KOL/Influencer để tạo sức lan tỏa mạnh mẽ, phủ sóng thương hiệu trên nhiều nền tảng",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Đo lường & tối ưu",
      description: "Mỗi chiến dịch đều đi kèm báo cáo chi tiết, đánh giá chính xác hiệu quả truyền thông và tối ưu ngân sách",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: AlertCircle,
      title: "Xử lý khủng hoảng",
      description: "Hỗ trợ Crisis Communication, giúp doanh nghiệp kịp thời xử lý, bảo vệ hình ảnh và lấy lại niềm tin công chúng",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Tăng trưởng bền vững",
      description: "Xây dựng nền tảng truyền thông vững chắc, góp phần phát triển thương hiệu lâu dài và bền vững",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            Lợi ích vượt trội
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            Tại sao chọn chúng tôi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            6 lợi ích vượt trội khi sử dụng dịch vụ Booking Báo chí từ Necimatech Group
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                  {/* Animated Icon Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="relative mb-6"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center shadow-lg relative`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-xl blur-xl opacity-0 group-hover:opacity-50`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>

                    {/* Orbiting particles */}
                    <motion.div
                      className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br ${benefit.color} rounded-full`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                  </motion.div>

                  <h3 className="text-2xl mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>

                  {/* Animated bottom border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
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
