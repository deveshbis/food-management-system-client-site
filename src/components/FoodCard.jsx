/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import { MdDateRange, MdProductionQuantityLimits } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
const FoodCard = ({ aCard }) => {
    const { _id, foodName, quantity, pickupLocation, expiredDateTime, additionalNotes, foodImage,
    } = aCard;
    return (
        <div className="font-sans p-4 mx-auto xl:w-full lg:max-w-5xl md:max-w-3xl max-w-md">
            <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
                <div className="bg-white flex flex-col h-full">
                    <img className="object-cover object-center w-full h-56" src={foodImage} alt="avatar" />
                    <div className="flex items-center px-6 py-3 bg-gray-900">
                        <h1 className="mx-3 text-lg font-semibold text-white">{foodName}</h1>
                    </div>

                    <div className="px-6 py-4">

                        <p className="py-2 text-gray-700 dark:text-gray-400">{additionalNotes.slice(0, 100)}</p>

                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <MdDateRange />
                            <h1 className="px-2 text-sm">{new Date(expiredDateTime).toLocaleDateString()}</h1>
                        </div>

                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <CiLocationOn />
                            <h1 className="px-2 text-sm">{pickupLocation}</h1>
                        </div>

                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <MdProductionQuantityLimits />
                            <h1 className="px-2 text-sm">{quantity}</h1>
                        </div>
                        
                            <div className="card-actions justify-end mt-3 ">
                                <Link to={`/food/${_id}`}><button className="btn bg-[#0f0e0e] text-white hover:bg-black" >View Details</button></Link>
                            </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

// FoodCard.propTypes = {
//     aCard: PropTypes.shape({
//         _id: PropTypes.string.isRequired,
//         foodName: PropTypes.string.isRequired,
//         quantity: PropTypes.number.isRequired,
//         pickupLocation: PropTypes.string.isRequired,
//         expiredDateTime: PropTypes.string.isRequired,
//         additionalNotes: PropTypes.string.isRequired,
//         foodImage: PropTypes.string.isRequired,
//         donator: PropTypes.arrayOf(PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             image: PropTypes.string.isRequired,
//         })).isRequired,
//     }).isRequired,
// };

export default FoodCard;








