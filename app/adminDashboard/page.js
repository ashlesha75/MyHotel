
'use client'


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Square from '../components/square';
import Navbar from '../components/Navbar';
import Dount from '../components/Donut';
import Barchart from '../components/Barchart'
import Linechart from '../components/Linechart';
import Dishes from '../components/Dishes';
import Wave from '../components/Wave';

const AdminDashboard = () => {
  const [lowStockItems, setLowStockItems] = useState([]);

  useEffect(() => {
    const fetchLowStockData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/item/low-stock'); // Replace with your actual API endpoint
        const data = response.data;
        console.log(data);
        setLowStockItems(data);
      } catch (error) {
        console.error('Error fetching low stock data:', error);
      }
    };

    fetchLowStockData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className=' bg-slate-50'>
      <>
        <Navbar />
        <Square />

        <div className='flex justify-between'>
          {/* Donut Chart */}
          <div className=" container-fluid bg-white shadow-md sm:w-96 md:w-1/2 lg:w-1/3 text-center lg:ml-3.5 rounded-md">
            <Dount />
          </div>

          {/* Line Chart */}
          <div className=" container-fluid bg-white shadow-md sm:w-96 md:w-1/2 lg:w-3/5 text-center mx-auto 
          lg:ml-8 rounded-md">
            <Wave />
          </div>
        </div>
        <div className=''>
          <Dishes />
        </div>
        <div className='flex'>
          <p className=' ml-6 text-gray-800 mb-2 font-sans font-semibold'>low Stock Items</p>
          <p className=' ml-52 text-gray-800 mb-2 font-sans font-semibold'>Vendor Pending Amount</p>
        </div>
        <div className='flex'>
          <div className="container-fluid bg-white shadow-md lg:w-60 lg:h-72 mb-4 text-center mx-auto lg:ml-5 rounded-md">
            <div className=''>
              {lowStockItems.length > 0 ? (
               <ul>
              <li className='border-t-2 mx-auto text-left ml-3 flex justify-between font-semibold'>
          <span>Items</span>
          <span className='mr-6 text-gray-600'>Qty</span>
        </li>
               {lowStockItems.map((item, index) => (
                 <li className='border-t text-left ml-3 flex justify-between font-medium text-gray-600' key={index}>
                   <span>{item.itemName}</span>
                   <span className='mr-8 text-gray-600'>{item.stockQty}</span>
                 </li>
               ))}
             </ul>
              ) : (
                <p className='mt-2 text-medium font-medium'>No low stock items found.</p>
              )}
            </div>
          </div>
          <div className="container-fluid bg-white shadow-md lg:w-72 lg:h-72 mb-4 text-center mr-96 rounded-md">
          </div>
        </div>
      </>
    </div>
  );
}

export default AdminDashboard;
