import {useLocation, matchRoutes} from 'react-router-dom';
import {routes_array} from '../routes';

export default function Title(){

    const location = useLocation();
    const route = matchRoutes(routes_array, location);

    console.log(route)

    const title = route ? route[route.length-1].route.title : '';

    return (
            title && <h2 className="text-5xl font-bold">{title}</h2>
    )
}