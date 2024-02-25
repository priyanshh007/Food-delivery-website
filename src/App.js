import React,{lazy,Suspense} from "react";
import  ReactDOM  from "react-Dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Restrocard from "./components/Restrocard";
import {userState}from"react";
import { createBrowserRouter,Outlet,RouterProvider ,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./Error";
import Restromenu from "./components/Restromenu";
import Profile from "./components/Profile";
import Grocery from "./components/Grocery";





//chunking ==code splitting ==dynamic bundeling==lazy loading==on demand loading

 const Grocery=lazy(()=>import("./components/Grocery"));



const AppLayout= () =>{
return(<div className="">
    <Header/>
    <Outlet/>
    </div>)
    }



const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<AppLayout></AppLayout>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
                 children:[
                     {
                         path:"profile", // means parent path / path 
                        element:<Profile name="sp"/>,
                      },
                   ],
            },
            {
                path:"/contacts",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<Restromenu/>
            }
            ,
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>
    },
    

]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


