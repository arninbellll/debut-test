import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import Flag from "react-world-flags";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const location = useLocation();
    const navItems = [
        { name: "Product & Services", path: "/" },
        { name: "Promotions", path: "/promotions" },
        { name: "News & Events", path: "/news-events" },
        { name: "Safety Tips", path: "/safety-tips" },
        { name: "FAQs", path: "/faqs" },
        { name: "Location", path: "/location" },
    ];

    return (
        <div className="w-full  bg-white">
            <div className="flex container justify-between items-center p-2  mx-auto">
                <div>
                    <img src={require('../assets/img/SOne_index_logo.png')} alt="S-One Logo" className="h-18" />
                </div>
                <div className="">
                    <div className="flex flex-col items-baseline max-w-md mx-auto">
                        <div className="flex items-center gap-4 mb-3 self-end">
                            <Flag code="th" className="w-6 h-6" />
                            <Flag code="us" className="w-6 h-6" />
                        </div>
                        <div className="relative w-full mb-3">
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 pl-3 pr-8 w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                aria-label="Search"
                            >
                                <FaSearch />
                            </button>
                        </div>
                        <nav className="w-full text-xs">
                            <div className="flex justify-center space-x-1">
                                <Link to="/" className="text-gray-700 hover:underline hover:text-blue-600 px-2">About S-ONE</Link>
                                <span className="text-gray-400">|</span>
                                <Link to="/" className="text-gray-700 hover:underline hover:text-blue-600 px-2">Job Opportunity</Link>
                                <span className="text-gray-400">|</span>
                                <Link to="/" className="text-gray-700 hover:underline hover:text-blue-600 px-2">Contact Us</Link>
                                <span className="text-gray-400">|</span>
                                <Link to="/location" className="text-gray-700 hover:underline hover:text-blue-600 px-2">Site Map</Link>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* <div>
                    <div className="flex items-center gap-2">
                        <Flag code="th" className="w-6 h-6" />
                        <Flag code="us" className="w-6 h-6" />
                        <div className="relative">
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-1 pl-2 focus:outline-none"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="absolute right-1 top-2 text-gray-500">
                                <FaSearch />
                            </button>

                        </div>
                        <div className="flex justify-center space-x-4 text-xs p-2">
                            <a href="#" className="text-gray-700 hover:underline">About S-ONE</a>|
                            <a href="#" className="text-gray-700 hover:underline">Job Opportunity</a>|
                            <a href="#" className="text-gray-700 hover:underline">Contact Us</a>|
                            <a href="#" className="text-gray-700 hover:underline">Site Map</a>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="bg-black text-white  mx-auto py-2 ">
                <div className="container flex justify-between items-center p-2 mx-auto">
                    <div className="flex justify-start  space-x-4 text-sm font-medium">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="flex items-center gap-1 cursor-pointer group no-underline"
                            >
                                <IoIosPlay
                                    className={`transition-colors duration-200 ${ location.pathname === item.path
                                            ? "text-orange-500 group-hover:text-orange-600"
                                            : "text-white group-hover:text-orange-600"
                                        }`}
                                />
                                <span
                                    className={`transition-colors duration-200 ${ location.pathname === item.path
                                            ? "text-orange-500 group-hover:text-orange-600"
                                            : "text-white group-hover:text-orange-600"
                                        }`}
                                >
                                    {item.name}
                                </span>
                            </Link>
                        ))}

                    </div>
                    <div className="flex justify-center space-x-4 p-2">
                        <FaFacebook className="text-gray-500 text-lg cursor-pointer hover:text-blue-600" />
                        <FaTwitter className="text-gray-500 text-lg cursor-pointer hover:text-blue-300" />
                        <FaYoutube className="text-gray-500 text-lg cursor-pointer hover:text-red-600" />
                    </div>
                </div>
            </div>
        </div>
    );
}
