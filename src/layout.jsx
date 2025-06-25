import {Outlet} from "react-router-dom";
import Header from "./components/header";
import Footer1 from "./components/footer";
export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer1/>
        </>
    )
}