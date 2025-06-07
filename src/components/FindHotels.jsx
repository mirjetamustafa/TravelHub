import { RiStarSFill } from 'react-icons/ri'
import { GrLocation } from 'react-icons/gr'
import { IoPersonOutline } from 'react-icons/io5'
import { TiStarFullOutline } from 'react-icons/ti'
import { CiStar } from 'react-icons/ci'
import { FaWifi } from 'react-icons/fa'
import { PiCarProfileBold } from 'react-icons/pi'
import { MdOutlineRestaurant } from 'react-icons/md'
import { LuBuilding } from 'react-icons/lu'

const FindHotels = ({ hotels }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1  pb-9">
      {hotels.map((hotel, index) => (
        <div key={index} className="bg-white rounded-xl mx-5 shadow-md my-5">
          <div className="relative">
            <span className="absolute flex right-0 bg-white rounded-sm px-2 py-1 m-3">
              <TiStarFullOutline className="text-yellow-400 mt-1 mr-1" />{' '}
              {hotel.rating}
            </span>
            <img
              src={hotel.img}
              className="w-full rounded-t-xl"
              alt="Hotel 1"
            />
          </div>
          <h1 className="text-xl font-semibold mt-5 mx-5">{hotel.name}</h1>
          <span className="flex mx-5 text-gray-500 mt-1">
            <GrLocation className="mt-1 mr-1" />
            {hotel.location}
          </span>
          <div className="flex mx-5 mt-1">
            <TiStarFullOutline className="text-yellow-400 mt-1" />
            <TiStarFullOutline className="text-yellow-400 mt-1" />
            <TiStarFullOutline className="text-yellow-400 mt-1" />
            <TiStarFullOutline className="text-yellow-400 mt-1" />
            <CiStar className="mt-1 text-gray-400" />
            <span className="mx-1.5 text-sm text-gray-500">
              ({hotel.reviews})
            </span>
          </div>
          <p className="text-sm text-gray-500 mx-5 mt-3">{hotel.description}</p>
          <div className="grid md:grid-cols-4 grid-cols-3 mx-5 my-4 ">
            <p className="bg-gray-100 flex text-xs pl-3 py-2.5 rounded-md mr-1">
              <FaWifi className="mt-0.5 mr-1" />
              {hotel.wifi}
            </p>
            {hotel.parking && (
              <p className="bg-gray-100 flex text-xs pl-3 pt-2.5 rounded-md mr-1">
                <PiCarProfileBold className="mt-0.5 mr-1" size={17} />
                {hotel.parking}
              </p>
            )}
            {hotel.gym && (
              <p className="bg-gray-100 flex text-xs pl-3 py-2.5 rounded-md mr-1">
                <LuBuilding className="mt-0.5 mr-1" size={15} />
                {hotel.gym}
              </p>
            )}
            {hotel.restaurant && (
              <p className="bg-gray-100 flex text-xs pl-3 py-2.5 rounded-md mr-1">
                <MdOutlineRestaurant className="mt-0.5 mr-1" />
                {hotel.restaurant}
              </p>
            )}
            {hotel.pool && (
              <p className="bg-gray-100 flex text-xs pl-3 py-2 rounded-md mr-1 mt-1">
                <LuBuilding className="mt-0.5 mr-1" size={15} />
                {hotel.pool}
              </p>
            )}
            {hotel.bar && (
              <p className="bg-gray-100 flex text-xs pl-3 py-2 rounded-md mr-1 mt-1">
                <LuBuilding className="mt-0.5 mr-1" size={15} />
                {hotel.bar}
              </p>
            )}
            {hotel.business && (
              <p className="bg-gray-100 flex text-xs py-2 rounded-md mr-1 mt-1">
                <LuBuilding className="" size={15} />
                {hotel.business}
              </p>
            )}
          </div>
          <div className="flex justify-between mb-5">
            <p className="flex text-blue-600 text-2xl font-bold mx-5">
              ${hotel.price}
              <span className="text-sm text-gray-500 font-normal mt-2 mx-1">
                /night
              </span>
            </p>
            <button className="bg-blue-600 text-white font-bold py-2 px-3 rounded-md mr-6 mb-3 cursor-pointer hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FindHotels
