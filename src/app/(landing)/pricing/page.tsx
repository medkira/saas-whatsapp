import React from 'react';
import { Button } from '@nextui-org/button';

export default function PricingSection() {
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

  return (
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
  );
};

