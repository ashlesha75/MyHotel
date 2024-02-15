
'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


const Dishes = () => {
   
    return (
        <div>
            <div className="flex items-center text-gray-800 mb-2 font-sans">
                <div className="p-4 w-full">
                <p className=' text-gray-800 mb-2 font-sans font-semibold'>Trending Dishes</p>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-gradient-to-r bg-white shadow-md rounded p-4 whitespace-nowrap">
                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl ">
                                    <Image
                                        src={`/dish.png`}
                                        className=" object-cover rounded-md"
                                        alt='logo' height={60} width={60}
                                    />
                                </div>
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-sm text-white font-medium"></div>
                                    <div className="font-bold text-sm text-white">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-12 sm:col-span-6 md:col-span-3">

                            <div className="flex flex-row   bg-white shadow-md rounded p-4 whitespace-nowrap">

                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl ">
                                    <Image
                                        src={`/dish.png`}
                                        className=" object-cover rounded-md"
                                        alt='logo' height={60} width={60}
                                    />
                                </div>
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-sm text-white font-medium"></div>
                                    <div className="font-bold text-sm text-white">
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-span-12 sm:col-span-6 md:col-span-3">

                            <div className="flex flex-row bg-white shadow-md rounded p-4 whitespace-nowrap">
                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl ">
                                    <Image
                                        src={`/dish.png`}
                                        className="object-cover rounded-md"
                                        alt='logo' height={60} width={60}
                                    />
                                </div>
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-sm text-white whitespace-nowrap font-medium"></div>
                                    <div className="font-bold text-sm text-white">
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-span-12 sm:col-span-6 md:col-span-3">

                            <div className="flex flex-row bg-white shadow-md rounded p-4 whitespace-nowrap">
                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl ">
                                    <Image
                                        src={`/dish.png`}
                                        className="object-cover rounded-md"
                                        alt='logo' height={60} width={60}
                                    />
                                </div>
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-sm text-white font-medium"></div>
                                    <div className="font-bold text-sm text-white">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dishes;