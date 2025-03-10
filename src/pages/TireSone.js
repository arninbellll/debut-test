import React, { useState } from "react";

const TireSearch = () => {
    const [selectedImage, setSelectedImage] = useState(require('../assets/img/SOne_index_banner.jpg')); // Replace with actual image paths
    const thumbnails = [
        require('../assets/img/SOne_index_pic01.jpg'),
        require("../assets/img/SOne_index_pic02.jpg"),
        require("../assets/img/SOne_index_pic3.jpg"),
    ];
    const imagePairs = [
        { default: require('../assets/img/SOne_index_bt-tire.jpg'), hover: require('../assets/img/SOne_index_bt-tire1.jpg') },
        { default: require('../assets/img/SOne_index_bt-break.jpg'), hover: require('../assets/img/SOne_index_bt-break1.jpg') },
        { default: require('../assets/img/SOne_index_bt-battery.jpg'), hover: require('../assets/img/SOne_index_bt-battery1.jpg') },
        { default: require('../assets/img/SOne_index_bt-chokeup.jpg'), hover: require('../assets/img/SOne_index_bt-chokeup1.jpg') },
        { default: require('../assets/img/SOne_index_bt-oil.jpg'), hover: require('../assets/img/SOne_index_bt-oil1.jpg') },
        { default: require('../assets/img/SOne_index_bt-guarantee.jpg'), hover: require('../assets/img/SOne_index_bt-guarantee1.jpg') },
    ];
    const [hoveredIndices, setHoveredIndices] = useState({});

    const handleMouseEnter = (index) => {
        setHoveredIndices(prev => ({ ...prev, [index]: true }));
    };

    const handleMouseLeave = (index) => {
        setHoveredIndices(prev => ({ ...prev, [index]: false }));
    };


    return (
        <div className="container max-w-md mx-auto">
            <div className="flex flex-col md:flex-row text-white p-2">
                <div className="  w-full md:w-1/4 rounded-sm">
                    <div className="bg-orange-600 p-2 rounded-t-lg">
                        <h2 className="text-lg font-bold ">ค้นหายาง</h2>
                    </div>
                    <div className="bg-black bg-[url(assets/img/SOne_index_bg_searchtype.jpg)]  bg-no-repeat bg-cover w-full p-3 rounded-b-lg">
                        <div className="mb-2 ml-24">
                            <label className="block text-sm">หน้ากว้าง</label>
                            <select className="w-full p-2 form-select-sm bg-gray-800 border border-gray-700 rounded">
                                <option>--เลือกหน้ากว้าง--</option>
                            </select>
                        </div>
                        <div className="mb-2 ml-24">
                            <label className="block text-sm">ซีรี่ย์</label>
                            <select className="w-full p-2 form-select-sm bg-gray-800 border border-gray-700 rounded">
                                <option>--เลือกซีรี่ย์--</option>
                            </select>
                        </div>
                        <div className="mb-2 ml-24">
                            <label className="block text-sm">กระทะล้อ</label>
                            <select className="w-full p-2 form-select-sm bg-gray-800 border border-gray-700 rounded">
                                <option>--เลือกกระทะล้อ--</option>
                            </select>
                        </div>
                        <button className="w-full bg-orange-500 py-2 mt-3 rounded font-bold">
                            ค้นหา
                        </button>
                    </div>
                </div>

                <div className="flex-1 p-0 ml-1 flex ">
                    <div className="flex-grow  relative"
                        style={{
                            backgroundImage: `url(${selectedImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <div className="w-20 flex flex-col items-end gap-2">
                            <button
                                className="absolute top-2 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                                aria-label="Previous image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                            <button
                                className="absolute bottom-2 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                                aria-label="Next image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-16 right-4">
                                {thumbnails.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`w-20 h-16  rounded-md cursor-pointer ${selectedImage === img ? "border-2 border-orange-500" : ""
                                            }`}
                                        onClick={() => setSelectedImage(img)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-6xl p-2">
                <div className="grid grid-cols-6 gap-4">
                    {imagePairs.map((pair, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-md"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <img
                                src={hoveredIndices[index] ? pair.hover : pair.default}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white text-black p-2">
                <div className="w-full md:w-1/4">
                    <div className="bg-orange-600 p-2 rounded-t-lg">
                        <h2 className="text-lg font-bold text-white">ค้นหาศูนย์บริการใกล้บ้านคุณ</h2>
                    </div>
                    <div className="bg-black  p-3 text-white rounded-b-lg ">
                        <div className="mb-2 flex items-center justify-end">
                            <label className="text-sm w-20 text-right mr-2">จังหวัด</label>
                            <select className="p-2 w-48 bg-gray-800 form-select-sm border border-gray-700 rounded">
                                <option>--เลือกจังหวัด--</option>
                            </select>
                        </div>
                        <div className="mb-2 flex items-center justify-end">
                            <label className="text-sm w-20 text-right mr-2">เขต/อำเภอ</label>
                            <select className="p-2 w-48 bg-gray-800 form-select-sm border border-gray-700 rounded">
                                <option>--เลือกเขต/อำเภอ--</option>
                            </select>
                        </div>
                        <div className="mb-2 flex items-center justify-end">
                            <label className="text-sm w-20 text-right mr-2">ถนน</label>
                            <select className="p-2 w-48 bg-gray-800 form-select-sm border border-gray-700 rounded">
                                <option>--เลือกถนน--</option>
                            </select>
                        </div>
                        <p className="text-xs text-center text-red-400">หมายเหตุ: กรุณาเลือกอย่างใดอย่างหนึ่ง</p>
                        {/* Search Button */}
                        <button className="w-full bg-orange-500 py-2 mt-3 rounded font-bold">
                            ค้นหา
                        </button>
                    </div>
                </div>
                <div className="flex-1 p-4 rounded-md">
                    <h2 className="text-lg font-bold">News & Events</h2>
                    <div className="grid grid-cols-3 gap-2  border-2 border-orange-500 ">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-gray-200 p-2 rounded ">
                                <div className="relative">
                                    <img src={require('../assets/img/SOne_index_pic01.jpg')} alt="News" className="w-full rounded" />
                                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs">
                                        19 NOV 2014
                                    </div>
                                </div>
                                <p className="text-sm mt-2">ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม</p>
                                <p className="text-sm mt-2">ข่าวใหม่!! ข่าวและ</p>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full max-w-xs">
                    {/* Safety Tips Box */}
                    <div className="bg-gray-800 text-white rounded-md overflow-hidden mb-4">
                        <div className="flex items-start p-4">
                            {/* Cartoon Character with Tire */}
                            <div className="flex-shrink-0 w-24">
                                <img
                                    src={require('../assets/img/SOne_index_tips1.png')}
                                    alt="S-One Mascot"
                                    className="w-full"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex-grow pl-3">
                                <h2 className="text-orange-500 text-lg font-bold">Safety Tips</h2>
                                <div className="mt-2 relative">
                                    <span className="text-gray-500 text-4xl absolute -left-2 top-0">"</span>
                                    <p className="text-xs pl-4 pr-2">
                                        ควรเติมน้ำมันตอนเช้า<br />
                                        ขณะที่อุณหภูมิบนพื้น<br />
                                        ดินยังเย็นอยู่
                                    </p>
                                    <span className="text-gray-500 text-4xl absolute right-0 bottom-0">"</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="mb-4 flex items-center">
                        <h2 className="text-sm font-bold">สมัครรับข่าวสาร</h2>
                        <div class="input-group input-group-sm mb-3">
                            <input type="email" class="form-control  w-48 " placeholder="กรุณาใส่อีเมล์" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            <button class="btn btn-outline-secondary bg-orange-500" type="button" id="button-addon1">Go</button>
                        </div>
                    </div>
                  
                    <div className="text-center">
                        <p className="text-2xl font-bold text-gray-800 tracking-widest">
                            02-888-8888
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TireSearch;
