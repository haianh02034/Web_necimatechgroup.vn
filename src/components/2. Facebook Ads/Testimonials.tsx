import { TrendingUp, Users, GraduationCap } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      icon: TrendingUp,
      industry: "Mỹ phẩm",
      title: "Startup tăng trưởng gấp 3 lần",
      description: "Một startup trong lĩnh vực mỹ phẩm đã tăng trưởng doanh thu gấp 3 lần chỉ sau 6 tháng sử dụng gói Pro.",
      results: [
        { label: "Tăng trưởng doanh thu", value: "+300%" },
        { label: "Thời gian", value: "6 tháng" },
        { label: "Gói sử dụng", value: "Pro" }
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      industry: "F&B",
      title: "Xây dựng cộng đồng 20.000 thành viên",
      description: "Một thương hiệu truyền thống trong ngành F&B xây dựng được cộng đồng Group Facebook hơn 20.000 thành viên, giúp tăng 40% lượng khách quay lại.",
      results: [
        { label: "Cộng đồng Facebook", value: "20.000+" },
        { label: "Khách hàng quay lại", value: "+40%" },
        { label: "Engagement rate", value: "15%" }
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: GraduationCap,
      industry: "Giáo dục",
      title: "Tăng 55% tỷ lệ chuyển đổi học viên",
      description: "Một SME trong lĩnh vực giáo dục tăng tỷ lệ chuyển đổi học viên đăng ký khóa học thêm 55% nhờ gói Premium với chiến lược Content + Video Ads kết hợp.",
      results: [
        { label: "Tỷ lệ chuyển đổi", value: "+55%" },
        { label: "Gói sử dụng", value: "Premium" },
        { label: "Chi phí/Lead", value: "-30%" }
      ],
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Case Study thành công 
            <span className="text-blue-600 block">từ khách hàng</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những câu chuyện thành công thực tế từ các doanh nghiệp đã tin tưởng và đồng hành cùng Necimatech Group
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Background pattern */}
              <div className={`absolute inset-0 ${study.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {study.industry}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {study.description}
                </p>

                {/* Results */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Kết quả đạt được:</h4>
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
                      <span className="text-sm font-medium text-gray-700">{result.label}</span>
                      <span className={`font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                        {result.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quote indicator */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">💬</span>
                    <span className="italic">"Kết quả vượt ngoài mong đợi!"</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tổng quan thành tích
              </h3>
              <p className="text-gray-600">
                Những con số ấn tượng từ các dự án đã triển khai
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Dự án thành công</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Khách hàng hài lòng</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">250%</div>
                <div className="text-gray-600">ROI trung bình</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-gray-600">Ngành nghề</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bạn muốn trở thành case study tiếp theo?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Hãy liên hệ với chúng tôi để được tư vấn miễn phí và xây dựng chiến lược phù hợp 
              với doanh nghiệp của bạn.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">✅ Tư vấn miễn phí</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">📊 Phân tích chi tiết</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">🎯 Chiến lược cá nhân hóa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}