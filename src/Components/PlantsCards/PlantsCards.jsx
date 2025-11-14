import { Link, useNavigate } from "react-router";

const PlantsCards = ({ plant }) => {

    const navigate = useNavigate()

    const { image, name, category, price, id } = plant;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                className="max-h-52 w-full object-cover"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <p>{category}</p>
                <div className='flex gap-12 items-center'>
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/card-detailes/${id}`, {state: plant}) }
                    // state={plant}
                    // to={} 
                    className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PlantsCards;