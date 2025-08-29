import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-neutral flex flex-col items-center text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-primary">
          Your Simple Gateway to US Travel
        </h1>
        <p className="max-w-2xl text-lg mb-8 text-gray-700">
          EasyASTA streamlines the Electronic System for Travel Authorization (ESTA) application process.
          Apply in minutes, securely submit your information, and receive status updates—all in one place.
        </p>
        <Link
          href="/apply"
          className="inline-block bg-accent text-white px-6 py-3 rounded-md text-lg font-medium shadow-md hover:bg-accent-dark"
        >
          Start Your Application
        </Link>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Why choose EasyASTA?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-primary">Fast & Simple</h3>
            <p>Our intuitive form guides you through each step so you can complete your application in minutes.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-primary">Secure & Private</h3>
            <p>We encrypt sensitive information at rest and in transit. Your data is handled with care.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-primary">Expert Support</h3>
            <p>Need help? Our team is here to assist you via email. We’re independent and not affiliated with the US government.</p>
          </div>
        </div>
      </section>

      {/* Call to action Section */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to travel?</h2>
        <p className="mb-6">Start your ESTA application today and receive your authorization quickly.</p>
        <Link
          href="/apply"
          className="inline-block bg-accent text-white px-6 py-3 rounded-md text-lg font-medium shadow-md hover:bg-accent-dark"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
}