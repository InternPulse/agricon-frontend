export default function Credentials() {
  return (
    <form className="flex flex-col space-y-4 w-[483px]">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-[2rem] mb-4">Sign up</h2>
        <p className="mb-6">Create a farmers account to access facilities.</p>
      </div>
      <label htmlFor="firstName" className="mb-2">
        First Name
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400"
        id="firstName"
        type="text"
        placeholder="John"
        required
      />
      <label htmlFor="lastName" className="mb-2">
        Last Name
      </label>
      <input
        className="border border-gray-200 mw-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400"
        id="lastName"
        type="text"
        placeholder="doe"
        required
      />
      <label htmlFor="email" className="mb-2">
        Email
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400"
        id="email"
        type="email"
        placeholder="johndoe@gmail.com"
        required
      />
      <label htmlFor="phone" className="mb-2">
        Phone Number
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400"
        id="phone"
        type="tel"
        placeholder="09033445566"
        required
      />
      <label htmlFor="password" className="mb-2">
        Password
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400"
        id="password"
        type="password"
        placeholder="john"
        required
      />
      <label htmlFor="password" className="mb-2">
        Confirm password
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400 mb-6"
        id="password"
        type="password"
        placeholder="john"
        required
      />
      <button className="bg-[#02402D] w-full h-[56px] rounded-sm py-4.5 px-5.75 text-base text-[#F9FAFB]">
        Send OTP
      </button>
    </form>
  );
}
