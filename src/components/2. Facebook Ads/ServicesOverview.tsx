import { Edit3, Users, Bot, Phone } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      icon: Edit3,
      title: "XÂY DỰNG CONTENT",
      description: "Tạo nội dung bài viết, hình ảnh, video độc đáo, phù hợp với doanh nghiệp và đúng insight khách hàng.",
      features: ["Nội dung sáng tạo", "Thiết kế đồ họa", "Video quảng cáo", "Copywriting chuyên nghiệp"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "SEEDING TƯƠNG TÁC",
      description: "Tăng cường tương tác, xây dựng cộng đồng và nâng cao độ tin cậy thông qua các hoạt động seeding.",
      features: ["Tăng engagement", "Xây dựng cộng đồng", "Quản lý bình luận", "Tương tác tự nhiên"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Bot,
      title: "TẠO BOTCHAT TỰ ĐỘNG",
      description: "Thiết lập hệ thống chatbot thông minh để tự động tư vấn và chăm sóc khách hàng 24/7.",
      features: ["Tự động trả lời", "Tư vấn sản phẩm", "Thu thập thông tin", "Chuyển đổi lead"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "QUÉT DATA SỐ ĐIỆN THOẠI",
      description: "Thu thập và phân tích dữ liệu khách hàng tiềm năng để tối ưu hóa chiến lược tiếp thị.",
      features: ["Thu thập lead", "Phân tích dữ liệu", "Segmentation", "Remarketing"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Dịch vụ Facebook Ads 
            <span className="text-blue-600 block">trọn gói của Necimatech Group</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp dịch vụ Facebook Ads trọn gói theo nhiều cấp độ khác nhau, 
            phù hợp với mọi quy mô doanh nghiệp từ startup, SME đến thương hiệu truyền thống và tập đoàn lớn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tích hợp đa dịch vụ cho hiệu quả tối đa
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Tất cả dịch vụ được tích hợp và đồng bộ để tạo ra một chiến lược marketing toàn diện, 
              giúp doanh nghiệp tiếp cận và chuyển đổi khách hàng hiệu quả nhất.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <span className="bg-white px-3 py-1 rounded-full">📊 Phân tích dữ liệu</span>
              <span className="bg-white px-3 py-1 rounded-full">🎯 Targeting chính xác</span>
              <span className="bg-white px-3 py-1 rounded-full">💰 Tối ưu chi phí</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}