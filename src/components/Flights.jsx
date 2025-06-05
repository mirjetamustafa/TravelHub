import React from 'react'
import Table from './Table'
import SkyFlights from './SkyFlights'

const flights = [
  {
    name: 'SkyLine Airways',
    departure: '8:30',
    arrive: '14:45',
    time: '7h 15m',
    from: 'New York',
    to: 'Paris',
    fromAir: 'JFK',
    toAir: 'CDG',
    flightMode: 'Direct',
    price: '485',
    guest: 'per person',
    rating: 4.2,
  },
  {
    name: 'Global Wings',
    departure: '11:20',
    arrive: '18:30',
    time: '8h 10m',
    from: 'Tokyo',
    to: 'London',
    fromAir: 'HND',
    toAir: 'LCY',
    flightMode: '1 Stop',
    price: '425',
    guest: 'per person',
    rating: 4,
  },
  {
    name: 'Euro Express',
    departure: '16:45',
    arrive: '23:15',
    time: '7h 30m',
    from: 'Rome',
    to: 'New York',
    fromAir: 'FCO',
    toAir: 'JFK',
    flightMode: 'Direct',
    price: '520',
    guest: 'per person',
    rating: 4.5,
  },
  {
    name: 'SkyLine Airways',
    departure: '8:30',
    arrive: '14:45',
    time: '7h 15m',
    from: 'New York',
    to: 'Paris',
    fromAir: 'JFK',
    toAir: 'CDG',
    flightMode: 'Direct',
    price: '485',
    guest: 'per person',
    rating: 4.2,
  },
  {
    name: 'Global Wings',
    departure: '11:20',
    arrive: '18:30',
    time: '8h 10m',
    from: 'Tokyo',
    to: 'London',
    fromAir: 'HND',
    toAir: 'LCY',
    flightMode: '1 Stop',
    price: '425',
    guest: 'per person',
    rating: 4,
  },
  {
    name: 'Euro Express',
    departure: '16:45',
    arrive: '23:15',
    time: '7h 30m',
    from: 'Rome',
    to: 'New York',
    fromAir: 'FCO',
    toAir: 'JFK',
    flightMode: 'Direct',
    price: '520',
    guest: 'per person',
    rating: 4.5,
  },
]

const Flights = () => {
  return (
    <main className="">
      <section className="bg-blue-600 w-full  p-9 text-white">
        <h1 className="font-bold md:text-4xl text-3xl mt-15">
          Find Your Perfect Flight
        </h1>

        <Table />
      </section>

      <section className="pt-9 bg-gray-50">
        <div className="flex justify-between px-9 py-5">
          <div className="">
            <h1 className="text-xl font-bold">
              {flights.length} flights found
            </h1>
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

      <section className="p-9 bg-gray-50 ">
        <SkyFlights flights={flights} />
      </section>
    </main>
  )
}

export default Flights
