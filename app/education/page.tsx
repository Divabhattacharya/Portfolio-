import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, School } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Education
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-800"></div>

            {/* Higher Education */}
            <div className="relative pl-12 pb-12">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-white" />
              </div>

              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-purple-400">B.Tech in Electrical Engineering</h2>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-purple-900/50 text-purple-200">2023-2027</Badge>
                      <Badge className="bg-purple-900/50 text-purple-200">CGPA: 7.5</Badge>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-400 mb-4">
                    <School className="h-4 w-4 mr-2" />
                    <span>Netaji Subhas University of Technology, Delhi</span>
                  </div>

                  <p className="text-gray-300 mb-4">
                    Currently pursuing a Bachelor of Technology in Electrical Engineering with a focus on electronics,
                    power systems, and control systems. Actively participating in technical projects and research
                    opportunities.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gray-800 text-gray-300">Circuit Design</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Power Systems</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Control Systems</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Embedded Systems</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Parallel Education */}
            <div className="relative pl-12 pb-12">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-white" />
              </div>

              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-purple-400">B.Sc in Data Science</h2>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-purple-900/50 text-purple-200">2023-2027</Badge>
                      <Badge className="bg-purple-900/50 text-purple-200">CGPA: 8.0</Badge>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-400 mb-4">
                    <School className="h-4 w-4 mr-2" />
                    <span>Indian Institute of Technology, Madras</span>
                  </div>

                  <p className="text-gray-300 mb-4">
                    Simultaneously pursuing a Bachelor of Science in Data Science, focusing on machine learning,
                    statistical analysis, and data visualization. Developing skills in programming, algorithms, and
                    data-driven decision making.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gray-800 text-gray-300">Machine Learning</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Data Analysis</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Statistics</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Python</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* High School */}
            <div className="relative pl-12 pb-12">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>

              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-purple-400">CBSE Class XII</h2>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-purple-900/50 text-purple-200">2022</Badge>
                      <Badge className="bg-purple-900/50 text-purple-200">92.6%</Badge>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-400 mb-4">
                    <School className="h-4 w-4 mr-2" />
                    <span>Vivekanand School, Delhi</span>
                  </div>

                  <p className="text-gray-300 mb-4">
                    Completed senior secondary education with a focus on Physics, Chemistry, and Mathematics. Ranked in
                    the top 5% of the class and participated in various extracurricular activities.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gray-800 text-gray-300">Physics</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Chemistry</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Mathematics</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Middle School */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>

              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-purple-400">CBSE Class X</h2>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-purple-900/50 text-purple-200">2020</Badge>
                      <Badge className="bg-purple-900/50 text-purple-200">98%</Badge>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-400 mb-4">
                    <School className="h-4 w-4 mr-2" />
                    <span>DAV Model School, IIT Kharagpur</span>
                  </div>

                  <p className="text-gray-300 mb-4">
                    Completed secondary education with an outstanding academic performance, standing 2nd in the class.
                    Developed a strong foundation in science and mathematics while actively participating in sports and
                    cultural activities.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gray-800 text-gray-300">Science</Badge>
                    <Badge className="bg-gray-800 text-gray-300">Mathematics</Badge>
                    <Badge className="bg-gray-800 text-gray-300">English</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6 text-purple-400">Academic Achievements</h2>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Award className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">JEE Advanced Qualification</h3>
                      <p className="text-gray-400">
                        Successfully cleared the prestigious JEE Advanced examination, securing admission to top
                        engineering institutions in India.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Award className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Top 5% in Class XII</h3>
                      <p className="text-gray-400">
                        Ranked among the top 5% of students in the graduating class of 2022 at Vivekanand School, Delhi.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Award className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">2nd Rank in Class X</h3>
                      <p className="text-gray-400">
                        Secured the 2nd position in the entire class for the CBSE Class X examinations with an
                        exceptional score of 98%.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

