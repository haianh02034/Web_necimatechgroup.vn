import { Heart, Crown, Target, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Thấu hiểu nỗi đau khách hàng",
      subtitle: "Không chỉ là 'quảng cáo', mà còn là 'chiến lược'",
      points: [
        "Lắng nghe và phân tích nhu cầu thực tế để thấu hiểu thách thức doanh nghiệp",
        "Đánh giá thị trường, hành vi khách hàng & đối thủ cạnh tranh",
        "Xây dựng kế hoạch dài hạn, định hướng phát triển bền vững"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Crown,
      title: "Content is King",
      subtitle: "Xây dựng nội dung độc đáo và cuốn hút",
      points: [
        "Phân tích Insight, thấu hiểu khách hàng mục tiêu chính xác",
        "Lên tuyến nội dung theo mô hình AIDA",
        "Xây dựng nội dung lôi cuốn, đa dạng, tạo điểm nhấn"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Thiết lập chiến dịch bài bản",
      subtitle: "Chuyên nghiệp từ A đến Z",
      points: [
        "Phân tích đúng tệp khách hàng mục tiêu",
        "Lên kế hoạch ngân sách tối ưu cho từng giai đoạn quảng cáo",
        "Triển khai remarketing gia tăng hiệu quả CTA"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: TrendingUp,
      title: "Đo lường & tối ưu liên tục",
      subtitle: "Theo dõi và cải thiện không ngừng",
      points: [
        "Theo dõi số liệu quảng cáo theo thời gian thực",
        "Phân tích hiệu quả từng nhóm đối tượng và nội dung",
        "Tối ưu chiến dịch liên tục: tạo luồng chatbot tự động, remarketing tăng doanh số nhưng chi phí tối ưu"
      ],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Lợi ích khi hợp tác 
            <span className="text-blue-600 block">cùng Necimatech Group</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi mang lại giá trị thực sự cho doanh nghiệp thông qua phương pháp tiếp cận 
            toàn diện và chuyên nghiệp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758691736872-61a1f75fe2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0ZWFtJTIwbWVldGluZyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU5NzUxMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team Strategy Planning"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-green-600">+300%</div>
              <div className="text-sm text-gray-600">ROI Improvement</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>

          {/* Benefits Overview */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quy trình làm việc chuyên nghiệp
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Từ việc thấu hiểu nhu cầu khách hàng đến triển khai và tối ưu chiến dịch, 
                chúng tôi áp dụng quy trình khoa học và có hệ thống.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-1">1-7 ngày</div>
                <div className="text-sm text-gray-600">Phân tích & lên kế hoạch</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">7-14 ngày</div>
                <div className="text-sm text-gray-600">Triển khai chiến dịch</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-purple-600 mb-1">Hàng ngày</div>
                <div className="text-sm text-gray-600">Theo dõi & tối ưu</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-orange-600 mb-1">Hàng tháng</div>
                <div className="text-sm text-gray-600">Báo cáo chi tiết</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.subtitle}</p>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-3">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Sẵn sàng bắt đầu hành trình tăng trưởng?
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Hãy để Necimatech Group đồng hành cùng bạn xây dựng chiến lược Facebook Ads hiệu quả
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span>✨ Tư vấn miễn phí</span>
              <span>•</span>
              <span>🎯 Chiến lược cá nhân hóa</span>
              <span>•</span>
              <span>📈 Cam kết hiệu quả</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}