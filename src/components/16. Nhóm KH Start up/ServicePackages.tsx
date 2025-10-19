import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Sparkles, Rocket, Crown } from "lucide-react";
import { Button } from "../ui/button";

const packages = [
  {
    name: "Gói Basic",
    subtitle: "Khởi động mạnh mẽ, kiểm chứng thị trường",
    description: "Dành cho các startup ở giai đoạn đầu, muốn ra mắt sản phẩm và tìm kiếm những khách hàng đầu tiên.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Website/Landing Page chuyên nghiệp",
      "Google Search Ads - Tiếp cận chính xác",
      "Content & Social Media",
      "GA4 Tracking - Đo lường hiệu quả"
    ],
    highlight: false
  },
  {
    name: "Gói Pro",
    subtitle: "Tối đa hóa tiếp cận, tăng trưởng doanh số",
    description: "Dành cho các startup đã có nền tảng vững chắc và muốn mở rộng tệp khách hàng, gia tăng doanh số.",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    features: [
      "Quảng cáo đa kênh (GDN, YouTube, Remarketing)",
      "SEO (Technical & Content)",
      "PR Chuyên môn & KOL Niche",
      "Website Chuyên sâu - UX tối ưu",
      "Tất cả tính năng của gói Basic"
    ],
    highlight: true
  },
  {
    name: "Gói Premium",
    subtitle: "Bứt phá giới hạn, khẳng định vị thế dẫn đầu",
    description: "Dành cho các startup đang ở giai đoạn tăng trưởng mạnh và muốn bứt phá, vươn ra thị trường quốc tế.",
    icon: Crown,
    color: "from-orange-500 to-red-500",
    features: [
      "Google PMax & Shopping Ads",
      "Video Ads & Creative Strategy",
      "PR Thought-leadership & KOL Đa Nền tảng",
      "Workshop đào tạo Sales/CS",
      "Tất cả tính năng của gói Pro"
    ],
    highlight: false
  }
];

export function ServicePackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Những gói dịch vụ quảng cáo cho Startup
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chỉ có tại Necimatech - Giải pháp phù hợp cho mọi giai đoạn phát triển
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg, index, isInView }: { pkg: typeof packages[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: pkg.highlight ? 1.05 : 1.03, y: -10 }}
      className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all ${
        pkg.highlight ? "ring-4 ring-purple-500 ring-offset-4" : ""
      }`}
    >
      {pkg.highlight && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm"
        >
          Phổ biến nhất
        </motion.div>
      )}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className={`inline-block bg-gradient-to-br ${pkg.color} p-4 rounded-2xl mb-6`}
      >
        <pkg.icon className="w-10 h-10 text-white" />
      </motion.div>

      <h3 className="text-2xl mb-2 text-gray-900">{pkg.name}</h3>
      <p className="mb-4 text-gray-700">{pkg.subtitle}</p>
      <p className="text-gray-600 mb-6 text-sm">{pkg.description}</p>

      <div className="space-y-3 mb-8">
        {pkg.features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + i * 0.1 }}
            className="flex items-start gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center`}
            >
              <Check className="w-4 h-4 text-white" />
            </motion.div>
            <span className="text-sm text-gray-700">{feature}</span>
          </motion.div>
        ))}
      </div>

      <Button
        className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white`}
      >
        Tìm hiểu thêm
      </Button>
    </motion.div>
  );
}