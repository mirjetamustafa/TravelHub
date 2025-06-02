const cities = [
  {
    name: 'New York',
    top: '40%',
    left: '15%',
    url: 'https://www.newyork.com/',
  },
  {
    name: 'London',
    top: '30%',
    left: '45%',
    url: 'https://www.visitlondon.com/',
  },
  {
    name: 'Paris',
    top: '35%',
    left: '47%',
    url: 'https://parisjetaime.com/eng/',
  },
  {
    name: 'Rome',
    top: '45%',
    left: '50%',
    url: 'https://romesite.com/',
  },
  {
    name: 'Tokyo',
    top: '40%',
    left: '80%',
    url: 'https://www.gotokyo.org/en/index.html',
  },
]

const Map = () => {
  return (
    <div className="relative bg-blue-100 p-6 rounded-xl shadow-lg h-[400px]  mx-9">
      <div className="absolute top-4 left-4 bg-white shadow-md px-4 py-2 rounded-md font-medium">
        Click on destinations to explore
      </div>

      {cities.map((city, index) => (
        <div
          key={index}
          className="absolute flex items-center space-x-2"
          style={{ top: city.top, left: city.left }}
        >
          <div className="w-4 h-4 bg-blue-600 rounded-full shadow-md"></div>
          <a
            href={city.url}
            target="_blank"
            className="font-semibold text-black"
          >
            {city.name}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Map
