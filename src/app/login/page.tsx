'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function login() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>  ) => {
    e.preventDefault();

    // Validation checks
    if (!email) {
      toast.error('Fill in the email field');
      return;
    }

    if (!password) {
      toast.error('Fill in the password field');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Enter a valid email address');
      return;
    }

    if (password.length < 6) {
      toast.error('Password length must be at least 6 characters');
      return;
    }

    // Perform login logic here
    toast.success('Login successful');
  };

  return (
    <section className="relative w-full h-[100vh] flex">
      <Toaster position="top-right" reverseOrder={false} />


      {/* Right side form section */}
      <div
        className="flex-1 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/wallpaper.jpg)' }}
      >
        <div className="w-[400px] h-[500px] bg-[#000000]/30 backdrop-blur-lg shadow-lg rounded-2xl border-3 border-[#ffffff]/50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 p-2 text-white focus:outline-none"
            onClick={toggleDropdown}
            aria-expanded={dropdownVisible}
            aria-controls="dropdown-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              role="img"
              aria-label="Menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {dropdownVisible && (
            <div
              id="dropdown-menu"
              className="absolute top-12 right-4 bg-white text-black rounded-md shadow-lg p-2 z-10"
            >
              <ul className="space-y-1">
                <li className="hover:bg-dark-blue p-2 rounded cursor-pointer text-dirty-white bg-[#000000]">
                  Login as a Student
                </li>
                <li className="hover:bg-dark-blue p-2 rounded cursor-pointer text-dirty-white bg-[#000000]">
                  Login as a Teacher
                </li>
              </ul>
            </div>
          )}

          <h2 className="text-[#ffffff] text-2xl uppercase py-4 mt-5 mr-5 text-left">
            Login
          </h2>

          <form className="flex flex-col gap-4" onSubmit={ handleSubmit}>
            <input
              className="p-2 mt-4 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordVisible ? (
                <FaEye
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                  aria-label="Hide password"
                />
              ) : (
                <FaEyeSlash
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                  aria-label="Show password"
                />
              )}
            </div>
            <p className="text-left text-white mb-2">
              <input type="checkbox" className="font-semibold" /> Remember Me{' '}
            </p>
            <button
              type="submit"
              className="w-full h-12 rounded-full bg-[#000000] text-[#ffffff] text-lg font-semibold uppercase cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              Login
            </button>
          </form>
          <a
            href="#"
            className="text-white font-semibold hover:underline italic"
          >
            Forgot Password?
          </a>

          <p className="text-center text-white mt-4">
            Don't have an account?{' '}
            <a
              href="#"
              className="text-[#ffffff] font-semibold hover:underline italic"
            >
              Register
            </a>
          </p>

          <div className="mt-6 grid grid-cols-3 items-center text-light-gray">
            <hr className="border-light-gray border-t-2" />
            <p className="text-center text-sm font-bold">OR LOGIN WITH</p>
            <hr className="border-light-gray border-t-2" />
          </div>


          <div>
            <ul className="flex items-center justify-around space-x-5 mt-4">
              <a href="#">
                <li className="border border-[#000000] w-10 h-10 rounded flex items-center justify-center text-[#000000] hover:bg-[#ffffff] hover:text-white">
                  {/* Google SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24px"
                    height="24px"
                    className="fill-[#000000]"
                  >
                    <path
                      fill="#000000"
                      d="M44.5,20H24v8.5h11.8C34.8,34.5,30,39,24,39c-8.3,0-15-6.7-15-15s6.7-15,15-15c3.6,0,6.9,1.3,9.5,3.5L40,5.5 C35.7,2,30.1,0,24,0C10.7,0,0,10.7,0,24s10.7,24,24,24c12.4,0,22.6-9,24-21.2c0.1-0.5,0.1-1,0.1-1.8V20z"
                    />
                    <path
                      fill="#000000"
                      d="M9.4,14.6L14,18c1.7-3.5,5.2-6,9.5-6c3.6,0,6.8,1.3,9.3,3.5L40,5.5C35.7,2,30.1,0,24,0C16.8,0,10.7,4.4,7.4,10.6L9.4,14.6z"
                    />
                    <path
                      fill="#000000"
                      d="M24,48c6.5,0,11.9-2.1,16-5.7L37.1,36C34.4,38,29.9,39,24,39c-6.1,0-11.4-4-13.3-9.5l-4,3.1 C10.1,42,16.7,48,24,48z"
                    />
                    <path
                      fill="#000000"
                      d="M44.5,20H24v8.5h11.8C34.8,34.5,30,39,24,39c-6.5,0-11.9-4.5-13.3-10.5L7.6,29.4C9.6,36.1,16.1,41,24,41 c9.9,0,18-7.7,18-18C42,22,42,21,42,20.5C42.1,20.3,44.5,20,44.5,20z"
                    />
                  </svg>
                </li>
              </a>

              <a href="#">
                <li className="border border-[#000000] w-10 h-10 rounded flex items-center justify-center text-[#000000] hover:bg-[#ffffff] hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.775.418-1.305.76-1.605-2.665-.3-5.466-1.333-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3.003-.403c1.02.005 2.048.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.221 0 4.61-2.804 5.628-5.475 5.921.43.371.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.825.576C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              </a>

              <a href="#">
                <li className="border border-[#000000] w-10 h-10 rounded flex items-center justify-center text-[#0077B5] hover:bg-[#ffffff] hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    className="fill-[#000000]"
                  >
                    <path d="M22.225 0H1.775C.797 0 0 .797 0 1.775v20.45C0 23.203.797 24 1.775 24h20.45c.978 0 1.775-.797 1.775-1.775V1.775C24 .797 23.203 0 22.225 0zm-14.702 20.451h-3.74V9.373h3.74v11.078zm-1.87-12.654c-1.183 0-2.129-.962-2.129-2.14 0-1.178.946-2.14 2.129-2.14 1.183 0 2.129.962 2.129 2.14 0 1.178-.946 2.14-2.129 2.14zm14.279 12.654h-3.74v-5.94c0-1.42-.025-3.242-1.975-3.242-1.977 0-2.281 1.543-2.281 3.136v6.046h-3.74V9.373h3.59v1.515h.05c.5-.949 1.722-1.951 3.546-1.951 3.796 0 4.495 2.497 4.495 5.751v5.763z" />
                  </svg>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

