import React from 'react'
import { PrimaryHeading } from './Heading'
import { NavLink } from 'react-router-dom'

function Header() {
    const navbar =[
        {
            name:"Home",
            to:"/",
        },
        {
          name: "Menu",
          to: "/menu",
        },
        {
            name: "Login",
            to: "/login",
          },
          {
            name: "Register",
            to: "/register",
          },
    ]
  return (
    <div className='w-full flex justify-center items-center md:pt-8 p-0'>
      <div className='flex justify-center md:w-[50rem] w-full bg-base items-center flex-col md:flex-row md:justify-evenly h-32 md:h-24 md:rounded-full'>
      <PrimaryHeading>PizzaPal</PrimaryHeading>
        <div >
            <ul
              className="flex gap-6 md:gap-0"
            >
              {navbar.map((item, index) => (
                <li key={index} className="m-2">
                  <NavLink
                    className={({ isActive }) =>
                      ` ${
                        isActive ? `text-primary`: "text-white "
                      } hover:underline hover:underline-offset-4`
                    }
                    to={item.to}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Header