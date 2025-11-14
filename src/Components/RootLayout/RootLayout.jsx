import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Spinner from '../Spinner/Spinner';
import { createContext, useState } from 'react';

export const Card = createContext({})

const RootLayout = () => {

    const [cart, setCart] = useState([])

    let navigation = useNavigation()
    // console.log(navigation?.state)

    return (
        <Card.Provider value={{cart, setCart}}>
            <Navber></Navber>
            {
                navigation?.state === 'loading' 
                ? <Spinner /> 
                : <div className='min-h-[calc(100vh-285px)]'>
                    <Outlet></Outlet>
                </div>
            }
            <Footer></Footer>

            <ToastContainer />
        </Card.Provider>
    );
};

export default RootLayout;