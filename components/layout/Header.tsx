'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { montserrat } from "@/styles/fonts"

export function Header() {
  return (
    <header className={`bg-white shadow-md fixed w-full z-50 ${montserrat.className}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="CORPOLADDER Logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold text-blue-600">CORPOLADDER</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
          <Link href="/trainings" className="text-gray-600 hover:text-blue-600 transition-colors">Trainings</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          <Link href="/become-trainer" className="text-gray-600 hover:text-blue-600 transition-colors">Become a Trainer</Link>
        </nav>
        <Button className="md:hidden" variant="ghost" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </Button>
      </div>
    </header>
  )
}