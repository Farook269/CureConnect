import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FaPlus, FaMinus } from "react-icons/fa";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is CureConnect?",
      answer:
        "CureConnect is a platform that helps users manage healthcare appointments, access doctors, and stay organized with their health records. It simplifies the process of finding trusted healthcare professionals and booking consultations efficiently.",
    },
    {
      question: "How does CureConnect work?",
      answer:
        "Users can browse verified healthcare professionals, book appointments easily, and keep track of their medical history in one place. The platform provides seamless integration with various healthcare services to enhance accessibility and convenience.",
    },
    {
      question: "Can I reschedule or cancel my appointment?",
      answer:
        "Currently, you can book appointments. Future updates will include options to reschedule or cancel appointments based on the doctor's availability. Users will also receive notifications regarding any changes to their bookings.",
    },
    {
      question: "Is CureConnect free to use?",
      answer:
        "Yes, CureConnect is free for users to book appointments. Some features, such as premium consultations, health tracking, and advanced analytics, may require a subscription in the future.",
    },
    {
      question: "How can I find the best doctor for my needs?",
      answer:
        "CureConnect allows users to filter doctors based on specialty, experience, patient reviews, and availability. You can read verified patient feedback and select a healthcare professional that best fits your medical requirements.",
    },
    {
      question: "What types of doctors are available on CureConnect?",
      answer:
        "CureConnect provides access to a wide range of healthcare professionals, including general physicians, dermatologists, cardiologists, pediatricians, gynecologists, dentists, and more. The platform ensures that all doctors are verified and meet professional standards.",
    },
    {
      question: "Is my medical data secure on CureConnect?",
      answer:
        "Yes, we prioritize user privacy and data security. CureConnect uses end-to-end encryption and follows industry-standard security measures to protect patient information from unauthorized access.",
    },
    {
      question: "Do I need health insurance to use CureConnect?",
      answer:
        "No, CureConnect does not require health insurance to book an appointment. However, some doctors may accept insurance, and you can check their profile for accepted insurance providers.",
    },
    {
      question: "Can I get an online consultation through CureConnect?",
      answer:
        "Yes, CureConnect offers telemedicine services where you can consult with doctors through video or voice calls. This ensures easy access to medical advice without visiting a clinic.",
    },
    {
      question: "How do I contact customer support if I have issues?",
      answer:
        "If you face any issues or have queries, you can reach out to our customer support via email or live chat. Our support team is available 24/7 to assist you with your concerns.",
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-200 to-pink-300 min-h-screen p-6 text-gray-900">
      <div className="text-center text-3xl pt-10 font-bold">
        <p>
          ABOUT <span className="text-gray-700">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-xl border-4 border-white"
          src={assets.about_image}
          alt="About CureConnect"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg">
          <p>
            Welcome to <b className="text-gray-700">CureConnect</b>, your reliable partner in simplifying healthcare management. We make it easy to manage appointments, health records, and connect with the right healthcare professionals.
          </p>
          <p>
            At CureConnect, we aim to provide seamless access to doctors, quick appointment bookings, and organized health records, ensuring you’re supported throughout your healthcare journey.
          </p>
          <b className="text-gray-700">Our Vision</b>
          <p>
            We strive to revolutionize healthcare by fostering stronger connections between patients and providers. Our goal is to make healthcare more accessible, timely, and transparent.
          </p>
        </div>
      </div>

      <div className="text-2xl my-4 text-center font-bold">
        <p>WHY CHOOSE <span className="text-gray-700">CURECONNECT</span></p>
      </div>

      <div className="bg-white text-gray-900 shadow-xl rounded-lg p-6 max-w-3xl mx-auto">
        <div className="text-center text-2xl my-6 font-bold">
          <p>FREQUENTLY ASKED QUESTIONS</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-200 to-purple-300">
              <button 
                className="w-full text-left p-4 font-medium bg-blue-400 hover:bg-blue-500 flex justify-between items-center transition-all duration-300 text-white"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? <FaMinus className="text-white" /> : <FaPlus className="text-white" />}</span>
              </button>
              <div className={`transition-max-height duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 p-4 text-gray-900 bg-white' : 'max-h-0 opacity-0 overflow-hidden'}`}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;