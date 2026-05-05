import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-base text-[#B6661B] font-semibold tracking-wide uppercase">Get In Touch</h2>
          <h1 className="mt-2 text-4xl font-extrabold text-[#1D6527] tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Have questions about our courses or platform? We're here to help you string your path to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#f0f8f1] rounded-3xl p-10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#1D6527] mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1D6527] text-[#EDC633]">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Our Office</h4>
                    <p className="mt-1 text-gray-600">
                      Bole Medhanialem, Century Mall Bldg<br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1D6527] text-[#EDC633]">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Phone</h4>
                    <p className="mt-1 text-gray-600">
                      +251 911 234 567<br />
                      Mon-Fri, 9am to 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1D6527] text-[#EDC633]">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Email</h4>
                    <p className="mt-1 text-gray-600">
                      hello@letibeb.edu<br />
                      support@letibeb.edu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-100"
          >
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#1D6527] focus:border-[#1D6527] border-gray-300 rounded-md bg-gray-50 outline-none transition-colors border focus:bg-white"
                    placeholder="Abebe Bekele"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#1D6527] focus:border-[#1D6527] border-gray-300 rounded-md bg-gray-50 outline-none transition-colors border focus:bg-white"
                    placeholder="abebe@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#1D6527] focus:border-[#1D6527] border-gray-300 rounded-md bg-gray-50 outline-none transition-colors border focus:bg-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#B6661B] hover:bg-[#9a5515] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B6661B] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
