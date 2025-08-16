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
  Droplets,
  Wind,
  Target,
  Gauge,
  Award,
  TrendingUp,
  Headphones,
  MapPin,
  Image
} from "lucide-react";
import { cn } from "../utils/cn";
import { useLanguage } from "../contexts/LanguageContext";


// Import design images
import design1 from "../assets/Designs/3.jpg";
import design2 from "../assets/Designs/8.jpg";
import design3 from "../assets/Designs/9.jpg";
import design4 from "../assets/Designs/20.jpg";
import design5 from "../assets/Designs/24.jpg";
import design6 from "../assets/Designs/11.jpg";

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
  const { t } = useLanguage();
  
  const mainServices = [
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: t('pages.services.mainServices.chilled.title'),
      description: t('pages.services.mainServices.chilled.description'),
      features: [
        t('pages.services.mainServices.chilled.features.0'),
        t('pages.services.mainServices.chilled.features.1'),
        t('pages.services.mainServices.chilled.features.2'),
        t('pages.services.mainServices.chilled.features.3')
      ],
      capacity: t('pages.services.mainServices.chilled.capacity'),
      warranty: t('pages.services.mainServices.chilled.warranty'),
      popular: true,
      color: "from-primary to-accent"
    },
    {
      icon: <Wind className="w-8 h-8 text-primary" />,
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
      popular: false,
      color: "from-secondary to-accent"
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
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
      icon: <Monitor className="w-8 h-8 text-primary" />,
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

  const additionalServices = [
    {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      title: t('pages.services.additionalServices.installation.title'),
      description: t('pages.services.additionalServices.installation.description'),
      color: "from-primary to-accent"
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: t('pages.services.additionalServices.maintenance.title'),
      description: t('pages.services.additionalServices.maintenance.description'),
      color: "from-secondary to-accent"
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: t('pages.services.additionalServices.materials.title'),
      description: t('pages.services.additionalServices.materials.description'),
      color: "from-primary to-secondary"
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: t('pages.services.additionalServices.design.title'),
      description: t('pages.services.additionalServices.design.description'),
      color: "from-secondary to-primary"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: t('pages.services.additionalServices.emergency.title'),
      description: t('pages.services.additionalServices.emergency.description'),
      color: "from-primary to-accent"
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary" />,
      title: t('pages.services.additionalServices.optimization.title'),
      description: t('pages.services.additionalServices.optimization.description'),
      color: "from-secondary to-accent"
    }
  ];

  const processSteps = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: t('pages.services.processSteps.consultation.title'),
      description: t('pages.services.processSteps.consultation.description'),
      color: "from-primary to-accent"
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: t('pages.services.processSteps.design.title'),
      description: t('pages.services.processSteps.design.description'),
      color: "from-secondary to-accent"
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: t('pages.services.processSteps.procurement.title'),
      description: t('pages.services.processSteps.procurement.description'),
      color: "from-primary to-secondary"
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      title: t('pages.services.processSteps.installation.title'),
      description: t('pages.services.processSteps.installation.description'),
      color: "from-secondary to-primary"
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: t('pages.services.processSteps.testing.title'),
      description: t('pages.services.processSteps.testing.description'),
      color: "from-primary to-accent"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: t('pages.services.processSteps.support.title'),
      description: t('pages.services.processSteps.support.description'),
      color: "from-secondary to-accent"
    }
  ];

  const certifications = [
    { name: t('pages.services.certifications.rheem.title'), icon: <Award className="w-6 h-6 text-primary" />, color: "from-secondary to-primary" },
    { name: t('pages.services.certifications.engineers.title'), icon: <Users className="w-6 h-6 text-primary" />, color: "from-primary to-accent" },
    { name: t('pages.services.certifications.municipality.title'), icon: <Shield className="w-6 h-6 text-primary" />, color: "from-secondary to-accent" },
    { name: t('pages.services.certifications.quality.title'), icon: <CheckCircle className="w-6 h-6 text-primary" />, color: "from-primary to-secondary" }
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
<section className="bg-gradient-to-br from-snow via-white to-accent py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
  {/* Enhanced background patterns */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(247, 199, 144, 0.15) 1px, transparent 0)`,
      backgroundSize: '25px 25px'
    }}></div>
  </div>
  
  {/* Fixed decorative elements - contained within viewport */}
  <div className="absolute top-10 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse max-w-full"></div>
  <div className="absolute bottom-10 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-3xl max-w-full"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full blur-2xl animate-ping max-w-full"></div>
  
  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <Badge variant="outline" className="mb-4 sm:mb-6 text-primary border-primary animate-in slide-in-from-bottom-4 duration-700 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm">
        <Thermometer className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
        {t('pages.services.badge')}
      </Badge>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-200 leading-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-primary">
        {t('pages.services.title')}
      </h1>
      
      <p className="text-base sm:text-lg md:text-xl text-primary mb-6 sm:mb-10 leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-400 max-w-3xl mx-auto">
        {t('pages.services.description')}
      </p>
      
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-5 animate-in slide-in-from-bottom-4 duration-700 delay-600">
        <Button size="lg" className="bg-primary hover:bg-primary/90 group hover:scale-105 transition-all duration-300 border-0 shadow-lg shadow-primary/20 text-sm sm:text-base font-medium py-2.5 sm:py-3 px-6 sm:px-8">
          {t('pages.services.quoteButton')}
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
        <Button variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300 border-primary text-primary hover:bg-primary hover:text-white shadow-lg text-sm sm:text-base font-medium py-2.5 sm:py-3 px-6 sm:px-8">
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 animate-pulse" />
          {t('pages.services.callButton')}
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-6 sm:py-8 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group animate-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-snow to-white rounded-2xl p-6 border border-accent hover:shadow-lg hover:border-primary/20 transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-primary">{t(`pages.about.achievements.items.${index}.label`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl max-w-full"></div>
        <div className="absolute top-1/4 right-4 sm:right-8 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-bl from-primary/10 to-accent/10 rounded-full blur-3xl max-w-full"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-4 sm:mb-6 text-primary border-primary px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm">
              {t('pages.services.core.badge')}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary">{t('pages.services.core.title')}</h2>
            <p className="text-primary text-base sm:text-lg max-w-3xl mx-auto">{t('pages.services.core.description')}</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto px-4">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`relative group cursor-pointer animate-in slide-in-from-bottom-4 duration-700 ${
                  service.popular ? 'lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`relative bg-white border border-accent rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-500 h-full flex flex-col ${
                  service.popular ? 'border-primary/30 bg-gradient-to-br from-secondary/10 via-white to-accent/10 shadow-xl shadow-primary/15' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-2 sm:-top-3 left-4 sm:left-8">
                      <Badge className="bg-gradient-to-r from-primary to-secondary border-0 animate-pulse px-3 sm:px-4 py-1 sm:py-1.5 text-sm shadow-lg shadow-primary/30 text-white">
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
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 bg-gradient-to-br ${service.color} text-white shadow-lg shadow-primary/20`}>
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 text-primary">{service.title}</h3>
                            <p className="text-primary text-sm sm:text-base leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Middle column - Features */}
                      <div className="lg:col-span-1">
                        <div className="space-y-4 sm:space-y-5">
                          <div>
                            <h4 className="font-bold mb-3 text-primary text-sm sm:text-base flex items-center">
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                              {t('pages.services.keyFeatures')}
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-primary group-hover:transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
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
                            <h4 className="font-bold text-sm sm:text-base text-primary mb-2 flex items-center">
                              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                              {t('pages.services.capacityRange')}
                            </h4>
                            <p className="text-primary font-bold text-sm sm:text-base">{service.capacity}</p>
                          </div>
                          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-snow to-white group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 border border-accent">
                            <h4 className="font-bold text-sm sm:text-base text-primary mb-2 flex items-center">
                              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                              {t('pages.services.warranty')}
                            </h4>
                            <p className="text-primary text-sm sm:text-base">{service.warranty}</p>
                          </div>
                        </div>
                        
                        <div className="mt-auto pt-3 sm:pt-4">
                          <Button 
                            variant="default" 
                            className="w-full group-hover:scale-105 transition-transform duration-300 text-sm sm:text-base py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-0 shadow-lg shadow-primary/20"
                          >
                            {t('pages.services.getDetails')}
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular service layout - original design
                    <>
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 bg-accent group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-primary/5`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 text-primary">{service.title}</h3>
                          <p className="text-primary text-sm sm:text-base leading-relaxed">{service.description}</p>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 max-w-full">
                        <div>
                          <h4 className="font-bold mb-2 sm:mb-3 text-primary text-sm sm:text-base flex items-center">
                            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mr-1.5 sm:mr-2" />
                            {t('pages.services.keyFeatures')}
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-primary group-hover:transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                                  <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                                </div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3 sm:space-y-5">
                          <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-snow to-white group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 border border-accent">
                            <h4 className="font-bold text-xs sm:text-sm text-primary mb-1 sm:mb-2 flex items-center">
                              <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mr-1.5 sm:mr-2" />
                              {t('pages.services.capacityRange')}
                            </h4>
                            <p className="text-primary font-bold text-sm sm:text-base">{service.capacity}</p>
                          </div>
                          <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-snow to-white group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 border border-accent">
                            <h4 className="font-bold text-xs sm:text-sm text-primary mb-1 sm:mb-2 flex items-center">
                              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mr-1.5 sm:mr-2" />
                              {t('pages.services.warranty')}
                            </h4>
                            <p className="text-primary text-sm sm:text-base">{service.warranty}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-3 sm:pt-4">
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:scale-105 transition-transform duration-300 text-sm sm:text-base py-2 sm:py-2.5 border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          {t('pages.services.getDetails')}
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Additional Services - Text Left, Image Right */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-snow to-white relative overflow-hidden">
                 {/* Enhanced decorative elements */}
         <div className="absolute top-1/3 left-4 sm:left-8 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
         <div className="absolute bottom-0 right-4 sm:right-8 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tl from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-6 text-primary border-primary px-4 py-2 text-sm font-semibold shadow-sm">
              {t('pages.services.additionalServices.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{t('pages.services.additionalServices.title')}</h2>
            <p className="text-primary text-lg max-w-3xl mx-auto">{t('pages.services.additionalServices.description')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-full">
            {/* Text Side */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                {t('pages.services.additionalServices.badge')}
              </div>
              <h2 className="text-4xl font-bold text-primary leading-tight">
                {t('pages.services.additionalServices.title')}
              </h2>
              <p className="text-primary text-lg leading-relaxed">
                {t('pages.services.additionalServices.description')}
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-full">
                {additionalServices.slice(0, 4).map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-primary font-medium text-sm">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&crop=center" 
                alt="AC maintenance tools and equipment" 
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-80 max-w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Work Process - Alternating Layout */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-4 sm:left-8 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-8 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-tl from-secondary/30 to-primary/20 rounded-full blur-3xl max-w-full"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-4 sm:mb-6 text-primary border-primary px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm">
              {t('pages.services.process.badge')}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary">{t('pages.services.process.title')}</h2>
            <p className="text-primary text-base sm:text-lg max-w-3xl mx-auto">{t('pages.services.process.description')}</p>
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 border-4 border-white">
                    <span className="text-white font-bold text-lg sm:text-xl">{index + 1}</span>
                  </div>
                </div>

                {/* Content - Alternating layout */}
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">{step.title}</h3>
                      <p className="text-primary text-sm sm:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Additional details or features could go here */}
                  <div className="bg-gradient-to-br from-snow to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-accent">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-primary font-semibold text-sm sm:text-base">
                        {index === 0 && t('pages.services.processSteps.consultation.detail')}
                        {index === 1 && t('pages.services.processSteps.design.detail')}
                        {index === 2 && t('pages.services.processSteps.procurement.detail')}
                        {index === 3 && t('pages.services.processSteps.installation.detail')}
                        {index === 4 && t('pages.services.processSteps.testing.detail')}
                        {index === 5 && t('pages.services.processSteps.support.detail')}
                      </span>
                    </div>
                    <p className="text-primary text-sm leading-relaxed">
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
                        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center", // consultation
                        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center", // design
                        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&crop=center", // procurement
                        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&crop=center", // installation
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center", // testing
                        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"  // support
                      ][index]} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-80`}></div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                      <div>
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                          {step.icon}
                        </div>
                        <h4 className="text-white font-bold text-lg sm:text-xl mb-2">{step.title}</h4>
                        <p className="text-white/90 text-sm sm:text-base max-w-xs mx-auto">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`absolute -bottom-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent to-secondary rounded-xl opacity-80`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
                 {/* Design Showcase Section */}
                 <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-snow to-white relative overflow-hidden">
         {/* Enhanced decorative elements */}
         <div className="absolute top-1/3 left-4 sm:left-8 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
         <div className="absolute bottom-0 right-4 sm:right-8 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tl from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
         
         <div className="container mx-auto px-4 relative z-10">
                       <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-700">
              <Badge variant="outline" className="mb-6 text-primary border-primary px-4 py-2 text-sm font-semibold shadow-sm">
                <Image className="w-4 h-4 mr-2" />
                {t('pages.services.designs.badge')}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{t('pages.services.designs.title')}</h2>
              <p className="text-primary text-lg max-w-3xl mx-auto">{t('pages.services.designs.description')}</p>
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
                   />
                 </div>
                 
                 {/* Overlay with design info */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <Badge className="mb-3 bg-primary/90 text-white border-0 text-xs">
                       {design.type}
                     </Badge>
                     <h3 className="text-white text-xl font-bold mb-2">{design.title}</h3>
                     <p className="text-white/90 text-sm mb-4">{design.description}</p>
                                           <div className="flex items-center gap-3">
                     
                      </div>
                   </div>
                 </div>
                 
                 {/* Floating badge */}
                 <div className="absolute top-4 right-4">
                   <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                     <Image className="w-4 h-4 text-primary" />
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
                       {/* Call to action for designs */}
            <div className="text-center mt-12 md:mt-16">
              <p className="text-primary text-lg mb-6">{t('pages.services.designs.cta.title')}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-full">
                <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                  <Image className="w-5 h-5 mr-2" />
                  {t('pages.services.designs.cta.portfolio')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
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
            <Badge variant="outline" className="mb-6 text-primary border-primary px-4 py-2 text-sm font-semibold shadow-sm">
              {t('pages.services.certifications.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{t('pages.services.certifications.title')}</h2>
            <p className="text-primary text-lg max-w-3xl mx-auto">{t('pages.services.certifications.description')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-full">
            {/* Text Side */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {t('pages.services.certifications.badge')}
              </div>
              <h2 className="text-4xl font-bold text-primary leading-tight">
                {t('pages.services.certifications.sectionTitle')}
              </h2>
              <p className="text-primary text-lg leading-relaxed">
                {t('pages.services.certifications.sectionDescription')}
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-full">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {cert.icon}
                    </div>
                    <span className="text-primary font-medium text-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center" 
                alt="Professional AC technician with certifications" 
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-2xl opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Service Areas - Image Left, Text Right */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-1/3 right-4 sm:right-8 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-bl from-primary/5 to-accent/5 rounded-full blur-3xl max-w-full"></div>
        <div className="absolute bottom-0 left-4 sm:left-8 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-3xl max-w-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-700">
            <Badge variant="outline" className="mb-6 text-primary border-primary px-4 py-2 text-sm font-semibold shadow-sm">
              {t('pages.services.areas.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{t('pages.services.areas.title')}</h2>
            <p className="text-primary text-lg max-w-3xl mx-auto">{t('pages.services.areas.description')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-full">
            {/* Image Side */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center" 
                alt="UAE Eastern Region map and service areas" 
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-2xl opacity-80"></div>
            </div>

            {/* Text Side */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                {t('pages.services.areas.coverageAreas')}
              </div>
              <h2 className="text-4xl font-bold text-primary leading-tight">
                {t('pages.services.areas.servingRegion')}
              </h2>
              <p className="text-primary text-lg leading-relaxed">
                {t('pages.services.areas.regionDescription')}
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-full">
                {[
                  { city: "Fujairah", arabic: "الفجيرة", key: "fujairah" },
                  { city: "Madhab", arabic: "مدهب", key: "madhab" },
                  { city: "Kalba", arabic: "كلباء", key: "kalba" },
                  { city: "Khor Fakkan", arabic: "خور فكان", key: "khor_fakkan" },
                  { city: "Dibba", arabic: "دبا", key: "dibba" },
                  { city: "Ras Al Khaimah", arabic: "رأس الخيمة", key: "ras_al_khaimah" },
                ].slice(0, 4).map((location, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-primary font-medium text-sm">{t(`pages.services.areas.locations.${location.key}.title`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     
  
    </div>
  );
}