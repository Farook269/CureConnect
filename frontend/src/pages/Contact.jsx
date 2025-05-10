import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-200 to-pink-300 min-h-screen p-6 text-gray-900">
      <div className="text-center text-3xl pt-10 font-bold">
        <p>
          CONTACT <span className="text-gray-700">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 items-center md:items-start">
        <img
          className="w-full md:max-w-[400px] rounded-lg shadow-xl border-4 border-white"
          src={assets.contact_image}
          alt="Contact CureConnect"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg bg-white bg-opacity-90 p-6 rounded-xl shadow-2xl">
          <p className="font-semibold text-xl text-gray-700">Our OFFICE</p>
          <p className="text-gray-600">
            RGUKT, RK Valley <br />
            Idupulapaya, Kadapa District
          </p>
          <p className="text-gray-600">
            <b>Phone:</b> +91 7396260107 <br />
            <b>Email:</b> support@CureConnect.com
          </p>
          <p className="font-semibold text-xl text-gray-700">
            Careers at CureConnect
          </p>
          <p className="text-gray-600">
            Learn more about our teams and job openings.
          </p>
        <a href='https://medicaljob.in/' target='_blank' rel='noopener noreferrer'> 
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md">
            Explore Jobs
          </button>
        </a>  
        </div>
      </div>
    </div>
  );
};

export default Contact;