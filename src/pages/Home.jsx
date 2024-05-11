import { useState, useEffect } from 'react';
import Banner from "../components/Banner";
import FoodCard from "../components/FoodCard";
import { Link } from 'react-router-dom';

const Home = () => {
    const [featuredFoods, setFeaturedFoods] = useState([]);

    useEffect(() => {
        const fetchFeaturedFoods = async () => {
            try {
                const response = await fetch('http://localhost:5000/featuredFoods');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                const sortedData = data.sort((a, b) => b.quantity - a.quantity);
                setFeaturedFoods(sortedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchFeaturedFoods();
    }, []);

    return (
        <div className="mt-24">
            <Banner></Banner>
            <div className="mt-7 space-y-3">
                <h1 className="text-4xl text-center animate__bounceOut font-extrabold">Featured Foods </h1>
                <p className="text-center pb-10">A selection of delicious dishes showcasing variety, quality, and flavor, catering to diverse tastes and preferences.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:px-5 px-3 ">
                    {featuredFoods
                        .map(aCard =>
                            <FoodCard key={aCard._id} aCard={aCard}>
                            </FoodCard>)}
                </div>
                <div className='flex justify-center'>
                    <Link to="/availableFoods"><button className="btn bg-[#BF4C41] text-white hover:bg-black" >Show All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
