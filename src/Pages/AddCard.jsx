import React, { useContext } from 'react';
import { Card } from '../Components/RootLayout/RootLayout';

const AddCard = () => {
    const card = useContext(Card)
    console.log(card?.cart)
    return (
        <>
        mama
        {
            card?.cart.map(c => <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                className="max-h-52 w-full object-cover"
                    src={c?.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <p>{c?.category}</p>
                <div className='flex gap-12 items-center'>
                    <h2 className="card-title">{c?.name}</h2>
                    <p>{c?.price}</p>
                </div>
            </div>
    </div>)
        }
  

    </>
    );
};

export default AddCard;