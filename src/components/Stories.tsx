import reception from "../assets/images/reception.jpg";
import { TimeSheet } from "./TimeSheet";
import Paragraph from "./ui/Paragraph";

export const Stories = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden z-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[5px] scale-105" style={{ backgroundImage: `url(${reception})` }} />
        {/* bg-gradient-to-r  from-cyan-800/80 via-cyan-900 */}
        <div className="absolute inset-0 bg-[#213360ed]" />

        <div className="max-w-7xl relative mx-auto py-3 z-20">
          <div className="grid grid-cols-2 mt-24">
            <h3 className="text-cyan-400 font-extrabold text-5xl">Inspiring Stories!</h3>

            <div>
              <article className="text-white font-semibold text-2xl">
                <blockquote>
                  Their doctors include highly qualified practitioners who come from a range of backgrounds and bring with them a diversity of skills and special interests. They also have registered nurses on staff who are available to triage any
                  urgent matters, and the administration and support staff all have exceptional people skills
                </blockquote>
              </article>
              <div className="flex items-center gap-10 mt-8">
                <div className="flex gap-2 items-center">
                  <div className="border-2 border-cyan-500 rounded-full p-1">
                    <img className="h-10 w-10  rounded-full" src="https://i.pravatar.cc/300" alt="" />
                  </div>
                  <div>
                    <Paragraph size="sm" variant="inverse">
                      <strong>Jone Doe</strong>
                    </Paragraph>
                    <Paragraph size="xs" variant="inverse" className="-mt-1">
                      web dev
                    </Paragraph>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="border-2 border-cyan-500 rounded-full p-1">
                    <img className="h-10 w-10  rounded-full" src="https://i.pravatar.cc/300" alt="" />
                  </div>
                  <div>
                    <Paragraph size="sm" variant="inverse">
                      <strong>Jone Doe</strong>
                    </Paragraph>
                    <Paragraph size="xs" variant="inverse" className="-mt-1">
                      web dev
                    </Paragraph>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="border-2 border-cyan-500 rounded-full p-1">
                    <img className="h-10 w-10  rounded-full" src="https://i.pravatar.cc/300" alt="" />
                  </div>
                  <div>
                    <Paragraph size="sm" variant="inverse">
                      <strong>Jone Doe</strong>
                    </Paragraph>
                    <Paragraph size="xs" variant="inverse" className="-mt-1">
                      web dev
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -top-20 md:-top-40 z-50">
        <TimeSheet />
      </div>
    </>
  );
};
