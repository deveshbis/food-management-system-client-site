
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const FoodDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {

        fetch(`https://food-master-murex.vercel.app/singleDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    }, [id]);
    return (
        // <div className="mt-20">
        //     <section className='mt-24 px-5'>
        //         <div className="mb-3 mt-4">
        //             <div className='flex justify-between lg:flex-row md:flex-row flex-col items-center  mb-3'>
        //                 <div className="container flex flex-col px-4 space-y-3 mb-5">
        //                     <h1 className=" mt-2 lg:mt-4 text-xl font-bold lg:text-6xl">{details.foodName}</h1>
        //                     <p className='flex gap-3 mt-2 lg:mt-4 text-lg sm:mb-12'>
        //                     </p>
        //                 </div>
        //                 <div className="bg-black text-white p-3 gap-2 rounded-xl">
        //                     <h5 className="text-3xl text-white font-extrabold">{details.donator ? details.donator.name : ''}</h5>
        //                     <hr />
        //                     <h5 className="text-xl text-white">{details.pickupLocation}</h5>
        //                 </div>
        //             </div>
        //                 <img src={details.foodImage} alt="" className="w-full lg:h-[600px] mx-auto dark:bg-gray-500 rounded-lg shadow-md " />


        //             <div className="mt-5">
        //                 <button className="btn btn-outline">Available</button>
        //             </div>
        //             <div>
        //                 <h4 className="text-2xl font-bold mt-3 mb-2">Location</h4>
        //                 <p data-aos="flip-left" data-aos-duration="3000">{details.pickupLocation}</p>
        //             </div>
        //             <div>
        //                 <h4 className="text-2xl font-bold mt-3 mb-2">Description</h4>
        //                 <p data-aos="zoom-in" data-aos-duration="3000">{details.additionalNotes}</p>
        //             </div>
        //             <div className="flex flex-wrap justify-center gap-5 mt-3" data-aos="flip-right" data-aos-duration="3000">
        //                 <h1 className="relative inline-block px-4 py-2 font-medium group">
        //                     <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        //                     <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        //                     <span className="relative text-black group-hover:text-white">Quantity: {details.quantity}</span>
        //                 </h1>

        //                 <h1 className="relative inline-block px-4 py-2 font-medium group" data-aos="flip-left" data-aos-duration="3000">
        //                     <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        //                     <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        //                     <span className="relative text-black group-hover:text-white">Expired: {details.expiredDateTime} Days</span>
        //                 </h1>
        //             </div>
        //         </div>
        //     </section>
        // </div>
        <div className="font-sans bg-gray-700 mt-20">
            <div className="p-4 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="bg-gray-800 px-4 py-12 rounded-xl">
                            <img src={details.foodImage} alt="Product" className=" mx-auto" />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-semibold text-white">{details.foodName} | {details.pickupLocation}</h2>

                        <div className="flex space-x-2 mt-4">
                            <svg className="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-[18px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <h4 className="text-white text-base">500 Reviews</h4>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <p className="text-white text-4xl font-semibold">$12</p>
                            <p className="text-gray-400 text-base"><strike>$16</strike> <span className="text-sm ml-1">Tax included</span></p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button type="button" className="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded">Buy now</button>
                            <button type="button" className="min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent text-yellow-300 text-sm font-semibold rounded">Add to cart</button>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-white">About the {details.foodName}</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-white">
                                {details.additionalNotes}
                            </ul>
                        </div>

                        <div className="mt-8">
                            <ul className="flex">
                                <li className="text-white font-semibold text-sm bg-gray-800 py-3 px-8 border-b-2 border-yellow-300 cursor-pointer transition-all">
                                    Reviews</li>
                                <li className="text-white font-semibold text-sm py-3 px-8 cursor-pointer">Sellter</li>
                            </ul>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-white">Reviews(10)</h3>

                                <div className="space-y-3 mt-4">
                                    <div className="flex items-center">
                                        <p className="text-sm text-white font-semibold">5.0</p>
                                        <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-2/3 h-full rounded bg-yellow-300"></div>
                                        </div>
                                        <p className="text-sm text-white font-semibold ml-3">66%</p>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-sm text-white font-semibold">4.0</p>
                                        <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-1/3 h-full rounded bg-yellow-300"></div>
                                        </div>
                                        <p className="text-sm text-white font-semibold ml-3">33%</p>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-sm text-white font-semibold">3.0</p>
                                        <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-1/6 h-full rounded bg-yellow-300"></div>
                                        </div>
                                        <p className="text-sm text-white font-semibold ml-3">16%</p>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-sm text-white font-semibold">2.0</p>
                                        <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-1/12 h-full rounded bg-yellow-300"></div>
                                        </div>
                                        <p className="text-sm text-white font-semibold ml-3">8%</p>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-sm text-white font-semibold">1.0</p>
                                        <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-[6%] h-full rounded bg-yellow-300"></div>
                                        </div>
                                        <p className="text-sm text-white font-semibold ml-3">6%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start mt-8">
                                <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />

                                <div className="ml-3">
                                    <h4 className="text-sm font-semibold text-white">John Doe</h4>
                                    <div className="flex space-x-1 mt-1">
                                        <svg className="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <p className="text-xs !ml-2 font-semibold text-white">2 mins ago</p>
                                    </div>
                                    <p className="text-xs mt-4 text-white">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                </div>
                            </div>

                            <button type="button" className="w-full mt-8 px-4 py-2.5 bg-transparent border border-yellow-300 text-yellow-300 font-semibold rounded">Read all reviews</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;