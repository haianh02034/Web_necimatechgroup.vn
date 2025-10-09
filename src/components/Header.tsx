import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, Facebook, Search, Laptop, ShoppingCart, Rocket, Newspaper, User, Film, FileText, Factory } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
  const [isThemeToggling, setIsThemeToggling] = useState(false);
  const [rippleEffect, setRippleEffect] = useState<{ x: number; y: number; show: boolean } | null>(null);
  const menuRefs = useRef<HTMLButtonElement[]>([]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleTheme = () => {
    setIsThemeToggling(true);
    const newTheme = !isDarkMode;

    // Apply theme to document root with smooth transition
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      // Store theme preference
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      // Store theme preference
      localStorage.setItem('theme', 'light');
    }

    setIsDarkMode(newTheme);
    setTimeout(() => setIsThemeToggling(false), 600);
  };

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRippleEffect({ x, y, show: true });
    setTimeout(() => setRippleEffect(null), 600);
  };

  const menuItems = [
    {
      title: 'Quảng cáo',
      items: [
        { name: 'Facebook Ads', icon: Facebook, path: '/quang-cao/facebook-ads' },
        { name: 'Google Ads', icon: Search, path: '/quang-cao/google-ads' },
        { name: 'TikTok Ads', icon: Film, path: '/quang-cao/tiktok-ads' },
        { name: 'ZALO OA', icon: FileText, path: '/quang-cao/zalo-oa' }
      ]
    },
    {
      title: 'Booking',
      items: [
        { name: 'Booking Báo chí', icon: Newspaper, path: '/booking/bao-chi' },
        { name: 'Booking KOL', icon: User, path: '/booking/kol' }
      ]
    },
    {
      title: 'Dịch vụ',
      items: [
        { name: 'Content & Media', icon: Film, path: '/dich-vu/content-media' },
        { name: 'Landing Page', icon: FileText, path: '/dich-vu/landing-page' },
        { name: 'SEO', icon: Search, path: '/dich-vu/seo' },
        { name: 'Website', icon: Laptop, path: '/dich-vu/website' },
        { name: 'DN Truyền thống', icon: Factory, path: '/dich-vu/dn-truyen-thong' }
      ]
    },
    {
      title: 'Khách hàng',
      items: [
        { name: 'SMED2C', icon: ShoppingCart, path: '/khach-hang/smed2c' },
        { name: 'Start up', icon: Rocket, path: '/khach-hang/startup' }
      ]
    }
  ];

  const bgClass = isDarkMode ? 'bg-slate-900/90' : 'bg-white/90';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const textSecondaryClass = isDarkMode ? 'text-gray-200' : 'text-gray-700';
  const hoverClass = isDarkMode ? 'hover:text-purple-300' : 'hover:text-purple-600';
  const dropdownBgClass = isDarkMode ? 'bg-slate-800/95 backdrop-blur-xl border border-purple-500/20' : 'bg-white/95 backdrop-blur-xl border border-purple-200/50';
  const dropdownHoverClass = isDarkMode ? 'hover:bg-purple-700/50' : 'hover:bg-purple-50/80';

  return (
    <>
      <style>
        {`
          .light-theme {
            ${Object.entries({
              '--background': '#fff',
              '--foreground': 'oklch(.145 0 0)',
              '--card': '#fff',
              '--card-foreground': 'oklch(.145 0 0)',
              '--popover': 'oklch(1 0 0)',
              '--popover-foreground': 'oklch(.145 0 0)',
              '--primary': 'oklch(0.3 0.25 320)',
              '--primary-foreground': 'oklch(1 0 0)',
              '--secondary': 'oklch(.95 .0058 264.53)',
              '--secondary-foreground': '#030213',
              '--muted': '#ececf0',
              '--muted-foreground': '#717182',
              '--accent': 'oklch(0.85 0.15 340)',
              '--accent-foreground': 'oklch(.145 0 0)',
              '--destructive': '#d4183d',
              '--destructive-foreground': '#fff',
              '--border': '#0000001a',
              '--input': 'transparent',
              '--ring': 'oklch(0.6 0.2 320)',
              '--ring-secondary': 'oklch(0.7 0.15 340)',
              '--chart-1': 'oklch(0.6 0.25 320)',
              '--chart-2': 'oklch(0.65 0.2 340)',
              '--chart-3': 'oklch(0.7 0.15 300)',
              '--chart-4': 'oklch(0.75 0.18 280)',
              '--chart-5': 'oklch(0.8 0.12 260)',
              '--sidebar': 'oklch(.985 0 0)',
              '--sidebar-foreground': 'oklch(.145 0 0)',
              '--sidebar-primary': 'oklch(0.3 0.25 320)',
              '--sidebar-primary-foreground': 'oklch(.985 0 0)',
              '--sidebar-accent': 'oklch(.97 0 0)',
              '--sidebar-accent-foreground': 'oklch(.205 0 0)',
              '--sidebar-border': 'oklch(.922 0 0)',
              '--sidebar-ring': 'oklch(0.6 0.2 320)',
              '--glow-primary': '0 0 20px oklch(0.6 0.25 320 / 0.3)',
              '--glow-secondary': '0 0 15px oklch(0.7 0.15 340 / 0.2)',
              '--shadow-enhanced': '0 10px 40px -10px oklch(0.3 0.25 320 / 0.2)',
              '--shadow-glow': '0 0 30px oklch(0.5 0.2 320 / 0.15)'
            }).map(([key, value]) => `${key}: ${value};`).join('\n            ')}
          }

          .dark-theme {
            ${Object.entries({
              '--background': 'oklch(0.08 0.02 320)',
              '--foreground': 'oklch(.985 0 0)',
              '--card': 'oklch(0.12 0.05 320)',
              '--card-foreground': 'oklch(.985 0 0)',
              '--popover': 'oklch(0.15 0.05 320)',
              '--popover-foreground': 'oklch(.985 0 0)',
              '--primary': 'oklch(0.95 0.05 320)',
              '--primary-foreground': 'oklch(0.15 0.05 320)',
              '--secondary': 'oklch(.269 0 0)',
              '--secondary-foreground': 'oklch(.985 0 0)',
              '--muted': 'oklch(0.18 0.03 320)',
              '--muted-foreground': 'oklch(.708 0 0)',
              '--accent': 'oklch(0.25 0.08 340)',
              '--accent-foreground': 'oklch(.985 0 0)',
              '--destructive': 'oklch(.396 .141 25.723)',
              '--destructive-foreground': 'oklch(.637 .237 25.331)',
              '--border': 'oklch(0.2 0.03 320)',
              '--input': 'oklch(0.18 0.03 320)',
              '--ring': 'oklch(0.6 0.15 340)',
              '--chart-1': 'oklch(0.7 0.2 320)',
              '--chart-2': 'oklch(0.75 0.18 340)',
              '--chart-3': 'oklch(0.8 0.15 300)',
              '--chart-4': 'oklch(0.85 0.12 280)',
              '--chart-5': 'oklch(0.9 0.1 260)',
              '--sidebar': 'oklch(0.1 0.03 320)',
              '--sidebar-foreground': 'oklch(.985 0 0)',
              '--sidebar-primary': 'oklch(0.7 0.2 320)',
              '--sidebar-primary-foreground': 'oklch(.985 0 0)',
              '--sidebar-accent': 'oklch(0.18 0.03 320)',
              '--sidebar-accent-foreground': 'oklch(.985 0 0)',
              '--sidebar-border': 'oklch(0.2 0.03 320)',
              '--sidebar-ring': 'oklch(0.6 0.15 340)',
              '--glow-primary': '0 0 25px oklch(0.7 0.2 320 / 0.4)',
              '--glow-secondary': '0 0 20px oklch(0.8 0.15 340 / 0.3)',
              '--shadow-enhanced': '0 15px 50px -12px oklch(0.2 0.1 320 / 0.3)',
              '--shadow-glow': '0 0 40px oklch(0.6 0.15 320 / 0.2)'
            }).map(([key, value]) => `${key}: ${value};`).join('\n            ')}
          }
        `}
      </style>

      {/* Enhanced Floating Particles Background */}
      <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full ${isDarkMode ? 'bg-purple-400/30' : 'bg-pink-400/40'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${8 + Math.random() * 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes logoGlow {
            0%, 100% {
              filter: drop-shadow(0 0 8px oklch(0.6 0.25 320 / 0.3));
            }
            50% {
              filter: drop-shadow(0 0 16px oklch(0.7 0.3 320 / 0.5));
            }
          }

          @keyframes slideLight {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }

          @keyframes iconBounce {
            0%, 100% {
              transform: scale(1) rotate(0deg);
            }
            50% {
              transform: scale(1.15) rotate(8deg);
            }
          }

          @keyframes menuItemHover {
            0% {
              transform: translateX(0px) scale(1);
            }
            50% {
              transform: translateX(6px) scale(1.03);
            }
            100% {
              transform: translateX(0px) scale(1);
            }
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
              transform: translateX(0%);
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }

          @keyframes activeIndicator {
            0%, 100% {
              transform: scaleX(0);
              opacity: 0;
            }
            50% {
              transform: scaleX(1);
              opacity: 1;
            }
          }

          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 5px oklch(0.6 0.25 320 / 0.3);
            }
            50% {
              box-shadow: 0 0 20px oklch(0.7 0.3 320 / 0.6), 0 0 30px oklch(0.6 0.25 320 / 0.4);
            }
          }

          .dropdown-menu {
            animation: slideDown 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .hover-lift {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .hover-lift:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-enhanced);
          }

          .logo-hover:hover {
            animation: logoGlow 2s ease-in-out infinite;
          }

          .icon-hover:hover svg {
            animation: iconBounce 0.6s ease-in-out;
          }

          .menu-item-hover:hover {
            animation: menuItemHover 0.6s ease-in-out;
          }

          .theme-toggle-active {
            animation: var(--animation-bounce-in);
          }

          .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, oklch(0.7 0.2 320 / 0.3) 0%, transparent 70%);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
          }

          .slide-light-effect::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, oklch(0.9 0.1 320 / 0.4), transparent);
            animation: slideLight 2s ease-in-out infinite;
          }

          .group\/item:hover .group-hover\/item\:animate-shimmer {
            animation: shimmer 1.5s ease-in-out;
          }

          .group\/item:hover .group-hover\/item\:animate-active-indicator {
            animation: activeIndicator 0.3s ease-out;
          }

          .group\/item:hover .group-hover\/item\:animate-pulse-glow {
            animation: pulse-glow 1.5s ease-in-out infinite;
          }
        `}
      </style>

      <header className={`${bgClass} backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-500 border-b border-border/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent cursor-pointer logo-hover transition-all duration-300 hover:scale-105 bg-[length:200%_100%] bg-[position:10%_0]`}>                
                Necimatech Group
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 items-center">
              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    ref={el => { if (el) menuRefs.current[index] = el; }}
                    onClick={createRipple}
                    className={`${textSecondaryClass} ${hoverClass} transition-all duration-300 flex items-center gap-1 font-semibold px-4 py-2 rounded-lg relative overflow-hidden hover-lift ${openDropdown === index ? (isDarkMode ? 'bg-slate-700/80 text-white shadow-lg' : 'bg-white/90 text-gray-800 shadow-lg') : ''} ${isDarkMode ? 'hover:bg-slate-700/60' : 'hover:bg-white/70'}`}
                  >
                    {rippleEffect && rippleEffect.show && (
                      <span
                        className="ripple-effect"
                        style={{
                          left: rippleEffect.x - 10,
                          top: rippleEffect.y - 10,
                        }}
                      />
                    )}
                    {menu.title}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === index ? 'rotate-180' : ''}`} />
                  </button>

                  {openDropdown === index && (
                    <div className={`absolute top-full left-0 w-72 ${dropdownBgClass} rounded-xl shadow-2xl py-6 dropdown-menu border ${isDarkMode ? 'border-purple-400/30 shadow-purple-900/50' : 'border-purple-200/60 shadow-purple-200/20'}`}>
                      {menu.items.map((item, itemIndex) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={itemIndex}
                            to={item.path}
                            className={`group/item relative flex items-center gap-4 px-6 py-4 ${textSecondaryClass} ${dropdownHoverClass} transition-all duration-300 hover-lift mx-3 rounded-lg menu-item-hover overflow-hidden ${isDarkMode ? 'hover:shadow-lg hover:shadow-purple-500/20' : 'hover:shadow-lg hover:shadow-purple-300/30'}`}
                          >
                            {/* Simple background highlight */}
                            <div className={`absolute inset-0 ${isDarkMode ? 'bg-purple-600/20' : 'bg-purple-100/80'} opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-lg`}></div>

                            {/* Simple border indicator */}
                            <div className={`absolute inset-0 border-2 ${isDarkMode ? 'border-purple-400' : 'border-purple-600'} opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-lg`}></div>

                            <div className={`relative p-2.5 rounded-lg transition-all duration-300 ${isDarkMode ? 'group-hover/item:bg-purple-600/80' : 'group-hover/item:bg-purple-200/90'}`}>
                              <IconComponent className="w-5 h-5 text-purple-600 group-hover/item:scale-125 transition-transform duration-300" />
                            </div>
                            <span className={`font-medium transition-all duration-300 flex-1 ${isDarkMode ? 'group-hover/item:text-purple-300' : 'group-hover/item:text-purple-700'}`}>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Enhanced Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-lg relative overflow-hidden transition-all duration-300 hover-lift ${isDarkMode ? 'bg-purple-800/50 text-yellow-400 hover:bg-purple-700/60' : 'bg-purple-100/80 text-purple-600 hover:bg-purple-200/90'} ${isThemeToggling ? 'theme-toggle-active' : ''}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Enhanced CTA Button with Sliding Light Effect */}
          <Button
  className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-[length:200%_100%] bg-[position:10%_0] hover:shadow-xl hover:scale-105 transition-all duration-300 text-white relative overflow-hidden slide-light-effect py-2 px-6 font-semibold"
>
  Tư vấn miễn phí
</Button>

            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${isDarkMode ? 'bg-purple-800/50 text-yellow-400' : 'bg-purple-100/80 text-purple-600'} transition-all duration-300`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={toggleMenu}
                className={`${textSecondaryClass} ${hoverClass} hover-lift transition-all duration-300 p-2`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 pt-2">
              <div className={`space-y-1 ${dropdownBgClass} rounded-2xl p-3 shadow-2xl border border-border/30`}>
                {menuItems.map((menu, index) => (
                  <div key={index} className="overflow-hidden">
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
                      className={`w-full flex items-center justify-between py-3 px-4 ${textSecondaryClass} font-semibold transition-all duration-200 rounded-xl hover-lift ${mobileDropdown === index ? 'bg-gradient-to-r from-purple-50/50 to-pink-50/50 text-purple-600' : ''} ${isDarkMode && mobileDropdown === index ? 'from-purple-900/30 to-pink-900/30' : ''}`}
                    >
                      <span className="text-base">{menu.title}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === index ? 'rotate-180 text-purple-600' : ''}`} />
                    </button>

                    {mobileDropdown === index && (
                      <div className="mt-1 space-y-0.5 pb-2 dropdown-menu">
                        {menu.items.map((item, itemIndex) => {
                          const IconComponent = item.icon;
                          return (
                            <Link
                              key={itemIndex}
                              to={item.path}
                              onClick={toggleMenu}
                              className={`flex items-center gap-3 py-3 px-4 ml-4 ${textSecondaryClass} rounded-lg transition-all duration-200 group/item hover-lift ${dropdownHoverClass}`}
                              style={{ animationDelay: `${itemIndex * 50}ms` }}
                            >
                              <div className={`p-2 rounded-lg bg-gradient-to-br from-purple-100/80 to-pink-100/80 group-hover/item:scale-110 transition-all duration-200 ${isDarkMode ? 'from-purple-800/50 to-pink-800/50' : ''}`}>
                                <IconComponent className="w-4 h-4 text-purple-600" />
                              </div>
                              <span className="text-sm font-medium">{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}

                <div className={`pt-3 mt-2 border-t ${isDarkMode ? 'border-border' : 'border-border'}`}>
                  <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-base font-semibold rounded-xl relative overflow-hidden slide-light-effect">
                    🚀 Tư vấn miễn phí
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
