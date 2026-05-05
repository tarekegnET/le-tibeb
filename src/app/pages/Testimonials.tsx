import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Betty Alemu",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1620831468075-db24ca183258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      content: "ለጥበብ completely changed my career trajectory. The instructors are genuinely invested in your success. The web development course was rigorous but immensely rewarding."
    },
    {
      name: "Tewodros Kassahun",
      role: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      content: "As someone looking to transition into the tech space, the cultural relevance and localized examples made complex concepts so much easier to understand. Highly recommend!"
    },
    {
      name: "Helen Berhane",
      role: "Data Analyst",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      content: "The data science curriculum is world-class. Getting to learn from leading African professionals gave me the confidence to compete on a global scale."
    },
    {
      name: "Fitsum Worku",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      content: "The digital marketing course taught me strategies I implemented the very next day in my business. The ROI on these courses is unbelievable."
    }
  ];

  return (
    <div className="bg-[#f0f8f1] py-16 sm:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-base text-[#B6661B] font-semibold tracking-wide uppercase">Testimonials</h2>
          <h1 className="mt-2 text-4xl font-extrabold text-[#1D6527] tracking-tight sm:text-5xl">
            Success Stories
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our students who have woven their own success stories with the wisdom gained at ለጥበብ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-[#EDC633] relative"
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-[#f0f8f1]" />
              <div className="flex items-center space-x-4 mb-6 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#1D6527]"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-[#B6661B] text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Statistics highlights */}
        <div className="mt-20 bg-[#1D6527] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between shadow-xl text-white">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#EDC633]">98% Satisfaction Rate</h3>
            <p className="text-green-100 mt-2">Join thousands of happy learners shaping their future.</p>
          </div>
          <button className="bg-[#B6661B] hover:bg-[#9a5515] text-white font-bold py-3 px-8 rounded-lg shadow transition-colors w-full md:w-auto">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
