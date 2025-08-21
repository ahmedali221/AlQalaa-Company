
import { 
  Star, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Users,
  Award,
  Phone,
  Building,
  Target,
  Eye,
  MapPin,
  Lightbulb,
  HandHeart,
  Trophy,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { useLanguage } from "../contexts/LanguageContext";
import BrandsSlider from "../components/BrandsSlider";
import CTA from "../components/CTA";
import Button from "../components/Button";
import Badge from "../components/Badge";






export default function AboutPage() {
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

  const companyValues = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: t('pages.about.values.items.0.title'),
      description: t('pages.about.values.items.0.description')
    },
    {
      icon: <HandHeart className="w-8 h-8 text-primary" />,
      title: t('pages.about.values.items.1.title'),
      description: t('pages.about.values.items.1.description')
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: t('pages.about.values.items.2.title'),
      description: t('pages.about.values.items.2.description')
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: t('pages.about.values.items.3.title'),
      description: t('pages.about.values.items.3.description')
    }
  ];



  const milestones = [
    {
      year: "2020",
      title: t('pages.about.milestones.items.0.title'),
      description: t('pages.about.milestones.items.0.description'),
      icon: <Building className="w-6 h-6 text-white" />
    },
    {
      year: "2021",
      title: t('pages.about.milestones.items.1.title'),
      description: t('pages.about.milestones.items.1.description'),
      icon: <Star className="w-6 h-6 text-white" />
    },
    {
      year: "2022",
      title: t('pages.about.milestones.items.2.title'),
      description: t('pages.about.milestones.items.2.description'),
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      year: "2024",
      title: t('pages.about.milestones.items.3.title'),
      description: t('pages.about.milestones.items.3.description'),
      icon: <MapPin className="w-6 h-6 text-white" />
    }
  ];

  const achievements = [
    { number: "100+", label: t('pages.about.achievements.items.0.label'), icon: <Trophy className="w-8 h-8 text-white" /> },
    { number: "50+", label: t('pages.about.achievements.items.1.label'), icon: <Users className="w-8 h-8 text-white" /> },
    { number: "5Y", label: t('pages.about.achievements.items.2.label'), icon: <Shield className="w-8 h-8 text-white" /> },
    { number: "24/7", label: t('pages.about.achievements.items.3.label'), icon: <Clock className="w-8 h-8 text-white" /> }
  ];

  const certifications = [
    {
      title: t('pages.about.certifications.items.0.title'),
      description: t('pages.about.certifications.items.0.description'),
      icon: <Star className="w-6 h-6 text-primary" />
    },
    {
      title: t('pages.about.certifications.items.1.title'),
      description: t('pages.about.certifications.items.1.description'),
      icon: <Award className="w-6 h-6 text-primary" />
    },
    {
      title: t('pages.about.certifications.items.2.title'),
      description: t('pages.about.certifications.items.2.description'),
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: t('pages.about.certifications.items.3.title'),
      description: t('pages.about.certifications.items.3.description'),
      icon: <Shield className="w-6 h-6 text-primary" />
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
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-6 text-primary border-primary">
                <Building className={`w-4 h-4 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                {t('pages.about.badge')}
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-logo-brown"
              variants={itemVariants}
            >
              {t('pages.about.title')}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-primary mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {t('pages.about.description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 group hover:scale-105 transition-all duration-300 border-0">
                {t('pages.about.servicesButton')}
                <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
              <Button variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300 border-primary text-primary hover:bg-primary hover:text-white">
                <Phone className={`w-4 h-4 animate-pulse ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                {t('pages.about.contactButton')}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 1: Vision & Mission - Image Left, Text Right */}
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
            <Badge variant="outline" className="mb-6 text-primary border-primary">{t('pages.about.foundation.badge')}</Badge>
            <h2 className="text-3xl font-bold mb-4 text-logo-brown">{t('pages.about.foundation.title')}</h2>
            <p className="text-primary text-lg">{t('pages.about.foundation.subtitle')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInVariants}
            >
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80" alt="Modern UAE building representing company foundation" className="w-full h-96 object-cover rounded-3xl" loading="lazy" />
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
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-logo-brown rounded-full text-sm font-medium">
                  {t('pages.about.foundation.badge')}
                </div>
                <h2 className="text-4xl font-bold text-logo-brown leading-tight">
                  {t('pages.about.foundation.title')}
                </h2>
                <p className="text-logo-brown text-lg leading-relaxed">
                  {t('pages.about.foundation.subtitle')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-logo-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-logo-brown mb-1">{t('pages.about.vision.title')}</h4>
                      <p className="text-logo-brown text-sm">{t('pages.about.vision.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-logo-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-logo-brown mb-1">{t('pages.about.mission.title')}</h4>
                      <p className="text-logo-brown text-sm">{t('pages.about.mission.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Company Values - Text Left, Image Right */}
      <motion.section 
        className="py-6 sm:py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-12">
          <motion.div 
            className="text-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <Badge variant="outline" className="mb-6 text-logo-brown border-primary">{t('pages.about.values.badge')}</Badge>
            <h2 className="text-3xl font-bold mb-4 text-logo-brown">{t('pages.about.values.title')}</h2>
            <p className="text-logo-brown text-lg">{t('pages.about.values.subtitle')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInVariants}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-logo-brown rounded-full text-sm font-medium">
                  {t('pages.about.values.badge')}
                </div>
                <h2 className="text-4xl font-bold text-logo-brown leading-tight">
                  {t('pages.about.values.title')}
                </h2>
                <p className="text-logo-brown text-lg leading-relaxed">
                  {t('pages.about.values.subtitle')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {companyValues.map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 text-black rounded-lg flex items-center justify-center">
                        {value.icon}
                      </div>
                      <span className="text-logo-brown font-medium text-sm">{value.title}</span>
                      <p className="text-logo-brown text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
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
                <img src="https://media.istockphoto.com/id/1413633369/photo/mobile-jigsaw-puzzle-pieces-business-cooperation-concept-teamwork-and-cooperation-businessmen.jpg?s=2048x2048&w=is&k=20&c=QJCTW4pZP12kxf9RzvRjU1LPjqFCiPaJIMf5YucpCsQ=" alt="Contemporary Dubai office building for company values" className="w-full h-96 object-cover rounded-3xl" loading="lazy" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-80"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Company Timeline - Image Left, Text Right */}
      <motion.section 
        className="py-8 sm:py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <Badge variant="outline" className="mb-6 text-logo-brown border-primary">{t('pages.about.milestones.badge')}</Badge>
            <h2 className="text-3xl font-bold mb-4 text-logo-brown">{t('pages.about.milestones.title')}</h2>
            <p className="text-logo-brown text-lg">{t('pages.about.milestones.subtitle')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInVariants}
            >
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80" alt="Iconic UAE architecture symbolizing company milestones" className="w-full h-96 object-cover rounded-3xl" loading="lazy" />
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
                <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-logo-brown rounded-full text-sm font-medium">
                  {t('pages.about.milestones.badge')}
                </div>
                <h2 className="text-4xl font-bold text-logo-brown leading-tight">
                  {t('pages.about.milestones.title')}
                </h2>
                <p className="text-logo-brown text-lg leading-relaxed">
                  {t('pages.about.milestones.subtitle')}
                </p>
                <div className="space-y-4">
                  {milestones.slice(0, 3).map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        {milestone.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-logo-brown mb-1">{milestone.year} - {milestone.title}</h4>
                        <p className="text-logo-brown text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 4: Team Section - Text Left, Image Right */}
      <motion.section 
        className="py-8 sm:py-12 bg-gradient-to-b from-snow to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-12">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <Badge variant="outline" className="mb-6 text-logo-brown border-primary">{t('pages.about.team.badge')}</Badge>
            <h2 className="text-3xl font-bold mb-4 text-logo-brown">{t('pages.about.team.title')}</h2>
            <p className="text-logo-brown text-lg">{t('pages.about.team.subtitle')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInVariants}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-logo-brown rounded-full text-sm font-medium">
                  {t('pages.about.team.badge')}
                </div>
                <h2 className="text-4xl font-bold text-logo-brown leading-tight">
                  {t('pages.about.team.title')}
                </h2>
                <p className="text-logo-brown text-lg leading-relaxed">
                  {t('pages.about.team.subtitle')}
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-logo-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-logo-brown mb-2">{t('pages.about.team.professionalTeam.title')}</h4>
                      <p className="text-logo-brown text-sm leading-relaxed">
                        {t('pages.about.team.professionalTeam.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-logo-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-logo-brown mb-2">{t('pages.about.team.certifiedExcellence.title')}</h4>
                      <p className="text-logo-brown text-sm leading-relaxed">
                        {t('pages.about.team.certifiedExcellence.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Image Side */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
            >
              <div className="relative">
                <img 
                  src="/src/assets/Company/team.JPG" 
                  alt="Al Qalaa professional team" 
                  className="w-full h-96 object-cover rounded-3xl shadow-lg"
                  loading="lazy"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-2xl opacity-80"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 5: Achievements - Image Left, Text Right */}
      <motion.section 
        className="py-8 sm:py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <Badge variant="outline" className="mb-6 text-logo-brown border-primary">{t('pages.about.achievements.badge')}</Badge>
            <h2 className="text-3xl font-bold mb-4 text-logo-brown">{t('pages.about.achievements.title')}</h2>
            <p className="text-logo-brown text-lg">{t('pages.about.achievements.subtitle')}</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="relative"
                  variants={cardVariants}
                >
                  <div className="relative w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 border border-accent">
                    {achievement.icon}
                  </div>
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-logo-brown mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {achievement.number}
                </motion.div>
                <div className="text-logo-brown font-medium mb-1">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section 6: Certifications - Text Left, Image Right */}
      <motion.section 
        className="py-8 sm:py-12 bg-gradient-to-b from-snow to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-12">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <Badge variant="outline" className="mb-6 text-logo-brown border-primary">{t('pages.about.certifications.badge')}</Badge>
            <h2 className="text-3xl font-bold mb-4 text-logo-brown">{t('pages.about.certifications.title')}</h2>
            <p className="text-logo-brown text-lg">{t('pages.about.certifications.subtitle')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInVariants}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-logo-brown rounded-full text-sm font-medium">
                  {t('pages.about.certifications.badge')}
                </div>
                <h2 className="text-4xl font-bold text-logo-brown leading-tight">
                  {t('pages.about.certifications.title')}
                </h2>
                <p className="text-logo-brown text-lg leading-relaxed">
                  {t('pages.about.certifications.subtitle')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.slice(0, 4).map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {cert.icon}
                      </div>
                      <span className="text-logo-brown font-medium text-sm">{cert.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certificate Images Side */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Certificate */}
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/src/assets/Certificates/certificate.jpg" 
                      alt="Rheem Pro Partner Certificate 2022" 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-semibold text-sm">Rheem Pro Partner</h4>
                      <p className="text-xs opacity-90">Authorized Partner 2022</p>
                    </div>
                  </div>
                </motion.div>

                {/* Second Certificate */}
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/src/assets/Certificates/Scan.jpg" 
                      alt="Rheem Academy Certificate" 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-semibold text-sm">Rheem Academy</h4>
                      <p className="text-xs opacity-90">MEA-BASICS of HVAC</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-80 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section: Trusted Brands - Auto Slider */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-logo-brown rounded-full text-sm font-medium mb-6">
              {t('pages.home.brands_section.badge')}
            </div>
            <h2 className="text-3xl font-bold text-logo-brown mb-4">{t('pages.home.brands_section.title')}</h2>
            <p className="text-logo-brown text-lg max-w-2xl mx-auto">
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
            <p className="text-logo-brown text-sm">
              {t('pages.home.brands_section.footer')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title={t('pages.contact.cta.title')}
        description={t('pages.contact.cta.description')}
        primaryButtonText={`${t('pages.contact.callButton')}: ${t('header.phone')}`}
        variant="primary"

        features={{
          freeConsultation: t('pages.services.cta.features.freeConsultation'),
          quickResponse: t('pages.services.cta.features.quickResponse'),
          expertTeam: t('pages.services.cta.features.expertTeam')
        }}
      />
    </div>
  );
}