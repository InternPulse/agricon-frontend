import {assets} from '../assets/assets'
import ResetPasswordForm from '../components/ResetPasswordForm';

function PasswordReset(){
    return (
        <div className='flex items-center min-h-screen justify-center'>
            <div className='w-full px-8 py-10 grid lg:grid-cols-2 sm:w-2/3 md:w-2/3 lg:w-full lg:px-20 xl:px-50'>
                <div className='hidden bg-[#F0F2F5] py-10  lg:inline-block mx-auto'>
                    <img src={assets.agriconLogo} alt="agricon" className='w-32 mx-auto pb-5'/>
                    <img src={assets.authImage} alt="image" className='w-[80%] mx-auto'/>
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
                <ResetPasswordForm />
            </div>       
        </div>
    )
}

export default PasswordReset;