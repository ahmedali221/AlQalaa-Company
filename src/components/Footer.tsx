import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="section-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">{t('footer.companyName')}</h3>
            <p className="text-accent mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/alqalaa7" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-accent">
              <li><a href="#" className="hover:text-white transition-colors duration-300">{t('footer.services.chilledWater')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">{t('footer.services.ductSplit')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">{t('footer.services.packageUnits')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">{t('footer.services.smartControl')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">{t('footer.services.maintenance')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">{t('footer.services.materials')}</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold mb-4 text-white">{t('footer.areas.title')}</h4>
            <ul className="space-y-2 text-accent">
              <li>{t('footer.areas.fujairah')}</li>
              <li>{t('footer.areas.madhab')}</li>
              <li>{t('footer.areas.khorFakkan')}</li>
              <li>{t('footer.areas.kalba')}</li>
              <li>{t('footer.areas.easternRegion')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-white">{t('footer.contact.title')}</h4>
            <div className="space-y-4 text-accent">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-medium">{t('footer.contact.mainPhone')}</p>
                  <p className="text-sm text-white/70">{t('footer.contact.mainPhoneLabel')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-medium">{t('footer.contact.altPhone')}</p>
                  <p className="text-sm text-white/70">{t('footer.contact.altPhoneLabel')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-medium">{t('footer.contact.email')}</p>
                  <p className="text-sm text-white/70">{t('footer.contact.emailLabel')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1" />
                <div>
                  <p className="font-medium">{t('footer.contact.location')}</p>
                  <p className="text-sm text-white/70">{t('footer.contact.locationDetail')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-medium">{t('footer.contact.instagram')}</p>
                  <p className="text-sm text-white/70">{t('footer.contact.instagramLabel')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
              {t('footer.links.privacy')}
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
              {t('footer.links.terms')}
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
              {t('footer.links.warranty')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}