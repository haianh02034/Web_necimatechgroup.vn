import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Zap, Target, DollarSign, TrendingUp, Users, BarChart } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: Zap,
      title: "Tiếp cận nhanh chóng",
      description: "Quảng cáo hiển thị ngay khi khách hàng tìm kiếm"
    },
    {
      icon: Target,
      title: "Nhắm chính xác",
      description: "Tiếp cận đúng đối tượng khách hàng mục tiêu"
    },
    {
      icon: DollarSign,
      title: "Tối ưu chi phí",
      description: "Kiểm soát ngân sách và chi phí hiệu quả"
    },
    {
      icon: BarChart,
      title: "Đo lường minh bạch",
      description: "Theo dõi và phân tích hiệu quả real-time"
    },
    {
      icon: TrendingUp,
      title: "Tăng trưởng bền vững",
      description: "Mở rộng quy mô và doanh thu liên tục"
    },
    {
      icon: Users,
      title: "Mở rộng khách hàng",
      description: "Tiếp cận hàng triệu người dùng tiềm năng"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl mb-6">
              Tiếp cận khách hàng, bứt phá doanh thu với Quảng cáo Google
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Google Ads là kênh quảng cáo trực tuyến hiệu quả hàng đầu hiện nay, 
              cho phép doanh nghiệp tiếp cận khách hàng tiềm năng ngay khi họ tìm kiếm sản phẩm, dịch vụ liên quan.
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBhZHMlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU5NzU0MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Google Ads Analytics"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
