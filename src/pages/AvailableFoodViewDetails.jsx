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









// onClick={() => handleDelete(details._id)} 













