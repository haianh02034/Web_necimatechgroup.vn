import { Monitor, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Necimatech
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">
              Trang chủ
            </a>
            <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
              Dịch vụ
            </a>
            <a href="#process" className="text-slate-600 hover:text-blue-600 transition-colors">
              Quy trình
            </a>
            <a href="#benefits" className="text-slate-600 hover:text-blue-600 transition-colors">
              Lợi ích
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Liên hệ ngay
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">
              Trang chủ
            </a>
            <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
              Dịch vụ
            </a>
            <a href="#process" className="text-slate-600 hover:text-blue-600 transition-colors">
              Quy trình
            </a>
            <a href="#benefits" className="text-slate-600 hover:text-blue-600 transition-colors">
              Lợi ích
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Liên hệ ngay
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
