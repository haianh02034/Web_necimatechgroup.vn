import { Card, CardContent } from "./ui/card";
import { Target, Heart, Award, Shield } from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { AnimatedIcon } from "./AnimatedIcon";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Đổi mới",
      description: "Ứng dụng các công nghệ tiên tiến (AI, IoT, tự động hóa) để tối ưu hiệu suất"
    },
    {
      icon: Heart,
      title: "Giá trị",
      description: "Kết nối giá trị với đối tác và khách hàng, xây dựng hệ sinh thái số tin cậy"
    },
    {
      icon: Award,
      title: "Chất lượng",
      description: "Đảm bảo tiêu chuẩn quốc tế, dịch vụ chuyên nghiệp 24/7"
    },
    {
      icon: Shield,
      title: "Cam kết",
      description: "Đồng hành cùng khách hàng, đảm bảo chất lượng và hiệu quả tối ưu"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Về Necimatech Group
          </h2>
          <p className="text-lg text-gray-600">
            Được thành lập từ năm 2022, chúng tôi đã khẳng định vị thế tiên phong trong 
            lĩnh vực công nghệ, chuyển đổi số, và phát triển phần mềm.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <ScrollAnimation direction="left" duration={0.8}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Triết lý "Đổi mới – Giá trị – Chất lượng – Cam kết"
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Necimatech Group không chỉ là nhà cung cấp dịch vụ mà còn là người bạn đồng hành 
                cùng doanh nghiệp trong hành trình nâng cao hiệu quả vận hành, tối ưu chi phí và 
                bứt phá tăng trưởng trong kỷ nguyên số.
              </p>
              
              <StaggerContainer className="space-y-4" delay={0.2}>
                <StaggerItem>
                  <div className="flex items-start space-x-3 group">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Tầm nhìn</h4>
                      <p className="text-gray-600">
                        Trở thành tập đoàn công nghệ và giải pháp số hàng đầu Việt Nam
                      </p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-start space-x-3 group">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Sứ mệnh</h4>
                      <p className="text-gray-600">
                        Đồng hành cùng doanh nghiệp, mang đến giải pháp công nghệ thông minh và bền vững
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </ScrollAnimation>

          {/* Visual Element */}
          <ScrollAnimation direction="right" duration={0.8} delay={0.2}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-white relative z-10">
                  <StaggerContainer className="grid grid-cols-2 gap-4 mb-6" delay={0.15}>
                    <StaggerItem>
                      <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-105">
                        <AnimatedIcon icon={Target} className="text-white mx-auto mb-2" size={32} delay={0.5} animation="bounce" />
                        <div className="text-sm font-medium">Đổi mới</div>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-105">
                        <AnimatedIcon icon={Heart} className="text-white mx-auto mb-2" size={32} delay={0.7} animation="pulse" />
                        <div className="text-sm font-medium">Giá trị</div>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-105">
                        <AnimatedIcon icon={Award} className="text-white mx-auto mb-2" size={32} delay={0.9} animation="glow" />
                        <div className="text-sm font-medium">Chất lượng</div>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-105">
                        <AnimatedIcon icon={Shield} className="text-white mx-auto mb-2" size={32} delay={1.1} animation="float" />
                        <div className="text-sm font-medium">Cam kết</div>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                  <h3 className="text-xl font-bold">Triết lý Necimatech</h3>
                </div>

                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-white/10 animate-pulse" style={{
                      backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Values Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" delay={0.1}>
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    <AnimatedIcon 
                      icon={value.icon} 
                      className="text-blue-600 group-hover:text-white transition-colors" 
                      size={24}
                      delay={index * 0.2}
                      animation="bounce"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}