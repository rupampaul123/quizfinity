import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Footer1 from "./components/Footer";
export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer1/>
        </>
    )
}