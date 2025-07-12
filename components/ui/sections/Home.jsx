// components/sections/Home.jsx
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function Home({ scrollToSection }) {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="text-purple-600 border-purple-200">
              🚀 Creative Digital Agency
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Smart Solutions.
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}Real Impact.
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              An innovative digital agency offering cutting-edge software, web, and AI solutions for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                onClick={() => scrollToSection("projects")}
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                className="px-6"
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src="./home.png" alt="Creative Team" width={600} height={600} className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
