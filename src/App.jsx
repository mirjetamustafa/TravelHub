import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Flights from './components/Flights'
import Hotels from './components/Hotels'
import Tours from './components/Tours'

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
            </>
          }
        />
        <Route
          path="/flights"
          element={
            <>
              <Header />
              <Flights />
            </>
          }
        />
        <Route
          path="/hotels"
          element={
            <>
              <Header />
              <Hotels />
            </>
          }
        />
        <Route
          path="/tours"
          element={
            <>
              <Header />
              <Tours />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
