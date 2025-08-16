import lgLogo from "../assets/companies/LG-Logo.jpg";
import traneLogo from "../assets/companies/TraneLogo.png";
import carrierLogo from "../assets/companies/carrier.jpg";
import rheemLogo from "../assets/companies/rheem.jpg";
import greeLogo from "../assets/companies/gree-logo-vector.png";
import generalLogo from "../assets/companies/GENERAL-PNG.png";
import samsungLogo from "../assets/companies/Samsung_Logo.svg.png";
import mitsubishiLogo from "../assets/companies/Mitsubishi-logo.png";

const brands = [
  {
    name: "LG Air Conditioning",
    logo: lgLogo,
    alt: "LG Air Conditioning"
  },
  {
    name: "Trane Air Conditioning",
    logo: traneLogo,
    alt: "Trane Air Conditioning"
  },
  {
    name: "Carrier Air Conditioning",
    logo: carrierLogo,
    alt: "Carrier Air Conditioning"
  },
  {
    name: "Rheem Air Conditioning",
    logo: rheemLogo,
    alt: "Rheem Air Conditioning"
  },
  {
    name: "Gree Air Conditioning",
    logo: greeLogo,
    alt: "Gree Air Conditioning"
  },
  {
    name: "General Air Conditioning",
    logo: generalLogo,
    alt: "General Air Conditioning"
  },
  {
    name: "Samsung Air Conditioning",
    logo: samsungLogo,
    alt: "Samsung Air Conditioning"
  },
  {
    name: "Mitsubishi Air Conditioning",
    logo: mitsubishiLogo,
    alt: "Mitsubishi Air Conditioning"
  }
];

export default function BrandsSlider() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll">
        {/* First set of logos */}
        <div className="flex items-center space-x-16 min-w-full">
          {brands.map((brand, index) => (
            <div 
              key={`first-${index}`}
              className="flex items-center justify-center w-48 h-24 bg-white  hover:shadow-xl transition-all duration-300 group"
            >
              <img 
                src={brand.logo} 
                alt={brand.alt} 
                className="h-12 object-contain transition-all duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-16 min-w-full">
          {brands.map((brand, index) => (
            <div 
              key={`second-${index}`}
              className="flex items-center justify-center w-48 h-24 bg-white border border-accent rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <img 
                src={brand.logo} 
                alt={brand.alt} 
                className="h-12 object-contain transition-all duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
