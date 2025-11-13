import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='min-h-[calc(100vh-285px)]'>
                <p>parents</p>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;