
import { Navigate, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



const MyFoodRequest = () => {

    const foodReq = useLoaderData()
    console.log(foodReq);

    const { user, loading } = useAuth();

    if (loading) {
        return <div className="flex justify-center items-center mt-48 mb-48">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    
    return (
        <div className="min-h-[calc(100vh-72px)] mt-20">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>

                            <th> Donar Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodReq.map((card) => (
                            <tr key={card._id}>

                                <td>{card.name}</td>
                                <td>{card.pickupLocation}</td>
                                <td>{card.expiredDate}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;


