import { NextResponse } from 'next/server';
import { createBlogPost, getBlogPosts } from '@/lib/api/blog';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const post = await createBlogPost(data);
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}