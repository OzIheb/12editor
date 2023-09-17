'use client';
import { GoProjectTemplate } from 'react-icons/go';
import { BsCardText } from 'react-icons/bs';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { LiaIconsSolid } from 'react-icons/lia';
import { useState } from 'react'; 
import SidebarOptions from './sidebaroptions';


const SideBarIcon = ({ icon, text, customClick }) => {
    return (
        <div className="w-20 h-16 flex flex-col items-center justify-center hover:bg-gray-700 rounded-sm cursor-pointer" onClick={customClick} >
            <div className="w-8 h-8 flex items-center justify-center ">
                {icon}
            </div>
            <div className="text-xs">
                {text}
            </div>
        </div>
    )
}

function Sidebar(props) {
    const [activeIcon, setActiveIcon] = useState("null");
    const handleClick = (icon) => {
        if (!(icon === activeIcon)) {
            console.log("clicked", icon);
            setActiveIcon(icon);
        }
        else {
            setActiveIcon("null");
        }
    }
    return (
        <div className="flex">
        <div className="h-screen m-0 flex flex-col
        bg-gray-900 text-white shadow-lg w-20 pt-12"  >
            <SideBarIcon customClick={() => handleClick("Templates")} icon={<GoProjectTemplate  size="28"  />} text="Templates" />
            <SideBarIcon icon={<BsCardText  size="28"  />} text="Text" customClick={() => handleClick("Text")} />
            <SideBarIcon icon={<MdOutlinePhotoSizeSelectActual  size="28"  />} text="Photos" customClick={() => handleClick("Photos")} />
            <SideBarIcon icon={<LiaIconsSolid  size="28"  />} text="Icons" customClick={() => handleClick("Icons")} />
        </div>
        <SidebarOptions activeIcon={activeIcon} setActiveIcon={setActiveIcon} /> 
        </div>

    )
}


export default Sidebar;