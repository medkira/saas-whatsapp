'use client'
import React from 'react';
import { Button } from '@nextui-org/button';
import Image from 'next/legacy/image';
import Link from 'next/link';
import home from '/public/images/demos/home.png';

export default function FeaturesPage() {
  const features = [
    {
      title: "Patient Management",
      description: "Easily add and manage patient profiles in your personalized dashboard.",
      icon: "👤"
    },
    {
      title: "Appointment Scheduling",
      description: "Schedule appointments for your patients with just a few clicks.",
      icon: "📅"
    },
    {
      title: "Automated WhatsApp Reminders",
      description: "Send automated reminders to patients via WhatsApp before and on the day of their appointment.",
      icon: "📱"
    },
    {
      title: "Customizable Reminder Times",
      description: "Set reminders to be sent at 7 AM and 7 PM for optimal patient engagement.",
      icon: "⏰"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-teal-900 to-teal-700 text-white py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-white">
              Powerful Features
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-teal-100">
            Streamline Your Practice with Our WhatsApp Appointment Management Solution
          </p>
          <div className="animate-bounce mt-8">
            <svg className="w-8 h-8 mx-auto text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
      {/* Main Features */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-teal-50 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
          <ol className="space-y-6">
            <li className="flex items-center">
              <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</span>
              <p>Add your patient's information to your secure dashboard.</p>
            </li>
            <li className="flex items-center">
              <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</span>
              <p>Schedule an appointment for the patient using our intuitive interface.</p>
            </li>
            <li className="flex items-center">
              <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</span>
              <p>Our system automatically sends a WhatsApp reminder the day before the appointment at 7 PM.</p>
            </li>
            <li className="flex items-center">
              <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">4</span>
              <p>On the day of the appointment, another reminder is sent at 7 AM.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Intuitive Dashboard</h2>
          <div className="bg-gray-200 p-4 rounded-lg">
            {/* Replace with actual dashboard screenshot */}
            <Image
              alt="Dashboard Mockup"
              className="rounded-lg shadow-xl"
              src={home}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-teal-900 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Benefits</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Reduce no-shows with timely WhatsApp reminders
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Save time on appointment management and follow-ups
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Improve patient satisfaction with convenient reminders
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Streamline your practice's workflow
            </li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Practice?</h2>
        <Button
          as={Link}
          href='/register'
          className="bg-teal-500 text-white hover:bg-teal-600 px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Start Your Free Trial
        </Button>
      </section>
    </main>
  );
}