import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData, completeAppointment, cancelAppointment } = useContext(DoctorContext);
  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className='m-5 p-5 rounded-lg' style={{ background: 'linear-gradient(135deg, #89f7fe, #66a6ff)' }}>
        <div className='flex flex-wrap gap-3'>
          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded shadow-lg border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <img className='w-14' src={assets.earning_icon} alt='' />
            <div>
              <p className='text-xl font-semibold text-gray-600'>{currency} {dashData.earnings}</p>
              <p className='text-gray-400'>Earnings</p>
            </div>
          </div>

          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded shadow-lg border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <img className='w-14' src={assets.appointments_icon} alt='' />
            <div>
              <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
              <p className='text-gray-400'>Appointments</p>
            </div>
          </div>

          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded shadow-lg border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <img className='w-14' src={assets.patients_icon} alt='' />
            <div>
              <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
              <p className='text-gray-400'>Patients</p>
            </div>
          </div>
        </div>

        <div className='bg-white mt-10 rounded-lg shadow-lg'>
          <div className='flex items-center gap-2.5 px-4 py-4 rounded-t border bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
            <img src={assets.list_icon} alt='' />
            <p className='font-semibold'>Latest Booking</p>
          </div>

          <div className='pt-4 border border-t-0'>
            {dashData.latestAppointments.map((item, index) => (
              <div className='flex items-center py-3 px-6 gap-3 hover:bg-gray-200' key={index}>
                <img className='rounded-full w-10' src={item.userData.image} alt='' />
                <div className='flex-1 text-sm'>
                  <p className='text-gray-800 font-medium'>{item.userData.name}</p>
                  <p className='text-gray-600'>{slotDateFormat(item.slotDate)}</p>
                </div>
                {item.cancelled ? (
                  <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                ) : item.isCompleted ? (
                  <p className='text-green-500 text-xs font-medium'>Completed</p>
                ) : (
                  <div className='flex'>
                    <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt='' />
                    <img onClick={() => completeAppointment(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt='' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;
