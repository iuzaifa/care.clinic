import SectionHeader from '../SectionHeader';
import React from 'react';


const DoctorsSection : React.FC = () => {
  return (
    <>
        <section className="bg-white py-28">
           <div className="max-w-7xl mx-auto"> 
              <SectionHeader className="text-center max-w-xl mx-auto" title="Meet Our Doctors" description="Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries." />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:mt-20 mt-10">
                  

                </div>
            </div>
        </section>

    </>
  )
}

export default DoctorsSection;