import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logo from '../assets/logo.jpg';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="section-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <img 
                  src={logo} 
                  alt="AlQalaa Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl text-secondary">{t('footer.companyName')}</h3>
            </div>
            <p className="text-secondary mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary hover:scale-110 transition-all duration-300">
                <Facebook className="w-5 h-5 text-dark" />
              </a>
              <a href="https://instagram.com/alqalaa7" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary hover:scale-110 transition-all duration-300">
                <Instagram className="w-5 h-5 text-dark" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary hover:scale-110 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-dark" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary hover:scale-110 transition-all duration-300">
                <Twitter className="w-5 h-5 text-dark" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-light">
              <li><a href="#" className="text-secondary duration-300 hover:scale-110 inline-block transition-transform">{t('footer.services.ductSplit')}</a></li>
              <li><a href="#" className="text-secondary duration-300 hover:scale-110 inline-block transition-transform">{t('footer.services.packageUnits')}</a></li>
              <li><a href="#" className="text-secondary duration-300 hover:scale-110 inline-block transition-transform">{t('footer.services.smartControl')}</a></li>
              <li><a href="#" className="text-secondary duration-300 hover:scale-110 inline-block transition-transform">{t('footer.services.maintenance')}</a></li>
              <li><a href="#" className="text-secondary duration-300 hover:scale-110 inline-block transition-transform">{t('footer.services.materials')}</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">{t('footer.areas.title')}</h4>
            <ul className="space-y-2 text-secondary">
              <li className="hover:scale-110 transition-transform cursor-default">{t('footer.areas.fujairah')}</li>
              <li className="hover:scale-110 transition-transform cursor-default">{t('footer.areas.madhab')}</li>
              <li className="hover:scale-110 transition-transform cursor-default">{t('footer.areas.khorFakkan')}</li>
              <li className="hover:scale-110 transition-transform cursor-default">{t('footer.areas.kalba')}</li>
              <li className="hover:scale-110 transition-transform cursor-default">{t('footer.areas.easternRegion')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">{t('footer.contact.title')}</h4>
            <div className="space-y-4 text-light">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm text-secondary">{t('footer.contact.mainPhoneLabel')}</p>
                  <p className="font-medium">{t('footer.contact.mainPhone')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm text-secondary">{t('footer.contact.altPhoneLabel')}</p>
                  <p className="font-medium">{t('footer.contact.altPhone')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm text-secondary">{t('footer.contact.emailLabel')}</p>
                  <p className="font-medium">{t('footer.contact.email')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1" />
                <div>
                  <p className="text-sm text-secondary">{t('footer.contact.locationDetail')}</p>
                  <p className="font-medium">{t('footer.contact.location')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm text-secondary">{t('footer.contact.instagramLabel')}</p>
                  <p className="font-medium">{t('footer.contact.instagram')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light text-sm">
            {t('footer.copyright')}
          </p>
         
        </div>
      </div>
    </footer>
  );
}