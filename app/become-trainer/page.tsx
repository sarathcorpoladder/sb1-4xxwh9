'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { inter } from "@/styles/fonts"

export default function BecomeTrainerPage() {
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
              Become a Trainer
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our network of expert trainers and help organizations transform their workforce
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Area of Expertise</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your expertise" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai">Artificial Intelligence</SelectItem>
                        <SelectItem value="esg">ESG</SelectItem>
                        <SelectItem value="leadership">Leadership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Years of Experience</label>
                    <Input type="number" placeholder="5" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Brief Introduction</label>
                    <Textarea 
                      placeholder="Tell us about your experience and expertise..." 
                      className="h-32"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shine">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}