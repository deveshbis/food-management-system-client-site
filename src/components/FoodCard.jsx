import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FoodCard = ({ aCard }) => {
    const { _id, foodName, quantity, pickupLocation, expiredDateTime, additionalNotes, foodImage, donator
    } = aCard;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border border-solid border-black space-y-2 p-2">
                <div className="flex items-center space-x-4">
                    <img alt="" src={donator.image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{donator.name}</a>
                    </div>
                </div>
                <figure><img src={foodImage} alt="Foods Loading" className='w-full h-[300px]' /></figure>
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
                        <Link to={`/food/${_id}`}><button className="btn bg-[#BF4C41] text-white hover:bg-black" >View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    aCard: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        foodName: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        pickupLocation: PropTypes.string.isRequired,
        expiredDateTime: PropTypes.string.isRequired,
        additionalNotes: PropTypes.string.isRequired,
        foodImage: PropTypes.string.isRequired,
        donator: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })).isRequired,
    }).isRequired,
};

export default FoodCard;