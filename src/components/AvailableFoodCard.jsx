import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const AvailableFoodCard = ({ card }) => {
    const { _id, foodName, expiredDate, additionalNotes, foodImage } = card;
    

    return (

        <div className="bg-white rounded overflow-hidden border">
            <img src={foodImage} alt="Blog Post 1" className="w-full h-52 object-cover" />
            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{foodName}</h3>
                <p className="text-gray-500 text-sm">{additionalNotes}</p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">{expiredDate}</p>
                <Link to={`/availableFood/${_id}`}><button className="btn bg-[#0f0e0e] text-white hover:bg-black mt-3" >View Details</button></Link>
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
        postOwner: PropTypes.shape({
            name: PropTypes.string.isRequired,
            photo: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};


export default AvailableFoodCard;
