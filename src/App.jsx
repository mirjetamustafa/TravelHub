import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Flights from './components/Flights'
import Hotels from './components/Hotels'
import Tours from './components/Tours'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/flights"
          element={
            <>
              <Header />
              <Flights />
              <Footer />
            </>
          }
        />
        <Route
          path="/hotels"
          element={
            <>
              <Header />
              <Hotels />
              <Footer />
            </>
          }
        />
        <Route
          path="/tours"
          element={
            <>
              <Header />
              <Tours />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
