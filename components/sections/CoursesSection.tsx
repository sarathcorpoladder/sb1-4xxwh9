'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { courses } from "@/data/courses"
import { inter } from "@/styles/fonts"

export function CoursesSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 text-gradient ${inter.className}`}>Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold text-blue-600 mb-2 min-h-[56px] ${inter.className}`}>{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{course.duration}</p>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shine">
                      Check Details
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}