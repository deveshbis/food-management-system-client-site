// import { Link, useLoaderData } from "react-router-dom";


// const AvailabeFood = () => {
//     const user = useLoaderData();
//     return (
//         <div className="mt-16">
//             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:px-5 px-3 ">
//                 {user.map((user, index) => (
//                     <div key={index} className="card w-96 bg-base-100  ">
//                         <div className="card bg-base-100 shadow-xl border border-solid border-black space-y-2 p-2 mt-5">
//                             <div className="flex items-center space-x-4">
//                                 <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
//                                 <div className="flex flex-col space-y-1">
//                                     <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{user.name}</a>
//                                 </div>
//                             </div>
//                             <figure><img src={user.foodImage} alt="Foods Loading" className='w-full h-[300px]' /></figure>
//                             <div className="card-body">
//                                 <h2 className="card-title">
//                                     {user.foodName}
//                                     <div className="badge badge-secondary">Quantity: {user.foodQuantity}</div>

//                                 </h2>
//                                 <p>{user.additionalNotes}</p>
//                                 <div className="card-actions justify-end">
//                                     <div className="badge badge-outline">Loacation: {user.pickupLocation}</div>
//                                     <div className="badge badge-outline">Expire: {user.expiredDate}</div>
//                                 </div>
//                                 <div className="card-actions justify-between items-center">
//                                     <Link to={`/food/${user._id}`}><button className="btn bg-[#BF4C41] text-white hover:bg-black" >View Details</button></Link>
//                                     <div className="badge badge-accent">Status: {user.foodStatus}</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default AvailabeFood;








// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// const AvailabeFood = () => {
//     const [userData, setUserData] = useState([]);
//     const [sort, setSort] = useState('');

//     useEffect(() => {
//         fetchData();
//     }, [sort]); // Re-fetch data when sort state changes

//     const fetchData = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/userData?sort=${sort}`);
//             const data = await response.json();
//             setUserData(data);
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }
//     };
//     return (
//         <div className="mt-16">
//             <div className="mt-24">
//                 <select
//                     onChange={e => setSort(e.target.value)}
//                     value={sort}
//                     name='sort'
//                     id='sort'
//                     className='border p-4 rounded-md'
//                 >
//                     <option value=''>Sort By Deadline</option>
//                     <option value='dsc'>Descending Order</option>
//                     <option value='asc'>Ascending Order</option>
//                 </select>
//             </div>
{/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:px-5 px-3 ">
    {userData.map((user, index) => (
        <div key={index} className="card w-96 bg-base-100  ">
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
</div> */}
//         </div>
//     );
// };

// export default AvailabeFood;



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailabeFood = () => {
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`http://localhost:5000/userData?sort=${sort}&search=${search}`);
            const data = await response.json();
            setUserData(data);
        };
        getData();
    }, [search, sort]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(searchText);
        
    };
    console.log(search);

    return (
        <div className="mt-20">
            <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
                <div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
                        <form onSubmit={handleSearch}>
                            <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input
                                    className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                                    type="text"
                                    onChange={(e) => setSearchText(e.target.value)}
                                    value={searchText}
                                    name="search"
                                    placeholder="Enter Job Title"
                                    aria-label="Enter Job Title"
                                />
                                <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                                    Search
                                </button>
                            </div>
                        </form>
                        <div>
                            <select
                                onChange={(e) => setSort(e.target.value)}
                                value={sort}
                                name="sort"
                                id="sort"
                                className="border p-4 rounded-md"
                            >
                                <option value="">Sort By Expired Date</option>
                                <option value="dsc">Descending Order</option>
                                <option value="asc">Ascending Order</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:px-5 px-3 ">
                        {userData && userData.length > 0 ? (
                            userData.map((user, index) => (
                                <div key={index} className="card bg-base-100">
                                    <div className="card bg-base-100 shadow-xl border border-solid border-black space-y-2 p-2 mt-5">
                                        <div className="flex items-center space-x-4">
                                            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                            <div className="flex flex-col space-y-1">
                                                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{user.name}</a>
                                            </div>
                                        </div>
                                        <figure><img src={user.foodImage} alt="Foods Loading" className="w-full h-[300px]" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {user.foodName}
                                                <div className="badge badge-secondary">Quantity: {user.foodQuantity}</div>
                                            </h2>
                                            <p>{user.additionalNotes}</p>
                                            <div className="card-actions justify-end">
                                                <div className="badge badge-outline">Location: {user.pickupLocation}</div>
                                                <div className="badge badge-outline">Expire: {user.expiredDate}</div>
                                            </div>
                                            <div className="card-actions justify-between items-center">
                                                <Link to={`/availableFood/${user._id}`}><button className="btn bg-[#BF4C41] text-white hover:bg-black">View Details</button></Link>
                                                <div className="badge badge-accent">Status: {user.foodStatus}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        ) : (
                            <div>No available food found.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailabeFood;
