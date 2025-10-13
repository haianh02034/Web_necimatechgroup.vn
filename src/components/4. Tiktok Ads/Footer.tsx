export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Necimatech Group</h3>
            <p className="text-gray-400 text-sm">
              Đơn vị tiên phong trong giải pháp marketing số toàn diện
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Dịch vụ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>TikTok Ads</li>
              <li>TikTok Shop</li>
              <li>Livestream</li>
              <li>KOL Marketing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Gói dịch vụ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Gói Basic</li>
              <li>Gói Pro</li>
              <li>Gói Premium</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Hotline: 1900 xxxx</li>
              <li>Email: contact@necimatech.com</li>
              <li>Địa chỉ: Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Necimatech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
