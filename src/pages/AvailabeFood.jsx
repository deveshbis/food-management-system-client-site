import { Link, useLoaderData } from "react-router-dom";


const AvailabeFood = () => {
    const user = useLoaderData();
    return (
        <div className="mt-16 p-4">
            {user.map((user, index) => (
                <div key={index} className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card bg-base-100 shadow-xl border border-solid border-black space-y-2 p-2 mt-5">
                        <div className="flex items-center space-x-4">
                            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{user.name}</a>
                            </div>
                        </div>
                        <figure><img src={user.foodImage} alt="Foods Loading" className='w-full h-[300px]' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {user.foodName}
                                <div className="badge badge-secondary">Quantity: {user.foodQuantity}</div>
                                
                            </h2>
                            <p>{user.additionalNotes}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Loacation: {user.pickupLocation}</div>
                                <div className="badge badge-outline">Expire: {user.expiredDate}</div>
                            </div>
                            <div className="card-actions justify-between items-center">
                                <Link to={`/food/${user._id}`}><button className="btn bg-[#BF4C41] text-white hover:bg-black" >View Details</button></Link>
                                <div className="badge badge-accent">Status: {user.foodStatus}</div>
                            </div> 
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default AvailabeFood;



// import { useEffect, useState } from "react";

// const AvailabeFood = () => {
//     const [userData, setUserData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/userData');
//             const data = await response.json();
//             console.log(data);
//             setUserData(data);
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }
//     };

//     return (
//         <div>
// {userData.map((user, index) => (
//     <div key={index} className="card w-96 bg-base-100 shadow-xl">
//         <figure><img src={user.foodImage} alt="User" /></figure>
//         <div className="card-body">
//             <h2 className="card-title">
//                 {user.foodName}
//             </h2>
//         </div>
//     </div>
// ))}
//         </div>
//     );
// };

// export default AvailabeFood;

















// const AvailabeFood = () => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/userData');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                 setUserData(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     if (!userData) {
//         return <div>Loading...</div>;
//     }
//     return (
//         <div >
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <figure><img src={userData.image} alt="Shoes" /></figure>
//                 <div className="card-body">
//                     <h2 className="card-title">
//                         Shoes!
//                         <div className="badge badge-secondary">NEW</div>
//                     </h2>
//                     <p>If a dog chews shoes whose shoes does he choose?</p>
//                     <div className="card-actions justify-end">
//                         <div className="badge badge-outline">Fashion</div>
//                         <div className="badge badge-outline">Products</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AvailabeFood;