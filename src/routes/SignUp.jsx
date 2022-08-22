import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = UserAuth();

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }
  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    event.preventDefault();
    setError('');

    try {
      await signUp(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  }

  return (
    <div>
      <div className='mx-auto min-h-[600px] max-w-[400px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Sign Up</h1>
        {error ? <p className='my-2 bg-red-300 p-3'>{error}</p> : null}
        <form onSubmit={handleLogin}>
          <div className='my-4'>
            <label>Email</label>
            <div className='relative my-2 flex w-full items-center gap-4 rounded-2xl '>
              <input
                onChange={handleEmailInput}
                className='border-input w-full rounded-2xl border bg-primary p-2'
                type='email'
              />
              <AiOutlineMail size={32} />
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='relative my-2 flex w-full items-center gap-4 rounded-2xl '>
              <input
                onChange={handlePasswordInput}
                className='border-input w-full rounded-2xl border bg-primary p-2'
                type='password'
              />
              <AiFillLock size={32} />
            </div>
          </div>
          <button className='my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl'>
            Sign Up
          </button>
        </form>
        <p className='my-4'>
          Already have an acccount?{' '}
          <Link className='text-accent' to='/signin'>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
