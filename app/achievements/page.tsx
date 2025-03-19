import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Medal, Star } from "lucide-react"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Achievements
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sports Achievements */}
          <div>
            <div className="flex items-center mb-6">
              <Trophy className="h-6 w-6 mr-3 text-purple-400" />
              <h2 className="text-2xl font-semibold text-purple-400">Sports</h2>
            </div>

            <div className="space-y-4">
              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Medal className="h-5 w-5 mr-3 mt-1 text-yellow-500" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-1">National Roller Sports Championship</h3>
                      <p className="text-gray-400 mb-2">
                        Represented West Bengal at the 55th National Roller Sports Championship (Speed Skating)
                        organized by the Sports Authority of India.
                      </p>
                      <Badge className="bg-purple-900/50 text-purple-200">National Level</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Medal className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-1">
                        West Bengal Roller Skating Championship
                      </h3>
                      <p className="text-gray-400 mb-2">
                        Won silver and bronze medals at the West Bengal Roller Skating Championship organized by the
                        Sports Authority of India.
                      </p>
                      <Badge className="bg-purple-900/50 text-purple-200">State Level</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Medal className="h-5 w-5 mr-3 mt-1 text-amber-700" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-1">Karate and Swimming</h3>
                      <p className="text-gray-400 mb-2">
                        Earned medals in Karate (Black Belt, 1st Dan) and swimming (School Zonal Gold & Silver).
                      </p>
                      <Badge className="bg-purple-900/50 text-purple-200">Multiple Disciplines</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Leadership & Cultural Achievements */}
          <div>
            <div className="flex items-center mb-6">
              <Star className="h-6 w-6 mr-3 text-purple-400" />
              <h2 className="text-2xl font-semibold text-purple-400">Leadership & Cultural</h2>
            </div>

            <div className="space-y-4">
              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 mr-3 mt-1 text-purple-400" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-1">School Girls' Captain</h3>
                      <p className="text-gray-400 mb-2">
                        Served as the School Girls' Captain from 2019 to 2020, demonstrating leadership and
                        organizational skills.
                      </p>
                      <Badge className="bg-purple-900/50 text-purple-200">Leadership</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 mr-3 mt-1 text-purple-400" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-1">University Basketball Team Captain</h3>
                      <p className="text-gray-400 mb-2">
                        Currently serving as the Captain of the University Basketball Team, leading the team in
                        competitions.
                      </p>
                      <Badge className="bg-purple-900/50 text-purple-200">Leadership</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 mr-3 mt-1 text-purple-400" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-1">Short Story Writing Competition</h3>
                      <p className="text-gray-400 mb-2">
                        Stood amongst the top hundred candidates of All India level Short Story writing competition- "In
                        search of Young Ruskin Bond," (November 2019).
                      </p>
                      <Badge className="bg-purple-900/50 text-purple-200">Creative Writing</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Other Achievements */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">Other Notable Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Award className="h-5 w-5 mr-3 mt-1 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-200 mb-1">Yog Challenge Contest</h3>
                    <p className="text-gray-400">
                      Won "Yog challenge contest" aired on India TV conducted by Swami Ram Dev at the international
                      level, July 2020.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Award className="h-5 w-5 mr-3 mt-1 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-200 mb-1">Dance Certifications</h3>
                    <p className="text-gray-400">
                      Passed 1st year in "Nritya Shree" (Bharatnatyam) (2020) and Grade 3 in Western Dance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

