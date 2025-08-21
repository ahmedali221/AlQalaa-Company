import { 
  Settings, 
  FileText,
  CheckCircle, 
  ArrowRight,
  Thermometer,
  Shield,
  Wrench,
  Users,
  Phone,
  Star,
  Building,
  Monitor,
  Package,
  Wind,
  Target,
  
  Award,
  TrendingUp,
  Headphones,
  MapPin,
  Image
} from "lucide-react";
import { cn } from "../utils/cn";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import CTA from "../components/CTA";


// Import design images
import design1 from "../assets/Designs/3.jpg";
import design2 from "../assets/Designs/8.jpg";
import design3 from "../assets/Designs/9.jpg";
import design4 from "../assets/Designs/20.jpg";
import design5 from "../assets/Designs/24.jpg";
import design6 from "../assets/Designs/11.jpg";

// Import step images and other assets to ensure proper bundling in production
import stepContacting from "../assets/Steps/contacting.JPG";
import stepPlanning from "../assets/Steps/planning.JPG";
import stepDesign from "../assets/Steps/design.JPG";
import stepProvidingMaterials from "../assets/Steps/providingMaterials.jpeg";
import stepStarting from "../assets/Steps/starting.JPG";
import stepTakingMeasures from "../assets/Steps/takingMeasures.JPG";
import stepConsultation from "../assets/Steps/consultation.JPG";
import modelingImg from "../assets/3Ds/modeling.jpeg";
import modelingTestImg from "../assets/3Ds/modelingTest.jpeg";
import certificateImg from "../assets/Certificates/certificate.jpg";
import certificateScanImg from "../assets/Certificates/Scan.jpg";



interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'secondary';
}

function Badge({ 
  className, 
  variant = 'default', 
  ...props 
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-all duration-300",
        variant === 'default' && "bg-primary text-white shadow-lg shadow-primary/20",
        variant === 'outline' && "border border-primary text-primary hover:bg-primary hover:text-white",
        variant === 'secondary' && "bg-accent text-primary hover:bg-secondary",
        className
      )}
      {...props}
    />
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'xl';
}

function Button({ 
  className, 
  variant = 'default', 
  size = 'default', 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 hover:scale-105 active:scale-95",
        variant === 'default' && "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
        variant === 'outline' && "border border-primary bg-white text-primary hover:bg-primary hover:text-white",
        variant === 'ghost' && "hover:bg-accent hover:text-primary",
        size === 'default' && "h-10 px-4 py-2",
        size === 'sm' && "h-9 px-3 rounded-md",
        size === 'lg' && "h-11 px-8 rounded-md",
        size === 'xl' && "h-14 px-10 rounded-lg text-lg",
        className
      )}
      {...props}
    />
  );
}

export default function ServicesPage() {
  const { t, dir } = useLanguage();
  
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
      transition: { duration: 0.6 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const mainServices = [
    {
      icon: <Wind className="w-6 h-6 text-gold" />,
      title: t('pages.services.mainServices.duct.title'),
      description: t('pages.services.mainServices.duct.description'),
      features: [
        t('pages.services.mainServices.duct.features.0'),
        t('pages.services.mainServices.duct.features.1'),
        t('pages.services.mainServices.duct.features.2'),
        t('pages.services.mainServices.duct.features.3')
      ],
      capacity: t('pages.services.mainServices.duct.capacity'),
      warranty: t('pages.services.mainServices.duct.warranty'),
      popular: true,
      color: "from-primary to-accent"
    },
    {
      icon: <Package className="w-6 h-6 text-gold" />,
      title: t('pages.services.mainServices.package.title'),
      description: t('pages.services.mainServices.package.description'),
      features: [
        t('pages.services.mainServices.package.features.0'),
        t('pages.services.mainServices.package.features.1'),
        t('pages.services.mainServices.package.features.2'),
        t('pages.services.mainServices.package.features.3')
      ],
      capacity: t('pages.services.mainServices.package.capacity'),
      warranty: t('pages.services.mainServices.package.warranty'),
      popular: false,
      color: "from-primary to-secondary"
    },
    {
      icon: <Monitor className="w-6 h-6 text-gold" />,
      title: t('pages.services.mainServices.smart.title'),
      description: t('pages.services.mainServices.smart.description'),
      features: [
        t('pages.services.mainServices.smart.features.0'),
        t('pages.services.mainServices.smart.features.1'),
        t('pages.services.mainServices.smart.features.2'),
        t('pages.services.mainServices.smart.features.3')
      ],
      capacity: t('pages.services.mainServices.smart.capacity'),
      warranty: t('pages.services.mainServices.smart.warranty'),
      popular: false,
      color: "from-secondary to-primary"
    }
  ];



  const processSteps = [
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      title: t('pages.services.processSteps.consultation.title'),
      description: t('pages.services.processSteps.consultation.description'),
      color: "from-primary to-accent"
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold" />,
      title: t('pages.about.siteInspection.title'),
      description: t('pages.about.siteInspection.description'),
      color: "from-secondary to-accent"
    },
    {
      icon: <FileText className="w-6 h-6 text-gold" />,
      title: t('pages.services.processSteps.design.title'),
      description: t('pages.services.processSteps.design.description'),
      color: "from-primary to-secondary"
    },
    {
      icon: <Package className="w-6 h-6 text-gold" />,
      title: t('pages.services.processSteps.procurement.title'),
      description: t('pages.services.processSteps.procurement.description'),
      color: "from-secondary to-primary"
    },
    {
      icon: <Wrench className="w-6 h-6 text-gold" />,
      title: t('pages.services.processSteps.installation.title'),
      description: t('pages.services.processSteps.installation.description'),
      color: "from-primary to-accent"
    },
    {
      icon: <Settings className="w-6 h-6 text-gold" />,
      title: t('pages.services.processSteps.testing.title'),
      description: t('pages.services.processSteps.testing.description'),
      color: "from-secondary to-accent"
    },
 
  ];

  const certifications = [
    { name: t('pages.services.certifications.rheem.title'), icon: <Award className="w-5 h-5 text-gold" />, color: "from-secondary to-primary" },
    { name: t('pages.services.certifications.engineers.title'), icon: <Users className="w-5 h-5 text-gold" />, color: "from-primary to-accent" },
    { name: t('pages.services.certifications.municipality.title'), icon: <Shield className="w-5 h-5 text-gold" />, color: "from-secondary to-accent" },
    { name: t('pages.services.certifications.quality.title'), icon: <CheckCircle className="w-5 h-5 text-gold" />, color: "from-primary to-secondary" }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: <Building className="w-5 h-5" /> },
    { label: "Happy Clients", value: "200+", icon: <Users className="w-5 h-5" /> },
    { label: "Years Experience", value: "4+", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Support Available", value: "24/7", icon: <Headphones className="w-5 h-5" /> }
  ];



  return (
    <div className="w-full max-w-full px-4 sm:px-6 md:px-8">
     {/* Hero Section - Fixed for horizontal scroll */}
<motion.section 
  className="bg-gradient-to-br from-snow via-white to-accent py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden"
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
  {/* Enhanced background patterns */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(247, 199, 144, 0.15) 1px, transparent 0)`,
      backgroundSize: '25px 25px'
    }}></div>
  </div>
  
  {/* Fixed decorative elements - contained within viewport */}
  <motion.div 
     className="absolute top-10 right-4 sm:right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl max-w-full"
    animate={{ 
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{ 
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  ></motion.div>
  <motion.div 
     className="absolute bottom-10 left-4 sm:left-10 w-48 h-48 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-3xl max-w-full"
    animate={{ 
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  ></motion.div>
  <motion.div 
     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full blur-2xl max-w-full"
    animate={{ 
      scale: [1, 1.3, 1],
      opacity: [0.4, 0.8, 0.4]
    }}
    transition={{ 
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  ></motion.div>
  
  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div variants={fadeInUp}>
        <Badge variant="outline" className="mb-4 sm:mb-6 text-logo-brown border-logo-brown px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm">
          <Thermometer className="w-4 h-4 mr-2" />
          {t('pages.services.badge')}
        </Badge>
      </motion.div>
      
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-gold via-gold to-gold bg-clip-text text-gold"
        variants={fadeInUp}
      >
        {t('pages.services.title')}
      </motion.h1>
      
      <motion.p 
        className="text-base sm:text-lg md:text-xl text-gold mb-6 sm:mb-10 leading-relaxed max-w-3xl mx-auto"
        variants={fadeInUp}
      >
        {t('pages.services.description')}
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-5"
        variants={fadeInUp}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 group border-0 shadow-lg shadow-primary/20 text-sm sm:text-base font-medium py-2.5 sm:py-3 px-6 sm:px-8">
            {t('pages.services.quoteButton')}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" size="lg" className="group border-gold text-gold hover:bg-gold hover:text-white shadow-lg text-sm sm:text-base font-medium py-2.5 sm:py-3 px-6 sm:px-8">
            <Phone className="w-4 h-4 mr-2" />
            {t('pages.services.callButton')}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-6 sm:py-8 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-snow to-white rounded-2xl p-6 border border-accent hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-heading-md font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-body-sm text-gold">{t(`pages.about.achievements.items.${index}.label`)}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Services */}
      <motion.section 
        className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/50 to-transparent"></div>
        <motion.div 
           className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl max-w-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
           className="absolute top-1/4 right-4 sm:right-8 w-40 h-40 bg-gradient-to-bl from-primary/10 to-accent/10 rounded-full blur-3xl max-w-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
            variants={fadeInUp}
          >
            <Badge variant="outline" className="mb-4 sm:mb-6 text-gold border-gold px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm">
              {t('pages.services.core.badge')}
            </Badge>
            <h2 className="text-heading-lg font-bold mb-3 sm:mb-4 text-gold">{t('pages.services.core.title')}</h2>
            <p className="text-gold text-body-lg max-w-3xl mx-auto">{t('pages.services.core.description')}</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto px-4"
            variants={staggerContainer}
          >
            {mainServices.map((service, index) => (
              <motion.div 
                key={index} 
                className={`relative group cursor-pointer ${
                  service.popular ? 'lg:col-span-2' : ''
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative bg-white border border-accent rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-500 h-full flex flex-col ${
                  service.popular ? 'border-primary/30 bg-gradient-to-br from-secondary/10 via-white to-accent/10 shadow-xl shadow-primary/15' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-2 sm:-top-3 left-4 sm:left-8">
                      <Badge className="bg-gradient-to-r from-primary to-secondary border-0 animate-pulse px-3 sm:px-4 py-1 sm:py-1.5 text-body-sm shadow-lg shadow-primary/30 text-white">
                        <Star className="w-3 sm:w-4 sm:h-4 mr-2" />
                        {t('pages.services.mostPopular')}
                      </Badge>
                    </div>
                  )}
                  
                  {service.popular ? (
                    // Popular service layout - full width with enhanced design
                    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-full">
                      {/* Left column - Icon and title */}
                      <div className="lg:col-span-1">
                        <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 bg-gradient-to-br ${service.color} text-white shadow-lg shadow-primary/20`}>
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-gold transition-colors duration-300 text-gold">{service.title}</h3>
                <p className="text-gold text-body-sm leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Middle column - Features */}
                      <div className="lg:col-span-1">
                        <div className="space-y-4 sm:space-y-5">
                          <div>
                            <h4 className="font-bold mb-3 text-gold text-sm sm:text-base flex items-center">
                    <CheckCircle className="w-4 h-4 text-gold mr-2" />
                              {t('pages.services.keyFeatures')}
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gold group-hover:transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-gold" />
                                  </div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Right column - Capacity, Warranty, and Button */}
                      <div className="lg:col-span-1">
                        <div className="space-y-4 sm:space-y-5 mb-4 sm:mb-6">
                          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-snow to-white group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 border border-accent">
                            <h4 className="font-bold text-body-sm text-gold mb-2 flex items-center">
                              <Target className="w-4 h-4 text-gold mr-2" />
                              {t('pages.services.capacityRange')}
                            </h4>
                            <p className="text-gold font-bold text-sm sm:text-base">{service.capacity}</p>
                          </div>
                          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-snow to-white group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 border border-accent">
                            <h4 className="font-bold text-body-sm text-gold mb-2 flex items-center">
                              <Shield className="w-4 h-4 text-gold mr-2" />
                              {t('pages.services.warranty')}
                            </h4>
                            <p className="text-gold text-sm sm:text-base">{service.warranty}</p>
                          </div>
                        </div>
                        
                        <div className="mt-auto pt-3 sm:pt-4">
                          <Button 
                            variant="default" 
                            className="w-full group-hover:scale-105 transition-transform duration-300 text-body-sm py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-0 shadow-lg shadow-primary/20"
                          >
                            {t('pages.services.getDetails')}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular service layout - original design
                    <>
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 bg-accent group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-primary/5`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-heading-sm font-bold mb-1 sm:mb-2 group-hover:text-gold transition-colors duration-300 text-gold">{service.title}</h3>
                  <p className="text-gold text-sm sm:text-base leading-relaxed">{service.description}</p>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 max-w-full">
                        <div>
                          <h4 className="font-bold mb-2 sm:mb-3 text-gold text-body-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-gold mr-2" />
                            {t('pages.services.keyFeatures')}
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-1.5 sm:gap-2 text-body-sm text-gold group-hover:transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                          <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-gold" />
                                </div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3 sm:space-y-5">
                          <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-snow to-white group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 border border-accent">
                            <h4 className="font-bold text-xs sm:text-sm text-gold mb-1 sm:mb-2 flex items-center">
                              <Target className="w-4 h-4 text-gold mr-2" />
                              {t('pages.services.capacityRange')}
                            </h4>
                            <p className="text-gold font-bold text-sm sm:text-base">{service.capacity}</p>
                          </div>
                          <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-snow to-white group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 border border-accent">
                            <h4 className="font-bold text-xs sm:text-sm text-gold mb-1 sm:mb-2 flex items-center">
                              <Shield className="w-4 h-4 text-gold mr-2" />
                              {t('pages.services.warranty')}
                            </h4>
                            <p className="text-gold text-sm sm:text-base">{service.warranty}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-3 sm:pt-4">
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:scale-105 transition-transform duration-300 text-sm sm:text-base py-2 sm:py-2.5 border-gold text-gold hover:bg-gold hover:text-white"
                        >
                          {t('pages.services.getDetails')}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

 
      {/* Section 2: Work Process - Alternating Layout */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-4 sm:left-8 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-8 w-56 h-56 bg-gradient-to-tl from-secondary/30 to-primary/20 rounded-full blur-3xl max-w-full"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-4 sm:mb-6 text-gold border-gold px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm">
              {t('pages.services.process.badge')}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gold">{t('pages.services.process.title')}</h2>
            <p className="text-gold text-base sm:text-lg max-w-3xl mx-auto">{t('pages.services.process.description')}</p>
          </div>

          <div className="space-y-16 sm:space-y-20 md:space-y-24 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center animate-in slide-in-from-bottom-4 duration-700 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number Badge */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 border-4 border-white">
                    <span className="text-white font-bold text-heading-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Content - Alternating layout */}
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-heading-sm font-bold text-gold">{step.title}</h3>
                  <p className="text-gold text-body-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Additional details or features could go here */}
                  <div className="bg-gradient-to-br from-snow to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-accent">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-gold font-semibold text-body-sm">
                        {index === 0 && t('pages.services.processSteps.consultation.detail')}
                        {index === 1 && t('pages.services.processSteps.design.detail')}
                        {index === 2 && t('pages.services.processSteps.procurement.detail')}
                        {index === 3 && t('pages.services.processSteps.installation.detail')}
                        {index === 4 && t('pages.services.processSteps.testing.detail')}
                        {index === 5 && t('pages.services.processSteps.support.detail')}
                      </span>
                    </div>
                    <p className="text-gold text-body-sm leading-relaxed">
                      {index === 0 && t('pages.services.processSteps.consultation.detailText')}
                      {index === 1 && t('pages.services.processSteps.design.detailText')}
                      {index === 2 && t('pages.services.processSteps.procurement.detailText')}
                      {index === 3 && t('pages.services.processSteps.installation.detailText')}
                      {index === 4 && t('pages.services.processSteps.testing.detailText')}
                      {index === 5 && t('pages.services.processSteps.support.detailText')}
                    </p>
                  </div>
                </div>

                {/* Image Side - Alternating */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden">
                    <img 
                      src={[
                        stepContacting, // consultation
                        stepPlanning, // site inspection
                        stepDesign, // design
                        stepProvidingMaterials, // procurement
                        stepStarting, // installation
                        stepTakingMeasures, // testing
                      ][index]} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`absolute -bottom-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl opacity-80`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: System Design Process */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-1/4 right-4 sm:right-8 w-48 h-48 bg-gradient-to-bl from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute bottom-0 left-4 sm:left-8 w-64 h-64 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-3xl max-w-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-6 text-gold border-gold px-4 py-2 text-body-sm font-semibold shadow-sm">
              <FileText className="w-4 h-4 mr-2" />
              {t('pages.about.systemDesign.badge')}
            </Badge>
            <h2 className="text-heading-lg font-bold mb-4 text-gold">{t('pages.about.systemDesign.title')}</h2>
            <p className="text-gold text-body-lg max-w-3xl mx-auto">{t('pages.about.systemDesign.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-full">
            {/* Text Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-body-sm font-medium">
                {t('pages.about.systemDesign.badge')}
              </div>
              <h2 className="text-heading-lg font-bold text-gold leading-tight">
                {t('pages.about.systemDesign.title')}
              </h2>
              <p className="text-gold text-body-lg leading-relaxed">
                {t('pages.about.systemDesign.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1 text-body-sm">{t('pages.about.systemDesign.features.analysis.title')}</h4>
                    <p className="text-gold text-caption">{t('pages.about.systemDesign.features.analysis.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Image className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1 text-body-sm">{t('pages.about.systemDesign.features.modeling.title')}</h4>
                    <p className="text-gold text-caption">{t('pages.about.systemDesign.features.modeling.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1 text-body-sm">{t('pages.about.systemDesign.features.engineering.title')}</h4>
                    <p className="text-gold text-caption">{t('pages.about.systemDesign.features.engineering.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1 text-body-sm">{t('pages.about.systemDesign.features.optimization.title')}</h4>
                    <p className="text-primary text-caption">{t('pages.about.systemDesign.features.optimization.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side - Two 3D modeling images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <img 
                    src={modelingImg} 
                    alt="3D modeling and system design" 
                    className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                  <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl opacity-80"></div>
                </div>
                <div className="relative">
                  <img 
                    src={modelingTestImg} 
                    alt="Advanced 3D visualization" 
                    className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Support & Maintenance */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-snow to-white relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-1/3 left-4 sm:left-8 w-48 h-48 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute bottom-0 right-4 sm:right-8 w-64 h-64 bg-gradient-to-tl from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-6 text-gold border-gold px-4 py-2 text-body-sm font-semibold shadow-sm">
              <Headphones className="w-4 h-4 mr-2" />
              {t('pages.about.support.badge')}
            </Badge>
            <h2 className="text-heading-lg font-bold mb-4 text-gold">{t('pages.about.support.title')}</h2>
            <p className="text-primary text-body-lg max-w-3xl mx-auto">{t('pages.about.support.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-full">
            {/* Text Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-body-sm font-medium">
                {t('pages.about.support.badge')}
              </div>
              <h2 className="text-heading-lg font-bold text-gold leading-tight">
                {t('pages.about.support.title')}
              </h2>
              <p className="text-gold text-body-lg leading-relaxed">
                {t('pages.about.support.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-logo-brown/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1 text-body-sm">{t('pages.about.support.features.emergencySupport.title')}</h4>
                    <p className="text-gold text-caption">{t('pages.about.support.features.emergencySupport.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1 text-body-sm">{t('pages.about.support.features.preventiveMaintenance.title')}</h4>
                    <p className="text-gold text-caption">{t('pages.about.support.features.preventiveMaintenance.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1 text-body-sm">{t('pages.about.support.features.technicalSupport.title')}</h4>
                    <p className="text-gold text-caption">{t('pages.about.support.features.technicalSupport.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1 text-body-sm">{t('pages.about.support.features.warrantyService.title')}</h4>
                    <p className="text-gold text-caption">{t('pages.about.support.features.warrantyService.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img 
                src={stepConsultation} 
                alt="24/7 support and maintenance services" 
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-3xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Showcase Section */}
                 <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-snow to-white relative overflow-hidden">
         {/* Enhanced decorative elements */}
         <div className="absolute top-1/3 left-4 sm:left-8 w-48 h-48 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute bottom-0 right-4 sm:right-8 w-64 h-64 bg-gradient-to-tl from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
         
         <div className="container mx-auto px-4 relative z-10">
                       <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-700">
              <Badge variant="outline" className="mb-6 text-gold border-gold px-4 py-2 text-body-sm font-semibold shadow-sm">
                <Image className="w-4 h-4 mr-2" />
                {t('pages.services.designs.badge')}
              </Badge>
              <h2 className="text-heading-lg font-bold mb-4 text-gold">{t('pages.services.designs.title')}</h2>
            <p className="text-gold text-body-lg max-w-3xl mx-auto">{t('pages.services.designs.description')}</p>
            </div>

                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
              {[
                { src: design1, title: t('pages.services.designs.items.residential.title'), description: t('pages.services.designs.items.residential.description'), type: t('pages.services.designs.items.residential.type') },
                { src: design2, title: t('pages.services.designs.items.commercial.title'), description: t('pages.services.designs.items.commercial.description'), type: t('pages.services.designs.items.commercial.type') },
                { src: design3, title: t('pages.services.designs.items.industrial.title'), description: t('pages.services.designs.items.industrial.description'), type: t('pages.services.designs.items.industrial.type') },
                { src: design4, title: t('pages.services.designs.items.office.title'), description: t('pages.services.designs.items.office.description'), type: t('pages.services.designs.items.office.type') },
                { src: design5, title: t('pages.services.designs.items.luxury.title'), description: t('pages.services.designs.items.luxury.description'), type: t('pages.services.designs.items.luxury.type') },
                { src: design6, title: t('pages.services.designs.items.luxury.title'), description: t('pages.services.designs.items.luxury.description'), type: t('pages.services.designs.items.luxury.type') }
              ].map((design, index) => (
               <div 
                 key={index}
                 className="relative group cursor-pointer animate-in slide-in-from-bottom-4 duration-700"
                 style={{ animationDelay: `${index * 150}ms` }}
               >
                 <div className="w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                   <img 
                     src={design.src} 
                     alt={design.title} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                     loading="lazy"
                   />
                 </div>
                 
                 {/* Overlay with design info */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <Badge className="mb-3 bg-logo-brown/90 text-white border-0 text-caption">
                       {design.type}
                     </Badge>
                     <h3 className="text-white text-heading-sm font-bold mb-2">{design.title}</h3>
                     <p className="text-white/90 text-body-sm mb-4">{design.description}</p>
                                           <div className="flex items-center gap-3">
                     
                      </div>
                   </div>
                 </div>
                 
                 {/* Floating badge */}
                 <div className="absolute top-4 right-4">
                   <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                     <Image className="w-4 h-4 text-gold" />
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
                       {/* Call to action for designs */}
            <div className="text-center mt-12 md:mt-16">
              <p className="text-gold text-body-lg mb-6">{t('pages.services.designs.cta.title')}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-full">
              
                <Button size="lg" variant="outline" className="border-gold text-gold ">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('pages.services.designs.cta.consultation')}
                </Button>
              </div>
            </div>
         </div>
       </section>

      {/* Section 3: Certifications & Partnerships - Text Left, Image Right */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-snow to-white relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-1/4 right-4 sm:right-8 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-bl from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute bottom-0 left-4 sm:left-8 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-3xl max-w-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-6 text-primary border-primary px-4 py-2 text-body-sm font-semibold shadow-sm">
              {t('pages.services.certifications.badge')}
            </Badge>
            <h2 className="text-heading-lg font-bold mb-4 text-gold">{t('pages.services.certifications.title')}</h2>
            <p className="text-gold text-body-lg max-w-3xl mx-auto">{t('pages.services.certifications.description')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-full">
            {/* Text Side */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-body-sm font-medium">
                {t('pages.services.certifications.badge')}
              </div>
              <h2 className="text-heading-lg font-bold text-gold leading-tight">
                {t('pages.services.certifications.sectionTitle')}
              </h2>
              <p className="text-gold text-body-lg leading-relaxed">
                {t('pages.services.certifications.sectionDescription')}
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-full">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                      {cert.icon}
                    </div>
                    <span className="text-gold font-medium text-body-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side - Certificate Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <img 
                    src={certificateImg} 
                    alt="Professional certification" 
                    className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-semibold text-body-sm text-gold">Professional Certification</h4>
                      <p className="text-caption opacity-90">Licensed HVAC Professional</p>
                    </div>
                  </div>
                  <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl opacity-80"></div>
                </div>
                <div className="relative group">
                  <img 
                    src={certificateScanImg} 
                    alt="Quality assurance certification" 
                    className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-semibold text-body-sm text-gold">Quality Assurance</h4>
                      <p className="text-caption opacity-90">ISO Standards Compliance</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="-mx-4 sm:-mx-6 md:-mx-8">
        <CTA 
          title={t('pages.services.cta.title')}
          description={t('pages.services.cta.description')}
          primaryButtonText={t('pages.services.cta.contactButton')}
          secondaryButtonText={t('pages.services.cta.quoteButton')}
          variant="primary"
          features={{
            freeConsultation: t('pages.services.cta.features.freeConsultation'),
            quickResponse: t('pages.services.cta.features.quickResponse'),
            expertTeam: t('pages.services.cta.features.expertTeam')
          }}
        />
      </div>

     
  
    </div>
  );
}