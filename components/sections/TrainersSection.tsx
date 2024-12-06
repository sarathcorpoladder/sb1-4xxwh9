'use client'

import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { trainers } from "@/data/trainers"
import { inter } from "@/styles/fonts"

export function TrainersSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 text-gradient ${inter.className}`}>Our Expert Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-blue-600">Leadership Trainers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                {trainers.slice(0,5).map((trainer, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${encodeURIComponent(trainer.split(' ')[0][0])}`}
                      alt={trainer}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{trainer}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-blue-600">AI Trainers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                {trainers.slice(5,8).map((trainer, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${encodeURIComponent(trainer.split(' ')[0][0])}`}
                      alt={trainer}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{trainer}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-blue-600">ESG Trainers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                {trainers.slice(8).map((trainer, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${encodeURIComponent(trainer.split(' ')[0][0])}`}
                      alt={trainer}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{trainer}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}