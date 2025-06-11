import {assets} from '../assets/assets'

function PasswordReset(){
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 gap-15'>
                <div className='bg-[#F0F2F5] py-10 px-10'>
                    <img src={assets.agriconLogo} alt="agricon" className='w-32 mx-auto pb-5'/>
                    <img src={assets.authImage} alt="image" className='w-[90%] mx-auto'/>
                    <div className=' mt-4 text-center'>
                        <h6 className='font-bold text-lg'>Find Nearby Infrastructure</h6>
                        <p className='text-[12px]'>Discover dryers, cold rooms, and processing units close to your farm.</p>
                        <div className='flex items-center justify-between mx-6 mt-8'>
                            <span className='border-3 border-[#010E0A] border-b w-18'></span>
                            <span className='border-3 border-[#A7E0CF] border-b w-18'></span>
                            <span className='border-3 border-[#A7E0CF] border-b w-18'></span>
                            <span className='border-3 border-[#A7E0CF] border-b w-18'></span>
                            <span className='border-3 border-[#A7E0CF] border-b w-18'></span>
                        </div>
                    </div>
                </div>
                <div className='lg:flex items-center justify-center h-[100%] w-[100%]'>
                    <div>
                        <div>
                            <h2>Forgot Password</h2>
                            <p>No worries, we’ll send you a reset link.</p>
                        </div>
                        <form>
                            <div class="mb-3">
                                <label class="block text-sm font-medium text-gray-900 mb-1" for="email">New password</label>
                                <input
                                    class="lg:w-[150%] w-full px-3 py-2 h-13 rounded focus:outline-none border border-gray-300"
                                    type="password"
                                    name=""
                                    placeholder="Email"
                                    id=""
                                    required
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-900 mb-1" for="">Confirm new password</label>
                                <input
                                    class="lg:w-[150%] w-full px-3 py-2 h-13 rounded focus:outline-none border border-gray-300"
                                    type="password"
                                    name=""
                                    placeholder="password"
                                    id=""
                                    required
                                />
                            </div>
                            <button class="w-full bg-[#02402D] text-white py-4 rounded-md font-bold shadow-2xl"
                                type="submit">
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default PasswordReset;