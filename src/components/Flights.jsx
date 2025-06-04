import React from 'react'
import Table from './Table'

const Flights = () => {
  return (
    <main>
      <section className="bg-blue-600 w-full mb-9 p-9 text-white">
        <h1 className="font-bold md:text-4xl text-3xl mt-15">
          Find Your Perfect Flight
        </h1>

        <Table />
      </section>
      <section className="mt-9">
        <div className="flex justify-between px-9 py-5">
          <div className="">
            <h1 className="text-xl font-bold">3 flights found</h1>
          </div>
          <form action="">
            <select className="outline outline-gray-400 rounded-md py-2 px-5 w-full text-gray-700">
              <option>Sort by Price</option>
              <option>Sort by Duration</option>
              <option>Sort by Rating</option>
            </select>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Flights
