// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";



// const AvailableFoodViewDetails = () => {
//     const { id } = useParams();
//     const [details, setDetails] = useState({});

//     useEffect(() => {

//         fetch(`https://food-master-murex.vercel.app/availableSingleFoodDetails/${id}`)
//             .then(res => res.json())
//             .then(data => {
//                 setDetails(data)
//             })
//     }, [id]);



// const handleRequestFood = event => {
//     event.preventDefault();

//     const form = event.target;
//     const name = form.name.value;
//     const pickupLocation = form.pickupLocation.value;
//     const expiredDate = form.expiredDate.value;
//     const additionalNotes = form.additionalNotes.value;


//     const newFood = {
//         name, pickupLocation, expiredDate, additionalNotes,
//     }

//         console.log(newFood);

// if (name && pickupLocation && expiredDate && additionalNotes) {
//     fetch(`https://food-master-murex.vercel.app/reqData`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(newFood)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         });
// }
// }
// const handleDelete = _id => {
//     console.log(_id);
//     fetch(`https://food-master-murex.vercel.app/deleteData/${_id}`, {
//         method: 'DELETE'
//     })
//         .then(res => res.json())
//         .then(data => {
//             if (data.deletedCount > 0) {
//                 const remainingCard = details.filter(card => card._id !== _id)
//                 setDetails(remainingCard)
//             }
//         });
//     }

//     return (
//         <div className="mt-20">

//             <section className='mt-24 px-5'>
//                 <div className="mb-3 mt-4">
//                     <div className='flex justify-between lg:flex-row md:flex-row flex-col items-center  mb-3'>
//                         <div className="container flex flex-col px-4 space-y-3 mb-5">
//                             <h1 className=" mt-2 lg:mt-4 text-xl font-bold lg:text-6xl">{details.foodName}</h1>
//                             <p className='flex gap-3 mt-2 lg:mt-4 text-lg sm:mb-12'>
//                             </p>
//                         </div>
//                         <div className="bg-black text-white p-3 gap-2 rounded-xl">
//                             <h5 className="text-3xl text-white  text-whitefont-extrabold">{details.name ? details.name : ''}</h5>
//                             <hr />
//                             <h5 className="text-xl text-white">{details.pickupLocation}</h5>
//                         </div>
//                     </div>
//                     <img src={details.foodImage} alt="" className="w-full lg:h-[600px] mx-auto dark:bg-gray-500 rounded-lg shadow-md " />
//                     <div className="mt-5">
//                         <button className="btn btn-outline">Available</button>
//                     </div>
//                     <div>
//                         <h4 className="text-2xl font-bold mt-3 mb-2">Location</h4>
//                         <p data-aos="flip-left" data-aos-duration="3000">{details.pickupLocation}</p>
//                     </div>
//                     <div>
//                         <h4 className="text-2xl font-bold mt-3 mb-2">Description</h4>
//                         <p data-aos="zoom-in" data-aos-duration="3000">{details.additionalNotes}</p>
//                     </div>
//                     <div className="flex flex-wrap justify-center gap-5 mt-3" data-aos="flip-right" data-aos-duration="3000">
//                         <h1 className="relative inline-block px-4 py-2 font-medium group">
//                             <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
//                             <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
//                             <span className="relative text-black group-hover:text-white">Quantity: {details.foodQuantity}</span>
//                         </h1>

//                         <h1 className="relative inline-block px-4 py-2 font-medium group" data-aos="flip-left" data-aos-duration="3000">
//                             <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
//                             <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
//                             <span className="relative text-black group-hover:text-white">Expired: {details.expiredDate} Days</span>
//                         </h1>
//                     </div>
//                 </div>
//                 <div className='flex justify-center'>
//                     <button className="btn bg-black text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Request</button>
//                     <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//                         <div className="modal-box">
//                             <div className="card bg-base-100 shadow-xl">
//                                 <figure><img src={details.foodImage} alt="Shoes" /></figure>
//                                 <div className="card-body">
//                                     <h2 className="card-title">{details.foodName}</h2>
//                                     <p><span className="label-text font-bold">Donator Email:</span> {details.email}</p>
//                                 </div>
//                             </div>
//                             <form onSubmit={handleRequestFood}>
//                                 <div className="flex gap-3">
//                                     <div className="form-control">
// <label className="label">
//     <span className="label-text font-bold">Donator Name</span>
// </label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             placeholder="Enter additional Notes"
//                                             className="input input-bordered"
//                                             defaultValue={details.name}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text font-bold">Pickup Location</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="pickupLocation"
//                                             placeholder="Enter additional Notes"
//                                             className="input input-bordered"
//                                             defaultValue={details.pickupLocation}
//                                             required
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="flex gap-3">
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text font-bold">Expire Date</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="expiredDate"
//                                             placeholder="Enter additional Notes"
//                                             className="input input-bordered"
//                                             defaultValue={details.expiredDate}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text font-bold">Additional Notes</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="additionalNotes"
//                                             placeholder="Enter additional Notes"
//                                             className="input input-bordered"
//                                             required
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form-control mt-6">
//                                     <button className="btn bg-black text-white hover:bg-black">Request</button>
//                                     <Link to='/availableFoods'><button onClick={() => handleDelete(details._id)} className="btn bg-black text-white hover:bg-black">Close</button></Link>
//                                 </div>
//                             </form>


//                         </div>
//                     </dialog>
//                 </div>
//             </section>
//         </div>
//     );
// };
// export default AvailableFoodViewDetails;


// if (user?.email === postOwnerEmail)
//     return toast.error('Request Apply not permitted!')




import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";




const AvailableFoodViewDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const { user } = useAuth();

    useEffect(() => {

        fetch(`https://food-master-murex.vercel.app/availableSingleFoodDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    }, [id]);

    const { _id, foodImage, foodName, foodStatus, expiredDate, additionalNotes, foodQuantity, pickupLocation, postOwner
    } = details;

    const postOwnerName = postOwner ? postOwner.name : "";
    const postOwnerEmail = postOwner ? postOwner.email : "";

    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    const handleRequestFood = event => {
        event.preventDefault();
        
    
        const form = event.target;
        const donerName = form.querySelector("#name").value;
        const pickupLocation = form.querySelector("#location").value;
        const expireDate = form.querySelector("#expiredDate").value;
        const reqDate = form.querySelector("#reqDate").value;
        const email = user?.email;
    
        if (email === postOwnerEmail) {
            
            Swal.fire({
                title: 'Error!',
                text: 'You cannot request your own food.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return; 
        }
    
        const requestData = {
            donerName,
            pickupLocation,
            expireDate,
            reqDate,
            email,
            postOwnerEmail
        };
        console.log(requestData);
    
        fetch(`https://food-master-murex.vercel.app/reqData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                handleDelete(_id);
            }
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    const handleDelete = _id => {
        console.log(_id);
        fetch(`https://food-master-murex.vercel.app/deleteData/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                setIsOpen(false); 
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    // const handleDelete = _id => {
    //     console.log(_id);
    //     fetch(`https://food-master-murex.vercel.app/deleteData/${_id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {

    //                 if (Array.isArray(details)) {
    //                     const remainingCards = details.filter(card => card._id !== _id);
    //                     setDetails(remainingCards);
    //                 }
    //                 setIsOpen(false);
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // };

    return (
        <div className="mt-20">
            <section className='mt-24 px-5'>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">{foodName
                        }</h1>

                        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={foodImage} alt="" />

                            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                                <p className="text-sm text-green-700 uppercase">{foodStatus}</p>

                                <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                                    Expired Date: {expiredDate}
                                </a>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    {additionalNotes}
                                </p>

                                <p className="inline-block mt-2 text-blue-500 text-xl  hover:text-blue-400">Food Quantity:
                                    {foodQuantity}</p>

                                <div className="flex items-center mt-6">
                                    <h1 className="text-2xl">Donar:</h1>

                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Name:{postOwnerName} </h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Location: {pickupLocation}</p>
                                    </div>
                                </div>
                                <div className="relative flex justify-center mt-20">
                                    <button onClick={() => setIsOpen(true)} className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                        Request
                                    </button>

                                    {isOpen && (
                                        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                                <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6">
                                                    <div className="flex items-center justify-center mx-auto">
                                                        <img className="h-full rounded-lg" src={foodImage} alt="" />
                                                    </div>

                                                    <div className="mt-5 text-center">
                                                        <h3 className="text-lg font-medium text-gray-800 dark:text-white" id="modal-title">
                                                            {foodName}
                                                        </h3>
                                                    </div>

                                                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                                                        <form onSubmit={handleRequestFood} className="space-y-4">
                                                            <div>
                                                                <label className="label">
                                                                    <span className="label-text font-bold">Food ID</span>
                                                                </label>
                                                                <input
                                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                                    placeholder="Food ID"
                                                                    type="text"
                                                                    id="foodId"
                                                                    defaultValue={_id}
                                                                    disabled
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="sr-only" htmlFor="name">Email</label>
                                                                <input
                                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                                    placeholder="Email"
                                                                    type="email"
                                                                    id="email"
                                                                    defaultValue={postOwnerEmail}
                                                                    disabled
                                                                />
                                                            </div>

                                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                                <div>
                                                                    <label className="sr-only" htmlFor="email">Doner Name</label>
                                                                    <input
                                                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                                        placeholder="Name"
                                                                        type="text"
                                                                        id="name"
                                                                        defaultValue={postOwnerName}
                                                                        disabled
                                                                    />
                                                                </div>

                                                                <div>
                                                                    <label className="sr-only" htmlFor="phone">User Email</label>
                                                                    <input
                                                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                                        placeholder="User Email"
                                                                        type="email"
                                                                        id="userEmail"
                                                                        defaultValue={user?.email}
                                                                        disabled
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                                <div>
                                                                    <label className="sr-only" htmlFor="email">Request date</label>
                                                                    <input
                                                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                                        placeholder="Request Date"
                                                                        type="date"
                                                                        id="reqDate"
                                                                        defaultValue={currentDate}
                                                                        disabled
                                                                    />
                                                                </div>

                                                                <div>
                                                                    <label className="sr-only" htmlFor="phone">Location</label>
                                                                    <input
                                                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                                        placeholder="Location"
                                                                        type="text"
                                                                        id="location"
                                                                        defaultValue={pickupLocation}
                                                                        disabled
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <label className="sr-only" htmlFor="name">Expired Date</label>
                                                                <input
                                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                                    placeholder="expired date"
                                                                    type="date"
                                                                    id="expiredDate"
                                                                    defaultValue={expiredDate}
                                                                    disabled
                                                                />
                                                            </div>

                                                            <div>
                                                                <label className="sr-only" htmlFor="message">Message</label>

                                                                <textarea
                                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                                    placeholder="Message"
                                                                    rows="8"
                                                                    id="message"
                                                                ></textarea>
                                                            </div>
                                                            {user?.email !== postOwnerEmail && (
                                                                <button className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">Request</button>
                                                            )}

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </div>
    );
};
export default AvailableFoodViewDetails;














// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";



// const AvailableFoodViewDetails = () => {
//     const { id } = useParams();
//     const [details, setDetails] = useState({});

//     useEffect(() => {

//         fetch(`https://food-master-murex.vercel.app/availableSingleFoodDetails/${id}`)
//             .then(res => res.json())
//             .then(data => {
//                 setDetails(data)
//             })
//     }, [id]);

//     const { _id, foodImage, foodName, foodStatus, expiredDate, additionalNotes, foodQuantity, pickupLocation, postOwner
//     } = details;

//     const handleRequestFood = event => {
//         event.preventDefault();

//         const form = event.target;

//         const name = form.name.value;
//         const pickupLocation = form.pickupLocation.value;
//         const expiredDate = form.expiredDate.value;
//         const additionalNotes = form.additionalNotes.value;


//         const newFood = {
//             name, pickupLocation, expiredDate, additionalNotes,
//         }

//         console.log(newFood);

//         if (name && pickupLocation && expiredDate && additionalNotes) {
//             fetch(`https://food-master-murex.vercel.app/reqData`, {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(newFood)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                 });
//         }
//     }
//     const handleDelete = _id => {
//         console.log(_id);
//         fetch(`https://food-master-murex.vercel.app/deleteData/${_id}`, {
//             method: 'DELETE'
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.deletedCount > 0) {
//                     const remainingCard = details.filter(card => card._id !== _id)
//                     setDetails(remainingCard)
//                 }
//             });
//     }

//     return (
//         <div className="mt-20">

//             <section className='mt-24 px-5'>
//                 <div className="mb-3 mt-4">
//                     <div className='flex justify-between lg:flex-row md:flex-row flex-col items-center  mb-3'>
//                         <div className="container flex flex-col px-4 space-y-3 mb-5">
//                             <h1 className=" mt-2 lg:mt-4 text-xl font-bold lg:text-6xl">{foodName}</h1>
//                             <p className='flex gap-3 mt-2 lg:mt-4 text-lg sm:mb-12'>
//                             </p>
//                         </div>
//                         <div className="bg-black text-white p-3 gap-2 rounded-xl">
//                             <h5 className="text-3xl text-white  text-whitefont-extrabold">{name ? name : ''}</h5>
//                             <hr />
//                             <h5 className="text-xl text-white">{details.pickupLocation}</h5>
//                         </div>
//                     </div>
//                     <img src={foodImage} alt="" className="w-full lg:h-[600px] mx-auto dark:bg-gray-500 rounded-lg shadow-md " />
//                     <div className="mt-5">
//                         <button className="btn btn-outline">Available</button>
//                     </div>
//                     <div>
//                         <h4 className="text-2xl font-bold mt-3 mb-2">Location</h4>
//                         <p data-aos="flip-left" data-aos-duration="3000">{pickupLocation}</p>
//                     </div>
//                     <div>
//                         <h4 className="text-2xl font-bold mt-3 mb-2">Description</h4>
//                         <p data-aos="zoom-in" data-aos-duration="3000">{additionalNotes}</p>
//                     </div>
//                     <div className="flex flex-wrap justify-center gap-5 mt-3" data-aos="flip-right" data-aos-duration="3000">
//                         <h1 className="relative inline-block px-4 py-2 font-medium group">
//                             <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
//                             <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
//                             <span className="relative text-black group-hover:text-white">Quantity: {foodQuantity}</span>
//                         </h1>

//                         <h1 className="relative inline-block px-4 py-2 font-medium group" data-aos="flip-left" data-aos-duration="3000">
//                             <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
//                             <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
//                             <span className="relative text-black group-hover:text-white">Expired: {expiredDate} Days</span>
//                         </h1>
//                     </div>
//                 </div>
//                 <div className='flex justify-center'>
//                     <button className="btn bg-black text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Request</button>
//                     <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//                         <div className="modal-box">
//                             <div className="card bg-base-100 shadow-xl">
//                                 <figure><img src={foodImage} alt="Shoes" /></figure>
//                                 <div className="card-body">
//                                     <h2 className="card-title">{foodName}</h2>
//                                     <p><span className="label-text font-bold">Donator Email:</span> {details.email}</p>
//                                 </div>
//                             </div>
//                             <form onSubmit={handleRequestFood}>
//                                 <div className="flex gap-3">
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text font-bold">Donator Name</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             placeholder="Enter additional Notes"
//                                             className="input input-bordered"
//                                             defaultValue={details.name}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text font-bold">Pickup Location</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="pickupLocation"
//                                             placeholder="Enter additional Notes"
//                                             className="input input-bordered"
//                                             defaultValue={details.pickupLocation}
//                                             required
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="flex gap-3">
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text font-bold">Expire Date</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="expiredDate"
//                                             placeholder="Enter additional Notes"
//                                             className="input input-bordered"
//                                             defaultValue={details.expiredDate}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text font-bold">Additional Notes</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="additionalNotes"
//                                             placeholder="Enter additional Notes"
//                                             className="input input-bordered"
//                                             required
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form-control mt-6">
//                                     <button className="btn bg-black text-white hover:bg-black">Request</button>
//                                     <Link to='/availableFoods'><button onClick={() => handleDelete(details._id)} className="btn bg-black text-white hover:bg-black">Close</button></Link>
//                                 </div>
//                             </form>


//                         </div>
//                     </dialog>
//                 </div>
//             </section>
//         </div>
//     );
// };
// export default AvailableFoodViewDetails;