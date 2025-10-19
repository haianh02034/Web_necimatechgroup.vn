import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Target, DollarSign, TrendingUp, Award } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Tiếp cận chính xác khách hàng mục tiêu",
    description: "Nhờ hệ thống targeting nâng cao (độ tuổi, giới tính, hành vi, sở thích...)",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "Tối ưu ngân sách quảng cáo",
    description: "Thông qua A/B Testing, báo cáo chi tiết, giảm thiểu lãng phí",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Tăng tỷ lệ chuyển đổi",
    description: "Tích hợp TikTok Shop, livestream bán hàng, seeding cộng đồng",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Xây dựng thương hiệu bền vững",
    description: "Nội dung sáng tạo, đúng trend, giúp thương hiệu luôn hiện diện",
    color: "from-orange-500 to-red-500",
  },
];

export function Benefits() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-4">
              Giải pháp tối ưu cho doanh nghiệp
            </h2>
            <p className="text-gray-600 mb-6">
              Không chỉ đơn thuần là chạy quảng cáo, dịch vụ TikTok Ads mang lại 
              hàng loạt lợi ích chiến lược cho Agency quảng cáo chuyên nghiệp
            </p>
            <p className="text-gray-600">
              Với kinh nghiệm triển khai thành công hàng trăm chiến dịch, Necimatech Group 
              hiểu rõ nhu cầu và thách thức của từng doanh nghiệp trong việc xây dựng thương hiệu 
              trên TikTok.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2MDQ4OTQ3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business Growth"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
              <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1">
                300%+
              </div>
              <div className="text-sm text-gray-600">Tăng trưởng trung bình</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl" 
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
