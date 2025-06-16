

function ResetPasswordForm() {
    
    return (
        <div className='lg:flex items-center justify-center w-full'>
            <div className='space-y-10'>
                <div className='text-center  lg:w-[150%]'>
                    <h2 className='font-bold text-2xl'>Reset Password</h2>
                    <p>No worries, we’ll send you a reset link.</p>
                </div>
                <form>
                    <div className="mb-5">
                        <label
                            className="block text-sm text-gray-900 mb-1 font-bold"
                            htmlFor="email"
                        >
                            New password
                        </label>
                        <input
                            className="w-full px-3 py-2 h-13 rounded focus:outline-none border border-gray-300 lg:w-[150%]"
                            type="New password"
                            name=""
                            placeholder="New password"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="block text-sm text-gray-900 mb-1 font-bold"
                            htmlFor=""
                        >
                            Confirm new password
                        </label>
                        <input
                            className=" w-full px-3 py-2 h-13 rounded focus:outline-none border border-gray-300 lg:w-[150%]"
                            type="password"
                            name=""
                            placeholder="Confirm new password"
                            required
                        />
                    </div>
                    <button
                        className="w-full bg-[#02402D] text-white py-4 rounded-md font-bold shadow-2xl lg:w-[150%]"
                        type="submit"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ResetPasswordForm;
