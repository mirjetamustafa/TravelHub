import { LuPlane } from 'react-icons/lu'
import { TiStarFullOutline } from 'react-icons/ti'
import { CiClock2 } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa'

const SkyFlights = ({ flights }) => {
  return (
    <div className="">
      {flights.map((flights, index) => (
        <div
          key={index}
          className="bg-white shadow-sm rounded-md w-full h- px-9 py-5 my-5"
        >
          <div className="flex">
            <LuPlane className="text-blue-600 mt-1" size={23} />
            <h1 className="text-xl font-semibold mx-1">{flights.name}</h1>
            <p className="flex text-gray-400 text-sm mt-2 mx-1">
              <TiStarFullOutline className="text-yellow-400 mx-1" size={20} />
              <span>{flights.rating}</span>
            </p>
          </div>
          <div className="grid md:flex grid-cols-3 pt-5">
            <div className="w-35">
              <h1 className="text-2xl font-bold">{flights.departure}</h1>
              <p className="text-gray-400 text-sm ml-2.5">{flights.fromAir}</p>
              <p className="text-gray-400 text-sm">{flights.from}</p>
              <div className="flex text-gray-600 mt-3 w-50">
                <CiClock2 size={20} className="mr-1" />
                <p className="text-sm">{flights.time}</p>
                <p className="text-sm mx-1">{flights.flightMode}</p>
              </div>
            </div>
            <div className="flex w-full mt-5">
              <div className="border-b border-gray-300 w-120 h-5"></div>
              <FaArrowRight className="text-gray-400 mt-3 mx-1 max-md:w-50" />
              <div className="border-b border-gray-300 w-120 h-5"></div>
            </div>
            <div className="w-30 mx-6">
              <h1 className="text-2xl font-bold">{flights.arrive}</h1>
              <p className="text-gray-400 text-sm ml-5">{flights.toAir}</p>
              <p className="text-gray-400 text-sm ml-5">{flights.to}</p>
            </div>
            <div className="w-70 ml-4 max-md:text-center max-md:mt-9">
              <h1 className="text-4xl font-bold text-blue-600">
                ${flights.price}
              </h1>
              <p className="text-sm text-gray-400 mx-3">{flights.guest}</p>
              <button className="bg-blue-600 text-white rounded-md mt-5 px-3 py-2 font-bold cursor-pointer hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkyFlights
