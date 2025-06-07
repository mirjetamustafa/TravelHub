import { TiStarFullOutline } from 'react-icons/ti'
import city from '../assets/city1.png'
import { FaRegClock } from 'react-icons/fa6'
import { BsPeople } from 'react-icons/bs'
import { LuCalendar } from 'react-icons/lu'

const FindTours = ({ tours }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 mx-5 mb-5 ">
      {tours.map((tour, index) => (
        <div key={index} className="bg-white shadow-md rounded-md m-3">
          <div className="flex">
            <img
              src={tour.img}
              alt=""
              className="rounded-l-md w-60 h-130 max-md:h-150"
            />
            <div className="mt-1">
              <div className="flex m-5">
                <h1 className="text-xl font-semibold">{tour.name}</h1>
                <p className="flex mt-3 font-semibold">
                  <TiStarFullOutline className="text-yellow-400 mt-1 mr-1" />
                  {tour.rating}
                </p>
              </div>
              <p className="text-sm text-gray-500 mx-5">
                ({tour.reviews} reviews)
              </p>
              <p className="text-sm text-gray-500 mx-5 mt-3">
                {tour.description}
              </p>
              <p className="flex text-sm text-gray-500 mx-5 mt-3">
                <FaRegClock className="mr-2 mt-1" />
                {tour.hours} hours
              </p>
              <p className="flex text-sm text-gray-500 mx-5 mt-3">
                <BsPeople className="mr-2 mt-1" />
                Max {tour.guests} people
              </p>
              <p className="flex text-sm text-gray-500 mx-5 mt-3">
                <LuCalendar className="mr-2 mt-1" />
                Next available: {tour.nextTour}
              </p>
              <div className="mx-5">
                <h1 className="text-lg font-semibold mt-3">Includes</h1>
                <ul className="list-disc marker:text-blue-500 mx-5">
                  <li className="text-sm text-gray-700">{tour.includes1}</li>
                  <li className="text-sm text-gray-700">{tour.includes2}</li>
                  <li className="text-sm text-gray-700">{tour.includes3}</li>
                  {tour.includes4 && (
                    <li className="text-sm text-gray-700">{tour.includes4}</li>
                  )}
                </ul>
              </div>

              <div className="flex justify-between m-5">
                <div className="">
                  <p className="text-lg font-bold text-blue-600">
                    ${tour.price}
                  </p>
                  <p className="text-sm text-gray-500 -mt-1.5">/person</p>
                </div>
                <button className="bg-blue-600 text-white font-bold cursor-pointer px-3 py-2 mx-5 rounded-md hover:bg-blue-700">
                  Book Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FindTours
