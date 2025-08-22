import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  features?: {
    freeConsultation: string;
    quickResponse: string;
    expertTeam: string;
  };
  variant?: 'primary' | 'secondary' | 'accent';
  showFeatures?: boolean;
}

export default function CTA({ 
  title, 
  description, 
  primaryButtonText, 
  secondaryButtonText,
  features,
  showFeatures = true 
}: CTAProps) {
  const { t, dir } = useLanguage();
  const isRTL = dir === 'rtl';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

 

  return (
    <motion.section 
      className={`py-6 sm:py-8 md:py-12 lg:py-16  text-gold relative overflow-hidden`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </motion.div>
      
      <motion.div 
        className="absolute top-6 right-6 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-6 left-6 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
                         <div className="inline-flex items-center px-3 py-1.5 bg-white/20 text-gold border-white/30 backdrop-blur-sm rounded-full text-xs font-semibold mb-4">
               <Phone className={`w-3 h-3 ${isRTL ? 'ml-2' : 'mr-2'}`} />
               {t('pages.services.cta.badge')}
             </div>
          </motion.div>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gold leading-tight"
            variants={fadeInUp}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-light mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
            variants={fadeInUp}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/contact">
                                 <button className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-primary hover:bg-white/90 group border-0 shadow-lg shadow-black/20 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300">
                   <Phone className={`w-4 h-4 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                   <span dir={primaryButtonText.includes('+') ? 'ltr' : undefined}>{primaryButtonText}</span>
                   <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-3 rotate-180' : 'ml-3'} group-hover:translate-x-1 transition-transform duration-300`} />
                 </button>
              </Link>
            </motion.div>
            
            {secondaryButtonText && (
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/contact">
                                     <button className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 border-2 border-gold text-gold hover:bg-gold hover:text-primary group shadow-lg text-sm sm:text-base font-semibold rounded-lg transition-all duration-300">
                     <ArrowRight className={`w-4 h-4 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                     {secondaryButtonText}
                     <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-3 rotate-180' : 'ml-3'} group-hover:translate-x-1 transition-transform duration-300`} />
                   </button>
                </Link>
              </motion.div>
            )}
          </motion.div>
          
          {showFeatures && features && (
            <motion.div 
              className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 text-light"
              variants={fadeInUp}
            >
                             <div className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-gold" />
                 <span className="text-xs sm:text-sm">{features.freeConsultation}</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-gold" />
                 <span className="text-xs sm:text-sm">{features.quickResponse}</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-gold" />
                 <span className="text-xs sm:text-sm">{features.expertTeam}</span>
               </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
