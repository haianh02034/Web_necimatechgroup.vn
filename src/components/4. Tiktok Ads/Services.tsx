import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Card } from "../ui/card";
import { Smartphone, Camera, ShoppingBag, Video } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Xây dựng kênh TikTok chuyên nghiệp",
    description: "Phân tích thị trường và đối thủ để đưa ra chiến lược phù hợp, lên kế hoạch nội dung theo tuần/tháng",
    features: ["Phân tích thị trường", "Chiến lược nội dung", "Tối ưu lịch đăng tải"],
  },
  {
    icon: Camera,
    title: "Quay chụp sản phẩm",
    description: "Đội ngũ sáng tạo hỗ trợ quay video review, video tình huống, unbox theo phong cách chuyên nghiệp",
    features: ["Video review sản phẩm", "Video tình huống", "Chụp ảnh chuyên nghiệp"],
  },
  {
    icon: ShoppingBag,
    title: "Dịch vụ TikTok Shop",
    description: "Kết nối gian hàng TikTok Shop, tối ưu hình ảnh, mô tả, giá bán và voucher khuyến mãi",
    features: ["Tối ưu gian hàng", "Quản lý đơn hàng", "Tích hợp vận chuyển"],
  },
  {
    icon: Video,
    title: "Livestream TikTok",
    description: "Setup phòng livestream chuyên nghiệp với kịch bản, ánh sáng, thiết bị và đội ngũ MC giàu kinh nghiệm",
    features: ["Setup phòng live", "Kịch bản chuyên nghiệp", "Đội ngũ MC"],
  },
];

export function Services() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Dịch vụ TikTok Ads trọn gói của Necimatech Group
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Đơn vị tiên phong trong giải pháp marketing số toàn diện, triển khai thành công 
            nhiều dự án TikTok Ads cho SME, startup và doanh nghiệp lớn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
