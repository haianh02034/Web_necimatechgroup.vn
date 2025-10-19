import { BarChart3, Puzzle, Users, Shield } from "lucide-react";

export function WhyChooseUs() {
  const differentiators = [
    {
      icon: BarChart3,
      title: "Chiến lược dựa trên dữ liệu",
      description: "Không chạy theo cảm tính, mà phân tích hành vi khách hàng, đối thủ và thị trường để đưa ra quyết định chính xác.",
      stats: "95% dự đoán chính xác",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Puzzle,
      title: "Tích hợp đa công cụ",
      description: "Content Marketing, Video Ads, Chatbot, Seeding – tất cả được tích hợp để tạo ra chiến dịch toàn diện và hiệu quả.",
      stats: "10+ công cụ tích hợp",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Đội ngũ chuyên gia giàu kinh nghiệm",
      description: "Đã triển khai thành công cho nhiều ngành nghề khác nhau, từ startup đến tập đoàn lớn với kinh nghiệm 5+ năm.",
      stats: "500+ dự án thành công",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Cam kết hiệu quả",
      description: "Ngân sách minh bạch, báo cáo chi tiết, tối ưu chi phí và cam kết đạt được KPI đã thỏa thuận với khách hàng.",
      stats: "100% minh bạch",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Điểm khác biệt của
            <span className="text-blue-600 block">Necimatech Group</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi không chỉ cung cấp dịch vụ, mà là đối tác chiến lược giúp doanh nghiệp 
            phát triển bền vững trong thời đại số.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${item.color} text-white`}>
                      {item.stats}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover effect indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Khách hàng hài lòng</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Hỗ trợ kỹ thuật</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}