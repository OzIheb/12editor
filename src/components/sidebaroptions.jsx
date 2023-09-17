import { BiSearchAlt} from 'react-icons/bi';


function SidebarOptions(props) {
    const { activeIcon, setActiveIcon } = props;
    const handleQuit = () => {
        setActiveIcon("null");
    }
    
    if (!activeIcon) {
    return null;
  }

  switch (activeIcon) {
    case "Templates":
      return (
        <div className="h-screen bg-slate-700 w-96">
            <div className="m-2 bg-slate-800 text-xs h-8 flex items-center pl-4 gap-4">
                    <BiSearchAlt size="24" />
                    <input type="text" placeholder="Search..." className="w-full pr-4 py-2 bg-slate-800"/>
            </div>
            
            <div onClick={handleQuit} >quit button</div>
        </div>)
    case "Text":
      return <div>Text options</div>;
    case "Photos":
      return <div>Photos options</div>;
    case "Icons":
      return <div>Icons options</div>;
    default:
      return null;
  }

        
    
}

export default SidebarOptions;