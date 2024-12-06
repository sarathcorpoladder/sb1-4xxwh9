'use client'

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Laddercomp (Holding company of Corpoladder). All rights reserved.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-blue-600 text-sm">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 text-sm">Privacy</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}