'use client'

import { pastClients } from "@/data/clients"
import { inter } from "@/styles/fonts"

export function ClientsSection() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className={`text-2xl font-bold text-center mb-8 text-gradient ${inter.className}`}>Our Valued Clients</h2>
        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
            {pastClients.map((client, index) => (
              <span key={`first-${index}`} className="text-lg text-gray-600 hover:text-blue-600 transition-colors px-8">
                {client}
              </span>
            ))}
            {pastClients.map((client, index) => (
              <span key={`second-${index}`} className="text-lg text-gray-600 hover:text-blue-600 transition-colors px-8">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}