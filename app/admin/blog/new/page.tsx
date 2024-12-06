'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ImageUpload } from '@/components/upload/ImageUpload';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { inter } from '@/styles/fonts';

export default function NewBlogPost() {
  const [coverImage, setCoverImage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation for saving blog post will go here
    console.log({ title, content, coverImage });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl font-bold mb-4 text-gradient ${inter.className}`}>
              Create New Blog Post
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Share your insights with our community
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Cover Image</label>
                    <ImageUpload
                      endpoint="blogImageUploader"
                      onUploadComplete={(url) => setCoverImage(url)}
                    />
                    {coverImage && (
                      <div className="mt-2">
                        <img
                          src={coverImage}
                          alt="Cover preview"
                          className="max-h-48 rounded-lg object-cover"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Title</label>
                    <Input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter blog post title"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Content</label>
                    <Textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Write your blog post content..."
                      className="h-64"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white shine"
                  >
                    Publish Post
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}