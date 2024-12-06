'use client';

import Image from "next/image";
import { Brain, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { inter } from "@/styles/fonts";

export function ExpertiseSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 text-gradient ${inter.className}`}>Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                  alt="Artificial Intelligence"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <Brain className="h-8 w-8 mb-2 text-blue-600" />
              <h3 className={`text-xl font-bold mb-2 text-gray-900 ${inter.className}`}>Artificial Intelligence</h3>
              <p className="text-gray-600">
                Comprehensive AI training covering machine learning, deep learning, and practical applications.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1464938769256-c00accbb7016"
                  alt="ESG"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <Lightbulb className="h-8 w-8 mb-2 text-blue-600" />
              <h3 className={`text-xl font-bold mb-2 text-gray-900 ${inter.className}`}>ESG</h3>
              <p className="text-gray-600">
                Master environmental, social, and governance principles for sustainable business growth.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  alt="Leadership"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <Users className="h-8 w-8 mb-2 text-blue-600" />
              <h3 className={`text-xl font-bold mb-2 text-gray-900 ${inter.className}`}>Leadership</h3>
              <p className="text-gray-600">
                Develop essential leadership skills to drive team performance and organizational success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}