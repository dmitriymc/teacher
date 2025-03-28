import { Link, NavLink } from "react-router-dom";
import routes from "../routes/dashboard";
import ProfileAvatar from "../components/avatar";
// import SchoolIcon from '@mui/icons-material/School';
// import PersonIcon from '@mui/icons-material/Person';
// import ClassIcon from '@mui/icons-material/Class';

export default function SideBar(){
    return (
        routes && <div className="sideBar sm:none !z-50 flex min-h-full flex-col bg-slate-50 w-[250px]">
            <div className="sideBar-account flex flex-col justify-center items-center mt-40">
                <ProfileAvatar name="Name Surname" className="flex w-16 h-16 bg-purple-primary text-white rounded-full justify-center items-center" />
                <div className="flex flex-col mt-3 text-center items-center">
                    <span className="text-xl">
                        Name Surname
                    </span>
                    <span className="text-white rounded-md p-1 pl-3 pr-3 mt-3 w-fit bg-purple-primary">
                        Student
                    </span>
                </div>
            </div>
            <div className="sideBar-menu mt-12">
                <ul>
                    {routes[0].children.map((item, index) => <li><NavLink className={"navigation-link flex pl-10 pr-10 p-3"} key={index} to={item.path}>{item.icon && <span className="w-5 mr-3" dangerouslySetInnerHTML={{__html: item.icon}} />}{item.title}</NavLink></li>)}
                </ul>
            </div>
            <div>
                <Link className="logout-link flex justify-center items-center p-3 m-8 mt-20 text-gray-secondary" to="/logout">Logout</Link>
            </div>
        </div>
    )
}