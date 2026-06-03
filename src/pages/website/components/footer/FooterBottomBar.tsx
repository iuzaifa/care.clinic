import { useNavigate } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import Paragraph from "../../../../components/ui/Paragraph";


const FooterBottomBar = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className="py-2 border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <Paragraph size="xs" variant="muted">&copy; Copyright 2021. Design by Abu Huzaifa</Paragraph>
                    <button onClick={() => navigate("/")} className="bg-cyan-700 text-white p-3 rounded-full cursor-pointer" ><FaChevronUp/></button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default FooterBottomBar; 