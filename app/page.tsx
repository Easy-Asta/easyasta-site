import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the chat widget so it's only rendered on the client.
const ChatWidget = dynamic(() => import('../components/ChatWidget'), { ssr: false });

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Apply for your U.S. ESTA with Ease</h1>
        <p className="text-lg mb-6">
          Fast, secure, and expert assistance with your travel authorization to the United States.
        </p>
        <Link
          href="/apply"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Apply Now
        </Link>
      </section>
      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Fast Approval</h3>
          <p>Applications processed quickly so you can focus on your travel plans.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Expert Support</h3>
          <p>Our agents review your application and answer your questions.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Secure Payments</h3>
          <p>Pay safely using Stripe or PayPal with no hidden fees.</p>
        </div>
      </section>
      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="p-4 bg-gray-100 rounded-lg">
            <p>
              “EasyAster made applying for my ESTA so straightforward. The support team was
              helpful and responsive.”
            </p>
            <cite className="block mt-2 text-sm text-gray-600">— Maria, Spain</cite>
          </blockquote>
          <blockquote className="p-4 bg-gray-100 rounded-lg">
            <p>
              “I was nervous about the process, but the application wizard guided me step by step
              and the chat answered all my questions.”
            </p>
            <cite className="block mt-2 text-sm text-gray-600">— James, United Kingdom</cite>
          </blockquote>
        </div>
      </section>
      {/* Floating chatbot widget */}
      <ChatWidget />
    </div>
  );
}