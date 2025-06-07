import Table from './Table'
import city from '../assets/city1.png'
import FindTours from './FindTours'
const tours = [
  {
    name: 'Paris City Highlights Tour',
    reviews: 324,
    description:
      'Explore the best of Paris including Eiffel Tower, Louvre, and Seine River cruise.',
    hours: 8,
    guests: 12,
    nextTour: '2024-01-15',
    includes1: 'Professional guide',
    includes2: 'Transportation',
    includes3: 'Entry tickets',
    includes4: 'Lunch',
    price: 89,
    rating: 4.9,
    img: 'https://media.cntraveler.com/photos/665e30e3c623d0ae10ca3dd9/2:3/w_2142,h_3213,c_limit/pexels-magnusflechsenhaar-3361209.jpg',
  },
  {
    name: 'Montmartre Art & Culture Walk',
    reviews: 156,
    description:
      'Discover the artistic heritage of Montmartre with local artists and hidden gems.',
    hours: 4,
    guests: 8,
    nextTour: '2024-01-12',
    includes1: 'Local guide',
    includes2: 'Art materials',
    includes3: 'Coffee break',
    price: 45,
    rating: 4.7,
    img: city,
  },
  {
    name: 'Seine River Evening Cruise',
    reviews: 892,
    description:
      'Romantic evening cruise along the Seine with dinner and live music.',
    hours: 2,
    guests: 50,
    nextTour: '2024-01-10',
    includes1: 'Dinner',
    includes2: 'Live music',
    includes3: 'Welcome drink',
    price: 35,
    rating: 4.5,
    img: 'https://www.francetourisme.fr/media/diner_croisiere_fracasse/diner-croisiere-devant-tour-eiffel.jpg',
  },
  {
    name: 'Paris City Highlights Tour',
    reviews: 324,
    description:
      'Explore the best of Paris including Eiffel Tower, Louvre, and Seine River cruise.',
    hours: 8,
    guests: 12,
    nextTour: '2024-01-15',
    includes1: 'Professional guide',
    includes2: 'Transportation',
    includes3: 'Entry tickets',
    includes4: 'Lunch',
    price: 89,
    rating: 4.9,
    img: 'https://media.cntraveler.com/photos/665e30e3c623d0ae10ca3dd9/2:3/w_2142,h_3213,c_limit/pexels-magnusflechsenhaar-3361209.jpg',
  },
  {
    name: 'Montmartre Art & Culture Walk',
    reviews: 156,
    description:
      'Discover the artistic heritage of Montmartre with local artists and hidden gems.',
    hours: 4,
    guests: 8,
    nextTour: '2024-01-12',
    includes1: 'Local guide',
    includes2: 'Art materials',
    includes3: 'Coffee break',
    price: 45,
    rating: 4.7,
    img: city,
  },
  {
    name: 'Seine River Evening Cruise',
    reviews: 892,
    description:
      'Romantic evening cruise along the Seine with dinner and live music.',
    hours: 2,
    guests: 50,
    nextTour: '2024-01-10',
    includes1: 'Dinner',
    includes2: 'Live music',
    includes3: 'Welcome drink',
    price: 35,
    rating: 4.5,
    img: 'https://www.francetourisme.fr/media/diner_croisiere_fracasse/diner-croisiere-devant-tour-eiffel.jpg',
  },
]

const Tours = () => {
  return (
    <main>
      <section className="bg-blue-600 w-full  p-9 text-white">
        <h1 className="font-bold md:text-4xl text-3xl mt-15">
          Discover Amazing Tours
        </h1>

        <Table />
      </section>

      <section className="pt-9 bg-gray-50">
        <div className="flex justify-between px-9 py-5">
          <div className="">
            <h1 className="text-xl font-bold">
              {tours.length} tours available
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

      <section className="pt-5 pb-25 bg-gray-50">
        <FindTours tours={tours} />
      </section>
    </main>
  )
}

export default Tours
