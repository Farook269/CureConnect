












import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../../../frontend/src/assets/assets.js";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll rounded-lg p-4">
        <div className="hidden sm:grid grid-cols-[0.5fr_4fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b text-white">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {appointments.slice().reverse().map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_4fr_1fr_3fr_3fr_1fr_1fr] items-center text-white py-3 px-6 border-b hover:bg-opacity-80 hover:bg-blue-400 rounded-lg"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>

            {/* Patient Name + Phone + Address */}
            <div>
              <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-full" src={item.userData.image} alt="" />
                <p className="font-medium">{item.userData.name}</p>
              </div>
              <p className="text-xs text-blue-200 ml-10">{item.userData.phone}</p>
              {/* Address */}
              {item.userData.address && (
                <p className="text-xs text-blue-100 ml-10">
                  {item.userData.address.line1}
                  {item.userData.address.line2 ? ` ${item.userData.address.line2}` : ""}
                </p>
              )}
            </div>

            <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>
            <p>
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>

            {/* Doctor */}
            <div className="flex items-center gap-2">
              <img className="w-8 h-8 rounded-full bg-gray-200" src={item.docData.image} alt="" />
              <p>{item.docData.name}</p>
            </div>

            <p>
              {currency}
              {item.amount}
            </p>

            {/* Actions */}
            {item.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <img
                onClick={() => cancelAppointment(item._id)}
                className="w-5 bg-red-300 cursor-pointer"
                src={assets.cross_icon}
                alt=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;









// import React, { useContext, useEffect } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { AppContext } from "../../context/AppContext";
// import { assets } from "../../../../frontend/src/assets/assets.js";

// const AllAppointments = () => {
//   const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
//   const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

//   useEffect(() => {
//     if (aToken) {
//       getAllAppointments();
//     }
//   }, [aToken]);

//   return (
//     <div className="w-full max-w-6xl m-5">
//       <p className="mb-3 text-lg font-medium">All Appointments</p>

//       <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll rounded-lg p-4">
//         <div className="hidden sm:grid grid-cols-[0.5fr_4fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b text-white">
//           <p>#</p>
//           <p>Patient</p>
//           <p>Age</p>
//           <p>Date & Time</p>
//           <p>Doctor</p>
//           <p>Fees</p>
//           <p>Actions</p>
//         </div>

//         {appointments.slice().reverse().map((item, index) => (
//           <div
//             className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_4fr_1fr_3fr_3fr_1fr_1fr] items-center text-white py-3 px-6 border-b hover:bg-opacity-80 hover:bg-blue-400 rounded-lg"
//             key={index}
//           >
//             <p className="max-sm:hidden">{index + 1}</p>
            
//             {/* Patient Name + Phone */}
//             <div>
//               <div className="flex items-center gap-2">
//                 <img className="w-8 h-8 rounded-full" src={item.userData.image} alt="" />
//                 <p className="font-medium">{item.userData.name}</p>
//               </div>
//               <p className="text-xs text-blue-200 ml-10">{item.userData.phone}</p>
              
//             </div>

//             <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>
//             <p>
//               {slotDateFormat(item.slotDate)}, {item.slotTime}
//             </p>

//             {/* Doctor */}
//             <div className="flex items-center gap-2">
//               <img className="w-8 h-8 rounded-full bg-gray-200" src={item.docData.image} alt="" />
//               <p>{item.docData.name}</p>
//             </div>

//             <p>
//               {currency}
//               {item.amount}
//             </p>

//             {/* Actions */}
//             {item.cancelled ? (
//               <p className="text-red-400 text-xs font-medium">Cancelled</p>
//             ) : item.isCompleted ? (
//               <p className="text-green-500 text-xs font-medium">Completed</p>
//             ) : (
//               <img
//                 onClick={() => cancelAppointment(item._id)}
//                 className="w-5 bg-red-300 cursor-pointer"
//                 src={assets.cross_icon}
//                 alt=""
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllAppointments;
