import React from 'react'
import Table from './Table'

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
    </main>
  )
}

export default Home
