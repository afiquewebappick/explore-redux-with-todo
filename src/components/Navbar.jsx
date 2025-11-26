import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaListUl } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';
import { RxUpdate } from 'react-icons/rx';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <section className="py-10 shadow bg-white/50">
      <div className="max-w-6xl mx-auto flex justify-around items-center">
        <ul className="flex gap-x-8">
          <li className="">
            <NavLink to={'/'} className={'text-lg flex items-center gap-x-1'}>
              <FaHome></FaHome>Home
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to={'/add'}
              className={'text-lg flex items-center gap-x-1'}
            >
              <IoAddCircleSharp></IoAddCircleSharp>Add list
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
