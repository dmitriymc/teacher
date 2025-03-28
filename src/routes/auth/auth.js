import { Role } from "../../enums/roles"
import Login from "../../pages/login";

const authRoutes = [
    {
        path: '/login', element: <Login />, roles: [Role.GUEST], title: ''
    },
    // {
    //     path: '/resetPassword', component: Login, roles: [Role.GUEST]
    // }
]

export default authRoutes;