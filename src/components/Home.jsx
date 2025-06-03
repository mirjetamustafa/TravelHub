import React from 'react'
import Table from './Table'
import Map from './Map'
import Travelers from './Travelers'
import { TiStarOutline } from 'react-icons/ti'

const Home = () => {
  return (
    <main>
      <section className="bg-linear-to-r from-blue-600 to-purple-700 w-full mb-9 p-9 text-white">
        <h1 className="font-bold md:text-5xl text-4xl text-center mt-15">
          Discover Your Next Adventure
        </h1>
        <p className="text-center text-xl mt-9 max-md:mx-9">
          Search and book flights, hotels, and tours all in one place
        </p>

        <Table />
      </section>

      <section className="mt-15 mb-10 text-center">
        <h1 className="text-3xl max-md:mx-15 font-bold">
          Explore Popular Destinations
        </h1>
        <p className="mt-3 text-gray-500 max-md:mx-19 text-lg">
          Click on the markers to discover amazing places around the world
        </p>
      </section>

      <section className="mb-5">
        <Map />
      </section>

      <section className="bg-gray-50 w-full mt-15">
        <Travelers />
      </section>

      <section className="my-15">
        <h1 className="text-3xl font-bold text-center">
          Why Choose TravelHub?
        </h1>
        <div className="grid justify-items-center md:grid-cols-3 grid-cols-1 mt-15">
          <div className="ml-10">
            <TiStarOutline
              size={50}
              className=" bg-blue-100 text-blue-600 rounded-full p-2 ml-50 font-bold"
            />
            <h1 className="text-xl font-bold mt-4 text-center">Best Prices</h1>
            <div className="mx-20 mt-3">
              <p className="text-gray-500 text-center">
                Compare prices from hundreds of providers to get the best deals
              </p>
            </div>
          </div>

          <div className="ml-10 max-md:mt-9">
            <TiStarOutline
              size={50}
              className=" bg-green-100 text-green-600 rounded-full p-2 ml-50 font-bold"
            />
            <h1 className="text-xl font-bold mt-4 text-center">Easy Booking</h1>
            <div className="mx-20 mt-3">
              <p className="text-gray-500 text-center">
                Simple, secure booking process with instant confirmation
              </p>
            </div>
          </div>

          <div className="ml-10 max-md:mt-9">
            <TiStarOutline
              size={50}
              className=" bg-purple-100 text-purple-600 rounded-full p-2 ml-50 font-bold"
            />
            <h1 className="text-xl font-bold mt-4 text-center">24/7 Support</h1>
            <div className="mx-20 mt-3">
              <p className="text-gray-500 text-center">
                Get help whenever you need it with our round-the-clock support
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
