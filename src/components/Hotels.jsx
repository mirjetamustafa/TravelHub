import Table from './Table'
import hotel1 from '../assets/img1.png'
import hotel2 from '../assets/img2.png'
import hotel3 from '../assets/img3.png'
import FindHotels from './FindHotels'

const hotels = [
  {
    name: 'Grand Palace Hotel',
    location: 'Downtown Paris',
    reviews: '1245 reviews',
    rating: 4.8,
    description: 'Luxury hotel in the heart of Paris with stunning city views.',
    wifi: 'Free WiFi',
    parking: 'Parking',
    restaurant: 'Restaurant',
    pool: 'Pool',
    price: 185,
    img: hotel1,
  },
  {
    name: 'Boutique Seine Hotel',
    location: 'Latin Quarter',
    reviews: '892 reviews',
    rating: 4.6,
    description: 'Charming boutique hotel near Notre Dame with elegant rooms.',
    wifi: 'Free WiFi',
    restaurant: 'Restaurant',
    bar: 'Bar',
    price: 145,
    img: hotel2,
  },
  {
    name: 'Modern City Suites',
    location: 'Business District',
    reviews: '567 reviews',
    rating: 4.4,
    description: 'Contemporary hotel perfect for business travelers.',
    wifi: 'Free WiFi',
    gym: 'Gym',
    business: 'Business Center',
    price: 125,
    img: hotel3,
  },
]

const Hotels = () => {
  return (
    <main>
      <section className="bg-blue-600 w-full  p-9 text-white">
        <h1 className="font-bold md:text-4xl text-3xl mt-15">
          Find Your Perfect Stay
        </h1>

        <Table />
      </section>

      <section className="pt-9 bg-gray-50">
        <div className="flex justify-between px-9 py-5">
          <div className="">
            <h1 className="text-xl font-bold">3 hotels found</h1>
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

      <section className="pt-9 bg-gray-50">
        <FindHotels />
      </section>
    </main>
  )
}

export default Hotels
