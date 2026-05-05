import { motion } from "motion/react";
import { Clock, Star, Users } from "lucide-react";

export function Courses() {
  const courses = [
    {
      title: "Full-Stack Web Development",
      instructor: "Abebe Bekele",
      rating: 4.8,
      students: 1250,
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      price: "$99",
      image: "https://images.unsplash.com/photo-1762329352849-f4d0c9e7696a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tag: "Tech & Dev"
    },
    {
      title: "Data Science with Python",
      instructor: "Selamawit Tadesse",
      rating: 4.9,
      students: 840,
      duration: "10 Weeks",
      level: "Intermediate",
      price: "$85",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tag: "Data & AI"
    },
    {
      title: "Digital Marketing Strategy",
      instructor: "Dawit Yohannes",
      rating: 4.7,
      students: 2100,
      duration: "6 Weeks",
      level: "All Levels",
      price: "$45",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tag: "Business"
    },
    {
      title: "Graphic Design Masterclass",
      instructor: "Hana Asrat",
      rating: 4.9,
      students: 3450,
      duration: "8 Weeks",
      level: "Beginner",
      price: "$60",
      image: "https://images.unsplash.com/photo-1626785773985-946e96ebce37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tag: "Design"
    },
    {
      title: "Mobile App Development",
      instructor: "Kaleb Gebre",
      rating: 4.6,
      students: 950,
      duration: "14 Weeks",
      level: "Advanced",
      price: "$110",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tag: "Tech & Dev"
    },
    {
      title: "Financial Accounting Basics",
      instructor: "Martha Alemu",
      rating: 4.8,
      students: 1800,
      duration: "8 Weeks",
      level: "Beginner",
      price: "$50",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tag: "Business"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-[#1D6527] sm:text-4xl">Explore Our Courses</h2>
          <p className="mt-4 text-lg text-gray-500">
            A diverse selection of high-quality courses designed to accelerate your career. Find the perfect fit for your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1D6527] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {course.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-[#B6661B]">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-semibold">{course.rating}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Instructor: <span className="font-medium text-gray-900">{course.instructor}</span>
                </p>
                <div className="flex items-center text-sm text-gray-500 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5 text-[#1D6527]" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1.5 text-[#1D6527]" />
                    {course.students}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-[#1D6527]">{course.price}</span>
                  <button className="bg-[#EDC633] hover:bg-[#d6b02a] text-[#1D6527] font-semibold py-2 px-5 rounded-md transition-colors shadow-sm">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
