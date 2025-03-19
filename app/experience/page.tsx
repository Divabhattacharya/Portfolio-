import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Experience
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-800"></div>

            {/* IIT Kharagpur Internship */}
            <div className="relative pl-12 pb-12">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-white" />
              </div>

              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-purple-400">Intern</h2>
                    <div className="flex items-center space-x-2 mt-2 md:mt-0">
                      <Badge className="bg-purple-900/50 text-purple-200">
                        <Calendar className="h-3 w-3 mr-1" /> Oct 2021 - Nov 2021
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-400 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>IIT Kharagpur, Department of Computer Science</span>
                  </div>

                  <p className="text-gray-300 mb-4">
                    Worked on Object-oriented Programming for Physics problems with Python under the Guidance of Prof.
                    Pabitra Mitra (Department of Computer Science and Engineering).
                  </p>

                  <div className="space-y-3 mt-6">
                    <h3 className="text-lg font-medium text-gray-200">Responsibilities & Achievements:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                      <li>Implemented object-oriented solutions for complex physics problems</li>
                      <li>Developed simulation models using Python for various physical phenomena</li>
                      <li>Collaborated with research team to optimize algorithms and improve performance</li>
                      <li>Documented code and created user guides for future reference</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge className="bg-gray-800 text-gray-300">Python</Badge>
                    <Badge className="bg-gray-800 text-gray-300">OOP</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Physics Simulations</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Research</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Experience (if any) can be added here */}
          </div>

          {/* Volunteer Experience */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-6 text-purple-400">Leadership Experience</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-200 mb-2">School Girls' Captain</h3>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2019 - 2020</span>
                  </div>
                  <p className="text-gray-300">
                    Led the girls' student body, organized events, coordinated with faculty, and represented student
                    concerns to the administration.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-200 mb-2">University Basketball Team Captain</h3>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Present</span>
                  </div>
                  <p className="text-gray-300">
                    Currently leading the university basketball team, coordinating training sessions, developing game
                    strategies, and representing the team in competitions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

