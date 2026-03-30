import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/HomePage/Home";
import Registation from "../Components/Registation/Registation";

const router = createBrowserRouter([
    {path:'/',Component:Root,children:[
        {index:true,Component:Home},
        {path:'registation',Component:Registation},
        {path:'registation',Component:''},
        {path:'registation',Component:''},
        {path:'registation',Component:''},
        {path:'registation',Component:''},
    ]}
])
export default router;