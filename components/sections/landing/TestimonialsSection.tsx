'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";
import { inter } from "@/styles/fonts";

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 text-gradient ${inter.className}`}>Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={`/placeholder.svg?height=96&width=96&text=${encodeURIComponent(testimonial.name)}`} alt={testimonial.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600">{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className={`text-xl font-bold mb-1 text-gray-900 ${inter.className}`}>{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm mb-3">{testimonial.sector}</p>
                    <p className="text-gray-600 italic">{testimonial.testimonial}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}