import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-base-100 py-16 px-4 pt-24">
      <div className="max-w-4xl mx-auto bg-base-200 rounded-xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

        {/* Mission Statement */}
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Mojo Bar is a healthy snack brand built for India’s wellness-conscious consumers. Launched in 2015 by Maulik Mistry, Chirag Bhatia, and Rima P. Mehta, we deliver real-ingredient, gluten‑free snacks that nourish both body and soul :contentReference.
        </p>

        {/* Core Values */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">What We Stand For</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Whole‑food ingredients—no preservatives or artificial flavors</li>
            <li>Rich in protein, fiber and antioxidants to fuel your day</li>
            <li>Gluten‑free & thoughtfully packaged</li>
            <li>Packed with taste, not compromises</li>
          </ul>
        </div>

        {/* Founders & History */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            Inspired by a healthy-living lifestyle, Mojo Bar’s founders left their corporate roles to build a premium snack brand in India. Starting from Mumbai, the brand quickly expanded to over 750+ outlets across major cities—including Bengaluru, Pune, Kolkata, Hyderabad, and Goa...
          </p>
        </div>

        {/* Vision */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To redefine snacking in India by offering delicious, nutritious, and convenient snacks that fit into a healthy, active lifestyle.
          </p>
        </div>

        {/* Call to Action & Social Links */}
        <div className="text-center">
          <p className="text-gray-700 mb-4">
            Want to learn more or connect with us? Visit our official site or follow us on social media.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://mojobars.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Official Site
            </a>
            <a
              href="https://www.facebook.com/MojoBars.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
