import { Card, CardContent, CardImage, CardTitle } from '../Card';
import SectionHeader from '../SectionHeader';
import React from 'react';
import icon from "../../../../components/ui/icons"
import { useState } from 'react'
import Paragraph from '../../../../components/ui/Paragraph';



const doctors = [
  {
  id : 1,
  name : "Dr. Abdur Rahman",
  desingnation : "Cardiology Sp",
  bio : "Skar play a very important role in your health care. People working in the clinical laboratory are responsible for conducting tests that provide crucial information.",
  redoc: "Read More",
  icon: icon.rightArrow,
  imagesrc : "https://img.magnific.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?t=st=1780576905~exp=1780580505~hmac=b2db3b16eb2ca1a93f74f12c689a4e9c0f4d54522283a62a4f3ad1fca8bcc97b&w=1480"
  },
  {
  id : 2,
  name : "Dr. Faiz",
  bio : "Skar play a very important role in your health care. People working in the clinical laboratory are responsible for conducting tests that provide crucial information.",
  redoc: "Read More",
  icon: icon.rightArrow,
  imagesrc : "https://img.magnific.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?t=st=1780576905~exp=1780580505~hmac=b2db3b16eb2ca1a93f74f12c689a4e9c0f4d54522283a62a4f3ad1fca8bcc97b&w=1480"
  },
  {
  id : 3,
  name : "Dr. Jon Doe",
  bio : "Skar play a very important role in your health care. People working in the clinical laboratory are responsible for conducting tests that provide crucial information.",
  redoc: "Read More",
  icon: icon.rightArrow,
  imagesrc : "https://img.magnific.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?t=st=1780576905~exp=1780580505~hmac=b2db3b16eb2ca1a93f74f12c689a4e9c0f4d54522283a62a4f3ad1fca8bcc97b&w=1480"
  },
  {
  id : 4,
  name : "Dr. Adbdul ",
  bio : "Skar play a very important role in your health care. People working in the clinical laboratory are responsible for conducting tests that provide crucial information.",
  redoc: "Read More",
  icon: icon.rightArrow,
  imagesrc : "https://img.magnific.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?t=st=1780576905~exp=1780580505~hmac=b2db3b16eb2ca1a93f74f12c689a4e9c0f4d54522283a62a4f3ad1fca8bcc97b&w=1480"
  },
]

const DoctorsSection : React.FC = () => {
  const [clicked, setClicked] = useState<number | null>(null);
 
  const handleClick = (id : number) => {
    setClicked(id);
    setTimeout(() => {
      setClicked(null);
    }, 300);
  };
  return (
    <>
        <section className="bg-white py-28">
           <div className="max-w-7xl mx-auto"> 
              <SectionHeader className="text-center max-w-xl mx-auto" title="Meet Our Doctors" description="Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries." />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:mt-20 mt-10">
                   {doctors.map((data, index) => {
                      const Icon = data.icon;
                        return (
                            <Card key={index} className="group cursor-pointer transition-all duration-300 hover:border-b-4 hover:border-b-cyan-600 hover:bg-cyan-700/5 bg-gray-100/55  border border-cyan-700/10">
                                <CardImage src={data.imagesrc} alt={data.name} />
                                <div className="p-8">
                                    <CardTitle className="text-gray-700">{data.name}</CardTitle>
                                    <Paragraph size="xs" variant="primary" className="font-semibold">{data.desingnation}</Paragraph>
                                    <CardContent className="text-sm  text-gray-500">{data.bio}</CardContent>
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

export default DoctorsSection;