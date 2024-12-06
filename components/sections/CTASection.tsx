'use client'

import { Button } from "@/components/ui/button"
import { inter } from "@/styles/fonts"

export function CTASection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className={`text-3xl font-bold mb-4 text-gradient ${inter.className}`}>
            Ready to Transform Your Workforce?
          </h2>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Join leading companies that trust CORPOLADDER for their training needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" className="bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50 shine">
              Contact Sales
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shine">Get in Touch</Button>
          </div>
        </div>
      </div>
    </section>
  )
}