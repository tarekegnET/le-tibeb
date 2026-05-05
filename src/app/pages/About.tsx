import { motion } from "motion/react";
import heroImage from "../../imports/Vector.png";

export function About() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base text-[#B6661B] font-semibold tracking-wide uppercase">Our Story</h2>
            <h1 className="mt-2 text-4xl font-extrabold text-[#1D6527] tracking-tight sm:text-5xl">
              ለጥበብ (For Wisdom)
            </h1>
            <p className="mt-6 text-lg text-gray-500">
              The name <strong className="text-gray-900 font-semibold">ለጥበብ</strong> directly translates to "For Wisdom". 
              It draws its deep cultural meaning from <strong className="text-[#1D6527]">ጥበብ</strong> (Tibeb), the traditional Ethiopian dress 
              known for its intricate, handwoven patterns and vibrant colors.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Just like the careful, deliberate process of weaving a Tibeb dress, we believe education requires patience, precision, and artistry. 
              Our primary colors reflect this rich heritage: 
              <span className="font-semibold text-[#1D6527]"> Deep Green</span>, 
              <span className="font-semibold text-[#B6661B]"> Earthy Orange</span>, and 
              <span className="font-semibold text-[#EDC633]"> Vibrant Gold</span>. 
              These colors symbolize growth, rich cultural soil, and the illumination of the mind through wisdom.
            </p>
            <div className="mt-8 border-l-4 border-[#EDC633] pl-6 italic text-gray-700 text-xl">
              "Education is not the filling of a pail, but the lighting of a fire—a fire that shines as bright as the threads of Tibeb."
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0 relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[#B6661B] opacity-20 mix-blend-multiply"></div>
            <img
              src={heroImage}
              alt="Traditional Ethiopian Dress (Tibeb)"
              className="w-full h-full object-cover"
              style={{ maxHeight: "600px" }}
            />
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f0f8f1] p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-[#1D6527] mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To weave the world's best educational content with localized cultural understanding, empowering students across Ethiopia and beyond to achieve their full potential through accessible, high-quality e-learning.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#fcf0e5] p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-[#B6661B] mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the premier digital learning platform that honors traditional wisdom while equipping the next generation with cutting-edge skills for the global economy.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
