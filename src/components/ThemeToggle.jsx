import { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleToggle() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className='p-2'>
      {theme === 'dark' ? (
        <div
          className='flex cursor-pointer items-center'
          onClick={handleToggle}
        >
          <HiSun className='mr-2 text-2xl text-primary' />
          Light Mode
        </div>
      ) : (
        <div
          className='flex cursor-pointer items-center'
          onClick={handleToggle}
        >
          <HiMoon className='mr-2 text-2xl text-primary' />
          Dark Mode
        </div>
      )}
    </div>
  );
};
export default ThemeToggle;
