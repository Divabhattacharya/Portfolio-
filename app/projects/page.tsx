import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI-driven Resume Screening System */}
          <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden group animate-fade-in-up">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/pic resume.png"
                alt="AI Resume Screening System"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            </div>

            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 p-4 flex space-x-2">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-800/80 hover:bg-purple-900/80 text-white transition-transform duration-300 hover:rotate-12"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-800/80 hover:bg-purple-900/80 text-white transition-transform duration-300 hover:rotate-12"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <h2 className="text-xl font-semibold mb-3 text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
                AI-driven Resume Screening System
              </h2>

              <p className="text-gray-300 mb-4">
                Developed an AI-driven Resume Screening System to automate candidate evaluation based on skills,
                experience, and education, enhancing recruitment accuracy, reducing bias, and streamlining hiring
                processes.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  Machine Learning
                </Badge>
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  NLP
                </Badge>
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  Python
                </Badge>
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  TensorFlow
                </Badge>
              </div>

              <div className="text-gray-400 text-sm">
                <h3 className="font-medium text-gray-300 mb-1">Technologies Used:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    Machine Learning & NLP: Python with Scikit-learn, TensorFlow/Keras, NLTK, spaCy, and BERT for resume
                    analysis
                  </li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    Data Management: SQL and MongoDB for storing structured and unstructured data
                  </li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    Deployment: Flask/Django with AWS/Google Cloud for scalability and real-time processing
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* AI-powered Object Detection & Tracking Drone */}
          <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden group animate-fade-in-up animation-delay-300">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/Screenshot 2025-03-19 at 3.12.38 AM.png"
                alt="AI Drone"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            </div>

            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 p-4 flex space-x-2">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-800/80 hover:bg-purple-900/80 text-white transition-transform duration-300 hover:rotate-12"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-800/80 hover:bg-purple-900/80 text-white transition-transform duration-300 hover:rotate-12"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <h2 className="text-xl font-semibold mb-3 text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
                AI-powered Object Detection & Tracking Drone
              </h2>

              <p className="text-gray-300 mb-4">
                Designed and developed a UAV system leveraging YOLOv5 and OpenCV for real-time object detection and
                tracking. Implemented on Raspberry Pi 4, optimizing efficiency and scalability for surveillance
                applications.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  Computer Vision
                </Badge>
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  Robotics
                </Badge>
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  Raspberry Pi
                </Badge>
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  YOLOv5
                </Badge>
              </div>

              <div className="text-gray-400 text-sm">
                <h3 className="font-medium text-gray-300 mb-1">Technologies Used:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    Computer Vision & AI: YOLOv5, OpenCV, TensorFlow
                  </li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    Embedded Systems: Raspberry Pi 4
                  </li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    Wireless Communication: RF Modules, Wi-Fi Streaming
                  </li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    Control & Navigation: PID Controllers, GPS Integration
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Arduino-Based Remote Controlled Car */}
          <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden group animate-fade-in-up animation-delay-600">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/Screenshot 2025-03-19 at 3.13.03 AM.png"
                alt="Arduino RC Car"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            </div>

            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 p-4 flex space-x-2">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-800/80 hover:bg-purple-900/80 text-white transition-transform duration-300 hover:rotate-12"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-800/80 hover:bg-purple-900/80 text-white transition-transform duration-300 hover:rotate-12"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <h2 className="text-xl font-semibold mb-3 text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
                Arduino-Based Remote Controlled Car
              </h2>

              <p className="text-gray-300 mb-4">
                Developed a remote controlled car with Arduino microcontroller, NRF24L01 Module for wireless
                communication, and BLDC Motor with PWM control for precise speed management.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  Arduino
                </Badge>
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  Electronics
                </Badge>
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  Embedded Systems
                </Badge>
                <Badge className="bg-purple-900/50 text-purple-200 transition-all duration-300 hover:scale-105">
                  Robotics
                </Badge>
              </div>

              <div className="text-gray-400 text-sm">
                <h3 className="font-medium text-gray-300 mb-1">Technologies Used:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    Arduino Microcontrollers: Central control for the car and remote
                  </li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    NRF24L01 Module: Enables wireless communication
                  </li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    BLDC Motor with PWM Control: Ensures efficient and precise speed management
                  </li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300 hover:text-gray-300">
                    C/C++ Programming: For firmware development
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

