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


        <div className="font-[sans-serif] mt-20">
            <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-36"></div>
            <div className="-mt-20 mb-6 px-4">
                <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-lg">
                    <h2 className="text-xl text-gray-800 font-bold">Update My Manage Food</h2>

                    <form onSubmit={handleUpdate} className="mt-8 grid sm:grid-cols-2 gap-6">
                        <div>
                            <input id="foodImage" type="text" placeholder="foodImage" defaultValue={foodImage}
                                className="w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
                        </div>
                        <div>
                            <input id="foodName" type="text" placeholder="foodName" defaultValue={foodName}
                                className="w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
                        </div>
                        <div>
                            <input id="location" type="text" placeholder="" defaultValue={pickupLocation}
                                className="w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
                        </div>
                        <div>
                            <input id="expiredDate" type="text" placeholder="" defaultValue={expiredDate}
                                className="w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
                        </div>
                        <div>
                            <input id="foodQuantity" type="number" placeholder="" defaultValue={foodQuantity}
                                className="w-full rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
                        </div>
                        
                        <div>
                            <textarea placeholder='Message' rows="6"
                            id="additionalNotes" defaultValue={additionalNotes} 
                                className="col-span-full w-full rounded-lg px-4 border border-gray-300 text-sm pt-3 outline-[#007bff]"></textarea>
                        </div>
                        <div className="flex items-center col-span-full">

                        </div>

                        <button type='submit'
                            className="text-white w-max bg-[#007bff] hover:bg-blue-600 rounded-lg text-sm px-6 py-3 mt-4 tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyListCardUpdate;