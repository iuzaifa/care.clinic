import { Link } from "react-router-dom";
import { FaFacebookSquare , FaTwitter , FaLinkedin } from "react-icons/fa";
import { FaYoutube, FaSquareInstagram } from "react-icons/fa6";


const social = {
  common:
    "p-2 rounded-full text-gray-600 transition-all text-white  bg-cyan-700  text-whiteduration-300 transform hover:scale-110 active:scale-90",
  twitter: "hover:bg-[#1DA1F2] hover:text-white",
  linkedin: "hover:bg-[#0A66C2] hover:text-white",
  youtube: "hover:bg-[#FF0000] hover:text-white",
  facebook: "hover:bg-[#1877F2] hover:text-white",
  instagram:
    "hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:text-white",
};
const SocialLinks = () => {
  return (
    <>
        <div className="flex gap-3 mt-5">
            <Link className={`${social.twitter} ${social.common}`} to={"#"}><FaTwitter size={15}/> </Link>
            <Link className={`${social.linkedin} ${social.common}`} to={"#"}><FaLinkedin size={15}/> </Link>
            <Link className={`${social.youtube} ${social.common}`} to={"#"}><FaYoutube size={15} /> </Link>
            <Link className={`${social.facebook} ${social.common}`} to={"#"}><FaFacebookSquare size={15} /> </Link>
            <Link className={`${social.instagram} ${social.common}`} to={"#"}><FaSquareInstagram size={15} /> </Link>
           
        </div>
    </>
  )
}


export default SocialLinks;