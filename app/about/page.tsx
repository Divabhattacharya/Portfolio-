import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in-up">
          About Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-xl overflow-hidden border-4 border-purple-600 shadow-lg shadow-purple-500/20 animate-fade-in-up">
                <div className="absolute inset-0 bg-purple-500/10 animate-shimmer"></div>
                <Image 
  alt="Profile Image"
  src="/WhatsApp%20Image%202025-03-18%20at%2019.14.59_4f72607b.jpg" 
  width={400}
  height={400}
  className="w-full h-auto rounded-xl border-4 border-purple-600 shadow-lg shadow-purple-500/20 animate-pulse"
/>
              </div>

              <div className="mt-8 space-y-4 bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-800 transition-all duration-500 animate-fade-in-up animation-delay-300">
                <h3 className="text-xl font-semibold text-purple-400">Personal Info</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 hover:translate-x-1 transition-transform duration-300">
                    <span className="text-gray-500">Name:</span> Diva Bhattacharya
                  </p>
                  <p className="text-gray-300 hover:translate-x-1 transition-transform duration-300">
                    <span className="text-gray-500">Email:</span> divasujoy@gmail.com
                  </p>
                  <p className="text-gray-300 hover:translate-x-1 transition-transform duration-300">
                    <span className="text-gray-500">Phone:</span> +91 8900144950
                  </p>
                  <p className="text-gray-300 hover:translate-x-1 transition-transform duration-300">
                    <span className="text-gray-500">Location:</span> Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-right">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Who I Am</h2>
                <p className="text-gray-300 leading-relaxed">
                  I am Diva Bhattacharya, a passionate student pursuing a dual education in Electrical Engineering at
                  Netaji Subhas University of Technology, Delhi and Data Science at the Indian Institute of Technology,
                  Madras. With a strong academic background and a CGPA of 7.5 and 8.0 respectively, I am dedicated to
                  expanding my knowledge and skills in these fields.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  My journey in technology began early, with a strong foundation in mathematics and science. I have
                  consistently excelled academically, standing in the top 5% of my class in grade 12 and 2nd in my class
                  in grade 10. My academic achievements include clearing the JEE Advanced examination, a significant
                  milestone in my educational journey.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-right animation-delay-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">My Interests</h2>
                <p className="text-gray-300 leading-relaxed">
                  My technical interests lie in the fields of Artificial Intelligence, Machine Learning, and Computer
                  Vision. I am particularly fascinated by how these technologies can be applied to solve real-world
                  problems and improve people's lives. My projects, including an AI-driven Resume Screening System and
                  an AI-powered Object Detection & Tracking Drone, reflect my passion for these areas.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Beyond technology, I have diverse interests and achievements in sports and arts. I have represented
                  West Bengal at the 55th National Roller Sports Championship in Speed Skating and won medals at the
                  state level. I hold a Black Belt (1st Dan) in Karate and have won medals in swimming. I am also
                  accomplished in cultural activities, having passed examinations in Bharatnatyam (Indian classical
                  dance) and Western Dance.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["AI & ML", "Computer Vision", "Robotics", "Skating", "Karate", "Swimming", "Dance", "Writing"].map(
                    (badge, index) => (
                      <Badge
                        key={index}
                        className="bg-purple-900/50 hover:bg-purple-800 text-purple-200 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${0.1 * index + 0.5}s` }}
                      >
                        {badge}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-right animation-delay-600">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Leadership</h2>
                <p className="text-gray-300 leading-relaxed">
                  I have demonstrated leadership abilities throughout my academic journey. I served as the School Girls'
                  Captain from 2019 to 2020, where I developed skills in team management, event organization, and
                  effective communication. Currently, I am the Captain of the University Basketball Team, a role that
                  has further enhanced my leadership capabilities.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  These leadership experiences have taught me the importance of teamwork, effective communication, and
                  decision-making under pressure. I believe these skills are invaluable not only in academic and
                  professional settings but also in personal growth and development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

