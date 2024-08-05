// app/page.tsx
import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import Image from 'next/legacy/image';

export default function Landing() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$29/month',
      color: 'green-500',
      hoverColor: 'green-700',
      description:
        'Ideal for small practices starting with patient appointment management.',
      features: [
        '10 Appointments per month',
        'Basic patient management',
        'Email support',
        'WhatsApp notifications',
      ],
    },
    {
      name: 'Standard Plan',
      price: '$49/month',
      color: 'green-500',
      hoverColor: 'green-700',
      description: 'Perfect for growing practices that need more features.',
      features: [
        '50 Appointments per month',
        'Advanced patient management',
        'WhatsApp notifications',
        'Priority email support',
      ],
    },
    {
      name: 'Premium Plan',
      price: '$99/month',
      color: 'green-500',
      hoverColor: 'green-700',
      description:
        'Best for large practices requiring comprehensive management.',
      features: [
        'Unlimited Appointments',
        'Full patient management',
        'WhatsApp notifications and reminders',
        '24/7 Phone support',
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col  bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-teal-900 text-white">
        {/* <div className="absolute inset-0">
          <Image
            alt="Hero Background"
            className="opacity-50"
            layout="fill"
            objectFit="cover"
            src="/hero-background.jpg"
          />
        </div> */}
        <div className="container relative z-10 mx-auto   py-16 text-center md:py-32">
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
              className=" rounded-lg bg-teal-500  py-4 text-lg font-semibold text-gray-900 shadow-lg transition duration-300 hover:bg-teal-600"
              size="lg"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-3 py-16 light:bg-default">
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
      </section>

      {/* Visuals Section */}
      <section className="bg-teal-50 px-10 py-16">
        <div className="container mx-auto flex flex-col items-center justify-center  md:flex-row">
          <div className="md:w-1/2">
            <Image
              alt="Dashboard Mockup"
              className="rounded-lg shadow-xl"
              // height={400}
              layout={'fill'}
              src="/dashboard-mockup.png"
              // width={600}
            />
          </div>
          <div className="mt-8 md:ml-8 md:mt-0 md:w-1/2">
            <h2 className="mb-4 text-3xl font-semibold text-gray-800">
              Why WhatsApp API?
            </h2>
            <ul className="list-inside list-disc space-y-4 text-gray-700">
              <li>
                <strong>Efficient Communication:</strong> Reliable and instant
                communication for appointment management.
              </li>
              <li>
                <strong>Guaranteed Delivery:</strong> 100% delivery rate for
                appointment details, reminders, and updates.
              </li>
              <li>
                <strong>Enhanced Connectivity:</strong> Improve patient
                satisfaction and engagement through seamless communication.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white px-3 py-16">
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
      </section>

      {/* Plans Cars Section */}
      <section className="bg-teal-50  py-16">
        <h2 className="mb-8 text-center text-4xl font-semibold text-gray-800">
          Our Plans
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className=" flex  max-w-xs   transform flex-col  justify-between rounded-lg shadow-lg transition hover:scale-105"
            >
              <div className="flex  flex-col   gap-4 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className={`text-2xl font-bold text-${plan.color}`}>
                    {plan.name}
                  </h2>
                  <span className="text-xl font-medium text-gray-500">
                    ${plan.price}
                  </span>
                </div>
                <p className="text-lg text-gray-700">{plan.description}</p>
                <ul className="list-none space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <svg
                        className="mr-2 inline h-4 w-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.74-5.74a.75.75 0 00-1.06-1.06l-1.25 1.25a.75.75 0 101.06 1.06zM8 14a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className={`m-5 rounded bg-${plan.color}  px-4 py-2 font-bold text-white hover:bg-${plan.hoverColor} transition-colors`}
              >
                Choose {plan.name.split(' ')[0]}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-900 py-8 text-center text-white">
        <p className="mb-4 text-lg">
          Ready to transform your appointment management?
        </p>
        <Button
          size="lg"
          className="rounded-lg bg-teal-500 py-3  font-bold text-gray-900 shadow-lg transition duration-300 hover:bg-teal-600"
        >
          Get Started
        </Button>
        <p className="mt-4 text-gray-400">
          © 2024 totaltechtn. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
