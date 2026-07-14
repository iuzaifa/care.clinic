import FooterBottomBar from "./FooterBottomBar";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import FooterItem from "./FooterItem";
import { linksData, departmentsData, contactsData } from "../sections/footer/data";
import Paragraph from "../ui/Paragraph";
import SocialLinks from "../SocialLinks";

const Footer = () => {
  return (
    <>
      <footer className="pt-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <FooterItem title="">
              <Link to="/">
                <img src={logo} alt="Care Clinic" loading="lazy" decoding="async" className="h-10 mb-8" />
              </Link>
              <Paragraph variant="default" size="sm" leading="normal">
                Lorem ipsum dolor sit consectet adipisicing sed do eiusmod temp incididunt ut labore. Lorem Ipsum is simply dummy.
              </Paragraph>
              <SocialLinks />
            </FooterItem>

            <FooterItem title="Useful Links">
              <div className="w-[150px] border-b-2 border-gray-100 my-3" />
              <ul className="mt-5">
                {linksData.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <li key={idx} className="flex items-center gap-1 group cursor-pointer mb-3 text-base">
                      {Icon && (
                        <span className="text-cyan-600 transition-transform duration-300 group-hover:translate-x-1">
                          <Icon size={16} />
                        </span>
                      )}

                      <Link to={item.href} className="transition-colors duration-300 group-hover:text-cyan-600">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </FooterItem>

            <FooterItem title="Departments">
              <div className="w-[150px] border-b-2 border-gray-100 my-3" />
              <ul className="mt-5">
                {departmentsData.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <li key={idx} className="flex items-center gap-1 group cursor-pointer mb-3 text-base">
                      {Icon && (
                        <span className="text-cyan-600 transition-transform duration-300 group-hover:translate-x-1">
                          <Icon size={16} />
                        </span>
                      )}

                      <Link to={item.href} className="transition-colors duration-300 group-hover:text-cyan-600">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </FooterItem>
            <FooterItem title="Contacts">
              <div className="w-[150px] border-b-2 border-gray-100 my-3" />
              <div className="mt-5 space-y-4">
                {contactsData.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[80px_1fr] gap-4">
                    <span className="font-semibold text-slate-600">{item.title}:</span>

                    <div className="flex flex-col gap-1">
                      {(Array.isArray(item.value) ? item.value : [item.value]).map((val, i) => (
                        <Paragraph key={i} variant="default" leading="normal" size="sm" className="">
                          {val}
                        </Paragraph>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FooterItem>
          </div>
        </div>
        <FooterBottomBar />
      </footer>
    </>
  );
};

export default Footer;
