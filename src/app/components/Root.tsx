import { Link, Outlet, useLocation } from "react-router";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export function Root() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Professionals", href: "/professionals" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-[#FAFAFA]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-[#1D6527] p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-[#EDC633]" />
                </div>
                <span className="text-2xl font-bold text-[#1D6527] tracking-tight">ለጥበብ</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "border-[#B6661B] text-[#B6661B]"
                      : "border-transparent text-gray-500 hover:text-[#1D6527] hover:border-[#1D6527]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/courses"
                className="bg-[#B6661B] hover:bg-[#9a5515] text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                className="text-gray-500 hover:text-[#1D6527] focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
            <div className="pt-2 pb-3 space-y-1 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block pl-3 pr-4 py-3 border-l-4 text-base font-medium ${
                    isActive(item.href)
                      ? "bg-green-50 border-[#B6661B] text-[#B6661B]"
                      : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-[#1D6527] hover:text-[#1D6527]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 px-3">
                <Link
                  to="/courses"
                  className="w-full flex justify-center bg-[#B6661B] text-white px-4 py-3 rounded-md font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1D6527] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-7 w-7 text-[#EDC633]" />
                <span className="text-2xl font-bold text-[#EDC633]">ለጥበብ</span>
              </div>
              <p className="text-green-100 text-sm leading-relaxed mb-6">
                "For wisdom." Inspired by the beautiful traditional Ethiopian dress, ጥበብ. 
                Our platform bridges the gap between modern e-learning and cultural excellence.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#EDC633] font-semibold mb-4 tracking-wider uppercase text-sm">Explore</h3>
              <ul className="space-y-3">
                <li><Link to="/courses" className="text-green-100 hover:text-white transition-colors">All Courses</Link></li>
                <li><Link to="/professionals" className="text-green-100 hover:text-white transition-colors">Our Professionals</Link></li>
                <li><Link to="/testimonials" className="text-green-100 hover:text-white transition-colors">Student Stories</Link></li>
                <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#EDC633] font-semibold mb-4 tracking-wider uppercase text-sm">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#EDC633] font-semibold mb-4 tracking-wider uppercase text-sm">Contact</h3>
              <ul className="space-y-3 text-green-100">
                <li>Email: hello@letibeb.edu</li>
                <li>Phone: +251 911 234 567</li>
                <li>Location: Addis Ababa, Ethiopia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-green-200">
            <p>&copy; {new Date().getFullYear()} ለጥበብ (For Wisdom) E-Learning. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with passion and culture.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
