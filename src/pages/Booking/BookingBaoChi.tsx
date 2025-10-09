import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function BookingBaoChi() {
  return (
    <>
      <SeoHelmet
        title="Booking Báo chí - Dịch vụ đăng bài PR trên báo chí uy tín - Necimatech Group"
        description="Dịch vụ booking báo chí chuyên nghiệp. Đăng bài PR, tin tức doanh nghiệp trên các tờ báo uy tín, tăng độ tin cậy và nhận diện thương hiệu."
        url="https://necimatech.com/booking/bao-chi"
        image="https://necimatech.com/og-booking-baochi.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Booking Báo chí</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ booking báo chí chuyên nghiệp giúp doanh nghiệp đăng bài PR, tin tức trên các tờ báo uy tín,
              tăng độ tin cậy và nhận diện thương hiệu một cách hiệu quả.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Các loại báo chí</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Báo điện tử lớn (VnExpress, VietnamNet)</li>
                  <li>• Báo chuyên ngành (ICT, Kinh tế)</li>
                  <li>• Tạp chí doanh nhân</li>
                  <li>• Báo địa phương và chuyên đề</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Hình thức đăng bài</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tin tức doanh nghiệp</li>
                  <li>• Phỏng vấn lãnh đạo</li>
                  <li>• Bài PR sản phẩm/dịch vụ</li>
                  <li>• Thông cáo báo chí</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
