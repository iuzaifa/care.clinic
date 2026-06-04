import { useState } from 'react'
import { Card, CardContent, CardTitle , CardImage } from '../Card';
import {departmentData} from "./data"
import SectionHeader from '../SectionHeader';



const DepartmentSection = () => {
  const [clicked, setClicked] = useState<number | null>(null);
 
  const handleClick = (id : number) => {
    setClicked(id);
    setTimeout(() => {
      setClicked(null);
    }, 300);
  };



  return (
    <>
        <section className="bg-gray-100 py-28">
           <div className="max-w-7xl mx-auto">
                <SectionHeader className="text-center max-w-2xl mx-auto"  subtitle="Our Departments" title="Providing Medical Care For The Sickest In Our Community."/>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {departmentData.map((data, index) => {
                        const Icon = data.icon;
                        return (
                            <Card key={index} className="group bg-white cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_35px_rgba(8,145,178,0.2)] border border-slate-50">
                                <CardImage src={data.imagesrc} alt={data.title} />
                                <div className="p-8">
                                    <CardTitle className="text-gray-700">{data.title}</CardTitle>
                                    <CardContent className="text-gray-600 text-sm" >{data.description}</CardContent>
                                    <button onClick={() => handleClick(index)} className="card-btn mt-5">
                                        {data.redoc}
                                        { Icon && (<span className={`transition-transform duration-300 ${clicked === index ? "translate-x-2" : ""}`}><Icon size={10} /></span>)}
                                    </button>

                                </div>
                            </Card>
                        )
                    })}
                </div>
           </div>
        </section>
    </>
  )
}

export default DepartmentSection;
