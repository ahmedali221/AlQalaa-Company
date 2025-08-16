import { Phone, Mail, MapPin, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.svg';
import { cn } from "../utils/cn";
import { useLanguage } from "../contexts/LanguageContext";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const Button = ({ 
  className, 
  variant = 'default', 
  size = 'default', 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50",
        variant === 'default' && "bg-primary text-white hover:bg-primary/90",
        variant === 'outline' && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        variant === 'ghost' && "hover:bg-accent hover:text-accent-foreground",
        size === 'default' && "h-10 px-4 py-2",
        size === 'sm' && "h-8 px-3 text-sm",
        size === 'lg' && "h-12 px-6 text-lg",
        className
      )}
      {...props}
    />
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { id: 'home', path: '/', label: t('header.home') },
    { id: 'services', path: '/services', label: t('header.services') },
    { id: 'about', path: '/about', label: t('header.about') },
    { id: 'contact', path: '/contact', label: t('header.contact') },
  ];

  const currentPage = navItems.find(item => item.path === location.pathname)?.id || 'home';

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 animate-in slide-in-from-top-4 duration-700 border-b border-accent">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm animate-in fade-in duration-1000 delay-300">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <Phone className="w-4 h-4 animate-pulse" />
                <span className="font-medium">{t('header.phone')}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <Mail className="w-4 h-4" />
                <span className="font-medium">{t('header.email')}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">{t('header.location')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/"
            className="flex items-center gap-4 hover:opacity-80 transition-all duration-300 hover:scale-105 group"
          >
            <div className="w-15 h-15 overflow-hidden transition-all duration-300 p-1">
              <div className="w-full h-full bg-white flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="AlQalaa Logo" 
                  className="object-fill"
                />
              </div>
            </div>
            <div className="animate-in slide-in-from-left-4 duration-700 delay-100">
              <h1 className="text-xl font-bold text-primary">
                {language === 'en' ? 'AlQalaa Air Conditioning' : 'شركة القلعة للتكييف'}
              </h1>
              <p className="text-sm text-secondary font-medium">{language === 'en' ? 'شركة القلعة للتبريد والتكييف' : 'AlQalaa Air Conditioning'}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative font-medium transition-all duration-300 hover:text-primary group animate-in slide-in-from-top-4 duration-700 ${
                  currentPage === item.id ? 'text-primary font-bold' : 'text-secondary'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 gradient-primary rounded-full animate-in slide-in-from-left-4 duration-300" />
                )}
                <div className="absolute -bottom-2 left-0 right-0 h-1 gradient-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Button 
                className="bg-transparent hover:bg-accent text-primary p-2 rounded-full flex items-center justify-center"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              >
                <Globe className="w-5 h-5" />
                <span className="ml-1 text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-accent rounded-xl transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="transform transition-transform duration-300">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-secondary" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-accent animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-4 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={handleMobileMenuClose}
                  className={`text-left hover:text-primary transition-all duration-300 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 font-medium ${
                    currentPage === item.id ? 'text-primary font-bold' : 'text-secondary'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <Button 
                  className="bg-transparent hover:bg-accent text-primary p-2 rounded-full flex items-center justify-center"
                  onClick={() => {
                    setLanguage(language === 'en' ? 'ar' : 'en');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Globe className="w-5 h-5" />
                  <span className="ml-1 text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
                </Button>
                
                <Link 
                  to="/contact"
                  onClick={handleMobileMenuClose}
                  className="gradient-secondary hover:opacity-90 animate-in slide-in-from-left-4 duration-300 delay-300 shadow-lg border-0 text-primary px-4 py-2 rounded-md text-center font-medium"
                >
                  {t('header.getQuote')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}