import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Printer, Share2 } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Resume
            </h1>

            <div className="flex space-x-2">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-950/30">
                <Printer className="mr-2 h-4 w-4" /> Print
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-950/30">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
          </div>

          <Card className="bg-white text-black">
            <CardContent className="p-8">
              {/* Resume Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 border-b border-gray-200 pb-8">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-600">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9AxgFBp0t1052YUXGKmOWFtF9hNW6r.png"
                    alt="Diva Bhattacharya"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-800">Diva Bhattacharya</h2>
                  <p className="text-lg text-gray-600 mt-1">Electrical Engineering & Data Science Student</p>

                  <div className="mt-4 space-y-1 text-gray-700">
                    <p>Mobile: +91 8900144950</p>
                    <p>Email: divasujoy@gmail.com</p>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                      <Link href="#" className="text-purple-600 hover:text-purple-800">
                        Leetcode
                      </Link>
                      <span className="text-gray-400">|</span>
                      <Link href="#" className="text-purple-600 hover:text-purple-800">
                        LinkedIn
                      </Link>
                      <span className="text-gray-400">|</span>
                      <Link href="#" className="text-purple-600 hover:text-purple-800">
                        Github
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Education</h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="text-lg font-semibold text-gray-800">B.Tech (Electrical Engineering)</h4>
                      <p className="text-gray-600">2023-2027</p>
                    </div>
                    <p className="text-gray-700">Netaji Subhas University of Technology, Delhi</p>
                    <p className="text-gray-600">CGPA: 7.5</p>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <h4 className="text-lg font-semibold text-gray-800">Bachelor of Science (Data Science)</h4>
                      <p className="text-gray-600">2023-2027</p>
                    </div>
                    <p className="text-gray-700">Indian Institute of Technology, Madras</p>
                    <p className="text-gray-600">CGPA: 8.0</p>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <h4 className="text-lg font-semibold text-gray-800">CBSE (Class XII)</h4>
                      <p className="text-gray-600">2022</p>
                    </div>
                    <p className="text-gray-700">Vivekanand School, Delhi</p>
                    <p className="text-gray-600">Percentage: 92.6%</p>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <h4 className="text-lg font-semibold text-gray-800">CBSE (Class X)</h4>
                      <p className="text-gray-600">2020</p>
                    </div>
                    <p className="text-gray-700">DAV Model School, IIT Kharagpur</p>
                    <p className="text-gray-600">Percentage: 98%</p>
                  </div>
                </div>
              </div>

              {/* Internship */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Internship</h3>

                <div>
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Intern, IIT Kharagpur, Department of Computer Science
                    </h4>
                    <p className="text-gray-600">October 2021 - November 2021</p>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Worked on Object-oriented Programming for Physics problems with Python under the Guidance of Prof.
                    Pabitra Mitra (Department of Computer Science and Engineering).
                  </p>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Projects</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Arduino-Based Remote Controlled Car</h4>
                    <p className="text-gray-700 mt-1">
                      Developed a remote controlled car with arduino microcontroller NRF24L01 Module that sends and
                      receives data and BLDC Motor with PWM control for speed control.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Technologies Used:</span>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-2">
                      <li>Arduino Microcontrollers: Central control for the car and remote.</li>
                      <li>NRF24L01 Module: Enables wireless communication.</li>
                      <li>BLDC Motor with PWM Control: Ensures efficient and precise speed management.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">AI-driven Resume Screening System</h4>
                    <p className="text-gray-700 mt-1">
                      Developed an AI-driven Resume Screening System to automate candidate evaluation based on skills,
                      experience, and education, enhancing recruitment accuracy, reducing bias, and streamlining hiring
                      processes for faster and objective decision-making.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Technologies Used:</span>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-2">
                      <li>
                        Machine Learning & NLP: Python with Scikit-learn, TensorFlow/Keras, NLTK, spaCy, and BERT for
                        resume analysis.
                      </li>
                      <li>Data Management: SQL and MongoDB for storing structured and unstructured data.</li>
                      <li>Deployment: Flask/Django with AWS/Google Cloud for scalability and real-time processing.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      AI-powered Object Detection & Tracking Drone
                    </h4>
                    <p className="text-gray-700 mt-1">
                      Designed and developed a UAV system leveraging YOLOv5 and OpenCV for real-time object detection
                      and tracking. Implemented on Raspberry Pi 4, optimizing efficiency and scalability for
                      surveillance applications.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Technologies Used:</span>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-2">
                      <li>Computer Vision & AI: YOLOv5, OpenCV, TensorFlow</li>
                      <li>Embedded Systems: Raspberry Pi 4</li>
                      <li>Wireless Communication: RF Modules, Wi-Fi Streaming</li>
                      <li>Control & Navigation: PID Controllers, GPS Integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Skills</h3>

                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700">
                      <span className="font-medium">Programming Languages:</span> Python, C++
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-medium">Core concepts:</span> Data Structures & Algorithms, Object-Oriented
                      Programming, Machine Learning, NLP
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-medium">Web:</span> HTML, CSS, JavaScript, Express, MongoDB
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-medium">ML & NLP Tools:</span> Scikit-learn, TensorFlow, Keras, BERT, NLTK,
                      spaCy, Tweepy, Pandas, NumPy
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Achievements</h3>

                <div className="space-y-3">
                  <p className="text-gray-700">• Cleared JEE ADVANCED examination</p>
                  <p className="text-gray-700">• Was in the top 5% in the class in grade 12</p>
                  <p className="text-gray-700">• Stood 2nd in class in Grade 10</p>
                </div>
              </div>

              {/* Leadership */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Leadership</h3>

                <div className="space-y-3">
                  <p className="text-gray-700">• School Girls' Captain (2019–2020)</p>
                  <p className="text-gray-700">• Captain of the University Basketball Team</p>
                </div>
              </div>

              {/* Extracurricular Activities */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Extracurricular Activities
                </h3>

                <div className="space-y-3">
                  <p className="text-gray-700">
                    • Represented West Bengal at the 55th National Roller Sports Championship (Speed Skating) organized
                    by the Sports Authority of India
                  </p>
                  <p className="text-gray-700">
                    • Won silver and bronze medals at the West Bengal Roller Skating Championship by the Sports
                    Authority of India
                  </p>
                  <p className="text-gray-700">
                    • Medals in Karate (Black Belt, 1st Dan) and swimming (School Zonal Gold & Silver)
                  </p>
                  <p className="text-gray-700">
                    • Stood amongst the top hundred candidates of All India level Short Story writing competition- "In
                    search of Young Ruskin Bond," (November 2019)
                  </p>
                  <p className="text-gray-700">
                    • Won "Yog challenge contest" aired on India TV conducted by Swami Ram Dev at the international
                    level, July 2020
                  </p>
                  <p className="text-gray-700">• Passed 1st year in "Nritya Shree" (Bharatnatyam) (2020)</p>
                  <p className="text-gray-700">• Passed Grade 3 in Western Dance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

