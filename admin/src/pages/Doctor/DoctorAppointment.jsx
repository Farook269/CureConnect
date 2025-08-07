

import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const DoctorAppointment = () => {
  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className='w-full max-w-6xl m-5 p-5 rounded-lg' style={{ background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)' }}>
      <p className='mb-3 text-lg font-medium text-white'>All Appointments</p>
      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll shadow-lg'>
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2.5fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b bg-gradient-to-r from-blue-400 to-purple-500 text-white'>
          <p>#</p>
          <p>Patient Details</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fee</p>
          <p>Action</p>
        </div>

        {appointments.slice().reverse().map((item, index) => (
          <div
            className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2.5fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-100'
            key={index}
          >
            <p className='max-sm:hidden'>{index + 1}</p>

            {/* Patient Details */}
            <div>
              <div className='flex items-center gap-2'>
                <img className='w-8 h-8 rounded-full' src={item.userData.image} alt='' />
                <p className='font-medium'>{item.userData.name}</p>
              </div>
              <p className='text-xs text-blue-400 ml-10'>{item.userData.phone}</p>
              <p className='text-xs text-gray-500 ml-10'>
                {item.userData.address?.line1} {item.userData.address?.line2}
              </p>
            </div>

            {/* Payment */}
            <div>
              <p className='text-xs inline border border-primary px-2 rounded-full'>
                {item.payment ? 'Online' : 'CASH'}
              </p>
            </div>

            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            <p>{currency}{item.amount}</p>

            {/* Actions */}
            {item.cancelled ? (
              <p className='text-red-400 text-xs font-medium'>Cancelled</p>
            ) : item.isCompleted ? (
              <p className='text-green-500 text-xs font-medium'>Completed</p>
            ) : (
              <div className='flex gap-1'>
                <img onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer' src={assets.cancel_icon} alt='' />
                <img onClick={() => completeAppointment(item._id)} className='w-8 cursor-pointer' src={assets.tick_icon} alt='' />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointment;







// import React, { useContext, useEffect } from 'react';
// import { DoctorContext } from '../../context/DoctorContext';
// import { assets } from '../../assets/assets';
// import { AppContext } from '../../context/AppContext';

// const DoctorAppointment = () => {
//   const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext);
//   const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

//   useEffect(() => {
//     if (dToken) {
//       getAppointments();
//     }
//   }, [dToken]);

//   return (
//     <div className='w-full max-w-6xl m-5 p-5 rounded-lg' style={{ background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)' }}>
//       <p className='mb-3 text-lg font-medium text-white'>All Appointments</p>
//       <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll shadow-lg'>
//         <div className='max-sm:hidden grid grid-cols-[0.5fr_2.5fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b bg-gradient-to-r from-blue-400 to-purple-500 text-white'>
//           <p>#</p>
//           <p>Patient Details</p>
//           <p>Payment</p>
//           <p>Age</p>
//           <p>Date & Time</p>
//           <p>Fee</p>
//           <p>Action</p>
//         </div>

//         {appointments.slice().reverse().map((item, index) => (
//           <div 
//             className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2.5fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-100' 
//             key={index}
//           >
//             <p className='max-sm:hidden'>{index + 1}</p>

//             {/* Patient Name + Phone */}
//             <div>
//               <div className='flex items-center gap-2'>
//                 <img className='w-8 h-8 rounded-full' src={item.userData.image} alt='' />
//                 <p className='font-medium'>{item.userData.name}</p>
//               </div>
//               <p className='text-xs text-blue-400 ml-10'>{item.userData.phone}</p>
//             </div>

//             <div>
//               <p className='text-xs inline border border-primary px-2 rounded-full'>
//                 {item.payment ? 'Online' : 'CASH'}
//               </p>
//             </div>

//             <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
//             <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
//             <p>{currency}{item.amount}</p>

//             {item.cancelled ? (
//               <p className='text-red-400 text-xs font-medium'>Cancelled</p>
//             ) : item.isCompleted ? (
//               <p className='text-green-500 text-xs font-medium'>Completed</p>
//             ) : (
//               <div className='flex gap-1'>
//                 <img onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer' src={assets.cancel_icon} alt='' />
//                 <img onClick={() => completeAppointment(item._id)} className='w-8 cursor-pointer' src={assets.tick_icon} alt='' />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorAppointment;
