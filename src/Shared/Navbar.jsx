import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/plogo.png';
import { AuthContext } from '../Provider/AuthProvider';

import avatarImg from '../assets/placeholder.jpg';
import { AiOutlineMenu } from 'react-icons/ai';
// import useCart from '../Hooks/useCart';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSignout = () => {
    logOut();
  };

  const Navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>HOME</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span> ABOUT US</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/academic"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>ACADEMIC</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/notice"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>NOTICE</span>
        </NavLink>
      </li>

      {/* {user?.email && (
        <li>
          <NavLink
            to="/addJobs"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>Add Job</span>
          </NavLink>
        </li>
      )} */}
      {/* {user?.email && (
        <li>
          <NavLink
            to="/myPostedJobs"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>My jobs</span>
          </NavLink>
        </li>
      )} */}
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>BLOGS</span>
        </NavLink>
      </li>
      {/* {user?.email && (
        <li>
          <NavLink
            to="/userProfile"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB]  bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>User Profile</span>
          </NavLink>
        </li>
      )} */}
    </>
  );

  return (
    <div>
      <div className=" text-white fixed z-30 w-full mt-10">
        <header className="bg-[#1515157b] shadow-lg  flex justify-between items-center w-full dark:bg-[#120505]  px-8 ">
          <div>
            <Link
              to="/"
              className="   md:w-[180px] w-[150px] flex justify-center items-center gap-2 "
            >
              <img className="h-14 w-12" src={logo} alt="" />
              <div>
                <h1 className=" text-[#00C2CB] font-bold text-2xl uppercase">
                  Perfect
                </h1>
                <p className="uppercase">Public School</p>
              </div>
            </Link>
          </div>
          {/* middle */}
          <ul className=" justify-center items-center gap-6 hidden lg:flex">
            {Navitems}
          </ul>
          {/* End */}
          <div className="flex justify-center items-center gap-3">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <AiOutlineMenu />
              <div className="hidden md:block">
                {/* Avatar */}
                <img
                  className="rounded-full"
                  referrerPolicy="no-referrer"
                  src={user && user.photoURL ? user.photoURL : avatarImg}
                  alt="profile"
                  height="30"
                  width="30"
                />
              </div>
            </div>

            {isOpen && (
              <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm text-black">
                <div className="flex flex-col cursor-pointer">
                  <Link
                    to="/"
                    className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Home
                  </Link>

                  {user ? (
                    <>
                      <Link
                        to="/dashboard"
                        className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Dashboard
                      </Link>
                      <div
                        onClick={handleSignout}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
