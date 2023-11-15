import { Metadata } from 'next';
import { Posts } from '@/components/Posts';
import { PostSearch } from '@/components/PostSearch';
import Link from 'next/link';
import NewPostForm from '@/components/NewPostForm';
import { revalidatePath } from 'next/cache';
import { getAllPosts } from '@/services/getPosts';

export const metadata: Metadata = {
    title: 'Blog | Next App',
};
export const revalidate = 10;
const Blog = async () => {
    const posts = await getAllPosts();

    console.log(posts);
    return (
        <>
            <h1>Blog Page</h1>
            <Link href="/blog/new">Add new post</Link>
            <PostSearch />
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}> {post.title}</Link>
                    </li>
                ))}
            </ul>
            <hr />
            <NewPostForm
                onSuccess={async () => {
                    'use server';
                    revalidatePath('/blog');
                }}
            />
        </>
    );
};

export default Blog;
