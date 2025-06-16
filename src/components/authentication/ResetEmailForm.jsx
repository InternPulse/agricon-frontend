import React from 'react'
import arrowBack from "../../assets/arrowBack.png"
import { Link } from 'react-router-dom'

export default function Form() {
    const handleSubmitBtn = (e)=>{
        e.preventDefault()
      }
  return (
    <div>
        <section className="flex flex-col justify-center p-10 rounded-md h-full max-w-[500px] w-full mx-auto lg:mx-0 ">
        <div className="mb-8 text-center">
          <h1 className="text-[28px] md:text-[32px] font-semibold">
            Forgot Password
          </h1>
          <p className="text-[16px] text-[#000000] font-normal">
            No worries, we’ll send you a reset link.
          </p>
        </div>

        <form className="flex flex-col gap-4 w-full">
          <label className="text-[16px] text-[#000000] font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            className="px-4 py-3 placeholder-[#98A2B3] border text-black border-[#E4E7EC] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            onClick={handleSubmitBtn}
            className="bg-[#02402D] h-[56px] cursor-pointer rounded-md text-white hover:bg-[#336153] transition"
          >
            Send Reset Link
          </button>

          <div className="mt-4 flex justify-center items-center gap-2 cursor-pointer">
            <img src={arrowBack} alt="arrowback" />
            <Link to='/login' className="text-[16px] text-[#010E0A] font-medium">
              Back to Log in
            </Link>
          </div>
        </form>
      </section>
    </div>
  )
}