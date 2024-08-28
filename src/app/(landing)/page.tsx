'use client'
import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Lenis from 'lenis';
import create from '/public/images/demos/create.png';
import Testimonials from './(components)/testimonials';
import Services from './(components)/services/services';

export default function Landing() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$29',
      period: 'per month',
      features: [
        '10 Appointments per month',
        'Basic patient management',
        'Email support',
        'WhatsApp notifications',
      ],
      color: 'from-teal-400 to-teal-600',
      recommended: false,
    },
    {
      name: 'Standard Plan',
      price: '$49',
      period: 'per month',
      features: [
        '50 Appointments per month',
        'Advanced patient management',
        'WhatsApp notifications',
        'Priority email support',
      ],
      color: 'from-teal-500 to-teal-700',
      recommended: true,
    },
    {
      name: 'Premium Plan',
      price: '$99',
      period: 'per month',
      features: [
        'Unlimited Appointments',
        'Full patient management',
        'WhatsApp notifications and reminders',
        '24/7 Phone support',
      ],
      color: 'from-teal-600 to-teal-800',
      recommended: false,
    },
  ];
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="flex min-h-screen flex-col  bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background text-white">
        {/* <div className="absolute inset-0">
          <Image
            alt="Hero Background"
            className="opacity-50"
            layout="fill"
            objectFit="cover"
            src="/hero-background.jpg"
          />
        </div> */}

        <div className="container relative z-10 mx-auto py-16 text-center md:py-32">
          <h1 className="mb-6 pl-5 text-start text-5xl font-extrabold leading-tight text-transparent text-white sm:text-center md:text-7xl">
            Effortlessly Manage <br />{' '}
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Patient Appointments
            </span>
          </h1>
          <p className="mb-8 pl-5 text-start text-lg text-gray-200 sm:text-center md:text-2xl">
            Streamline your patient appointments <br /> with our intuitive
            dashboard and seamless WhatsApp API integration.
          </p>
          <div className="ml-5  flex sm:block">
            <Button
              as={Link}
              href='/register'
              className=" rounded-lg bg-teal-500  py-4 text-lg font-semibold text-gray-900 shadow-lg transition duration-300 hover:bg-teal-600"
              size="lg"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Services />

      {/* <section className="md:px-36 px-5 py-16 light:bg-default">
        <div className="container mx-auto ">
          <h2 className="mb-8 text-center text-4xl font-semibold text-gray-800">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-teal-700">
                Appointment Scheduling
              </h3>
              <p className="text-gray-600">
                The secretary schedules an appointment using the dashboard.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-teal-700">
                WhatsApp Notifications
              </h3>
              <p className="text-gray-600">
                Patients receive appointment details instantly via WhatsApp.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-teal-700">
                Automated Reminders
              </h3>
              <p className="text-gray-600">
                Patients receive automatic reminders about their appointments.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-teal-700">
                Real-Time Updates
              </h3>
              <p className="text-gray-600">
                Patients are promptly informed of any delays or changes.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-teal-700">
                Appointment Management
              </h3>
              <p className="text-gray-600">
                Patients can cancel or reschedule appointments via WhatsApp.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-teal-700">
                Patient Management
              </h3>
              <p className="text-gray-600">
                Doctors and secretaries can easily manage patient information.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Visuals Section */}
      <section className="bg-teal-50 px-10 py-16">
        <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
          <div className="mt-8 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Why WhatsApp API?
            </h2>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center w-full">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
                <div className="flex justify-center mb-4">
                  {/* SVG Icon for Efficient Communication */}
                  <svg className="h-12 w-12 text-teal-800" fill="none" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>communication / 15 - communication, bubble, message, text, chat, comment, talk, speech icon</title> <g id="Free-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"> <g transform="translate(-1191.000000, -156.000000)" id="Group" stroke="#33d17a" stroke-width="2"> <g transform="translate(1189.000000, 154.000000)" id="Shape"> <path d="M8.6109715,18.5930706 L4.8,21 L5.46773712,16.7827129 C3.88371393,15.3227187 3,13.2946794 3,11.0526316 C3,6.60528596 6.4771525,3 12,3 C17.5228475,3 21,6.60528596 21,11.0526316 C21,15.4999772 17.5228475,19.1052632 12,19.1052632 C10.7621927,19.1052632 9.62714465,18.9241626 8.6109715,18.5930706 L8.6109715,18.5930706 Z"> </path> <line x1="9" y1="9" x2="15" y2="9"> </line> <line x1="9" y1="13" x2="12" y2="13"> </line> </g> </g> </g> </g></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-teal-800">
                  Efficient Communication
                </h3>
                <p className="text-gray-700">
                  Reliable and instant communication for appointment management.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
                <div className="flex justify-center mb-4">
                  {/* SVG Icon for Guaranteed Delivery */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#57e389"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#57e389" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path></g></svg>                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-teal-800">
                  Guaranteed Delivery
                </h3>
                <p className="text-gray-700">
                  100% delivery rate for appointment details, reminders, and updates.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
                <div className="flex justify-center mb-4">
                  {/* SVG Icon for Enhanced Connectivity */}
                  <svg className="h-12 w-12 text-teal-800" fill="none" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>connection_pattern [#1104]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -3319.000000)" fill="#33d17a"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M181.671247,3176.67125 C181.280112,3177.06238 180.644268,3177.06238 180.253134,3176.67125 C179.862,3176.28011 179.862,3175.64427 180.253134,3175.25313 C180.644268,3174.862 181.280112,3174.862 181.671247,3175.25313 C182.062381,3175.64427 182.062381,3176.28011 181.671247,3176.67125 M174.709056,3169.70906 C174.317922,3170.10019 173.682078,3170.10019 173.290944,3169.70906 C172.899809,3169.31792 172.899809,3168.68208 173.290944,3168.29094 C173.682078,3167.89981 174.317922,3167.89981 174.709056,3168.29094 C175.100191,3168.68208 175.100191,3169.31792 174.709056,3169.70906 M167.717782,3176.70033 C167.326647,3177.09147 166.690803,3177.09147 166.299669,3176.70033 C165.908535,3176.3092 165.908535,3175.67335 166.299669,3175.28222 C166.690803,3174.89108 167.326647,3174.89108 167.717782,3175.28222 C168.108916,3175.67335 168.108916,3176.3092 167.717782,3176.70033 M167.746866,3162.74687 C167.356735,3163.138 166.719888,3163.138 166.328753,3162.74687 C165.937619,3162.35573 165.937619,3161.71989 166.328753,3161.32875 C166.719888,3160.93762 167.356735,3160.93762 167.746866,3161.32875 C168.138,3161.71989 168.138,3162.35573 167.746866,3162.74687 M180.282218,3161.29967 C180.673353,3160.90853 181.309197,3160.90853 181.700331,3161.29967 C182.091465,3161.6908 182.091465,3162.32665 181.700331,3162.71778 C181.309197,3163.10892 180.673353,3163.10892 180.282218,3162.71778 C179.891084,3162.32665 179.891084,3161.6908 180.282218,3161.29967 M179.674456,3173.25534 L176.70685,3170.28773 C177.201284,3169.36506 177.093973,3168.52763 176.70685,3167.71227 L179.70354,3164.71457 C180.82078,3165.24611 182.193762,3165.06158 183.118443,3164.13589 C184.293852,3162.96149 184.293852,3161.05596 183.118443,3159.88156 C181.944038,3158.70615 180.038512,3158.70615 178.864106,3159.88156 C177.939424,3160.80624 177.753886,3162.17922 178.285428,3163.29646 L175.287734,3166.29415 C174.47237,3165.90603 173.634941,3165.79872 172.712266,3166.29415 L169.74466,3163.32655 C170.160867,3162.32364 170.090663,3160.83532 169.165981,3159.91064 C167.990573,3158.73523 166.085047,3158.73523 164.910641,3159.91064 C163.735232,3161.08605 163.735232,3162.99057 164.910641,3164.16598 C165.835322,3165.09066 167.323639,3165.16087 168.326547,3164.74466 L171.294153,3167.71227 C170.798716,3168.63494 170.906027,3169.47237 171.294153,3170.28773 L168.29646,3173.28543 C167.17922,3172.75389 165.806238,3172.93942 164.881557,3173.86411 C163.706148,3175.03851 163.706148,3176.94404 164.881557,3178.11844 C166.055962,3179.29385 167.961488,3179.29385 169.135894,3178.11844 C170.061579,3177.19376 170.246114,3175.82078 169.714572,3174.70354 L172.712266,3171.70685 C173.52763,3172.09397 174.365059,3172.20128 175.287734,3171.70685 L178.25534,3174.67446 C177.840136,3175.67636 177.909337,3177.16468 178.835022,3178.08936 C180.009427,3179.26477 181.914953,3179.26477 183.089359,3178.08936 C184.264768,3176.91495 184.264768,3175.00943 183.089359,3173.83502 C182.164678,3172.90934 180.676361,3172.83913 179.674456,3173.25534" id="connection_pattern-[#1104]"> </path> </g> </g> </g> </g></svg>                </div>
                <h3 className="text-xl font-semibold mb-4 text-teal-800">
                  Enhanced Connectivity
                </h3>
                <p className="text-gray-700">
                  Improve patient satisfaction and engagement through seamless communication.
                </p>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <Image
                alt="Dashboard Mockup"
                className="rounded-lg shadow-xl"
                src={create}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <Testimonials/>
      {/* <section className="bg-white md:px-36 px-5  py-16">
        <div className="container mx-auto ">
          <h2 className="mb-8 text-center text-4xl font-semibold text-gray-800">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-6 rounded-lg bg-gray-100 p-6 shadow-lg md:mb-0">
              <p className="mb-4 text-gray-600">
                This platform has revolutionized how we manage patient
                appointments. The WhatsApp notifications have reduced no-shows
                significantly!
              </p>
              <p className="font-semibold text-gray-700">Dr. Jane Smith</p>
              <p className="text-gray-500">General Practitioner</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <p className="mb-4 text-gray-600">
                The dashboard is intuitive, and the automated reminders keep our
                patients informed. It&apos;s a game changer for our practice!
              </p>
              <p className="font-semibold text-gray-700">Dr. John Doe</p>
              <p className="text-gray-500">Dentist</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Plans Cars Section */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Choose the Perfect Plan for Your Practice
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Simple, transparent pricing that grows with you
            </p>
          </div>

          <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative ${plan.recommended ? 'bg-white shadow-2xl scale-105 z-10' : 'bg-white shadow-lg'
                  } rounded-2xl`}
              >
                <div className="p-8">
                  <h3
                    className={`text-2xl font-semibold text-gray-900 ${plan.recommended ? 'text-center' : ''
                      }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.recommended && (
                    <p className="absolute top-0 py-1.5 px-4 bg-teal-500 text-white text-sm rounded-full transform -translate-y-1/2">
                      Most Popular
                    </p>
                  )}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-xl font-semibold">{plan.period}</span>
                  </p>
                  <ul className="mt-6 space-y-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex">
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-teal-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pb-8 px-6">
                  <Button
                    className={`w-full py-3 px-6 rounded-md text-white bg-gradient-to-r ${plan.color} hover:opacity-90 transition duration-300`}
                  >
                    Choose {plan.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-900 py-8 text-center text-white">
        <p className="mb-4 text-lg">
          Ready to transform your appointment management?
        </p>
        <Button
          as={Link}
          href='/login'
          className="rounded-lg bg-teal-500 py-3  font-bold text-gray-900 shadow-lg transition duration-300 hover:bg-teal-600"
          size="lg"
        >
          Get Started
        </Button>
        <div className="mt-4 text-gray-400">
          © 2024 <a className='hover:text-green-600' href='https://totaltechtn.com/'>totaltechtn</a>. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

// <section className="bg-teal-50  py-16">
//   <h2 className="mb-8 text-center text-4xl font-semibold text-gray-800">
//     Our Plans
//   </h2>
//   <div className="flex flex-wrap justify-center gap-8">
//     {plans.map((plan) => (
//       <Card
//         key={plan.name}
//         className=" flex  max-w-xs   transform flex-col  justify-between rounded-lg shadow-lg transition hover:scale-105"
//       >
//         <div className="flex  flex-col   gap-4 px-6 py-4">
//           <div className="flex items-center justify-between">
//             <h2 className={`text-2xl font-bold text-${plan.color}`}>
//               {plan.name}
//             </h2>
//             <span className="text-xl font-medium text-gray-500">
//               ${plan.price}
//             </span>
//           </div>
//           <p className="text-lg text-gray-700">{plan.description}</p>
//           <ul className="list-none space-y-2">
//             {plan.features.map((feature, index) => (
//               <li key={index}>
//                 <svg
//                   className="mr-2 inline h-4 w-4 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     clipRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.74-5.74a.75.75 0 00-1.06-1.06l-1.25 1.25a.75.75 0 101.06 1.06zM8 14a1 1 0 100-2 1 1 0 000 2z"
//                     fillRule="evenodd"
//                   />
//                 </svg>
//                 {feature}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <Button
//           className={`m-5 rounded bg-green-500  px-4 py-2 font-bold text-white hover:bg-${plan.hoverColor} transition-colors`}
//         >
//           Choose {plan.name.split(' ')[0]}
//         </Button>
//       </Card>
//     ))}
//   </div>
// </section>
