"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Linkedin, Github, FileText } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
    setFormSubmitted(true)

    // Reset the animation after a delay
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in-up">
          Get In Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-up">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-purple-400">Contact Information</h2>

                <div className="space-y-4">
                  <div className="flex items-start animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
                    <div className="mr-4 mt-1 bg-purple-900/30 p-2 rounded-full hover:bg-purple-800/30 transition-colors duration-300 group">
                      <Mail className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Email</h3>
                      <p className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                        divasujoy@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start animate-fade-in-left" style={{ animationDelay: "0.4s" }}>
                    <div className="mr-4 mt-1 bg-purple-900/30 p-2 rounded-full hover:bg-purple-800/30 transition-colors duration-300 group">
                      <Phone className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Phone</h3>
                      <p className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                        +91 8900144950
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start animate-fade-in-left" style={{ animationDelay: "0.6s" }}>
                    <div className="mr-4 mt-1 bg-purple-900/30 p-2 rounded-full hover:bg-purple-800/30 transition-colors duration-300 group">
                      <MapPin className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Location</h3>
                      <p className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Delhi, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                  <h3 className="text-lg font-medium text-gray-200 mb-4">Connect With Me</h3>
                  <div className="flex space-x-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-purple-900/50 transition-all duration-300 p-3 rounded-full hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5 text-purple-400" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-purple-900/50 transition-all duration-300 p-3 rounded-full hover:scale-110"
                    >
                      <Github className="h-5 w-5 text-purple-400" />
                    </a>
                    <a
                      href="/resume"
                      className="bg-gray-800 hover:bg-purple-900/50 transition-all duration-300 p-3 rounded-full hover:scale-110"
                    >
                      <FileText className="h-5 w-5 text-purple-400" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-purple-400">Office Hours</h2>
                <p className="text-gray-400">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card
              className={`bg-gray-900 border-gray-800 hover:border-purple-800 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-up animation-delay-300 ${formSubmitted ? "animate-pulse-slow" : ""}`}
            >
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-purple-400">Send Me a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                      <label htmlFor="name" className="text-gray-300">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white transition-all duration-300 focus:shadow-md focus:shadow-purple-500/20"
                      />
                    </div>

                    <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                      <label htmlFor="email" className="text-gray-300">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white transition-all duration-300 focus:shadow-md focus:shadow-purple-500/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                    <label htmlFor="subject" className="text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white transition-all duration-300 focus:shadow-md focus:shadow-purple-500/20"
                    />
                  </div>

                  <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                    <label htmlFor="message" className="text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      rows={6}
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white resize-none transition-all duration-300 focus:shadow-md focus:shadow-purple-500/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 animate-fade-in-up animation-delay-800"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

