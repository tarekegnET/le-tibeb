import { motion } from "motion/react";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function Professionals() {
  const professionals = [
    {
      name: "Dr. Aster Girma",
      role: "Lead Tech Instructor",
      bio: "Former Google Engineer with 15+ years of experience in software development and technical leadership.",
      image: "https://images.unsplash.com/photo-1698827623362-f10eadf55a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      expertise: ["Full-Stack", "System Design"]
    },
    {
      name: "Prof. Yonas Tadesse",
      role: "Data Science Director",
      bio: "Renowned researcher in AI and Machine Learning. Passionate about bringing data literacy to Africa.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      expertise: ["Machine Learning", "Python"]
    },
    {
      name: "Lydia Mekonnen",
      role: "Head of Design",
      bio: "Award-winning UX/UI designer who has consulted for top Fortune 500 companies globally.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      expertise: ["UI/UX", "Product Design"]
    },
    {
      name: "Elias Belay",
      role: "Business Strategist",
      bio: "Serial entrepreneur and investor. Helps students turn their skills into thriving businesses.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      expertise: ["Marketing", "Entrepreneurship"]
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-base text-[#B6661B] font-semibold tracking-wide uppercase">Our Team</h2>
          <h1 className="mt-2 text-4xl font-extrabold text-[#1D6527] tracking-tight sm:text-5xl">
            Meet the Professionals
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Learn directly from industry leaders who are passionate about sharing their wisdom and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {professionals.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col items-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-full w-48 h-48 border-4 border-[#f0f8f1] group-hover:border-[#1D6527] transition-colors duration-300">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
              <p className="text-[#B6661B] font-medium mb-4">{person.role}</p>
              
              <div className="flex gap-2 mb-4">
                {person.expertise.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 text-center text-sm mb-6 flex-grow">{person.bio}</p>

              <div className="flex justify-center space-x-4 w-full pt-4 border-t border-gray-100">
                <a href="#" className="text-gray-400 hover:text-[#1D6527] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#B6661B] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#EDC633] transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Join CTA */}
        <div className="mt-24 bg-[#1D6527] rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Want to teach with us?</h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            We are always looking for passionate professionals to join our network. Share your knowledge and impact thousands of learners across the globe.
          </p>
          <button className="bg-[#EDC633] hover:bg-[#d6b02a] text-[#1D6527] font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
            Become an Instructor
          </button>
        </div>
      </div>
    </div>
  );
}
