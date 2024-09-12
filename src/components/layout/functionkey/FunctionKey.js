import { SiGooglemessages } from "react-icons/si";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import { GrGrommet } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import "./functionkey.css"

function FunctionKey (){
    return(
        <div className="functionkey">
          <div className="functionkey1">
          <SiGooglemessages/>
          <HiOutlineStatusOnline/>
          <BsFillChatQuoteFill/>
          <MdOutlineGroups/>
          <GrGrommet/>
          </div>
          <div className="functionkey2">
          <IoSettingsOutline/>
          <image src="https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIH-HZBabHozhIHymKBkij7W8qAJuEVQLeyEcQSr9SbcX&oe=66E50A11&_nc_sid=5e03e0&_nc_cat=104" alt="Profile"></image>
          </div>
          
        </div>
    )
}
export default FunctionKey;