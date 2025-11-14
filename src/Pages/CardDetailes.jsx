// import axios from 'axios';
// import React, { useState } from 'react';
// import { useParams } from 'react-router';
// import { useState } from 'react';
import { use } from 'react';
import { useLocation } from 'react-router';
// import { toast } from 'react-toastify';
import { Card } from '../Components/RootLayout/RootLayout';

const CardDetailes = () => {

    const {cart, setCart} = use(Card)
    // console.log(cart)

    // const [cart, setCart] = useState([])
    // console.log(cart)

    // const data = useLoaderData()
    // console.log(data?.plants)

    const location = useLocation()
    // console.log(location)
    
    const { image, name, category, description } = location.state;

    // let param = useParams()
    // console.log(param.id)

    // console.log(plant)

    // useEffect(() => {
    //     axios(`https://openapi.programming-hero.com/api/plant/${param.id}`).then(data => setPlanet(data?.data?.plants))
    // }, []);

    // const handler = (card) => {
    //     // setCart((prv) => [...prv, card])
    //     toast("hello")
    // }

    return (
        <div className="card bg-base-100 max-w-[600px] mx-auto shadow-sm">
            <figure>
                <img
                    className="max-h-96 w-full object-cover"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <p>{category}</p>
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() =>  setCart((prv) => [...prv, location.state])} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetailes;