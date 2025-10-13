import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Search, Monitor, Youtube, ShoppingBag, Smartphone, MapPin, Layers, RotateCcw } from "lucide-react";

export function AdFormatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const formats = [
    { icon: Search, title: "Search Ads", description: "Quảng cáo tìm kiếm", color: "from-blue-500 to-blue-600" },
    { icon: Monitor, title: "Display Ads (GDN)", description: "Quảng cáo banner trên website, ứng dụng", color: "from-indigo-500 to-indigo-600" },
    { icon: Youtube, title: "YouTube Ads", description: "Quảng cáo video sinh động", color: "from-red-500 to-red-600" },
    { icon: ShoppingBag, title: "Shopping Ads", description: "Quảng cáo sản phẩm kèm giá và hình ảnh", color: "from-green-500 to-green-600" },
    { icon: Smartphone, title: "App Ads", description: "Quảng cáo ứng dụng di động", color: "from-purple-500 to-purple-600" },
    { icon: MapPin, title: "Local Campaigns", description: "Chiến dịch địa phương", color: "from-orange-500 to-orange-600" },
    { icon: Layers, title: "Performance Max", description: "Chiến dịch đa nền tảng tự động", color: "from-pink-500 to-pink-600" },
    { icon: RotateCcw, title: "Remarketing", description: "Nhắm lại khách hàng cũ để tăng chuyển đổi", color: "from-teal-500 to-teal-600" }
  ];

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900 font-semibold">
            Triển khai đa dạng hình thức quảng cáo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Necimatech cung cấp đầy đủ định dạng Google Ads hiện đại, phù hợp với mọi mục tiêu marketing
          </p>
        </motion.div>

        {/* Danh sách định dạng quảng cáo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {formats.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="relative h-full bg-white p-8 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
                {/* Hiệu ứng ánh sáng gradient khi hover */}
                <motion.div
                  initial={false}
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  animate={{
                    backgroundImage: isInView
                      ? `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(0,0,0,0.05))`
                      : undefined
                  }}
                />
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className={`relative z-10 w-16 h-16 bg-gradient-to-r ${format.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:brightness-110 transition-all duration-300`}
                >
                  <format.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Nội dung */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{format.title}</h3>
                  <p className="text-gray-600 text-sm">{format.description}</p>
                </div>

                {/* Ánh sáng lan tỏa khi hover */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${format.color} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Đoạn kết */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Với đầy đủ các định dạng quảng cáo, Necimatech giúp doanh nghiệp tiếp cận khách hàng ở mọi điểm chạm.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
