// import React from 'react';
// import { assets } from '../assets/assets';

// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>

//             {/* ----------Left Section------------ */}
//             <div>
//                 <img className='mb-5 w-40' src={assets.logo} alt="Company Logo" />
//                 <p className='w-full md:w-2/3 text-gray-600 leading-6'>
//                     Your health is our priority. We connect you with top-rated doctors for 
//                     seamless appointments, expert consultations, and a hassle-free healthcare experience.  
//                     Trusted by thousands for quality and convenience.
//                 </p>
//             </div>

//             {/* ----------Center Section------------ */}
//             <div>
//                 <p className='text-xl font-medium mb-5'>Explore</p>
//                 <ul className='flex flex-col gap-2 text-gray-600'>
//                     <li>🏡 Home</li>
//                     <li>📖 About Us</li>
//                     <li>📞 Contact Us</li>
//                     <li>🔒 Privacy Policy</li>
//                 </ul>
//             </div>

//             {/* ----------Right Section------------ */}
//             <div>
//                 <p className='text-xl font-medium mb-5'>Get in Touch</p>
//                 <ul className='flex flex-col gap-2 text-gray-600'>
//                     <li>📞 +91 7396260107</li>
//                     <li>📩 support@doctorconnect.com</li>
//                     <li>📍 RGUKT,RKVALLEY </li>
//                 </ul>
//             </div>
//         </div>

//         {/* ----------------Copy Right Text---------------- */}
//         <div>
//             <hr />
//             <p className='py-5 text-sm text-center text-gray-500'>
//                 © 2025 <strong>CureConnect</strong>. Your Health, Our Priority.
//             </p>
//         </div>
//     </div>
//   );
// }

// export default Footer;

import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="md:mx-10 mt-16 bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 rounded-t-3xl shadow-lg">

      <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-10 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">

        {/* ----------Left Section------------ */}
        <div>
          <img className="mb-5 w-44 drop-shadow-lg" src={assets.logo} alt="Company Logo" />
          <p className="w-full md:w-3/4 text-gray-700 leading-7 text-sm">
            Your health is our priority. Connect with top-rated doctors for seamless
            appointments, expert consultations, and a hassle-free healthcare experience.
            Trusted by thousands for quality and convenience.
          </p>
        </div>

        {/* ----------Center Section------------ */}
        <div>
          <p className="text-2xl font-bold mb-5 text-gray-800">Explore</p>
          <ul className="flex flex-col gap-4 text-gray-600">
            <li className="hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer">🏡 Home</li>
            <li className="hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer">📖 About Us</li>
            <li className="hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer">📞 Contact Us</li>
            <li className="hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer">🔒 Privacy Policy</li>
          </ul>
        </div>

        {/* ----------Right Section------------ */}
        <div>
          <p className="text-2xl font-bold mb-5 text-gray-800">Get in Touch</p>
          <ul className="flex flex-col gap-4 text-gray-600">
            <li className="hover:text-indigo-600 transition-all cursor-pointer">📞 +91 7396260107</li>
            <li className="hover:text-indigo-600 transition-all cursor-pointer">📩 support@doctorconnect.com</li>
            <li className="hover:text-indigo-600 transition-all cursor-pointer">📍 RGUKT, RK Valley</li>
          </ul>

          {/* ----------Social Icons------------ */}
{/* ----------Social Icons------------ */}
{/* ----------Social Icons------------ */}
<div className="flex gap-4 mt-6">
  <a 
    href="https://www.facebook.com/CureConnectOfficial" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-pink-500 transition-all text-2xl transform hover:scale-110"
  >
    <FaFacebookF />
  </a>

  <a 
    href="https://twitter.com/CureConnectCare" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-pink-500 transition-all text-2xl transform hover:scale-110"
  >
    <FaTwitter />
  </a>

  <a 
    href="https://www.instagram.com/CureConnect_Health" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-pink-500 transition-all text-2xl transform hover:scale-110"
  >
    <FaInstagram />
  </a>

  <a 
    href="https://wa.me/917396260107" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-green-500 transition-all text-2xl transform hover:scale-110"
  >
    <FaWhatsapp />
  </a>
</div>

        </div>
      </div>

      {/* ----------Copyright------------ */}
      <div className="border-t border-gray-300 mt-5">
        <p className="py-5 text-xs text-center text-gray-500">
          © 2025 <strong>CureConnect</strong>. Your Health, Our Priority.
        </p>
      </div>
    </div>
  );
};

export default Footer;
