"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen, isMobile])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md shadow-purple-500/10" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            Diva Bhattacharya
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link, index) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-gray-300 hover:text-purple-400 hover:bg-purple-950/30 transition-all duration-300",
                    pathname === link.path && "text-purple-400 bg-purple-950/30",
                    "animate-fade-in-down",
                  )}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40 animate-fade-in-up">
          <nav className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-lg py-4 text-gray-300 hover:text-purple-400 hover:bg-purple-950/30 transition-all duration-300",
                    pathname === link.path && "text-purple-400 bg-purple-950/30",
                    "animate-slide-in-left",
                  )}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

