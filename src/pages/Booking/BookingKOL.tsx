import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function BookingKOL() {
  return (
    <>
      <SeoHelmet
        title="Booking KOL - Dịch vụ kết nối với Influencer và KOL hàng đầu - Necimatech Group"
        description="Dịch vụ booking KOL và Influencer chuyên nghiệp. Kết nối thương hiệu với những người ảnh hưởng hàng đầu trong lĩnh vực, tạo nên chiến dịch marketing hiệu quả."
        url="https://necimatech.com/booking/kol"
        image="https://necimatech.com/og-booking-kol.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Booking KOL</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ booking KOL và Influencer chuyên nghiệp giúp thương hiệu kết nối với những người ảnh hưởng hàng đầu,
              tạo nên chiến dịch marketing lan truyền và tăng độ nhận diện thương hiệu.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Các loại KOL</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Macro Influencer (100k+ followers)</li>
                  <li>• Micro Influencer (10k-100k followers)</li>
                  <li>• Nano Influencer (1k-10k followers)</li>
                  <li>• Celebrity và chuyên gia lĩnh vực</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Lĩnh vực chuyên môn</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Beauty & Fashion</li>
                  <li>• Food & Travel</li>
                  <li>• Technology & Gaming</li>
                  <li>• Health & Fitness</li>
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
