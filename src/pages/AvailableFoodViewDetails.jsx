
// import { useContext, useState } from 'react'
// import { useLoaderData, useNavigate } from 'react-router-dom'
// import { AuthContext } from '../providers/AuthProvider'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import toast from 'react-hot-toast'
// import useAxiosSecure from '../hooks/useAxiosSecure'
// const JobDetails = () => {
//   const axiosSecure = useAxiosSecure()
//   const navigate = useNavigate()
//   const [startDate, setStartDate] = useState(new Date())
//   const { user } = useContext(AuthContext)
//   const job = useLoaderData()
//   const {
//     _id,
//     job_title,
//     description,
//     min_price,
//     max_price,
//     category,
//     deadline,
//     buyer,
//   } = job || {}

//   const handleFormSubmission = async e => {
//     e.preventDefault()
//     if (user?.email === buyer?.email)
//       return toast.error('Action not permitted!')
//     const form = e.target
//     const jobId = _id
//     const price = parseFloat(form.price.value)
//     if (price < parseFloat(min_price))
//       return toast.error('Offer more or at least equal to Minimum Price.')
//     const comment = form.comment.value
//     const deadline = startDate
//     const email = user?.email
//     // const buyer_email = buyer_email
//     const status = 'Pending'

//     const bidData = {
//       jobId,
//       price,
//       deadline,
//       comment,
//       job_title,
//       category,
//       email,
//       buyer_email: buyer?.email,
//       status,
//       buyer,
//     }
//     try {
//       const { data } = await axiosSecure.post(`/bid`, bidData)
//       console.log(data)
//       toast.success('Bid Placed Successfully!')
//       navigate('/my-bids')
//     } catch (err) {
//       toast.success(err.response.data)
//       e.target.reset()
//     }
//   }

//   return (
//     <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
//       {/* Job Details */}
//       <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
//         <div className='flex items-center justify-between'>
//           <span className='text-sm font-light text-gray-800 '>
//             Deadline: {new Date(deadline).toLocaleDateString()}
//           </span>
//           <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
//             {category}
//           </span>
//         </div>

//         <div>
//           <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
//             {job_title}
//           </h1>

//           <p className='mt-2 text-lg text-gray-600 '>{description}</p>
//           <p className='mt-6 text-sm font-bold text-gray-600 '>
//             Buyer Details:
//           </p>
//           <div className='flex items-center gap-5'>
//             <div>
//               <p className='mt-2 text-sm  text-gray-600 '>
//                 Name: {buyer?.name}
//               </p>
//               <p className='mt-2 text-sm  text-gray-600 '>
//                 Email: {buyer?.email}
//               </p>
//             </div>
//             <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
//               <img src={buyer?.photo} alt='' />
//             </div>
//           </div>
//           <p className='mt-6 text-lg font-bold text-gray-600 '>
//             Range: ${min_price} - ${max_price}
//           </p>
//         </div>
//       </div>
//       {/* Place A Bid Form */}
//       <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
//         <h2 className='text-lg font-semibold text-gray-700 capitalize '>
//           Place A Bid
//         </h2>

//         <form onSubmit={handleFormSubmission}>
//           <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
//             <div>
//               <label className='text-gray-700 ' htmlFor='price'>
//                 Price
//               </label>
//               <input
//                 id='price'
//                 type='text'
//                 name='price'
//                 required
//                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//               />
//             </div>

//             <div>
//               <label className='text-gray-700 ' htmlFor='emailAddress'>
//                 Email Address
//               </label>
//               <input
//                 id='emailAddress'
//                 type='email'
//                 name='email'
//                 disabled
//                 defaultValue={user?.email}
//                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//               />
//             </div>

//             <div>
//               <label className='text-gray-700 ' htmlFor='comment'>
//                 Comment
//               </label>
//               <input
//                 id='comment'
//                 name='comment'
//                 type='text'
//                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//               />
//             </div>
//             <div className='flex flex-col gap-2 '>
//               <label className='text-gray-700'>Deadline</label>

//               {/* Date Picker Input Field */}
//               <DatePicker
//                 className='border p-2 rounded-md'
//                 selected={startDate}
//                 onChange={date => setStartDate(date)}
//               />
//             </div>
//           </div>

//           <div className='flex justify-end mt-6'>
//             <button
//               type='submit'
//               className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
//             >
//               Place Bid
//             </button>
//           </div>
//         </form>
//       </section>
//     </div>
//   )
// }

// export default JobDetails






















import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const AvailableFoodViewDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {

        fetch(`https://food-master-murex.vercel.app/availableSingleFoodDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    }, [id]);

    

    const handleRequestFood = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDate = form.expiredDate.value;
        const additionalNotes = form.additionalNotes.value;


        const newFood = {
            name, pickupLocation, expiredDate, additionalNotes,
        }

        console.log(newFood);

        if (name && pickupLocation && expiredDate && additionalNotes) {
            fetch(`https://food-master-murex.vercel.app/reqData`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newFood)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                });
        }
    }
    const handleDelete = _id => {
        console.log(_id);
        fetch(`https://food-master-murex.vercel.app/deleteData/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingCard = details.filter(card => card._id !== _id)
                    setDetails(remainingCard)
                }
            });
    }

    return (
        <div className="mt-20">

            <section className='mt-24 px-5'>
                <div className="mb-3 mt-4">
                    <div className='flex justify-between lg:flex-row md:flex-row flex-col items-center  mb-3'>
                        <div className="container flex flex-col px-4 space-y-3 mb-5">
                            <h1 className=" mt-2 lg:mt-4 text-xl font-bold lg:text-6xl">{details.foodName}</h1>
                            <p className='flex gap-3 mt-2 lg:mt-4 text-lg sm:mb-12'>
                            </p>
                        </div>
                        <div className="bg-[#FCC0C5] text-white p-3 gap-2 rounded-xl">
                            <h5 className="text-3xl text-black font-extrabold">{details.name ? details.name : ''}</h5>
                            <hr />
                            <h5 className="text-xl text-black">{details.pickupLocation}</h5>
                        </div>
                    </div>
                    <img src={details.foodImage} alt="" className="w-full lg:h-[600px] mx-auto dark:bg-gray-500 rounded-lg shadow-md " />
                    <div className="mt-5">
                        <button className="btn btn-outline">Available</button>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mt-3 mb-2">Location</h4>
                        <p data-aos="flip-left" data-aos-duration="3000">{details.pickupLocation}</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mt-3 mb-2">Description</h4>
                        <p data-aos="zoom-in" data-aos-duration="3000">{details.additionalNotes}</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-5 mt-3" data-aos="flip-right" data-aos-duration="3000">
                        <h1 className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Quantity: {details.foodQuantity}</span>
                        </h1>

                        <h1 className="relative inline-block px-4 py-2 font-medium group" data-aos="flip-left" data-aos-duration="3000">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Expired: {details.expiredDate} Days</span>
                        </h1>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className="btn bg-[#BF4C41] text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Request</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <div className="card bg-base-100 shadow-xl">
                                <figure><img src={details.foodImage} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{details.foodName}</h2>
                                    <p><span className="label-text font-bold">Donator Email:</span> {details.email}</p>
                                </div>
                            </div>
                            <form onSubmit={handleRequestFood}>
                                <div className="flex gap-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Donator Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter additional Notes"
                                            className="input input-bordered"
                                            defaultValue={details.name}
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Pickup Location</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="pickupLocation"
                                            placeholder="Enter additional Notes"
                                            className="input input-bordered"
                                            defaultValue={details.pickupLocation}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Expire Date</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="expiredDate"
                                            placeholder="Enter additional Notes"
                                            className="input input-bordered"
                                            defaultValue={details.expiredDate}
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Additional Notes</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="additionalNotes"
                                            placeholder="Enter additional Notes"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#BF4C41] text-white hover:bg-black">Request</button>
                                    <Link to='/availableFoods'><button onClick={() => handleDelete(details._id)} className="btn bg-[#BF4C41] text-white hover:bg-black">Close</button></Link>
                                </div>
                            </form>


                        </div>
                    </dialog>
                </div>
            </section>
        </div>
    );
};
export default AvailableFoodViewDetails;






















