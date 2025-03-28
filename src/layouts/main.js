import { Outlet } from "react-router-dom";
import Title from "../components/title";

export default function Main({props}){
    return (
        <div className="p-16 w-full h-full">
            <Title />
            <div className="mt-12">
                <Outlet />
            </div>
        </div>
    )
}