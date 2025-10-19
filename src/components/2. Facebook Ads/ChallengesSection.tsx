import { AlertTriangle, Target, BarChart3, Lock } from "lucide-react";

export function ChallengesSection() {
  const challenges = [
    {
      icon: Target,
      title: "Ngân sách bị lãng phí",
      description: "Target sai tệp khách hàng, quảng cáo tiếp cận sai đối tượng dẫn đến chi phí cao nhưng hiệu quả thấp.",
      color: "text-red-600 bg-red-100"
    },
    {
      icon: BarChart3,
      title: "Nội dung chưa tối ưu",
      description: "Quảng cáo không hấp dẫn, tỷ lệ nhấp (CTR) thấp, không thu hút được sự chú ý của khách hàng.",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: BarChart3,
      title: "Thiếu phân tích dữ liệu",
      description: "Không đo lường hiệu quả, không tối ưu được chi phí và không cải thiện được kết quả theo thời gian.",
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      icon: Lock,
      title: "Rủi ro kỹ thuật",
      description: "Tài khoản dễ bị khóa do vi phạm chính sách, chiến dịch gián đoạn ảnh hưởng đến kế hoạch kinh doanh.",
      color: "text-purple-600 bg-purple-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Thách thức phổ biến
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Thách thức khi doanh nghiệp 
            <span className="text-red-600 block">tự chạy Facebook Ads</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nhiều doanh nghiệp nghĩ rằng chỉ cần lập tài khoản quảng cáo và nạp tiền là có thể 
            chạy Facebook Ads hiệu quả. Nhưng thực tế không đơn giản như vậy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${challenge.color}`}>
                  <challenge.icon className="w-8 h-8" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {challenge.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Giải pháp an toàn và hiệu quả
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Chính vì vậy, việc lựa chọn một đối tác chuyên nghiệp như <strong>Necimatech Group</strong> 
              là giải pháp an toàn và hiệu quả hơn cho doanh nghiệp của bạn.
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <span className="text-2xl">👥</span>
              <span className="font-semibold">Đội ngũ chuyên gia giàu kinh nghiệm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}