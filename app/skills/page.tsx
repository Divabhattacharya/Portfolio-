import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Globe, Cpu, LineChart, BrainCircuit, Server, Layers } from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Skills
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Code className="h-6 w-6 mr-3 text-purple-400 animate-pulse-slow" />
                <h2 className="text-2xl font-semibold text-purple-400">Programming Languages</h2>
              </div>

              <div className="space-y-6">
                {[
                  { name: "Python", level: 90 },
                  { name: "C++", level: 85 },
                  { name: "JavaScript", level: 70 },
                  { name: "HTML/CSS", level: 75 },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="space-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-shimmer"
                        style={{ width: "0%", transition: "width 1.5s ease-in-out" }}
                        onAnimationEnd={(e) => {
                          e.currentTarget.style.width = `${skill.level}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Science & ML */}
          <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-up animation-delay-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <BrainCircuit className="h-6 w-6 mr-3 text-purple-400 animate-pulse-slow" />
                <h2 className="text-2xl font-semibold text-purple-400">Data Science & ML</h2>
              </div>

              <div className="space-y-6">
                {[
                  { name: "Machine Learning", level: 85 },
                  { name: "Natural Language Processing", level: 80 },
                  { name: "Computer Vision", level: 75 },
                  { name: "Data Analysis", level: 85 },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="space-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${0.2 * index + 0.5}s` }}
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-shimmer"
                        style={{ width: "0%", transition: "width 1.5s ease-in-out" }}
                        onAnimationEnd={(e) => {
                          e.currentTarget.style.width = `${skill.level}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Web Development */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 mr-3 text-purple-400" />
                <h2 className="text-2xl font-semibold text-purple-400">Web Development</h2>
              </div>

              <div className="space-y-6">
                {[
                  { name: "HTML", level: 80 },
                  { name: "CSS", level: 75 },
                  { name: "JavaScript", level: 70 },
                  { name: "Express", level: 65 },
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-gray-800"
                      indicatorClassName="bg-gradient-to-r from-purple-600 to-pink-600"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Layers className="h-6 w-6 mr-3 text-purple-400" />
                <h2 className="text-2xl font-semibold text-purple-400">Tools & Technologies</h2>
              </div>

              <div className="space-y-6">
                {[
                  { name: "TensorFlow/Keras", level: 80 },
                  { name: "Scikit-learn", level: 85 },
                  { name: "MongoDB", level: 70 },
                  { name: "Git/GitHub", level: 75 },
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-gray-800"
                      indicatorClassName="bg-gradient-to-r from-purple-600 to-pink-600"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Concepts */}
        <div className="mt-12 animate-fade-in-up animation-delay-600">
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">Core Concepts</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: <Cpu className="animate-spin-slow" />, name: "Data Structures & Algorithms" },
              { icon: <Layers className="animate-pulse-slow" />, name: "Object-Oriented Programming" },
              { icon: <BrainCircuit className="animate-pulse-slow" />, name: "Machine Learning" },
              { icon: <Globe className="animate-spin-slow" />, name: "Natural Language Processing" },
              { icon: <Database className="animate-pulse-slow" />, name: "Database Management" },
              { icon: <Server className="animate-pulse-slow" />, name: "Backend Development" },
              { icon: <LineChart className="animate-pulse-slow" />, name: "Data Analysis" },
              { icon: <Code className="animate-spin-slow" />, name: "Software Engineering" },
            ].map((concept, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-300 hover:translate-y-[-5px] animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index + 0.8}s` }}
              >
                <CardContent className="p-4 flex items-center">
                  <div className="mr-3 text-purple-400">{concept.icon}</div>
                  <span className="text-gray-300">{concept.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

