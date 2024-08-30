import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const Banner = () => {
    return (
        <div className=''>
            <motion.div
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 5 }}>
                <section
                    className="relative bg-[url(https://beyondtype1.org/wp-content/uploads/2023/01/FAST-FOOD-CHAIN-NUTRITION-GUIDE-HEADER.jpg)] bg-cover bg-center bg-no-repeat"
                >
                    <div
                        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    ></div>

                    <div
                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                    >
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 5 }}>
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Let us find your

                                    <strong className="block font-extrabold text-rose-700"> Delicious Food. </strong>
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 120 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 5 }}>
                                <p className="mt-4 max-w-lg sm:text-xl/relaxed lg:text-white lg:bg-black lg:rounded-xl lg:p-5">
                                    Browse our diverse selection of fresh produce, pantry staples, and gourmet treats to elevate your culinary experience at home.

                                </p>
                            </motion.div>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <Link to='/availableFoods'
                                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                >
                                    Get Started
                                </Link>

                                <Link to='/learnMore'
                                    href="#"
                                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>


        </div>

        

    );
};

export default Banner;