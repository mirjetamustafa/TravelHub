import React, { useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { FaCalendar } from 'react-icons/fa'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { IoSearch } from 'react-icons/io5'

const Table = () => {
  const [activeBtn, setActiveBtn] = useState('flights')
  return (
    <div className="bg-white rounded-md mt-9 text-gray-600 p-5 mb-15">
      <div className="mt-5">
        <div className="flex max-md:justify-center">
          <button
            className={`px-5 py-2 mx-2 font-semibold  rounded-full cursor-pointer ${
              activeBtn === 'flights'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveBtn('flights')}
          >
            Flights
          </button>

          <button
            className={`font-semibold px-5 py-2 mx-2 rounded-full cursor-pointer ${
              activeBtn === 'hotels'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveBtn('hotels')}
          >
            Hotels
          </button>

          <button
            className={`px-5 py-2 mx-2 font-semibold rounded-full cursor-pointer ${
              activeBtn === 'tours'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveBtn('tours')}
          >
            Tours
          </button>
        </div>
        <div className="">
          {activeBtn === 'flights' ? (
            <div className="mt-5">
              <form className="">
                <div className="grid md:grid-cols-4 grid-cols-1">
                  <div className="mx-2">
                    <label className="font-semibold">To</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <GrLocation size={20} />
                      </span>
                      <input
                        type="text"
                        className="outline outline-gray-300 rounded-md py-2 px-9 w-full"
                        placeholder="Where to?"
                      />
                    </div>
                  </div>

                  <div className="mx-2">
                    <label className="font-semibold">Departure</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <FaCalendar />
                      </span>
                      <input
                        type="date"
                        className="outline outline-gray-300 rounded-md py-2 px-9 w-full appearance-none text-transparent placeholder-transparent"
                      />
                    </div>
                  </div>

                  <div className="mx-2">
                    <label className="font-semibold">Return</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <FaCalendar />
                      </span>
                      <input
                        type="date"
                        className="outline outline-gray-300 rounded-md py-2 px-9 w-full appearance-none text-transparent placeholder-transparent"
                      />
                    </div>
                  </div>

                  <div className="mx-2">
                    <label className="font-semibold">Passengers</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <MdOutlinePeopleAlt />
                      </span>
                      <select class="outline outline-gray-300 rounded-md py-2 px-9 w-full appearance-none text-gray-400 placeholder-transparent">
                        <option>1 Guest</option>
                        <option>2 Guest</option>
                        <option>3 Guest</option>
                        <option>4 Guest</option>
                        <option>5 Guest</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-9">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                      <IoSearch size={20} />
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 font-bold rounded-md px-13 py-2 text-white cursor-pointer">
                      Search Flights
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : activeBtn === 'hotels' ? (
            <div className="mt-5">
              <form className="">
                <div className="grid md:grid-cols-4 grid-cols-1">
                  <div className="mx-2">
                    <label className="font-semibold">Destination</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <GrLocation size={20} />
                      </span>
                      <input
                        type="text"
                        className="outline outline-gray-300 rounded-md py-2 px-9 w-full"
                        placeholder="Where to?"
                      />
                    </div>
                  </div>

                  <div className="mx-2">
                    <label className="font-semibold">Check-in</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <FaCalendar />
                      </span>
                      <input
                        type="date"
                        className="outline outline-gray-300 rounded-md py-2 px-9 w-full appearance-none text-transparent placeholder-transparent"
                      />
                    </div>
                  </div>

                  <div className="mx-2">
                    <label className="font-semibold">Check-out</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <FaCalendar />
                      </span>
                      <input
                        type="date"
                        className="outline outline-gray-300 rounded-md py-2 px-9 w-full appearance-none text-transparent placeholder-transparent"
                      />
                    </div>
                  </div>

                  <div className="mx-2">
                    <label className="font-semibold">Guests</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <MdOutlinePeopleAlt />
                      </span>
                      <select class="outline outline-gray-300 rounded-md py-2 px-9 w-full appearance-none text-gray-400 placeholder-transparent">
                        <option>1 Guest</option>
                        <option>2 Guest</option>
                        <option>3 Guest</option>
                        <option>4 Guest</option>
                        <option>5 Guest</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-9">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                      <IoSearch size={20} />
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 font-bold rounded-md px-13 py-2 text-white cursor-pointer">
                      Search Hotels
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="mt-5">
              <form className="">
                <div className="grid md:grid-cols-4 grid-cols-1">
                  <div className="mx-2">
                    <label className="font-semibold">Destination</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <GrLocation size={20} />
                      </span>
                      <input
                        type="text"
                        className="outline outline-gray-300 rounded-md py-2 px-9 w-full"
                        placeholder="Where to?"
                      />
                    </div>
                  </div>

                  <div className="mx-2">
                    <label className="font-semibold">Check-in</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <FaCalendar />
                      </span>
                      <input
                        type="date"
                        className="outline outline-gray-300 rounded-md py-2 px-9 w-full appearance-none text-transparent placeholder-transparent"
                      />
                    </div>
                  </div>

                  <div className="mx-2">
                    <label className="font-semibold">Check-out</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <FaCalendar />
                      </span>
                      <input
                        type="date"
                        className="outline outline-gray-300 rounded-md py-2 px-9 w-full appearance-none text-transparent placeholder-transparent"
                      />
                    </div>
                  </div>

                  <div className="mx-2">
                    <label className="font-semibold">Guests</label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <MdOutlinePeopleAlt />
                      </span>
                      <select class="outline outline-gray-300 rounded-md py-2 px-9 w-full appearance-none text-gray-400 placeholder-transparent">
                        <option>1 Guest</option>
                        <option>2 Guest</option>
                        <option>3 Guest</option>
                        <option>4 Guest</option>
                        <option>5 Guest</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-9">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                      <IoSearch size={20} />
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 font-bold rounded-md px-13 py-2 text-white cursor-pointer">
                      Search Tours
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Table
