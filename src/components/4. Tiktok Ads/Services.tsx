import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Smartphone, Camera, ShoppingBag, Video } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Xây dựng kênh TikTok chuyên nghiệp",
    description: "Phân tích thị trường và đối thủ để đưa ra chiến lược phù hợp, lên kế hoạch nội dung theo tuần/tháng. Necimatech đảm bảo bắt trend kịp thời và tối ưu lịch đăng tải, giúp tăng lượt tiếp cận tự nhiên bền vững.",
    features: ["Phân tích thị trường", "Chiến lược nội dung", "Tối ưu lịch đăng tải", "Bắt trend kịp thời"],
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcHxlbnwxfHx8fDE3NjA0Mjk1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Camera,
    title: "Quay chụp sản phẩm",
    description: "Đội ngũ sáng tạo hỗ trợ quay video review, video tình huống, unbox theo phong cách chuyên nghiệp. Chụp ảnh sản phẩm bắt mắt, xây dựng nội dung sống động và dễ viral, giúp thương hiệu thu hút khách hàng nhanh chóng.",
    features: ["Video review sản phẩm", "Video tình huống", "Chụp ảnh chuyên nghiệp", "Nội dung dễ viral"],
    image: "https://images.unsplash.com/photo-1760094454973-cd35be36e5bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzYwNTA1MDU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: ShoppingBag,
    title: "Dịch vụ TikTok Shop",
    description: "Kết nối gian hàng TikTok Shop với kênh TikTok, tối ưu hình ảnh, mô tả, giá bán và voucher khuyến mãi. Nhờ vậy, tỷ lệ chốt đơn được gia tăng rõ rệt, đồng thời hỗ trợ quản lý đơn hàng, tích hợp vận chuyển và thanh toán tiện lợi.",
    features: ["Tối ưu gian hàng", "Quản lý đơn hàng", "Tích hợp vận chuyển", "Tăng tỷ lệ chốt đơn"],
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NjA0NTAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Video,
    title: "Livestream TikTok",
    description: "Setup phòng livestream chuyên nghiệp (bao gồm kịch bản, ánh sáng, thiết bị), cùng đội ngũ MC và nhân sự giàu kinh nghiệm. Livestream tương tác trực tiếp giúp chốt đơn nhanh chóng, tổ chức mini game hấp dẫn và tặng voucher giữ chân khách hàng.",
    features: ["Setup phòng live", "Kịch bản chuyên nghiệp", "Đội ngũ MC", "Mini game & voucher"],
    image: "https://images.unsplash.com/photo-1758874384113-4059f76860c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RyZWFtJTIwYnJvYWRjYXN0aW5nJTIwc3R1ZGlvfGVufDF8fHx8MTc2MDUwNTA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
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
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-300 group">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden group">
  {/* Ảnh nền */}
  <ImageWithFallback
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Lớp phủ mờ giúp đọc rõ tiêu đề */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

  {/* Khối tiêu đề căn giữa dưới */}
  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-3 bg-gradient-to-r from-black/50 via-black/20 to-transparent backdrop-blur-sm rounded-xl p-2">
    <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-lg flex-shrink-0">
      <service.icon className="w-5 h-5 text-white" />
    </div>
    <h2 className="text-white font-semibold text-base drop-shadow-lg">
      {service.title}
    </h2>
  </div>
</div>

                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
