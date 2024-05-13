import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { MdDateRange, MdProductionQuantityLimits } from 'react-icons/md';
import { Link } from "react-router-dom";

const AvailableFoodCard = ({ card }) => {
    const { _id, foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodImage } = card;

    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex items-center space-x-4 mb-3">
                <img alt="" src='' className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold"></a>
                </div>
            </div>
            <img className="object-cover object-center w-full h-56" src={foodImage} alt="avatar" />

            <div className="flex items-center px-6 py-3 bg-gray-900">
                <h1 className="mx-3 text-lg font-semibold text-white">{foodName}</h1>
            </div>

            <div className="px-6 py-4">

                <p className="py-2 text-gray-700 dark:text-gray-400">{additionalNotes}</p>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <MdDateRange />
                    <h1 className="px-2 text-sm">{expiredDate}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <CiLocationOn />
                    <h1 className="px-2 text-sm">{pickupLocation}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <MdProductionQuantityLimits />
                    <h1 className="px-2 text-sm">{foodQuantity}</h1>
                </div>
                <div className="card-actions justify-end mt-3 ">
                    <Link to={`/food/${_id}`}><button className="btn bg-[#0f0e0e] text-white hover:bg-black" >View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

AvailableFoodCard.propTypes = {
    card: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        foodName: PropTypes.string.isRequired,
        foodQuantity: PropTypes.number.isRequired,
        pickupLocation: PropTypes.string.isRequired,
        expiredDate: PropTypes.string.isRequired,
        additionalNotes: PropTypes.string.isRequired,
        foodImage: PropTypes.string.isRequired,
    }).isRequired,
};

export default AvailableFoodCard;
