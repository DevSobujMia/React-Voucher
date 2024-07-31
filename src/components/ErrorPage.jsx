import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <svg
                className="w-24 h-24 mb-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636a9 9 0 11-12.728 0A9 9 0 0118.364 5.636zM9 12h.01M15 12h.01M9 16h6"
                ></path>
            </svg>
            <h2 className="text-6xl text-center mb-6 text-white font-extrabold drop-shadow-lg">Oops !!</h2>
            <p className="text-2xl text-white">Page not found</p>
            <p className="text-xl my-4 text-white animate-bounce">Go Back</p>
            <Link to='/'>
                <button className="bg-white text-2xl font-bold m-2 py-3 px-6 rounded-lg border border-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
