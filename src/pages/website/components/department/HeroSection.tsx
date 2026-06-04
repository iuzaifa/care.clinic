import department from "../../../../assets/images/department.jpg";
import bloodtest from  "../../../../assets/images/bloodtest.png"
import electricalhearth from  "../../../../assets/images/electricalhearth.png"
import medicine from  "../../../../assets/images/medicine.png"
import medical from  "../../../../assets/images/medical.png"
import Paragraph from "../../../../components/ui/Paragraph";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${department})` }}
      />
       {/* <div className="absolute inset-0 bg-slate-200/30" /> */}
       <div className="absolute inset-0 bg-gradient-to-l from-slate-200/20 to-transparent" />
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Providing Care for The Sickest In Community.
            </h1>


            <Paragraph size="md" variant="default" leading="normal" className=" pr-10 mt-5">
              Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure.
            </Paragraph>                

            <div className="mt-8 flex items-center gap-8">
                <div className="text-center group">
                    <div className="h-20 w-20 mx-auto rounded-full bg-white border-4 border-white flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-slate-300 group-hover:scale-105 shadow-sm">
                        <img src={medical} alt="Examination" className="h-10 w-10 object-contain"/>
                    </div>
                    <Paragraph className="mt-3" size="xs">Examination</Paragraph>
                </div>

                <div className="text-center group">
                    <div className="h-20 w-20 mx-auto rounded-full bg-white border-4 border-white flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-slate-300 group-hover:scale-105 shadow-sm">
                        <img src={medicine} alt="Examination" className="h-10 w-10 object-contain"/>
                    </div>
                    <Paragraph className="mt-2" size="xs">Prescription</Paragraph>
                </div>

                <div className="text-center group">
                    <div className="h-20 w-20 mx-auto rounded-full bg-white border-4 border-white flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-slate-300 group-hover:scale-105 shadow-sm">
                        <img src={electricalhearth} alt="Examination" className="h-10 w-10 object-contain"/>
                    </div>
                    <Paragraph className="mt-2" size="xs">Cardiogram</Paragraph>
                </div>
                
                <div className="text-center group">
                    <div className="h-20 w-20 mx-auto rounded-full bg-white border-4 border-white flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-slate-300 group-hover:scale-105 shadow-sm">
                        <img src={bloodtest} alt="Examination" className="h-10 w-10 object-contain"/>
                    </div>
                    <Paragraph className="mt-2" size="xs">Blood Pressure</Paragraph>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;