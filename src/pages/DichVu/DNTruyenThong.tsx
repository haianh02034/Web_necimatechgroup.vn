import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function DNTruyenThong() {
  return (
    <>
      <SeoHelmet
        title="Đào tạo & Truyền thông - Dịch vụ đào tạo và truyền thông doanh nghiệp - Necimatech Group"
        description="Dịch vụ đào tạo và truyền thông doanh nghiệp chuyên nghiệp. Đào tạo kỹ năng số, xây dựng văn hóa doanh nghiệp và phát triển đội ngũ nhân sự chất lượng cao."
        url="https://necimatech.com/dich-vu/dn-truyen-thong"
        image="https://necimatech.com/og-dn-truyenthong.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Đào tạo & Truyền thông</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ đào tạo và truyền thông doanh nghiệp chuyên nghiệp giúp phát triển đội ngũ nhân sự,
              xây dựng văn hóa doanh nghiệp và nâng cao năng lực cạnh tranh.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Chương trình đào tạo</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Kỹ năng số và công nghệ</li>
                  <li>• Marketing và bán hàng</li>
                  <li>• Quản lý và lãnh đạo</li>
                  <li>• Kỹ năng mềm và giao tiếp</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Dịch vụ truyền thông</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Xây dựng thương hiệu</li>
                  <li>• Quan hệ công chúng (PR)</li>
                  <li>• Nội bộ và đối ngoại</li>
                  <li>• Crisis management</li>
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
