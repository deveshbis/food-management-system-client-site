import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const MyListCardUpdate = () => {
    const { id } = useParams();
    const [update, setUpdate] = useState({});


    useEffect(() => {

        fetch(`https://food-master-murex.vercel.app/updateData/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdate(data)
            })
    }, [id]);

    const { foodImage, foodName, expiredDate, additionalNotes, foodQuantity, pickupLocation
    } = update;


    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;


        const foodImage = form.querySelector("#foodImage").value;
        const foodName = form.querySelector("#foodName").value;
        const pickupLocation = form.querySelector("#location").value;
        const expiredDate = form.querySelector("#expiredDate").value;
        const foodQuantity = form.querySelector("#foodQuantity").value;
        const additionalNotes = form.querySelector("#additionalNotes").value;

        const updateData = {
            foodImage,
            foodName,
            pickupLocation,
            expiredDate,
            foodQuantity,
            additionalNotes

        };
        console.log(updateData);
        fetch(`https://food-master-murex.vercel.app/updateData/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });

                }
            });
    }


    return (
        <div className="mt-20">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update Food</h1>
                    </div>
                    <div className="card shrink-0 w-full bg-base-100">
                        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                            <form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
                                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                                    <div className="space-y-2 col-span-full lg:col-span-1">
                                        <p className="font-medium">Update Food</p>
                                        <p className="text-xs">Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories.</p>
                                    </div>
                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="firstname" className="text-sm">Food Images</label>
                                            <input id="foodImage" type="text" placeholder="foodImage" defaultValue={foodImage} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="lastname" className="text-sm">Food Name</label>
                                            <input id="foodName" type="text" placeholder="foodName" defaultValue={foodName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full">
                                            <label htmlFor="address" className="text-sm">Address</label>
                                            <input id="location" type="text" placeholder="" defaultValue={pickupLocation} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="city" className="text-sm">Expired Date</label>
                                            <input id="expiredDate" type="text" placeholder="" defaultValue={expiredDate} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="state" className="text-sm">Food Quantity</label>
                                            <input id="foodQuantity" type="number" placeholder="" defaultValue={foodQuantity} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full">
                                            <label htmlFor="bio" className="text-sm">Additional Notes</label>
                                            <textarea id="additionalNotes" placeholder="" defaultValue={additionalNotes} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                                        </div>
                                    </div>

                                </fieldset>
                                <button className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">update</button>

                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyListCardUpdate;