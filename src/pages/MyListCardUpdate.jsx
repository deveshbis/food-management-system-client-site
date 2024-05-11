import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const MyListCardUpdate = () => {
    const { id } = useParams();
    const [update, setUpdate] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/updateData/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdate(data);
            });
    }, [id]);

    const handleUpdateFood = event => {
        event.preventDefault();

        const form = event.target;

        const foodImage = form.foodImage.value;
        const foodName = form.foodName.value;
        const foodQuantity = form.foodQuantity.value;
        const expiredDate = form.expiredDate.value;

        const updateFood = { foodImage, foodName, foodQuantity, expiredDate };

        fetch(`http://localhost:5000/updateData/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)
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
    };


    return (
        <div className="hero min-h-screen mt-20 ">
            <div className="hero-content flex-col border border-solid border-black bg-[#FCC0C5]">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Food</h1>
                </div>
                <div className="card shrink-0 lg:w-full ">
                    <form onSubmit={handleUpdateFood} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Image</span>
                            </label>
                            <input
                                type="text"
                                name="foodImage"
                                placeholder="Image url"
                                // defaultValue={update.foodImage}
                                defaultValue={update.foodImage}
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
                                    // value={update.foodName}
                                    defaultValue={update.foodName}
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
                                    // value={update.foodQuantity}
                                    defaultValue={update.foodQuantity}
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
                                    // value={update.expiredDate}
                                    defaultValue={update.expiredDate}
                                    className="input input-bordered"
                                    required
                                    
                                />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#BF4C41] text-white hover:bg-black">Update Food</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyListCardUpdate;
