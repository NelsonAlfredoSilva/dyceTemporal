import { Outlet } from "react-router-dom";
import { Footer } from '../components/Footer/Footer' ;
import { Header } from '../components/Header/Header'


export const LayoutPublic = ()=>{


    return(
        <>
        <Header></Header>
        <main>
            <Outlet> </Outlet>
        </main>
        <Footer></Footer>
        </>
    )
}