import { Link } from "react-router-dom";


const FoodCard = ({ aCard }) => {
    const { _id, foodName, quantity, pickupLocation, expiredDateTime, additionalNotes, foodImage
    } = aCard;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={foodImage} alt="Foods Loading" className='w-full h-[300px]'/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {foodName}
                        <div className="badge badge-secondary">Quantity: {quantity}</div>
                    </h2>
                    <p>{additionalNotes}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Loacation: {pickupLocation}</div>
                        <div className="badge badge-outline">Expire: {expiredDateTime}</div>
                    </div>
                    <div className="card-actions justify-start">
                    <Link to={`/singleCard/${_id}`}><button className="btn bg-[#BF4C41] text-white hover:bg-black" >View Property</button></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;