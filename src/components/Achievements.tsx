import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";
import { AnimatedIcon } from "./AnimatedIcon";
import { 
  TrendingUp, 
  Award, 
  Users, 
  Globe, 
  Briefcase, 
  Heart,
  Shield,
  Clock
} from 'lucide-react';

export function Achievements() {
  const stats = [
    {
      icon: TrendingUp,
      number: "3+",
      label: "Năm kinh nghiệm",
      description: "Triển khai dự án công nghệ số"
    },
    {
      icon: Briefcase,
      number: "100+",
      label: "Dự án hoàn thành",
      description: "Trên nhiều lĩnh vực khác nhau"
    },
    {
      icon: Users,
      number: "50+",
      label: "Khách hàng tin tưởng",
      description: "Từ startup đến tập đoàn lớn"
    },
    {
      icon: Globe,
      number: "5+",
      label: "Lĩnh vực",
      description: "Tài chính, thương mại, sản xuất..."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Đội ngũ chuyên gia hàng đầu",
      description: "Chuyên gia trong lĩnh vực AI, công nghệ thông tin và marketing kỹ thuật số"
    },
    {
      icon: TrendingUp,
      title: "Dự án quy mô lớn",
      description: "Hoàn thành nhiều dự án chuyển đổi số quy mô lớn, giúp doanh nghiệp tối ưu chi phí"
    },
    {
      icon: Heart,
      title: "Sự tín nhiệm",
      description: "Nhận được sự tín nhiệm của nhiều tập đoàn và doanh nghiệp trong và ngoài nước"
    },
    {
      icon: Shield,
      title: "Cam kết chất lượng",
      description: "Đảm bảo tiêu chuẩn quốc tế, dịch vụ chuyên nghiệp 24/7"
    }
  ];

  const specialties = [
    { name: "Tài chính", color: "bg-blue-100 text-blue-800" },
    { name: "Thương mại", color: "bg-green-100 text-green-800" },
    { name: "Sản xuất", color: "bg-purple-100 text-purple-800" },
    { name: "Giáo dục", color: "bg-orange-100 text-orange-800" },
    { name: "Y tế", color: "bg-red-100 text-red-800" },
    { name: "Logistics", color: "bg-indigo-100 text-indigo-800" }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kinh nghiệm & Thành tựu nổi bật
          </h2>
          <p className="text-lg text-gray-600">
            Hơn 3 năm kinh nghiệm triển khai dự án công nghệ số với đội ngũ chuyên gia hàng đầu
          </p>
        </ScrollAnimation>

        {/* Stats Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" delay={0.1}>
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <Card className="text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 group-hover:scale-110">
                    <AnimatedIcon 
                      icon={stat.icon} 
                      className="text-blue-600 group-hover:text-white transition-colors" 
                      size={32}
                      delay={index * 0.2}
                      animation="bounce"
                    />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="font-medium text-gray-900 mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                  <achievement.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialties */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Lĩnh vực chuyên môn
            </h3>
            <p className="text-gray-600">
              Chúng tôi có kinh nghiệm triển khai giải pháp cho nhiều ngành nghề khác nhau
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {specialties.map((specialty, index) => (
              <Badge key={index} className={`px-4 py-2 ${specialty.color} border-0`}>
                {specialty.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Simple Timeline */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Hành trình phát triển
            </h3>
            
            <StaggerContainer className="grid md:grid-cols-4 gap-6" delay={0.2}>
              <StaggerItem>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">2022</h4>
                  <p className="text-gray-600 text-sm">Thành lập công ty</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">2023</h4>
                  <p className="text-gray-600 text-sm">Mở rộng dịch vụ</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">2024</h4>
                  <p className="text-gray-600 text-sm">Tiên phong công nghệ</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <AnimatedIcon icon={Clock} className="text-white" size={24} delay={0.8} animation="spin" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">2025+</h4>
                  <p className="text-gray-600 text-sm">Tập đoàn hàng đầu</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}