'use client';
import { useFormState } from 'react-dom';

import Input, { formatPhoneNumberIntl, parsePhoneNumber, getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
import { signup } from '@/actions/auth';
import ErrorMessage from '@/components/validation/error-message';
import { PhoneInput } from '@/components/ui/phone-input';
import { useEffect, useState } from 'react';
import RegisterButton from './register-button';

export default function RegisterForm() {
  const userLocalTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("") as any;


  const signupWithLoacalTimeZone = signup.bind(null, userLocalTimeZone, countryCode && getCountryCallingCode(countryCode), phoneNumber && formatPhoneNumberIntl(phoneNumber))
  const [errorMessage, dispatch] = useFormState(signupWithLoacalTimeZone, undefined);



  // const handlePhoneChange = (value) => {
  //   setPhoneNumber(value);

  //   // If the value is not empty, extract the country code
  //   if (value) {
  //     const country = getCountryCallingCode(value);
  //     setCountryCode(country);
  //   } else {
  //     setCountryCode("");
  //   }
  // };

  useEffect(() => {
    countryCode && console.log(getCountryCallingCode(countryCode));
    // console.log("phoneNumber:", phoneNumber)
  }, [phoneNumber])


  return (
    <form action={dispatch} className="space-y-6">
      <div>
        <label
          className="block text-sm font-medium "
          htmlFor="name"
        >
          Full Name
        </label>
        <input
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          id="name"
          name="name"
          type="text"
        />
        <ErrorMessage message={errorMessage?.name} />
      </div>
      <div>
        <label
          className="block text-sm font-medium "
          htmlFor="email"
        >
          Email address
        </label>
        <input
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          id="email"
          name="email"
          type="email"
        />
        <ErrorMessage message={errorMessage?.email} />
        <ErrorMessage message={errorMessage?.AuthError} />

      </div>
      <div>
        <label
          className="block text-sm font-medium "
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          id="password"
          name="password"
          type="password"
        />
        <ErrorMessage message={errorMessage?.password} />
      </div>
      <div>
        <label
          className="block text-sm font-medium "
          htmlFor="confirm-password"
        >
          Confirm Password
        </label>
        <input
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          id="confirm-password"
          name="confirm-password"
          type="password"
        />
        <ErrorMessage message={errorMessage?.confirmPassword} />
      </div>

      <div>
        <label
          className="block text-sm font-medium "
          htmlFor="confirm-password"
        >
          Phone Number
        </label>
        <div className='mt-1'>
          <PhoneInput
            value={phoneNumber}
            onChange={setPhoneNumber}
            onCountryChange={setCountryCode}
            placeholder="Enter a phone number"
          />
        </div>
        <ErrorMessage message={errorMessage?.phoneNumber} />
        <ErrorMessage message={errorMessage?.countryCode} />

      </div>

      <RegisterButton />
    </form>
  );
}
