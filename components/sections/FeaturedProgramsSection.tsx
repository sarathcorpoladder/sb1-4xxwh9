'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { inter } from "@/styles/fonts"

export function FeaturedProgramsSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <Badge className="mb-4 bg-blue-100 text-blue-600">Featured Programs</Badge>
            <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient ${inter.className}`}>
              Elevate Your Team's Potential
            </h2>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shine">
              Explore Programs
            </Button>
          </div>
          <div className="space-y-4">
            <Select>
              <SelectTrigger className="w-full bg-white text-gray-900 border-gray-300">
                <SelectValue placeholder="Select a program" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900 border-gray-300">
                <SelectItem value="ai" className="text-gray-900 hover:bg-blue-50 focus:bg-blue-50 focus:text-blue-600">
                  AI & Machine Learning
                </SelectItem>
                <SelectItem value="esg" className="text-gray-900 hover:bg-blue-50 focus:bg-blue-50 focus:text-blue-600">
                  ESG Management
                </SelectItem>
                <SelectItem value="leadership" className="text-gray-900 hover:bg-blue-50 focus:bg-blue-50 focus:text-blue-600">
                  Leadership Excellence
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-gray-600">
              Our programs are designed to deliver immediate impact while building long-term capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}