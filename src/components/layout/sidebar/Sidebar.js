import { LuMessageSquarePlus } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import './sidebar.css'
import { IoIosSearch } from "react-icons/io";

const SidebarData ={
    chats:[
        {
            id:"1",
            img:"https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/328792368_1309316729715855_1611047401814218262_n.jpg?ccb=11-4&oh=01_Q5AaIN6u-84A19-LcMRtryMq_qZiotqIrwZG7XbYSlIjOKIC&oe=66E2887A&_nc_sid=5e03e0&_nc_cat=105",
            name:"FUTURE OF TCG&SCRB",
            message:"TCG ke future",
            time:"02:25"
        },
        {
            id:"2",
            img:"https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/117574169_171003451253114_3994144849682101938_n.jpg?ccb=11-4&oh=01_Q5AaIE2hZFagWW6i4j_aEiI7Q9Xt_gA6TwUiMdy1c2mtClUM&oe=66E28A86&_nc_sid=5e03e0&_nc_cat=111",
            name:"PTC LINE JAIPUR",
            message:"Tele.com.",
            time:"08:02"
        },
        {
            id:"3",
            img:"https://pps.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIKg9ZKmYtjV_t2ZYy5EjMunh1lXwkqWFx_lLTEwowpXQ&oe=66E29F51&_nc_sid=5e03e0&_nc_cat=104",
            name:"Sohan",
            message:"",
            time:"09:25"
        },
        {
            id:"4",
            img:"https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/353200948_1400717373994591_740200217901489981_n.jpg?ccb=11-4&oh=01_Q5AaIMziMwe_GxXozG2i2tCEthhrCLfiS4Nc8tBSULPBKOMT&oe=66E2B374&_nc_sid=5e03e0&_nc_cat=108",
            name:"Manish kumar",
            message:"Bachha ",
            time:"10:25"
        },
        {
            id:"5",
            img:"https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/414725898_450724871107729_7800877498851362272_n.jpg?ccb=11-4&oh=01_Q5AaII3Ilkgk0z87njQH99TXh_PsAoGSHPpGH9QBIYMO8Qb3&oe=66E29A29&_nc_sid=5e03e0&_nc_cat=105",
            name:"Manoj",
            message:"Netaji",
            time:"05:05"
        },
        {
            id:"6",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/420474561_1440305299910829_7198873562190225004_n.jpg?ccb=11-4&oh=01_Q5AaINC8QF9m0EO-efGYUsB8EU9JG8X_Gbsqa0h6hsd4IHgO&oe=66E2AF9F&_nc_sid=5e03e0&_nc_cat=110",
            name:"Mukesh jat",
            message:"Relative",
            time:"11:25"
        },
        {
            id:"7",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/442158830_448311394744142_8722731425926088784_n.jpg?ccb=11-4&oh=01_Q5AaINIOJgKYEqde1UgnfHIoKemlEyg6FQpZEDkWCIPcUhW8&oe=66E2AF3F&_nc_sid=5e03e0&_nc_cat=110",
            name:"Sitaram",
            message:"Fulera Bachha",
            time:"9:50"
        },
        {
            id:"8",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Mohit Yadav",
            message:"Cyber commando",
            time:"01:30"
        },
        {
            id:"9",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Ashok nitarwal",
            message:"Dewach ka padosi",
            time:"012:30"
        },
        {
            id:"10",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Suresh Dewach",
            message:"chatki",
            time:"07:30"
        },
        {
            id:"11",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Sevaram",
            message:"Credit card wala",
            time:"05:30"
        },
        {
            id:"12",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Suresh raigar",
            message:"master",
            time:"01:30"
        },
        {
            id:"13",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Vikash ji",
            message:"ASI",
            time:"01:25"
        },
        {
            id:"14",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Koli ji",
            message:"ASI",
            time:"08:15"
        },
        {
            id:"15",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Manjeet",
            message:"Old Batch",
            time:"10:30"
        },
        {
            id:"16",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Sunil",
            message:"Old Batch",
            time:"11:30"
        },
        {
            id:"17",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Ramu",
            message:"Old Batch",
            time:"09:24"
        },
        {
            id:"18",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Vinod",
            message:"Server",
            time:"10:42"
        },
        {
            id:"19",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Kailash",
            message:"Java",
            time:"00:30"
        },
        {
            id:"20",
            img:"https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/377329118_3849169702038058_6781090341068219333_n.jpg?ccb=11-4&oh=01_Q5AaIElp7YQo-orJGlmY8hQFHkGbn9QQqmrFpPqXK5o8QFK_&oe=66E28D73&_nc_sid=5e03e0&_nc_cat=103",
            name:"Mahesh",
            message:"Java",
            time:"12:00"
        },
    ]
}

function Sidebar (){
    return(
        <div className="sidebar">

         <div className="chats_container">
            <p>Chats</p>
            <div className="chats_child">
            <LuMessageSquarePlus/>
            <BsThreeDotsVertical/>
            </div>
         </div>

         <div className="search_container">
            <span><IoIosSearch/></span>
            <input type="text" placeholder="Search"></input>
         </div>

         <div className="Btn_container">
            <button>All</button>
            <button>Unread</button>
            <button>Groups</button>
         </div>
         <div className="sidebarchat">
            {SidebarData.chats.map((ele) =>{
                return(
                <li key={ele.id} className="Sidebar_chatchild1">
                    <img src={ele.img} alt="chat profile"/>
                    <div className="Sidebar_chatchild2">
                        <h3>{ele.name}</h3>
                        <p>{ele.message}</p>
                    </div>
                    <p className="time">{ele.time}</p>

                </li>
                )
            })}
         </div>
        </div>
    )
}
export default Sidebar;