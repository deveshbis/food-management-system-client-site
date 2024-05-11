import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const AvailableFoodViewDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});


    useEffect(() => {

        fetch(`http://localhost:5000/availableSingleFoodDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    }, [id]);
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
                            <h3 className="font-bold text-lg">{details.foodName}</h3>
                            <img src={details.foodImage} alt="" />
                            <p className="py-4"><span className="label-text font-bold">FoodID: </span>{details._id}</p>
                            <p className=""><span className="label-text font-bold">Donator Email:</span> {details.email}</p>
                            <p className=""><span className="label-text font-bold">Donator Name:</span> {details.name}</p>
                            <p className=""><span className="label-text font-bold">Pickup Location:</span> {details.pickupLocation}</p>
                            <p className=""><span className="label-text font-bold">Expire Date:</span> {details.expiredDate}</p>
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
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Request</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </section>
        </div>
    );
};

export default AvailableFoodViewDetails;