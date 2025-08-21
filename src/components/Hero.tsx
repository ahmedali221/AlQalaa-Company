
import { Star, Shield, Clock, Wrench, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";
import Button from './Button';

export default function Hero() {
  const { t, language } = useLanguage();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: language === 'ar' ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const isRTL = language === 'ar';
  
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern Air Conditioning Unit"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 container mx-auto px-4 text-center text-primary"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            variants={itemVariants}
          >
            <Star className="icon-sm text-primary" />
            <span className="text-body-sm font-medium tracking-wide">{t('hero.badge')}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-heading-xl font-black mb-8 leading-tight tracking-tight"
            variants={textVariants}
          >
            {t('hero.title')}
            <motion.span 
              className="block mt-3 text-primary/90 font-extrabold"
              variants={textVariants}
            >
              {t('hero.titleHighlight')}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-body-lg text-primary mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
            variants={textVariants}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            <Button size="xl" className="group font-semibold tracking-wide">
              {t('hero.scheduleButton')}
              <ArrowRight className={`icon-md ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform duration-300`} />
            </Button>
            <Button variant="outline" size="xl" className="font-semibold tracking-wide">
              {t('hero.emergencyButton')}
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <motion.div className="group" variants={itemVariants}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 border border-white/20">
                <Star className="icon-xl text-primary" />
              </div>
              <p className="text-body-sm font-medium text-gray-100 group-hover:text-primary transition-colors tracking-wide">
                {t('hero.features.fiveStar')}
              </p>
            </motion.div>
            <motion.div className="group" variants={itemVariants}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 border border-white/20">
                <Shield className="icon-xl text-primary" />
              </div>
              <p className="text-body-sm font-medium text-gray-100 group-hover:text-primary transition-colors tracking-wide">
                {t('hero.features.licensed')}
              </p>
            </motion.div>
            <motion.div className="group" variants={itemVariants}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 border border-white/20">
                <Clock className="icon-xl text-primary" />
              </div>
              <p className="text-body-sm font-medium text-gray-100 group-hover:text-primary transition-colors tracking-wide">
                {t('hero.features.emergency')}
              </p>
            </motion.div>
            <motion.div className="group" variants={itemVariants}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 border border-white/20">
                <Wrench className="icon-xl text-primary" />
              </div>
              <p className="text-body-sm font-medium text-gray-100 group-hover:text-primary transition-colors tracking-wide">
                {t('hero.features.experts')}
              </p>
            </motion.div>
          </motion.div>

        
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}