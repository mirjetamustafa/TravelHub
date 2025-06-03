import { RiStarSFill } from 'react-icons/ri'
import { IoPersonOutline } from 'react-icons/io5'
import { TiStarFullOutline } from 'react-icons/ti'
import { CiStar } from 'react-icons/ci'

const Travelers = () => {
  return (
    <div className="pt-15">
      <h1 className="text-3xl font-bold text-center">What Our Travelers Say</h1>
      <div className="flex justify-center mt-3">
        <RiStarSFill className="text-yellow-500" size={30} />
        <RiStarSFill className="text-yellow-500" size={30} />
        <RiStarSFill className="text-yellow-500" size={30} />
        <RiStarSFill className="text-yellow-500" size={30} />
        <RiStarSFill className="text-yellow-500" size={30} />
        <p className="font-semibold mt-1 text-gray-700 text-lg mx-3">
          4.9/5 from 10,000+ reviews
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 p-9">
        <div className="bg-white rounded-md shadow-sm p-5 m-3">
          <div className="flex justify-between">
            <IoPersonOutline
              size={50}
              className="bg-gray-100 rounded-full p-2"
            />
            <h1 className="text-xl font-semibold">Sarah Johnson</h1>
            <div className="flex">
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
            </div>
          </div>
          <div className="pl-24 pr-15">
            <p className="text-gray-500 text-sm ">
              Amazing trip to Paris! The hotel booking was seamless and the
              location was perfect.
            </p>
            <p className="text-sm mt-2 font-semibold text-blue-600">
              Paris, France
            </p>
          </div>
          <div className="p-5">
            <img
              src="https://www.chooseparisregion.org/sites/default/files/news/6---Tour-Eiffel_AdobeStock_644956457_1920_72dpi.jpg"
              alt="Paris, France"
              className="rounded-md"
            />
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm p-5 m-3">
          <div className="flex justify-between">
            <IoPersonOutline
              size={50}
              className="bg-gray-100 rounded-full p-2"
            />
            <h1 className="text-xl font-semibold">Mike Chen</h1>
            <div className="flex">
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <CiStar size={30} className="text-gray-400" />
            </div>
          </div>
          <div className="pl-28 pr-15">
            <p className="text-gray-500 text-sm ">
              Great flight deals and easy booking process. Saved me hundreds on
              my Tokyo trip.
            </p>
            <p className="text-sm mt-2 font-semibold text-blue-600">
              Tokyo, Japan
            </p>
          </div>
          <div className="p-5">
            <img
              src="https://images.squarespace-cdn.com/content/v1/53b3d458e4b001dd36b270ee/1626106996740-RKSW6VQKT0M6OKQL76OJ/unsplash-image-tUVf65KIVpI.jpg"
              alt="Paris, France"
              className="rounded-md"
            />
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm p-5 m-3">
          <div className="flex justify-between">
            <IoPersonOutline
              size={50}
              className="bg-gray-100 rounded-full p-2"
            />
            <h1 className="text-xl font-semibold">Emma Rodriguez</h1>
            <div className="flex">
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
              <TiStarFullOutline size={30} className="text-yellow-500" />
            </div>
          </div>
          <div className="pl-24 pr-15">
            <p className="text-gray-500 text-sm ">
              Amazing trip to Paris! The hotel booking was seamless and the
              location was perfect.
            </p>
            <p className="text-sm mt-2 font-semibold text-blue-600">
              Paris, France
            </p>
          </div>
          <div className="p-5">
            <img
              src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/09/roma-1.jpg"
              alt="Paris, France"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travelers
