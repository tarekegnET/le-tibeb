import { Link } from "react-router";
import { ArrowRight, BookOpen, GraduationCap, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.jpg";

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-[#FAFAFA] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="sm:text-center lg:text-left"
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Unlock Your Potential with</span>{" "}
                  <span className="block text-[#1D6527]">ለጥበብ (For Wisdom)</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Inspired by the vibrant colors of traditional Ethiopian dress (ጥበብ), we weave 
                  culture and modern e-learning into a transformative educational experience.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/courses"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1D6527] hover:bg-[#14471b] md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Explore Courses
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/about"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#1D6527] bg-[#f0f8f1] hover:bg-[#e1f0e3] md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Our Story
                    </Link>
                  </div>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-[#EDC633]">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90 mix-blend-multiply filter contrast-125"
            src={heroImage}
            alt="Ethiopian Dress Pattern"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1D6527] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Students", value: "10K+", icon: Users },
              { label: "Expert Professionals", value: "500+", icon: GraduationCap },
              { label: "Premium Courses", value: "1,200+", icon: BookOpen },
              { label: "Global Reach", value: "50+", icon: Globe },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="h-8 w-8 text-[#EDC633] mb-3" />
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="text-sm font-medium text-green-100 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-[#B6661B] font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Better Way to Learn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Culturally Rooted",
                description: "Education that respects its roots while reaching for the global standard. Just like the threads of a ጥበብ dress.",
                icon: Globe,
                color: "text-[#1D6527]",
                bg: "bg-[#e8f3ea]"
              },
              {
                title: "Expert Professionals",
                description: "Learn from industry leaders and passionate educators dedicated to your success and growth.",
                icon: GraduationCap,
                color: "text-[#B6661B]",
                bg: "bg-[#fcf0e5]"
              },
              {
                title: "Premium Content",
                description: "High-quality video courses, interactive exercises, and valuable resources for every discipline.",
                icon: BookOpen,
                color: "text-[#EDC633]",
                bg: "bg-[#fdf9e6]"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`p-4 rounded-full ${feature.bg} mb-6`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#EDC633] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-[#1D6527] sm:text-4xl">
              Ready to start your journey?
            </h2>
            <p className="mt-4 text-xl text-[#B6661B] font-medium">
              Join thousands of students weaving their future with ለጥበብ.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#B6661B] hover:bg-[#9a5515] transition-colors shadow-lg"
            >
              Browse Courses
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#1D6527] bg-white hover:bg-gray-50 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
