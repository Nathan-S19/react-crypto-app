import { AiOutlineInstagram } from 'react-icons/ai';
import {
  FaTiktok,
  FaFacebookF,
  FaReddit,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <div className='rounded-div mt-8 pt-8 text-primary'>
      <div className='grid md:grid-cols-2'>
        <div className='flex w-full justify-evenly uppercase md:max-w-[300px]'>
          <div>
            <h2 className='font-bold'>Support</h2>
            <ul>
              <li className='py-2 text-sm'>Help Center</li>
              <li className='py-2 text-sm'>Contact Us</li>
              <li className='py-2 text-sm'>API Status</li>
              <li className='py-2 text-sm'>Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Info</h2>
            <ul>
              <li className='py-2 text-sm'>About Us</li>
              <li className='py-2 text-sm'>Careers</li>
              <li className='py-2 text-sm'>Invest</li>
              <li className='py-2 text-sm'>Legal</li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='flex w-full justify-end'>
            <div className='relative w-full py-4 md:w-[300px]'>
              <div className='mt-[-1rem] flex justify-center py-4 md:justify-end md:py-0 md:pb-4'>
                <ThemeToggle />
              </div>
              <p className='my-2 text-center md:text-right'>
                Sign up for crypto news
              </p>
              <div>
                <form>
                  <input
                    className='border-input mr-2 w-full rounded-2xl border bg-primary p-2 shadow-xl md:w-auto'
                    type='email'
                    placeholder='Enter Email'
                  />
                  <button className='my-2 w-full rounded-2xl bg-button p-2 px-4 text-btnText shadow-xl hover:shadow-2xl md:w-auto'>
                    Sign Up
                  </button>
                </form>
              </div>
              <div className='flex justify-start space-x-4 py-4'>
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='py-4 text-center'>
        Powered by{' '}
        <a className='text-gray-500' href='http://coingecko.com' target='_'>
          Coin Gecko API
        </a>
      </p>
    </div>
  );
};
export default Footer;
