import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const ErrorPage = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-screen bg-[#FCC0C5]"
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5 }}
        >
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-700 mb-4">Looks like you have stumbled upon a page that does not exist.</p>
            <p className="text-lg text-gray-700 mb-4">Do not worry, let,s get you back on track:</p>
            <Link
                to="/"
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
            >
                Go Home
            </Link>
        </motion.div>
    );
};

export default ErrorPage;