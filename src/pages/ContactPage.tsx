import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  MessageCircle,
  Calendar,
  Star,
  Building,
  Navigation,
  Timer,
  Globe,
  Send,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";
import Button from "../components/Button";
import Badge from "../components/Badge";

export default function ContactPage() {
  const { t, dir } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
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

  const slideInVariants = {
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

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: t('pages.contact.contactInfo.phone.title'),
      info: "+971 56 620 1878",
      subInfo: t('pages.contact.contactInfo.phone.subInfo')
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: t('pages.contact.contactInfo.location.title'),
      info: t('pages.contact.contactInfo.location.info'),
      subInfo: t('pages.contact.contactInfo.location.subInfo')
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: t('pages.contact.contactInfo.email.title'),
      info: "info@alqalaa-ac.com",
      subInfo: t('pages.contact.contactInfo.email.subInfo')
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: t('pages.contact.contactInfo.hours.title'),
      info: t('pages.contact.contactInfo.hours.info'),
      subInfo: t('pages.contact.contactInfo.hours.subInfo')
    }
  ];

  const serviceAreas = [
    { 
      city: t('pages.contact.serviceAreas.fujairah.city'), 
      coverage: t('pages.contact.serviceAreas.fujairah.coverage'),
      icon: <Building className="w-5 h-5 text-white" />
    },
    { 
      city: t('pages.contact.serviceAreas.madhab.city'), 
      coverage: t('pages.contact.serviceAreas.madhab.coverage'),
      icon: <Star className="w-5 h-5 text-white" />
    },
    { 
      city: t('pages.contact.serviceAreas.kalba.city'), 
      coverage: t('pages.contact.serviceAreas.kalba.coverage'),
      icon: <Navigation className="w-5 h-5 text-white" />
    },
    { 
      city: t('pages.contact.serviceAreas.khorFakkan.city'), 
      coverage: t('pages.contact.serviceAreas.khorFakkan.coverage'),
      icon: <Globe className="w-5 h-5 text-white" />
    }
  ];

  const responseInfo = [
    {
      icon: <Timer className="w-6 h-6 text-white" />,
      title: t('pages.contact.responseInfo.responseTime.title'),
      value: t('pages.contact.responseInfo.responseTime.value'),
      description: t('pages.contact.responseInfo.responseTime.description')
    },
    {
      icon: <Headphones className="w-6 h-6 text-white" />,
      title: t('pages.contact.responseInfo.emergency.title'),
      value: t('pages.contact.responseInfo.emergency.value'),
      description: t('pages.contact.responseInfo.emergency.description')
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: t('pages.contact.responseInfo.siteVisit.title'),
      value: t('pages.contact.responseInfo.siteVisit.value'),
      description: t('pages.contact.responseInfo.siteVisit.description')
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-br from-snow via-white to-accent py-8 sm:py-12 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(247, 199, 144, 0.1) 1px, transparent 0)`,
            backgroundSize: '25px 25px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-6 text-primary border-primary">
                <MessageCircle className="w-4 h-4 mr-2" />
                {t('pages.contact.badge')}
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-logo-brown"
              variants={itemVariants}
            >
              {t('pages.contact.title')}
              <span className="block mt-2 text-logo-brown">{t('pages.contact.subtitle')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-primary mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {t('pages.contact.description')}
            </motion.p>
            
          
          </div>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section 
        className="py-8 sm:py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <Badge variant="outline" className="mb-6 text-logo-brown border-primary">{t('pages.contact.contactDetails.badge')}</Badge>
            <h2 className="text-3xl font-bold mb-4 text-logo-brown">{t('pages.contact.contactDetails.title')}</h2>
            <p className="text-logo-brown text-lg">{t('pages.contact.contactDetails.subtitle')}</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {contactInfo.map((contact, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="bg-white border border-accent rounded-3xl p-8 text-center h-full flex flex-col"
                  variants={cardVariants}
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-logo-brown">{contact.title}</h3>
                  <p className="text-logo-brown font-bold mb-2 flex-grow">{contact.info}</p>
                  <p className="text-logo-brown text-sm leading-relaxed mb-2">{contact.subInfo}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section 1: Contact Form & Response Info - Text Left, Image Right */}
      <motion.section 
        className="py-8 sm:py-12 bg-gradient-to-b from-snow to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div 
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInVariants}
            >
              <motion.div 
                className="bg-white/90 backdrop-blur-sm border border-accent rounded-3xl p-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2 text-logo-brown">{t('pages.contact.form.title')}</h2>
                  <p className="text-logo-brown">{t('pages.contact.form.description')}</p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-logo-brown">
                        {t('pages.contact.form.firstName.label')}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-snow border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 focus:scale-105"
                        placeholder={t('pages.contact.form.firstName.placeholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-logo-brown">
                        {t('pages.contact.form.lastName.label')}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-snow border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 focus:scale-105"
                        placeholder={t('pages.contact.form.lastName.placeholder')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-logo-brown">
                      {t('pages.contact.form.phone.label')}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-snow border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 focus:scale-105"
                      placeholder={t('pages.contact.form.phone.placeholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-logo-brown">
                      {t('pages.contact.form.email.label')}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-snow border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 focus:scale-105"
                      placeholder={t('pages.contact.form.email.placeholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-logo-brown">
                      {t('pages.contact.form.location.label')}
                    </label>
                    <select className="w-full px-4 py-3 bg-snow border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 focus:scale-105">
                      <option>{t('pages.contact.form.location.placeholder')}</option>
                      <option>{t('pages.contact.serviceAreas.fujairah.city')}</option>
                      <option>{t('pages.contact.serviceAreas.madhab.city')}</option>
                      <option>{t('pages.contact.serviceAreas.kalba.city')}</option>
                      <option>{t('pages.contact.serviceAreas.khorFakkan.city')}</option>
                      <option>{t('pages.contact.form.location.other')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-logo-brown">
                      {t('pages.contact.form.service.label')}
                    </label>
                    <select className="w-full px-4 py-3 bg-snow border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 focus:scale-105">
                      <option>{t('pages.contact.form.service.placeholder')}</option>
                      <option>{t('pages.contact.form.service.chilledWater')}</option>
                      <option>{t('pages.contact.form.service.ductSplit')}</option>
                      <option>{t('pages.contact.form.service.packageUnits')}</option>
                      <option>{t('pages.contact.form.service.smartControl')}</option>
                      <option>{t('pages.contact.form.service.installation')}</option>
                      <option>{t('pages.contact.form.service.maintenance')}</option>
                      <option>{t('pages.contact.form.service.repair')}</option>
                      <option>{t('pages.contact.form.service.design')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-logo-brown">
                      {t('pages.contact.form.details.label')}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-snow border border-accent rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none focus:scale-105"
                      placeholder={t('pages.contact.form.details.placeholder')}
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 py-4 group hover:scale-105 transition-all duration-300 border-0">
                    <Send className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                    {t('pages.contact.form.submit')}
                  </Button>
                </form>
              </motion.div>
            </motion.div>

            {/* Response Information */}
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
            >
              <motion.div className="text-center" variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-4 text-logo-brown">{t('pages.contact.whatToExpect.title')}</h2>
                <p className="text-logo-brown text-lg">{t('pages.contact.whatToExpected.subtitle')}</p>
              </motion.div>

              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                {responseInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="group cursor-pointer"
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <motion.div 
                      className="bg-white/90 backdrop-blur-sm border border-accent rounded-3xl p-6"
                      variants={cardVariants}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1 text-logo-brown">{info.title}</h3>
                          <p className="text-2xl font-bold text-logo-brown mb-1">{info.value}</p>
                          <p className="text-logo-brown text-sm">{info.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick Contact Options */}
              <motion.div 
                className="bg-white/90 backdrop-blur-sm border border-accent rounded-3xl p-10"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-logo-brown">{t('pages.contact.quickContact.title')}</h3>
                <p className="text-logo-brown text-center mb-8 text-lg">{t('pages.contact.quickContact.subtitle')}</p>
                <div className="space-y-6"> 
                  <a href="tel:+971566201878" className="block">
                    <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white group hover:scale-105 transition-all duration-300 p-6 h-auto">
                      <Phone className="w-6 h-6 mr-4 animate-pulse text-logo-brown group-hover:text-white" />
                      <div className="text-left">
                        <div className="font-bold text-lg">{t('pages.contact.quickContact.call.title')}</div>
                        <div className="text-base opacity-70">{t('pages.contact.quickContact.call.subtitle')}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Button>
                  </a>
                  <a href="mailto:info@alqalaa-ac.com" className="block">
                    <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white group hover:scale-105 transition-all duration-300 p-6 h-auto">
                      <Mail className="w-6 h-6 mr-4 text-logo-brown group-hover:text-white" />
                      <div className="text-left">
                        <div className="font-bold text-lg">{t('pages.contact.quickContact.email.title')}</div>
                        <div className="text-base opacity-70">{t('pages.contact.quickContact.email.subtitle')}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Button>
                  </a>
                  <a href="https://wa.me/97158192989" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white group hover:scale-105 transition-all duration-300 p-6 h-auto">
                      <MessageCircle className="w-6 h-6 mr-4 text-logo-brown group-hover:text-white" />
                      <div className="text-left">
                        <div className="font-bold text-lg">{t('pages.contact.quickContact.whatsapp.title')}</div>
                        <div className="text-base opacity-70">{t('pages.contact.quickContact.whatsapp.subtitle')}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Button>
                  </a>
                </div>
                <div className="mt-8 pt-8 border-t border-accent">
                  <h4 className="font-bold text-center mb-3 text-logo-brown text-lg">{t('pages.contact.quickContact.responseTime.title')}</h4>
                  <p className="text-base text-logo-brown text-center">{t('pages.contact.quickContact.responseTime.description')}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Service Areas - Text Only */}
      <motion.section 
        className="py-8 sm:py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <Badge variant="outline" className="mb-6 text-logo-brown border-primary">{t('pages.contact.serviceCoverage.badge')}</Badge>
            <h2 className="text-3xl font-bold mb-4 text-logo-brown">{t('pages.contact.serviceCoverage.title')}</h2>
            <p className="text-logo-brown text-lg">{t('pages.contact.serviceCoverage.subtitle')}</p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInVariants}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                {t('pages.contact.serviceCoverage.coverageAreas.badge')}
              </div>
              <h2 className="text-4xl font-bold text-logo-brown leading-tight text-center">
                {t('pages.contact.serviceCoverage.coverageAreas.title')}
              </h2>
              <p className="text-logo-brown text-lg leading-relaxed text-center">
                {t('pages.contact.serviceCoverage.coverageAreas.description')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {serviceAreas.map((area, index) => (
                  <motion.div 
                    key={index}
                    className="group cursor-pointer"
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <motion.div 
                      className="bg-white border border-accent rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center"
                      variants={cardVariants}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                        {area.icon}
                      </div>
                      <h3 className="text-logo-brown font-bold text-sm mb-2">{area.city}</h3>
                      <p className="text-logo-brown text-xs">{area.coverage}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3: Location & Directions - Full Width Layout */}
      <motion.section 
        className="py-8 sm:py-12 bg-gradient-to-b from-snow to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <Badge variant="outline" className="mb-6 text-logo-brown border-primary">{t('pages.contact.location.badge')}</Badge>
            <h2 className="text-3xl font-bold mb-4 text-logo-brown">{t('pages.contact.location.title')}</h2>
            <p className="text-logo-brown text-lg">{t('pages.contact.location.description')}</p>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-white border border-accent rounded-3xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-logo-brown mb-2">{t('pages.contact.location.address.area')}</h4>
                  <p className="text-logo-brown">{t('pages.contact.location.address.region')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Navigation className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-logo-brown mb-2">{t('pages.contact.location.access.title')}</h4>
                  <p className="text-logo-brown">{t('pages.contact.location.access.description')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-logo-brown mb-2">{t('pages.contact.location.hours.title')}</h4>
                  <p className="text-logo-brown">{t('pages.contact.location.hours.weekdays')}</p>
                  <p className="text-logo-brown">{t('pages.contact.location.hours.friday')}</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <a 
                  href="https://www.google.com/maps/place/25.139305,56.331444/data=!4m6!3m5!1s0!7e2!8m2!3d25.1393055!4d56.3314439?entry=gps&coh=192189&g_ep=CAESBzI1LjMxLjIYACD67A0qhwEsOTQyNjc3MjcsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAkFF&skid=2231d3d2-0d17-4df0-a26f-33c5f40c048a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl"
                >
                  <Navigation className={`w-4 h-4 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                  {t('pages.contact.location.directions')}
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="relative">
              <div className="w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
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
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-accent">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-logo-brown text-sm">AlQalaa AC</p>
                    <p className="text-logo-brown text-xs">Fujairah, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    
    </div>
  );
}