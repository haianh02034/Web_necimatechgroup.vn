import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function ContentMedia() {
  return (
    <>
      <SeoHelmet
        title="Content & Media - Dịch vụ sản xuất nội dung và truyền thông - Necimatech Group"
        description="Dịch vụ sản xuất content và media chuyên nghiệp. Tạo nội dung sáng tạo, hấp dẫn cho website, mạng xã hội và các kênh truyền thông số."
        url="https://necimatech.com/dich-vu/content-media"
        image="https://necimatech.com/og-content-media.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Content & Media</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ sản xuất content và media chuyên nghiệp giúp thương hiệu tạo nên những nội dung sáng tạo,
              hấp dẫn và phù hợp với từng nền tảng truyền thông số.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Loại hình content</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bài viết blog và website</li>
                  <li>• Content mạng xã hội</li>
                  <li>• Video marketing</li>
                  <li>• Infographic và hình ảnh</li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Dịch vụ kèm theo</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tư vấn chiến lược nội dung</li>
                  <li>• SEO content optimization</li>
                  <li>• Quản lý editorial calendar</li>
                  <li>• Đo lường hiệu quả content</li>
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
