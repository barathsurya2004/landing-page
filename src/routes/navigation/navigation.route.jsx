import { NavigationBar } from "../../components/navigation-bar/navigation-bar.component"
import { Outlet } from "react-router-dom"
import './navigation.style.scss';
import Footer from "../../components/footer/footer.component";

export const NavigationPage = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    )

}