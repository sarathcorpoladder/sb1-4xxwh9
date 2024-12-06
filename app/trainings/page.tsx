'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { inter } from "@/styles/fonts"
import { courses } from "@/data/courses"

export default function TrainingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl font-bold mb-4 text-gradient ${inter.className}`}>
              Our Training Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive training solutions designed to empower your workforce
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-blue-100 text-blue-600">
                      {course.duration}
                    </Badge>
                    <h2 className={`text-xl font-semibold mb-4 ${inter.className}`}>
                      {course.title}
                    </h2>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shine">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}