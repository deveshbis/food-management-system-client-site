import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const MyFoodRequest = () => {

    const { user, loading } = useAuth();
    const { data: foodReq = [], isLoading } = useQuery({
        queryFn: () => getData(),
        queryKey: ['manageMyFood'],
    })

    const getData = async () => {
        const { data } = await axios(`https://food-master-murex.vercel.app/reqData`,
            { withCredentials: true }
        )
        return data;
    }

    if (loading) {
        return <div className="flex justify-center items-center mt-48 mb-48">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    if (isLoading) return <p>Data is still loading......</p>


    return (
        <div className="min-h-[calc(100vh-72px)] mt-20">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Donar Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodReq.map((card) => (
                            <tr key={card._id}>

                                <td>{card.donerName}</td>
                                <td>{card.pickupLocation}</td>
                                <td>{card.expireDate}</td>
                                <td>{card.reqDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;


