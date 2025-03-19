import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-purple-500/10 animate-float"
                style={{
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in-up">
              Diva Bhattacharya
            </h1>
            <div className="h-12">
              <p className="text-xl md:text-2xl text-gray-300 animate-typewriter animation-delay-200">
                Electrical Engineering & Data Science Student
              </p>
            </div>
            <p className="text-gray-400 max-w-lg animate-fade-in-up animation-delay-800">
              Passionate about AI, Machine Learning, and building innovative solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in-up animation-delay-1000">
              <Link href="/about">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:shadow-purple-500/30">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-400 hover:bg-purple-950/30 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:shadow-purple-500/20"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fade-in-up animation-delay-1200">
              <Link href="https://github.com/Divabhattacharya" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-950/30 text-purple-400 transition-transform duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/diva-b-829a80192/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-950/30 text-purple-400 transition-transform duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:divasujoy@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-950/30 text-purple-400 transition-transform duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resume">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-950/30 text-purple-400 transition-transform duration-300 hover:scale-110"
                >
                  <FileText className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-right animation-delay-500">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg shadow-purple-500/20 animate-pulse-slow">
              <div className="absolute inset-0 bg-purple-500/10 animate-shimmer"></div>
              <Image
                src="/WhatsApp%20Image%202025-03-18%20at%2019.14.59_4f72607b.jpg"
                alt="Diva Bhattacharya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
