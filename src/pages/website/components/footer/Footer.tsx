import FooterBottomBar from './FooterBottomBar';
import logo from "../../../../assets/images/logo.png"
import { Link } from "react-router-dom";
import SocialLinks from '../SocialLinks';
import FooterItem from './FooterItem';
import Paragraph from '../../../../components/ui/Paragraph';



const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <FooterItem title="" >
              <Link to="/">
                  <img src={logo} alt="Care Clinic" className="h-10 mb-8" />
              </Link>
                <Paragraph variant="default" size="sm" leading="normal">
                  Lorem ipsum dolor sit consectet adipisicing sed do eiusmod temp incididunt ut labore. Lorem Ipsum is simply dummy.
                </Paragraph>
               <SocialLinks/>
            </FooterItem>

            <FooterItem title="Useful Links">
              <div className="w-[150px] border-b-2 border-gray-100 my-3" />
              <ul>
                  <li><span>icon</span> <Link to={"#"}></Link></li>
              </ul>
            </FooterItem>

            <FooterItem title="Departments">
              <div className="w-[150px] border-b-2 border-gray-100 my-3" />

            </FooterItem>
            <FooterItem title="Contacts">
              <div className="w-[150px] border-b-2 border-gray-100 my-3" />
              <p>Paragraph or PTag</p>
            </FooterItem>
          </div>
        </div>
        <FooterBottomBar/>
      </footer>
    
    </>
  )
}

export default Footer;