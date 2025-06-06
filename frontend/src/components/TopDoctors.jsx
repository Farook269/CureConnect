import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10">
      <h1 className="text-3xl font-medium">Connect with Top-Rated Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Browse our curated list of trusted healthcare professionals and book your appointment with ease. Your health is our priority.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
          onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0) }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-blue-50 w-full h-40 object-cover" src={item.image} alt="" />
            <div className="p-4">
              <div className={`flex items-center gap-2 text-sm text-center${item.available ? 'text-green-500':'text-gray-500'} `}>
                <p className={`w-2 h-2 ${item.available ? 'bg-green-500':'bg-gray-500'} rounded-full`}></p> 
                <p> {item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('/doctors');
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;










// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Doctors = () => {
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const navigate = useNavigate();
//   const { doctors } = useContext(AppContext);

//   useEffect(() => {
//     if (speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality.trim() === speciality.trim()));
//     } else {
//       setFilterDoc(doctors);
//     }
//   }, [doctors, speciality]);

//   return (
//     <div className="flex flex-col md:flex-row-reverse gap-10 mt-8">  
//       <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filterDoc.map((item) => (
//           <div
//             onClick={() => navigate(`/appointment/${item._id}`)}
//             className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300"
//             key={item._id}
//           >
//             <div className="bg-blue-50 w-full h-64 flex justify-center items-center">
//               <img className="w-auto h-full object-contain" src={item.image} alt={item.name} />
//             </div>
//             <div className="p-4">
//               <div className="flex items-center gap-2 text-sm text-green-500">
//                 <p className="w-2 h-2 bg-green-500 rounded-full"></p> 
//                 <p>Available</p>
//               </div>
//               <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//               <p className="text-gray-600 text-sm">{item.speciality}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Doctors;

