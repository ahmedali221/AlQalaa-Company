import { 
  Star, 
  Shield, 
  Clock, 
  Wrench, 
  ArrowRight,
  Users,
  Award,
  Phone,
  Zap,
  Building,
  MapPin,
  Mail,
  CheckCircle,
  Settings,
  Lightbulb
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import Hero from "../components/Hero";
import BrandsSlider from "../components/BrandsSlider";

import companyImage from "../assets/Company/Company Stuff.JPG";
import companyImage2 from "../assets/Company/company.JPG";


export default function HomePage() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const stats = [
    { number: "2020", label: t('pages.home.stats.established'), icon: <Award className="w-8 h-8 text-primary" />, color: "from-primary to-secondary" },
    { number: "100+", label: t('pages.home.stats.projects'), icon: <Users className="w-8 h-8 text-primary" />, color: "from-secondary to-accent" },
    { number: "5Y", label: t('pages.home.stats.warranty'), icon: <Shield className="w-8 h-8 text-primary" />, color: "from-primary to-accent" },
    { number: "UAE", label: t('pages.home.stats.region'), icon: <Building className="w-8 h-8 text-primary" />, color: "from-secondary to-primary" },
  ];

  const contactMethods = [
    { icon: <Phone className="w-5 h-5 text-primary" />, label: t('pages.home.contact_section.methods.call'), value: t('header.phone'), color: "from-primary to-secondary" },
    { icon: <Mail className="w-5 h-5 text-primary" />, label: t('pages.home.contact_section.methods.email'), value: t('header.email'), color: "from-secondary to-accent" },
    { icon: <MapPin className="w-5 h-5 text-primary" />, label: t('pages.home.contact_section.methods.location'), value: t('header.location'), color: "from-primary to-accent" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-snow">
        <div className="container mx-auto px-12">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">{t('pages.home.stats_section.title')}</h2>
            <p className="text-secondary text-lg">{t('pages.home.stats_section.subtitle')}</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
              >
                <div className={`relative w-24 h-24 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center text-primary mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-xl hover:shadow-2xl`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-secondary font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 1: About Our Company - Image Left, Text Right */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeftVariants}
            >
              <div className="relative">
                <img src={companyImage} alt="Modern AC Installation" className="w-full h-100 object-contain rounded-3xl" loading="lazy" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-2xl opacity-80"></div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {t('pages.home.about_section.badge')}
                </div>
                <h2 className="text-4xl font-bold text-primary leading-tight">
                  {t('pages.home.about_section.title')}
                </h2>
                <p className="text-secondary text-lg leading-relaxed">
                  {t('pages.home.about_section.description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-secondary">{t('pages.home.about_section.features.licensed')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-secondary">{t('pages.home.about_section.features.warranty')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-secondary">{t('pages.home.about_section.features.support')}</span>
                  </div>
                </div>
                <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                  {t('pages.home.about_section.button')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services - Text Left, Image Right */}
      <section className="py-16 bg-gradient-to-b from-snow to-white">
        <div className="container mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeftVariants}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  {t('pages.home.services_section.badge')}
                </div>
                <h2 className="text-4xl font-bold text-primary leading-tight">
                  {t('pages.home.services_section.title')}
                </h2>
                <p className="text-secondary text-lg leading-relaxed">
                  {t('pages.home.services_section.description')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Wind className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-secondary font-medium">{t('pages.home.services_section.items.ductSplit')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-secondary font-medium">{t('pages.home.services_section.items.smartControls')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-secondary font-medium">{t('pages.home.services_section.items.maintenance')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-secondary font-medium">{t('pages.home.services_section.items.installation')}</span>
                  </div>
                </div>
                <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                  {t('pages.home.services_section.button')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
            >
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HVAC Control System" className="w-full h-96 object-cover rounded-3xl" loading="lazy" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-80"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us - Image Left, Text Right */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeftVariants}
            >
              <div className="relative">
                <img src={companyImage2} alt="Professional HVAC Service" className="w-full h-96 object-cover rounded-3xl" loading="lazy" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-2xl opacity-80"></div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {t('pages.home.whyChooseUs_section.badge')}
                </div>
                <h2 className="text-4xl font-bold text-primary leading-tight">
                  {t('pages.home.whyChooseUs_section.title')}
                </h2>
                <p className="text-secondary text-lg leading-relaxed">
                  {t('pages.home.whyChooseUs_section.description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{t('pages.home.whyChooseUs_section.features.trackRecord.title')}</h4>
                      <p className="text-secondary text-sm">{t('pages.home.whyChooseUs_section.features.trackRecord.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{t('pages.home.whyChooseUs_section.features.timelyDelivery.title')}</h4>
                      <p className="text-secondary text-sm">{t('pages.home.whyChooseUs_section.features.timelyDelivery.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{t('pages.home.whyChooseUs_section.features.innovation.title')}</h4>
                      <p className="text-secondary text-sm">{t('pages.home.whyChooseUs_section.features.innovation.description')}</p>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                  {t('pages.home.whyChooseUs_section.button')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Recent Projects - Alternating Layout */}
      <section className="py-16 bg-gradient-to-b from-snow to-white">
        <div className="container mx-auto px-12">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              {t('pages.home.portfolio_section.badge')}
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">{t('pages.home.portfolio_section.title')}</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              {t('pages.home.portfolio_section.description')}
            </p>
          </motion.div>

          {/* Project 1: Image Left, Text Right */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div 
              className="relative"
              variants={slideInLeftVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1722010811002-a772b2066890?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Fujairah Mall AC System" 
                className="w-full h-96 object-cover rounded-3xl shadow-xl" 
                loading="lazy" 
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-80"></div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={slideInRightVariants}
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {t('pages.home.portfolio_section.projects.project1.category')}
              </div>
              <h3 className="text-3xl font-bold text-primary">{t('pages.home.portfolio_section.projects.project1.title')}</h3>
              <p className="text-secondary text-lg leading-relaxed">
                {t('pages.home.portfolio_section.projects.project1.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-secondary">{t('pages.home.portfolio_section.projects.project1.features.chilledWater')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-secondary">{t('pages.home.portfolio_section.projects.project1.features.smartControl')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-secondary">{t('pages.home.portfolio_section.projects.project1.features.maintenance')}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <span className="text-sm text-secondary">{t('pages.home.portfolio_section.projects.project1.year')}</span>
                <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                  {t('pages.home.portfolio_section.projects.project1.button')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Project 2: Text Left, Image Right */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div 
              className="space-y-6 lg:order-1"
              variants={slideInLeftVariants}
            >
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                {t('pages.home.portfolio_section.projects.project2.category')}
              </div>
              <h3 className="text-3xl font-bold text-primary">{t('pages.home.portfolio_section.projects.project2.title')}</h3>
              <p className="text-secondary text-lg leading-relaxed">
                {t('pages.home.portfolio_section.projects.project2.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-secondary">{t('pages.home.portfolio_section.projects.project2.features.iot')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-secondary">{t('pages.home.portfolio_section.projects.project2.features.automation')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-secondary">{t('pages.home.portfolio_section.projects.project2.features.monitoring')}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <span className="text-sm text-secondary">{t('pages.home.portfolio_section.projects.project2.year')}</span>
                <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                  {t('pages.home.portfolio_section.projects.project2.button')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="relative lg:order-2"
              variants={slideInRightVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Madhab Office Complex" 
                className="w-full h-96 object-cover rounded-3xl shadow-xl" 
                loading="lazy" 
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-2xl opacity-80"></div>
            </motion.div>
          </motion.div>

          {/* Project 3: Image Left, Text Right */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div 
              className="relative"
              variants={slideInLeftVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1708015694046-ba486c73fe4e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Khor Fakkan Hotel" 
                className="w-full h-96 object-cover rounded-3xl shadow-xl" 
                loading="lazy" 
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-2xl opacity-80"></div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={slideInRightVariants}
            >
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                {t('pages.home.portfolio_section.projects.project3.category')}
              </div>
              <h3 className="text-3xl font-bold text-primary">{t('pages.home.portfolio_section.projects.project3.title')}</h3>
              <p className="text-secondary text-lg leading-relaxed">
                {t('pages.home.portfolio_section.projects.project3.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-secondary">{t('pages.home.portfolio_section.projects.project3.features.annual')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-secondary">{t('pages.home.portfolio_section.projects.project3.features.optimization')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-secondary">{t('pages.home.portfolio_section.projects.project3.features.luxury')}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <span className="text-sm text-secondary">{t('pages.home.portfolio_section.projects.project3.year')}</span>
                <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                  {t('pages.home.portfolio_section.projects.project3.button')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <button className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
              {t('pages.home.portfolio_section.cta')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Contact & Location - Full Width Layout */}
      <section className="py-12 bg-gradient-to-b from-snow to-white">
        <div className="container mx-auto px-12">
          {/* Contact Details Section */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeftVariants}
          >
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {t('pages.home.contact_section.badge')}
              </div>
              <h2 className="text-4xl font-bold text-primary leading-tight">
                {t('pages.home.contact_section.title')}
              </h2>
              <p className="text-primary text-lg leading-relaxed">
                {t('pages.home.contact_section.description')}
              </p>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mt-12"
              variants={containerVariants}
            >
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index} 
                  className="group flex flex-col items-center text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-accent/30 hover:bg-white/80 hover:scale-105 transition-all duration-300 cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mb-4`}>
                    {method.icon}
                  </div>
                  <div className={`${isRTL ? 'text-right' : 'text-left'} w-full`}>
                    <h4 className="font-semibold text-primary group-hover:text-primary/80 transition-colors mb-2">{method.label}</h4>
                    <p className="text-primary group-hover:text-primary/80 transition-colors">{method.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8"
              variants={itemVariants}
            >
              <motion.a 
                href="tel:+97158192989" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('pages.home.contact_section.buttons.call')}
              </motion.a>
              <motion.a 
                href="mailto:info@alqalaa-ac.com" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('pages.home.contact_section.buttons.email')}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRightVariants}
          >
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.139305!2d56.331444!3d25.139305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA4JzIxLjUiTiA1NsKwMTknNTMuMiJF!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AlQalaa AC Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-2xl opacity-80 shadow-lg"></div>
              <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-white rounded-2xl p-4 shadow-xl border border-accent`}>
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <p className="font-bold text-primary text-sm">AlQalaa AC</p>
                    <p className="text-primary text-xs">Fujairah, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Trusted Brands - Auto Slider */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              {t('pages.home.brands_section.badge')}
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">{t('pages.home.brands_section.title')}</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              {t('pages.home.brands_section.description')}
            </p>
          </motion.div>

          <BrandsSlider />

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <p className="text-secondary text-sm">
              {t('pages.home.brands_section.footer')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <motion.section 
        className="py-24 gradient-primary text-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 text-center relative">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('pages.home.cta_section.title')}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t('pages.home.cta_section.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors duration-300 shadow-2xl shadow-black/20">
                <Phone className="w-5 h-5 mr-2 animate-pulse" />
                {t('pages.home.cta_section.buttons.call')}
              </button>
             
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}