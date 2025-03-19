import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400">Diva Bhattacharya</h3>
            <p className="text-gray-400">
              Electrical Engineering & Data Science Student passionate about AI, Machine Learning, and innovative
              solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Skills", path: "/skills" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Education</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">B.Tech, Electrical Engineering</li>
              <li className="text-gray-400">NSUT Delhi, 2023-2027</li>
              <li className="text-gray-400">B.Sc, Data Science</li>
              <li className="text-gray-400">IIT Madras, 2023-2027</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Contact</h4>
            <p className="text-gray-400">
              Mobile: +91 8900144950
              <br />
              Email: divasujoy@gmail.com
            </p>
            <div className="flex space-x-3">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-950/30 text-purple-400">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-950/30 text-purple-400">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:divasujoy@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-950/30 text-purple-400">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resume">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-950/30 text-purple-400">
                  <FileText className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Diva Bhattacharya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

