import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              KOL và lợi ích của dịch vụ Booking KOL là gì?
            </h2>
            <p className="mb-4 text-gray-700">
              <strong>KOL (Key Opinion Leader)</strong> – những người có sức ảnh hưởng trong cộng đồng đang trở thành từ khóa được nhiều người dùng mạng xã hội quan tâm tới. Từ một lời giới thiệu, một bài review, hay một video trải nghiệm của KOL, hành vi mua sắm của khách hàng có thể thay đổi ngay lập tức.
            </p>
            <p className="mb-6 text-gray-700">
              Chính vì thế, Booking KOL đã trở thành chiến lược marketing không thể thiếu trong hành trình xây dựng thương hiệu. Hiểu rõ xu thế đó, <strong>Necimatech Group</strong> mang đến dịch vụ Booking KOL đa nền tảng – giải pháp trọn gói, tối ưu chi phí, giúp doanh nghiệp tiếp cận khách hàng mục tiêu hiệu quả và bền vững.
            </p>
            <p className="mb-6 text-gray-700">
              Booking KOL là quá trình doanh nghiệp hợp tác với các cá nhân có tầm ảnh hưởng (KOL/Influencer) để truyền tải thông điệp thương hiệu, quảng bá sản phẩm/dịch vụ đến cộng đồng người theo dõi của họ.
            </p>
            <p className="mb-6 text-gray-700">
              Khác với quảng cáo truyền thống, KOL có khả năng tác động trực tiếp đến quyết định mua hàng, bởi họ sở hữu lượng fan trung thành, có niềm tin vào sự lựa chọn và đánh giá của thần tượng.
            </p>
            
            <h3 className="mb-4 text-gray-900">Đặc điểm nổi bật của Booking KOL:</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Lựa chọn đúng người, đúng ngành:</strong> mỗi KOL có tệp người theo dõi riêng, phù hợp với từng lĩnh vực
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Đa dạng hình thức triển khai:</strong> livestream bán hàng, review sản phẩm, video TikTok, post Instagram, clip YouTube, status Facebook...
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Tối ưu hiệu quả lan tỏa:</strong> thông điệp truyền tải được khuếch đại bởi uy tín cá nhân và hiệu ứng cộng đồng
                </p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-purple-50 rounded-xl border border-purple-200">
              <p className="text-gray-700">
                Tại <strong>Necimatech Group</strong>, dịch vụ Booking KOL không chỉ dừng lại ở việc kết nối với KOL, mà còn bao gồm tư vấn chiến lược, quản lý nội dung, đo lường hiệu quả và hỗ trợ xử lý khủng hoảng.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwc29jaWFsJTIwbWVkaWF8ZW58MXx8fHwxNzYwNDMyMTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Influencer Social Media"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
