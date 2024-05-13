import { useState } from "react";
import AvailableFoodCard from "../components/AvailableFoodCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const AvailabeFood = () => {

    // const [cards, setCards] = useState([]);
    const [sort, setSort] = useState('');
    const [searchText, setSearchText] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`https://food-master-murex.vercel.app/userData?sort=${sort}&search=${searchText}`);
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             setCards(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, [ sort, searchText]);

    


    const { data: cards = [], isLoading } = useQuery({
        queryFn: () => fetchData(),
        queryKey: ['manageMyFood'],
      })

      const fetchData = async () => {
        const { data } = await axios(`https://food-master-murex.vercel.app/userData?sort=${sort}&search=${searchText}`)
        return data;
      }

    const handleSearch = e => {
        e.preventDefault();
        setSearchText(e.target.value);
    };

    if (isLoading) return <p>Data is still loading......</p>
    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between mt-20'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>

                    <form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                name='search'
                                placeholder='Enter Food Name'
                                
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                    <div>
                        <select
                            onChange={e => {
                                setSort(e.target.value)
                            }}
                            value={sort}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md'
                        >
                            <option value=''>Expired Date</option>
                            <option value='dsc'>Descending Order</option>
                            <option value='asc'>Ascending Order</option>
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
                    {cards.map(card => (
                        <AvailableFoodCard key={card._id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AvailabeFood;




