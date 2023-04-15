import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import ProfitStatistics from "../components/Admin/ProfitStatistics";
import Introduce from "../components/Admin/Introduce";
import UserStatistic from "../components/Admin/UserStatistic";
export function Admin() {
    require('./../assets/css/soft-ui-dashboard.css');
	require('./../assets/css/nucleo-icons.css');
	require('./../assets/css/nucleo-svg.css');
    return (
        <>
         {/* <!-- Navbar --> */}
       <NavBar/>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            {/* <!-- Header --> */}
           <Header/>
            {/* <!-- Content --> */}
            <div className="container-fluid py-4">
                <ProfitStatistics/>
                <Introduce/>
                
               <UserStatistic/>
                <Footer/>
            </div>
        </main>
        
    </>
    )
}