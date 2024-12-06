'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ImageUpload } from '@/components/upload/ImageUpload';
import { BlogPost } from '@/lib/db/types';
import { useBlogPost } from '@/hooks/useBlogPost';
import { toast } from 'sonner';

export default function EditBlogPost() {
  const params = useParams();
  const router = useRouter();
  const { updatePost, isLoading, error } = useBlogPost();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Fetch post data
    // This is a placeholder - implement actual data fetching
    setPost({
      id: params.id as string,
      title: 'Sample Post',
      content: 'Sample content...',
      coverImage: '/placeholder.jpg',
      slug: 'sample-post',
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;

    try {
      await updatePost(post);
      toast.success('Post updated successfully');
      router.push('/admin/blog');
    } catch (err) {
      toast.error('Failed to update post');
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Cover Image</label>
                <ImageUpload
                  endpoint="blogImageUploader"
                  onUploadComplete={(url) => setPost({ ...post, coverImage: url })}
                />
                {post.coverImage && (
                  <div className="mt-2">
                    <img
                      src={post.coverImage}
                      alt="Cover preview"
                      className="max-h-48 rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Title</label>
                <Input
                  value={post.title}
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Content</label>
                <Textarea
                  value={post.content}
                  onChange={(e) => setPost({ ...post, content: e.target.value })}
                  className="h-64"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/admin/blog')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}