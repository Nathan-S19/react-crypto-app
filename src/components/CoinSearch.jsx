import { useEffect, useState } from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({ coins }) => {
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className='rounded-div my-4'>
      <div className='md: flex flex-col justify-between pt-4 pb-6 text-center md:flex-row md:text-right'>
        <h1 className='my-2 text-2xl font-bold'>Search Crypto</h1>
        <form>
          <input
            type='search'
            onChange={handleSearch}
            className='border-input w-full rounded-2xl border bg-primary px-4 py-2 shadow-xl'
            placeholder='Search for coin'
          />
        </form>
      </div>

      <table className='w-full border-collapse text-center'>
        <thead>
          <tr>
            <th></th>
            <th className='px-4'>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24H</th>
            <th className='hidden md:table-cell'>24H Volume</th>
            <th className='hidden sm:table-cell'>Mkt Cap</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>

        <tbody>
          {coins
            .filter((value) => {
              if (search === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default CoinSearch;
