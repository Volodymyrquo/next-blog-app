import { Metadata } from 'next';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
type Props = {
    params: {
        id: string;
    };
};
async function getData(id: string) {
    const response = await fetch(`http://localhost:3300/posts/${id}`, {
        next: {
            revalidate: 60,
        },
    });
    return response.json();
}

export async function generateMetadata({
    params: { id },
}: Props): Promise<Metadata> {
    const post = await getData(id);
    return {
        title: post.title,
    };
}

async function removePost(id: string) {
    'use server';
    await fetch(`http://localhost:3300/posts/${id}`, {
        method: 'DELETE',
    });
    revalidatePath('/blog');
    redirect('/blog');
}
const Post = async ({ params: { id } }: Props) => {
    const post = await getData(id);
    return (
        <>
            {' '}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <form action={removePost.bind(null, id)}>
                <input type="submit" value="delete post" />
            </form>
        </>
    );
};

export default Post;
