import React from 'react';
import { useNavigate } from 'react-router-dom';

type BreadcrumbProps = {
  title: string;
  subtitle: string;
  imageSrc: string; // camelCase standard
  navigationPath?: string; // Clearer name to prevent collision with useNavigate hook
  btnText?: string; // Clearer variable intent
};

const Breadcrumb = ({ title, subtitle, imageSrc, navigationPath = "", btnText = ""}: BreadcrumbProps) => {
  const handleNavigate = useNavigate();

  return (
    <section className="relative min-h-[350px] sm:min-h-[450px] md:min-h-[550px] overflow-hidden flex items-center w-full">
      
      {/* Background Image Layer with responsive styling */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${imageSrc})` }} 
      />
      
      {/* Dark overlay to ensure your text remains highly readable on bright background images */}
      {/* <div className="absolute inset-0 bg-white/20" /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-cyan-900/90 to-transparent" />

      {/* Fully responsive wrapper container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center lg:items-start lg:text-left">
        
        {/* Responsive title adjustments for Mobile, Tablets, and Desktops */}
        <h1 className="text-white text-shadow-2xs font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 max-w-3xl">
          {title.length > 25 ? `${title.substring(0, 25)}...` : title}
        </h1>
        
        {/* Responsive subtitle text formatting */}
        <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed">
          {subtitle.length > 150 ? `${subtitle.substring(0, 150)}...` : subtitle}
        </p>

        {/* Dynamically hidden button — only displays if button text is actually provided */}
        {btnText && (
          <button 
            onClick={() => handleNavigate(navigationPath)}
            className="px-6 py-3 bg-cyan-600 text-white cursor-pointer font-semibold rounded-xl shadow-lg hover:bg-cyan-700 active:scale-95 transition-all duration-200 text-sm sm:text-base"
          >
            {btnText}
          </button>
        )}

      </div>
    </section>
  );
};

export default Breadcrumb;