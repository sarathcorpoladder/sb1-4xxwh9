'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { leaders } from "@/data/leaders";
import { inter } from "@/styles/fonts";

export function LeadershipSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 text-gradient ${inter.className}`}>Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={`/placeholder.svg?height=96&width=96&text=${encodeURIComponent(leader.name)}`} alt={leader.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className={`text-xl font-bold mb-1 text-gray-900 ${inter.className}`}>{leader.name}</h3>
                    <p className="text-blue-600 text-sm mb-3">{leader.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{leader.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {leader.expertise.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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