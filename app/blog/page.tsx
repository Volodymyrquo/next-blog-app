import { Metadata } from 'next';
import { Posts } from '@/components/Posts';
import { PostSearch } from '@/components/PostSearch';
import Link from 'next/link';
import NewPostForm from '@/components/NewPostForm';

export const metadata: Metadata = {
    title: 'Blog | Next App',
};
const Blog = () => {
    return (
        <>
            <h1>Blog Page</h1>
            <Link href="/blog/new">Add new post</Link>
            <PostSearch />
            <Posts />
            <hr />
            <NewPostForm />
        </>
    );
};

export default Blog;
