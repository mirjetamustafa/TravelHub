import React from 'react'
import { Link } from 'react-router-dom'
import { GrLocation } from 'react-icons/gr'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FiFacebook } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <main className="bg-[#1E3A8A] ">
      <section className="p-9">
        <div className="md:flex justify-between">
          <div className="md:w-150">
            <h1 className="text-2xl font-bold text-white">TravelHub</h1>
            <p className="text-blue-200 mr-30">
              Discover the world with TravelHub. We offer the best travel
              experiences for adventurers around the globe.
            </p>
          </div>
          <div className="md:w-120 max-md:mt-9">
            <h1 className="text-xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <form action="" className="mt-3">
              <div className="relative">
                <input
                  type="text"
                  className="bg-[#1E40AF] rounded-md pr-13 pl-5 py-2 text-white placeholder:text-gray-400 outline-0"
                  placeholder="Your email address"
                />
                <button className="absolute bg-[#EAB308] text-[#1E40AF] font-bold rounded-r-md px-3 py-2 cursor-pointer hover:opacity-90">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <hr className="text-blue-700 m-9" />
      <section className="px-9">
        <div className="grid md:grid-cols-4 grid-cols-1 mt-9">
          <div className="">
            <h1 className="text-lg font-semibold text-white">Destinations</h1>
            <ul className="flex flex-col space-y-2 mt-5">
              <Link to={''} className="text-blue-200 hover:text-white">
                Europe
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Asia
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Africa
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                North America
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                South America
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Australia
              </Link>
            </ul>
          </div>

          <div className="max-md:mt-5">
            <h1 className="text-lg font-semibold text-white">Travel Types</h1>
            <ul className="flex flex-col space-y-2 mt-5">
              <Link to={''} className="text-blue-200 hover:text-white">
                Beach Vacations
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Adventure Tours
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                City Breaks
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Cultural Experiences
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Luxury Travel
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Family Trips
              </Link>
            </ul>
          </div>

          <div className="max-md:mt-5">
            <h1 className="text-lg font-semibold text-white">Company</h1>
            <ul className="flex flex-col space-y-2 mt-5">
              <Link to={''} className="text-blue-200 hover:text-white">
                About Us
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Our Team
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Careers
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Blog
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Press
              </Link>
              <Link to={''} className="text-blue-200 hover:text-white">
                Partners
              </Link>
            </ul>
          </div>

          <div className="max-md:mt-5">
            <h1 className="text-lg font-semibold text-white">Contact</h1>
            <div className="flex mt-5">
              <GrLocation className="text-[#EAB308] mt-1" size={20} />
              <p className="text-blue-200 mx-1">
                123 Travel Way, Wanderlust City, 10001
              </p>
            </div>
            <div className="flex mt-5">
              <FiPhone className="text-[#EAB308] mt-1" size={20} />
              <p className="text-blue-200 mx-1">+1 (555) 123-4567</p>
            </div>
            <div className="flex mt-5">
              <MdOutlineMailOutline className="text-[#EAB308] mt-1" size={20} />
              <p className="text-blue-200 mx-1">info@travelhub.com</p>
            </div>

            <h1 className="text-lg font-semibold text-white">Contact</h1>
            <div className="flex mt-4">
              <Link className="bg-[#1E40AF] rounded-full p-3 mr-3 hover:bg-blue-600 transition duration-700">
                <FiFacebook className=" text-white " />
              </Link>
              <Link className="bg-[#1E40AF] rounded-full p-3 mr-3 hover:bg-blue-600 transition duration-700">
                <FaXTwitter className=" text-white " />
              </Link>
              <Link className="bg-[#1E40AF] rounded-full p-3 mr-3 hover:bg-blue-600 transition duration-700">
                <FaInstagram className=" text-white " />
              </Link>
              <Link className="bg-[#1E40AF] rounded-full p-3 mr-3 hover:bg-blue-600 transition duration-700">
                <AiOutlineYoutube className=" text-white " />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="text-blue-700 mx-9 mt-9" />

      <section className="px-9 py-5">
        <div className="flex justify-between">
          <p className="text-blue-200 text-sm">
            © 2025 TravelHub. All rights reserved.
          </p>

          <ul className=" space-x-5">
            <Link className="text-blue-200 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link className="text-blue-200 text-sm hover:text-white">
              Terms of Service
            </Link>
            <Link className="text-blue-200 text-sm hover:text-white">
              Cookie Policy
            </Link>
            <Link className="text-blue-200 text-sm hover:text-white">
              Sitemap
            </Link>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Footer
