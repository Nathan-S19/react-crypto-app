import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

  async function handleSignOut() {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div className='rounded-div flex h-20 items-center justify-between font-bold'>
      <Link to='/'>
        <h1 className=''>CoinPeek</h1>
      </Link>
      <div className='hidden md:block'>
        <ThemeToggle />
      </div>

      {user?.email ? (
        <div>
          <Link to='/account' className='p-4'>
            Account
          </Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div className='hidden md:block'>
          <Link to='/signin' className='p-4 hover:text-accent'>
            Sign In
          </Link>
          <Link
            to='/signup'
            className='ml-2 rounded-2xl bg-button px-5 py-2 text-btnText shadow-lg hover:shadow-2xl'
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Menu Icon */}
      <div className='z-10 block cursor-pointer md:hidden'>
        {openMenu ? (
          <AiOutlineClose onClick={handleMenu} size={25} />
        ) : (
          <AiOutlineMenu onClick={handleMenu} size={25} />
        )}
      </div>

      {/* Mobile Menu */}

      <div
        className={
          openMenu
            ? 'fixed left-0 top-20 z-10 flex h-[90%] w-full flex-col items-center justify-between bg-primary duration-300 ease-in md:hidden'
            : 'duration-400 fixed left-[-100%] top-20 flex h-[90%] flex-col items-center justify-between ease-out'
        }
      >
        <ul className='w-full '>
          <li onClick={handleMenu} className='border-b py-6'>
            <Link to='/'>Home</Link>
          </li>
          {user?.email && (
            <li onClick={handleMenu} className='border-b py-6'>
              <Link to='/account'>Account</Link>
            </li>
          )}

          <li className='py-6'>
            <ThemeToggle />
          </li>
        </ul>
        {user?.email ? null : (
          <div className='flex w-full flex-col p-4'>
            <Link to='/signin'>
              <button
                onClick={handleMenu}
                className='border-secondary my-2 w-full rounded-2xl border bg-primary p-3 text-primary shadow-xl'
              >
                Sign In
              </button>
            </Link>
            <Link to='/signin'>
              <button
                onClick={handleMenu}
                className='my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl'
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
