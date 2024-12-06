'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { inter } from "@/styles/fonts"

const blogPosts = [
  {
    title: "The Future of AI in Corporate Training",
    excerpt: "Explore how artificial intelligence is revolutionizing corporate training methodologies...",
    category: "AI",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "ESG Implementation Strategies",
    excerpt: "A comprehensive guide to implementing ESG practices in your organization...",
    category: "ESG",
    date: "March 12, 2024",
    readTime: "7 min read"
  },
  {
    title: "Leadership in the Digital Age",
    excerpt: "Key leadership skills required to thrive in today's digital transformation era...",
    category: "Leadership",
    date: "March 10, 2024",
    readTime: "6 min read"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl font-bold text-center mb-12 text-gradient ${inter.className}`}
          >
            Latest Insights & Articles
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-blue-100 text-blue-600">{post.category}</Badge>
                    <h2 className={`text-xl font-semibold mb-3 ${inter.className}`}>{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
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