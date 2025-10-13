import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { Card } from "../ui/card";
import { Video, Eye, Users, TrendingUp } from "lucide-react";

const adTypes = [
  {
    icon: Video,
    title: "In-Feed Ads",
    description: "Quảng cáo xuất hiện xen kẽ trong luồng video",
  },
  {
    icon: Eye,
    title: "Top View",
    description: "Hiển thị toàn màn hình ngay khi mở ứng dụng",
  },
  {
    icon: Users,
    title: "Branded Content",
    description: "Nội dung thương hiệu kết hợp với KOL/Influencer",
  },
  {
    icon: TrendingUp,
    title: "Hashtag Challenge",
    description: "Thử thách đi kèm hashtag viral mạnh mẽ",
  },
];

const reasons = [
  "Độ phủ khổng lồ: TikTok đứng top đầu thế giới về thời lượng sử dụng app",
  "Khả năng viral mạnh mẽ: nội dung ngắn, bắt trend nhanh, dễ dàng lan tỏa",
  "Tối ưu doanh số: kết hợp quảng cáo với TikTok Shop & livestream",
  "Phù hợp đa ngành hàng: từ thời trang, mỹ phẩm, F&B đến giáo dục, công nghệ",
];

export function WhatIsTikTokAds() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            TikTok Ads là gì? Vì sao doanh nghiệp nên đầu tư?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            TikTok Ads là hệ thống quảng cáo của TikTok, cho phép thương hiệu hiển thị 
            nội dung đến người dùng mục tiêu thông qua các định dạng sáng tạo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {adTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-200">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl mb-6">Vì sao nên đầu tư TikTok Ads?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-sm">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
