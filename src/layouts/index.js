import Footer from "./footer";
import Navbar from "./header";
import Main from "./main";
import SideBar from "./sidebar";
export default function Layout(){
    return (
        <div className="flex flex-row h-screen w-screen overflow-hidden">
            <SideBar />
            <div className="overflow-auto h-screen w-screen">
                <Navbar />
                <Main />
                <Footer />
            </div>
        </div>
    )
}