import React from 'react'
import { assets } from '../../assets/assets'



const OTP = () => {

    const otp = [1, 1, 1, 1, 1, 1]
    const pages = ['', '', '', '', '']

    return (
        <div className='flex md:justify-center lg:inter bg-[#fcfeff] md:h-[100vh] '>

            <div className='grid md:grid-cols-2 md:gap-4 lg:gap-10 py-10  place-items-center '>

                {/* agrio */}
                <div className='w-96 md:w-86 lg:w-[450px] p-6 h-[550px] flex flex-col gap-3 md:justify-center items-center  bg-[#F0F2F5]'>
                    <img src={assets.agriconLogo} alt="" width={120} height={63} />
                    <img src={assets.authImage} className='h-[350px] rounded-md' alt="" width={441} height={297} />

                    <div className='text-center text-[#010E0A] '>
                        <h1 className='text-[14px] font-bold'>Find Nearby Infrastructure</h1>
                        <p className='text-[12px]'> Discover dryers, cold rooms and processing units close to your farm</p>
                    </div>

                    {/* pagination/slider starts here */}
                    {/* <div className='grid grid-cols-5'>
                {
                    pages.map((page,index)=>(
                        <div
                        key={index}
            className='bg-[#010E0A] w-40 h-20 '
                        >{page}</div>
                    ))
                }
               

            </div>
        */}

                </div>

                {/* OTP section */}
                <div className='flex flex-col   justify-center items-center h-[482px] w-[483px]'>

                    <h1 className='text-[20px] font-bold'>OTP VERIFICATION</h1>

                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img src={assets.otp} alt="" width={82} height={112} />

                        {/* paragraph */}
                        <div className='text-[12px] text-center'>
                            <p className=''>We've sent a <span className='font-bold'>6-digit-code</span> to your phone number</p>
                            <p><span className='font-bold'>+234******4377</span> Please enter it below to verify your action</p>
                        </div>

                        {/* number display */}
                        <div className=''>
                            <div className='flex justify-center'>
                                {
                                    otp.map((otp, idx) => (

                                        <button
                                            className='border rounded-lg border-[#808080] w-[40px] h-[40px] m-1'
                                            key={idx}>{otp}</button>


                                    ))
                                }
                            </div>

                            <p className='text-[14px] text-[#808080]'>Didn't receieve any code? <span className='font-bold text-black'>Resend OTP in 00:30</span></p>
                        </div>

                        {/* button */}
                        <button className='bg-[#02402D] w-full text-white p-2 rounded-lg cursor-pointer'>Authorize</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default OTP
