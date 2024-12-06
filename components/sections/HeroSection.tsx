'use client'

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { inter } from "@/styles/fonts"

interface HeroSectionProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function HeroSection({ searchQuery, setSearchQuery }: HeroSectionProps) {
  return (
    <section className="bg-grid min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-5xl md:text-6xl font-bold mb-6 text-gradient ${inter.className}`}
          >
            Transform Your Workforce
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-600"
          >
            Empower your team with cutting-edge training in AI, ESG, and Leadership
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Input
              className="max-w-xs bg-white text-gray-900 border-gray-300"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shine">
              <Search className="mr-2 h-4 w-4" /> Search Courses
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}