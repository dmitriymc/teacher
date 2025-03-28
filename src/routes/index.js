import authRoutes from "./auth/auth";
import {useRoutes} from 'react-router'
import routes from "./dashboard";

export const routes_array = [...authRoutes, ...routes];

export default function Routes(){

    return useRoutes(routes_array);
}