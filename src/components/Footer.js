import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white">
            <div className="container mx-auto">
                {/* Main footer content */}
                <div className="flex items-center justify-between ">
                    {/* Logo section - left aligned */}
                    <div className="flex items-center bg-white">
                        <img src={require('../assets/img/SOne_index_logo.png')} alt="S-One Logo" className="h-16" />
                    </div>

                    {/* Copyright section - right aligned */}
                    <div>
                        <span className="text-sm justify-start">Copyright © 2014</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;