import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/HomePage/Home";
import Registation from "../Components/Registation/Registation";
import LogIn from "../Components/LogIn/LogIn";
import Orders from "../Components/Orders/Orders";
import Profile from "../Components/Profile/Profile";

const router = createBrowserRouter([
    {path:'/',Component:Root,children:[
        {index:true,Component:Home},
        {path:'registation',Component:Registation},
        {path:'orders',Component:Orders},
        {path:'profile',Component:Profile},
        {path:'registation',Component:''},
        {path:'registation',Component:''},
    ]}
])
export default router;