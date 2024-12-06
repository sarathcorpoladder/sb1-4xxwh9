'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Edit, Trash } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/db/types';

export default function BlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'The Future of AI in Corporate Training',
      content: 'Lorem ipsum...',
      coverImage: '/placeholder.jpg',
      slug: 'future-of-ai-training',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Add more mock posts as needed
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link href="/admin/blog/new">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}