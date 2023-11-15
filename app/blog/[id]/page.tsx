import { Metadata } from 'next';
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
const Post = async ({ params: { id } }: Props) => {
    const post = await getData(id);
    return (
        <>
            {' '}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
};

export default Post;
