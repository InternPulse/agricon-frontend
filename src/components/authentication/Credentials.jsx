import { useActionState } from "react";

export default function Credentials() {
  async function signupAction(prevFormState, formData) {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");
    const password = formData.get("password");
    const password2 = formData.get("password2");

    let errors = [];

    if (password != password2) {
      errors.push("Passwords do not match");
    }

    try {
      const response = await fetch(
        "https://agricon-django-backend.onrender.com/api/v1/auth/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            password2,
            role: "FARMER",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        errors.push(data.message || "Registration failed");
      }

      console.log("User registered:", data);
    } catch (error) {
      console.error("Signup error:", error);
      errors.push("Something went wrong. Please try again.");
    }
    return {
      errors,
      enteredValues: {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        password2,
      },
    };
  }

  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });

  return (
    <form
      action={formAction}
      className="flex flex-col space-y-4 w-full mx-auto"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-[2rem] mb-4">Sign up</h2>
        <p className="mb-6">Create a farmers account to access facilities.</p>
      </div>
      <label htmlFor="firstName" className="mb-2 font-medium">
        First Name
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400"
        id="firstName"
        type="text"
        placeholder="John"
        name="firstName"
        required
      />
      <label htmlFor="lastName" className="mb-2 font-medium">
        Last Name
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400"
        id="lastName"
        type="text"
        placeholder="doe"
        name="lastName"
        required
      />
      <label htmlFor="email" className="mb-2 font-medium">
        Email
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400"
        id="email"
        type="email"
        placeholder="johndoe@gmail.com"
        name="email"
        required
      />
      <label htmlFor="phone" className="mb-2 font-medium">
        Phone Number
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400"
        id="phone"
        type="tel"
        placeholder="09033445566"
        name="phoneNumber"
        required
      />
      <label htmlFor="password" className="mb-2 font-medium">
        Password
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400"
        id="password"
        type="password"
        placeholder="john"
        name="password"
        required
      />
      <label htmlFor="password" className="mb-2 font-medium">
        Confirm password
      </label>
      <input
        className="border border-gray-200 w-full h-[56px] rounded-sm py-4.5 px-5.75 placeholder:font-medium text-base placeholder:text-gray-400 mb-6"
        id="password2"
        type="password"
        placeholder="john"
        name="password2"
        required
      />

      {formState.errors && (
        <p className="text-sm text-red-600">{formState.errors}</p>
      )}
      <button className="bg-[#02402D] w-full h-[56px] rounded-sm py-4.5 px-5.75 text-base font-medium text-[#F9FAFB]">
        Send OTP
      </button>
    </form>
  );
}
