import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.jpg'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './website_logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import carousel_profile1 from './carousel_profile1.jpeg'
import carousel_profile2 from './carousel_profile2.webp'
import carousel_profile3 from './carousel_profile3.jpeg'
import carousel_img1 from './carousel_img1.png'
import carousel_img2 from './carousel_img2.png'
import carousel_img3 from './carousel_img3.png'

import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.png'
import Gastroenterologist from './Gastroenterologist.jpg'
import General_physician from './General_physician.png'
import Gynecologist from './Gynecologist.png'
import Neurologist from './Neurologist.png'
import Pediatricians from './Pediatricians.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    carousel_profile1,
    carousel_profile2,
    carousel_profile3,
    carousel_img1,
    carousel_img2,
    carousel_img3

}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Sharma',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '8 Years',
        about: 'Dr. Rajesh Sharma specializes in general medicine with expertise in preventive healthcare and early diagnosis of diseases.',
        fees: 500,
        address: {
            line1: 'Connaught Place',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Sneha Iyer',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD (Gynecology)',
        experience: '6 Years',
        about: 'Dr. Sneha Iyer provides expert care in women’s health, maternity, and reproductive health issues.',
        fees: 700,
        address: {
            line1: 'Brigade Road',
            line2: 'Bengaluru, India'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Ananya Mukherjee',
        image: doc3,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '4 Years',
        about: 'Dr. Ananya Mukherjee specializes in skin, hair, and nail treatments, including cosmetic dermatology.',
        fees: 600,
        address: {
            line1: 'Salt Lake City',
            line2: 'Kolkata, India'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Ravi Menon',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '10 Years',
        about: 'Dr. Ravi Menon is a trusted pediatrician providing quality care for infants and children.',
        fees: 550,
        address: {
            line1: 'Anna Nagar',
            line2: 'Chennai, India'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Meera Desai',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '12 Years',
        about: 'Dr. Meera Desai specializes in neurological disorders, including epilepsy and stroke management.',
        fees: 900,
        address: {
            line1: 'Nariman Point',
            line2: 'Mumbai, India'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Karan Verma',
        image: doc6,
        speciality: 'Dermatologist',
        degree: 'MBBS, MS (Ortho)',
        experience: '7 Years',
        about: 'Dr. Karan Verma is an expert in joint replacements and sports injury treatments.',
        fees: 750,
        address: {
            line1: 'Sector 18',
            line2: 'Noida, India'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Pooja Nair',
        image: doc7,
        speciality:  'General Physician',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Dr. Pooja Nair focuses on comprehensive medical care and lifestyle-based disease prevention.',
        fees: 450,
        address: {
            line1: 'Hitech City',
            line2: 'Hyderabad, India'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Manish Gupta',
        image: doc8,
        speciality: 'Dermatologist',
        degree: 'MBBS, DM (Cardiology)',
        experience: '15 Years',
        about: 'Dr. Manish Gupta is a renowned cardiologist with expertise in heart diseases and preventive cardiology.',
        fees: 1200,
        address: {
            line1: 'Sector 11',
            line2: 'Gurgaon, India'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ritu Kapoor',
        image: doc9,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD (Psychiatry)',
        experience: '9 Years',
        about: 'Dr. Ritu Kapoor provides mental health support, including therapy for anxiety and depression.',
        fees: 700,
        address: {
            line1: 'Bandra West',
            line2: 'Mumbai, India'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Prakash Reddy',
        image: doc10,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MS (ENT)',
        experience: '8 Years',
        about: 'Dr. Prakash Reddy specializes in ear, nose, and throat treatments, including sinus surgery and hearing loss care.',
        fees: 500,
        address: {
            line1: 'Begumpet',
            line2: 'Hyderabad, India'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Neha Agarwal',
        image: doc11,
        speciality: 'Dermatologist',
        degree: 'BDS, MDS',
        experience: '6 Years',
        about: 'Dr. Neha Agarwal offers expert dental care, including cosmetic dentistry and root canal treatments.',
        fees: 400,
        address: {
            line1: 'Lajpat Nagar',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Vishal Bhardwaj',
        image: doc12,
        speciality: 'Dermatologist',
        degree: 'MBBS, DM (Oncology)',
        experience: '14 Years',
        about: 'Dr. Vishal Bhardwaj specializes in cancer treatment and chemotherapy, providing patient-focused care.',
        fees: 1500,
        address: {
            line1: 'Rajajinagar',
            line2: 'Bengaluru, India'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Sanjay Tripathi',
        image: doc13,
        speciality: 'Dermatologist',
        degree: 'MBBS, MCh (Urology)',
        experience: '10 Years',
        about: 'Dr. Sanjay Tripathi provides expert care for kidney stones, urinary tract infections, and prostate issues.',
        fees: 800,
        address: {
            line1: 'Kothrud',
            line2: 'Pune, India'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Alok Ranjan',
        image: doc14,
        speciality: 'General Physician',
        degree: 'MBBS, DM (Endocrinology)',
        experience: '11 Years',
        about: 'Dr. Alok Ranjan is a specialist in diabetes and hormonal disorders, providing personalized treatments.',
        fees: 850,
        address: {
            line1: 'Park Street',
            line2: 'Kolkata, India'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Simran Kaur',
        image: doc15,
        speciality: 'General Physician',
        degree: 'MBBS, MS (Ophthalmology)',
        experience: '9 Years',
        about: 'Dr. Simran Kaur specializes in vision correction, cataract surgeries, and LASIK procedures.',
        fees: 600,
        address: {
            line1: 'Sector 22',
            line2: 'Chandigarh, India'
        }
    }
];
