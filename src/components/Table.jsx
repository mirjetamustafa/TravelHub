import React, { useState } from 'react'

const Table = () => {
  const [activeBtn, setActiveBtn] = useState('flights')
  return (
    <div className="bg-white rounded-md mt-9 text-gray-600 p-5">
      <div className="">
        <div className="flex">
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
            <>
              <div className="mt-5">
                <form className="grid md:grid-cols-4 grid-cols-1">
                  <div className="mx-2 flex flex-col">
                    <label className="font-semibold">To</label>
                    <input
                      type="text"
                      className="outline outline-gray-300 rounded-md py-2 px-4"
                    />
                  </div>
                  <div className="mx-2 flex flex-col">
                    <label className="font-semibold">To</label>
                    <input type="text" className="outline outline-gray-300" />
                  </div>
                  <div className="mx-2 flex flex-col">
                    <label className="font-semibold">To</label>
                    <input type="text" className="outline outline-gray-300" />
                  </div>
                  <div className="mx-2 flex flex-col">
                    <label className="font-semibold">To</label>
                    <input type="text" className="outline outline-gray-300" />
                  </div>
                </form>
              </div>
            </>
          ) : activeBtn === 'hotels' ? (
            <>
              <div className="text-xl font-bold">Hotels</div>
            </>
          ) : (
            <>
              <div className="text-xl font-bold">Tours</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Table
