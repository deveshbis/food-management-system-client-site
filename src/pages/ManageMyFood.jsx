
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, Navigate} from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { useQuery, } from "@tanstack/react-query";


const ManageMyFood = () => {

    const { user, loading } = useAuth();
    const { data: foodCard = [], isLoading } = useQuery({
        queryFn: () => getData(),
        queryKey: ['manageMyFood'],
      })

      const getData = async () => {
        const { data } = await axios(`https://food-master-murex.vercel.app/userData/${user?.email}`,
            {withCredentials: true}
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

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"

        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://food-master-murex.vercel.app/deleteData/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingCard = foodCard.filter(card => card._id !== _id)
                            // setFoodCard(remainingCard)
                            return remainingCard;
                            
                        }
                    })
            }
        });
    }

    return (
        <div className="mt-20 min-h-[calc(100vh-72px)]">
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr className="text-3xl text-center font-bold">
                            <th>Image</th>
                            <th>Name</th>
                            <th>Expired Date</th>
                            <th>Food Quantity</th>
                            <th>Food Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodCard.map((card) => (
                            <tr key={card._id} className="text-2xl font-semibold text-center">

                                <td className="">
                                    <img src={card.foodImage} alt="Spot" className=" h-24" />
                                </td>
                                <td>{card.foodName}</td>

                                <td>{card.expiredDate}</td>

                                <td>{card.foodQuantity}</td>
                                <td>{card.foodStatus}</td>
                                <td className="">
                                    <Link to={`/myListCardUpdate/${card._id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"><FaRegEdit /></button></Link>
                                    <button onClick={() => handleDelete(card._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"><RiDeleteBin5Line /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMyFood;