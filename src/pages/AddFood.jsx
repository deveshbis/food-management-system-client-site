// import { Navigate } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
// import Swal from "sweetalert2";


// const AddFood = () => {
//     const { user, loading } = useAuth();

//     if (loading) {
//         return <div className="flex justify-center items-center mt-48 mb-48">
//             <span className="loading loading-infinity loading-lg"></span>
//         </div>
//     }

//     if (!user) {
//         return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
//     }

//     const handleAddFood = event => {
//         event.preventDefault();

//         const form = event.target;

//         const foodImage = form.foodImage.value;
//         const foodName = form.foodName.value;
//         const foodQuantity = form.foodQuantity.value;
//         const pickupLocation = form.pickupLocation.value;
//         const expiredDate = form.expiredDate.value;
//         const additionalNotes = form.additionalNotes.value;
//         const foodStatus = 'available';

//         const donatorImage = user.donatorImage;
//         const email = user.email;
//         const name = user.displayName;

//         const newFood = { foodImage, foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus, 
//             donatorImage,  
//             email, name }

//         console.log(newFood);
//         fetch('https://food-master-murex.vercel.app/userData', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newFood)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.insertedId) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'User Added successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     })
//                 }
//             })


//     }
//     return (
//         <div className="hero min-h-screen mt-20 ">
//                 <div className="hero-content flex-col border border-solid border-black bg-[#FCC0C5]">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Add a Food</h1>
//                     </div>
//                     <div className="card shrink-0 lg:w-full ">
//                         <form onSubmit={handleAddFood} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text font-bold">Image</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="foodImage"
//                                     placeholder="Image url"
//                                     className="input input-bordered"
//                                     required
//                                 />
//                             </div>
//                             <div className="lg:flex md:flex md:gap-5 lg:gap-10">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text font-bold">Food Name</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="foodName"
//                                         placeholder="Food Name"
//                                         className="input input-bordered"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text font-bold">Food Quantity</span>
//                                     </label>
//                                     <input
//                                         type="number"
//                                         name="foodQuantity"
//                                         placeholder="foodQuantity"
//                                         className="input input-bordered"
//                                         required
//                                     />
//                                 </div>

//                             </div>
//                             <div className="lg:flex md:flex md:gap-5 lg:gap-10">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text font-bold">Pickup Location</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="pickupLocation"
//                                         placeholder="Enter location"
//                                         className="input input-bordered"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text font-bold">Additional Notes</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="additionalNotes"
//                                         placeholder="Enter additional Notes"
//                                         className="input input-bordered"
//                                         required
//                                     />
//                                 </div>

//                             </div>
//                             <div className="lg:flex md:flex md:gap-5 lg:gap-20">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text font-bold">Expired Date</span>
//                                     </label>
//                                     <input
//                                         type="date"
//                                         name="expiredDate"
//                                         placeholder=" Expired Date"
//                                         className="input input-bordered"
//                                         required
//                                     />
//                                 </div>


//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn bg-[#BF4C41] text-white hover:bg-black">Add Food</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//     );
// };

// export default AddFood;






import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";


const AddFood = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="flex justify-center items-center mt-48 mb-48">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    const handleAddFood = event => {
        event.preventDefault();

        const form = event.target;

        const foodImage = form.foodImage.value;
        const foodName = form.foodName.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDate = form.expiredDate.value;
        const additionalNotes = form.additionalNotes.value;
        const foodStatus = 'available';

        const email = user.email;


        const newFood = {
            foodImage, foodName, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus,
            postOwner: {
                email,
                name: user?.displayName,
                donatorImage: user?.donatorImage,
            },
        }

        console.log(newFood);
        fetch(`https://food-master-murex.vercel.app/userData`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }
    return (
        <div className="hero min-h-[calc(100vh-72px)] mt-20 ">
            <div className="hero-content flex-col border border-solid border-black bg-[#FCC0C5]">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add a Food</h1>
                </div>
                <div className="card shrink-0 lg:w-full ">
                    <form onSubmit={handleAddFood} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Image</span>
                            </label>
                            <input
                                type="text"
                                name="foodImage"
                                placeholder="Image url"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="lg:flex md:flex md:gap-5 lg:gap-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Food Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="foodName"
                                    placeholder="Food Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Food Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    name="foodQuantity"
                                    placeholder="foodQuantity"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                        </div>
                        <div className="lg:flex md:flex md:gap-5 lg:gap-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Pickup Location</span>
                                </label>
                                <input
                                    type="text"
                                    name="pickupLocation"
                                    placeholder="Enter location"
                                    className="input input-bordered"
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
                        <div className="lg:flex md:flex md:gap-5 lg:gap-20">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Expired Date</span>
                                </label>
                                <input
                                    type="date"
                                    name="expiredDate"
                                    placeholder=" Expired Date"
                                    className="input input-bordered"
                                    required
                                />
                            </div>


                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#BF4C41] text-white hover:bg-black">Add Food</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;

