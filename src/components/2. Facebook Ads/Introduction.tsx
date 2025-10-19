import { Target, Users, TrendingUp, Globe } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AboutFacebookAds() {
  const features = [
    {
      icon: Target,
      title: "Targeting chính xác",
      description: "Tiếp cận đúng nhóm khách hàng tiềm năng dựa trên hành vi, độ tuổi, vị trí, sở thích"
    },
    {
      icon: Users,
      title: "Hơn 3 tỷ người dùng",
      description: "Tiềm năng tiếp cận khách hàng khổng lồ trên toàn cầu và hàng chục triệu tại Việt Nam"
    },
    {
      icon: TrendingUp,
      title: "ROI cao hơn 2x",
      description: "Hiệu quả đầu tư cao hơn 1,5-2 lần so với nhiều kênh quảng cáo truyền thống"
    },
    {
      icon: Globe,
      title: "Hiện diện thương hiệu",
      description: "Duy trì sự hiện diện với khách hàng 2-3 giờ mỗi ngày trên Facebook & Instagram"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0JTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1OTc0MTg3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Business Growth Analytics"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tăng trưởng doanh thu</p>
                  <p className="text-2xl font-bold text-green-600">+250%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Facebook Ads là gì? 
                <span className="text-blue-600 block">Vì sao doanh nghiệp cần đầu tư?</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Facebook Ads là nền tảng quảng cáo trả phí của Facebook, cho phép doanh nghiệp 
                hiển thị sản phẩm/dịch vụ đến đúng nhóm khách hàng tiềm năng một cách hiệu quả nhất.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-blue-900 font-medium">
                💡 <strong>Thực tế:</strong> Nếu doanh nghiệp muốn cạnh tranh trong kỷ nguyên số, 
                đầu tư vào Facebook Ads là lựa chọn bắt buộc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}