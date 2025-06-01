import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { LuPlane } from 'react-icons/lu'
import { FaRegMap } from 'react-icons/fa'
import { FaHotel } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'

const Header = () => {
  const [burgerBtn, setBurgerBtn] = useState(false)
  return (
    <header className="flex justify-between p-5 shadow-md">
      <Link to={'/'} className="flex">
        <img src={logo} alt="logo" />
        <span className="text-2xl font-bold mx-2">TravelHub</span>
      </Link>

      <nav>
        <div className="md:hidden">
          {!burgerBtn ? (
            <RxHamburgerMenu
              onClick={() => setBurgerBtn(true)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <MdClose
              onClick={() => setBurgerBtn(false)}
              className="text-2xl cursor-pointer"
            />
          )}

          {burgerBtn && (
            <div className="bg-white text-gray-600 fixed top-18  z-50 left-0 h-100 w-full  transition delay-150 duration-300 ease-in-out">
              <ul className="flex flex-col p-5">
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive
                      ? 'flex text-blue-500 font-bold bg-blue-50 rounded-lg px-3 py-2'
                      : 'flex font-bold text-gray-600 px-3 py-2 hover:bg-stone-50 rounded-md my-2'
                  }
                >
                  <FaRegMap className="mt-1 mx-1 text-xl" />
                  Home
                </NavLink>

                <NavLink
                  to={'/flights'}
                  className={({ isActive }) =>
                    isActive
                      ? 'flex text-blue-500 font-bold bg-blue-50 rounded-lg px-3 py-2 '
                      : 'flex font-bold text-gray-600 px-3 py-2 hover:bg-stone-50 rounded-md my-2'
                  }
                >
                  <LuPlane className="mt-1 mx-1 text-lg" />
                  Flights
                </NavLink>

                <NavLink
                  to={'/hotels'}
                  className={({ isActive }) =>
                    isActive
                      ? 'flex text-blue-500 font-bold bg-blue-50 rounded-lg px-3 py-2 '
                      : 'flex font-bold text-gray-600 px-3 py-2 hover:bg-stone-50 rounded-md my-2'
                  }
                >
                  <FaHotel className="mt-1 mx-1 text-lg " />
                  Hotels
                </NavLink>

                <NavLink
                  to={'/tours'}
                  className={({ isActive }) =>
                    isActive
                      ? 'flex text-blue-500 font-bold bg-blue-50 rounded-lg px-3 py-2 '
                      : 'flex font-bold text-gray-600 px-3 py-2 hover:bg-stone-50 rounded-md my-2'
                  }
                >
                  <FaRegMap className="mt-1 mx-1 text-lg " />
                  Tours
                </NavLink>
              </ul>
            </div>
          )}
        </div>
        <ul className="flex max-md:hidden">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'flex text-blue-500 font-bold bg-blue-50 rounded-md px-3 py-2'
                : 'flex font-bold text-gray-600 px-3 py-2 hover:bg-stone-50 rounded-md mx-2'
            }
          >
            <FaRegMap className="mt-1 mx-1 text-xl" />
            Home
          </NavLink>

          <NavLink
            to={'/flights'}
            className={({ isActive }) =>
              isActive
                ? 'flex text-blue-500 font-bold bg-blue-50 rounded-md px-3 py-2 '
                : 'flex font-bold text-gray-600 px-3 py-2 hover:bg-stone-50 rounded-md mx-2'
            }
          >
            <LuPlane className="mt-1 mx-1 text-lg" />
            Flights
          </NavLink>

          <NavLink
            to={'/hotels'}
            className={({ isActive }) =>
              isActive
                ? 'flex text-blue-500 font-bold bg-blue-50 rounded-md px-3 py-2 '
                : 'flex font-bold text-gray-600 px-3 py-2 hover:bg-stone-50 rounded-md mx-2'
            }
          >
            <FaHotel className="mt-1 mx-1 text-lg " />
            Hotels
          </NavLink>

          <NavLink
            to={'/tours'}
            className={({ isActive }) =>
              isActive
                ? 'flex text-blue-500 font-bold bg-blue-50 rounded-md px-3 py-2 '
                : 'flex font-bold text-gray-600 px-3 py-2 hover:bg-stone-50 rounded-md mx-2'
            }
          >
            <FaRegMap className="mt-1 mx-1 text-lg " />
            Tours
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
