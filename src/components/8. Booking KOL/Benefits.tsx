import { motion } from "motion/react";
import { Users2, Wallet, Globe2, TrendingUp, BarChart3, Shield } from "lucide-react";

const benefits = [
  {
    icon: Users2,
    title: "Tiếp cận đúng tệp khách hàng mục tiêu",
    description: "Phân tích chân dung khách hàng, lựa chọn KOL có đối tượng follower phù hợp nhất với thương hiệu của bạn.",
  },
  {
    icon: Wallet,
    title: "Tối ưu ngân sách truyền thông",
    description: "Đánh giá kỹ mức độ ảnh hưởng, chi phí booking để không lãng phí ngân sách vào các KOL không phù hợp.",
  },
  {
    icon: Globe2,
    title: "Lan tỏa đa kênh",
    description: "Hệ thống kết nối hàng ngàn KOL trên TikTok, Instagram, Facebook, YouTube - phủ sóng mạnh mẽ đa nền tảng.",
  },
  {
    icon: TrendingUp,
    title: "Tăng nhận diện và uy tín thương hiệu",
    description: "Thông điệp được truyền tải bởi KOL uy tín, nâng tầm chuyên nghiệp, tạo niềm tin với khách hàng.",
  },
  {
    icon: BarChart3,
    title: "Đo lường hiệu quả rõ ràng",
    description: "Báo cáo chi tiết về lượt tiếp cận, tương tác, chuyển đổi để tối ưu chiến dịch liên tục.",
  },
  {
    icon: Shield,
    title: "Hỗ trợ xử lý khủng hoảng kịp thời",
    description: "Đội ngũ chuyên gia Crisis Communication sẵn sàng xử lý rủi ro và khôi phục niềm tin khách hàng.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Lợi ích vượt trội khi sử dụng dịch vụ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Booking KOL không đơn thuần là "thuê một người nổi tiếng đăng bài", 
            mà là cả một chiến lược truyền thông có kế hoạch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ padding: '2px' }}
                >
                  <div className="bg-white h-full w-full rounded-2xl" />
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 mb-4"
                  >
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </motion.div>

                  <h3 className="mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
