import reception from "../../../assets/images/reception.jpg";
import heroshape from "../../../assets/images/hero-shape.png";

const HeroSection = () => {
  return (

    <div className="relative min-h-screen overflow-hidden z-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[5px] scale-105" style={{ backgroundImage: `url(${reception})`}} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-emerald-950/60 to-transparent" />
        <div className="absolute bottom-0 z-0 left-0 w-full bg-contain bg-bottom bg-no-repeat" style={{backgroundImage: `url(${heroshape})`,height: "720px",}}/>
        
        <div className="relative z-20 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto py-3">
                <h1 className="text-5xl font-bold text-white">
                    Take best quality treatment for Cardiology 
                    {/* Crutches. Laboratory. . Cardiology. */}
                </h1>
                <p className="mt-4 text-lg blur-none">
                    Quality healthcare services at your fingertips.
                </p>
                <button>Appointment</button>

                {/* img use here */}
            </div>
        </div>


    </div>
  );
};

export default HeroSection;

