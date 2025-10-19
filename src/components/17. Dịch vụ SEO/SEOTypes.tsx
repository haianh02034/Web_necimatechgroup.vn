import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import { FileSearch, Settings, MapPin, ShoppingCart, FileText, Target, BarChart } from "lucide-react";

export function SEOTypes() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: FileSearch,
      title: "SEO Audit",
      description: "Kiểm tra tổng thể website để phát hiện lỗi và cơ hội tối ưu",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Settings,
      title: "SEO Technical",
      description: "Tối ưu kỹ thuật website cho tốc độ và khả năng crawl",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "SEO Local",
      description: "Tối ưu để thu hút khách hàng trong khu vực địa phương",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: ShoppingCart,
      title: "SEO E-commerce",
      description: "Tối ưu chuyên biệt cho website thương mại điện tử",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FileText,
      title: "SEO Content",
      description: "Nghiên cứu từ khóa và viết bài chuẩn SEO chất lượng cao",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Target,
      title: "Chiến lược SEO tổng thể",
      description: "Xây dựng kế hoạch SEO dài hạn toàn diện và hiệu quả",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: BarChart,
      title: "Công cụ đo lường",
      description: "Triển khai GA4, GSC, Ahrefs để theo dõi hiệu quả",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Các loại hình dịch vụ SEO</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ SEO chuyên biệt, đáp ứng mọi nhu cầu của doanh nghiệp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="mb-2 text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
