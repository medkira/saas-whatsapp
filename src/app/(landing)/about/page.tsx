import React from 'react';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

// const teamMembers = [
//     { name: 'John Doe', role: 'Founder & CEO', image: '/john-doe.jpg' },
//     { name: 'Jane Smith', role: 'CTO', image: '/jane-smith.jpg' },
//     { name: 'Mike Johnson', role: 'Head of Customer Success', image: '/mike-johnson.jpg' },
//     // Add more team members as needed
// ];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <section className="bg-teal-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
                    <p className="text-2xl mb-8">Revolutionizing Healthcare Communication</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Our Mission</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
                        We're on a mission to streamline healthcare communication and improve patient engagement.
                        By leveraging WhatsApp's widespread adoption, we're making it easier for healthcare
                        providers to connect with their patients and reduce missed appointments.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Our Story</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        {/* <div className="md:w-1/2">
                            <Image
                                src="/company-story.jpg"
                                alt="Our Story"
                                width={500}
                                height={300}
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div> */}
                        <div className="md:w-1/2">
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Founded in 2022, our company was born out of a simple observation: too many patients
                                were missing their appointments due to forgetfulness or poor communication. We saw
                                an opportunity to leverage the power of WhatsApp to solve this problem.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Since then, we've been working tirelessly to develop a solution that's both powerful
                                and easy to use. Our team of dedicated professionals is committed to improving
                                healthcare outcomes one appointment at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-12 text-center">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
                                <Image
                                    src={member.image}
                                    alt={`${member.name} - ${member.role}`}
                                    width={150}
                                    height={150}
                                    objectFit="cover"
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Call to Action */}
            <section className="bg-teal-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Practice?</h2>
                    <p className="text-xl mb-8">Join us in revolutionizing healthcare communication.</p>
                    <Link href="/register" passHref>
                        <Button className="bg-white text-teal-800 hover:bg-teal-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
