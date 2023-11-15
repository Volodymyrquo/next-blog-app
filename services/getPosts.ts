export const getAllPosts = async () => {
    const response = await fetch('http://localhost:3300/posts');

    if (!response.ok) throw new Error('Unable to fetch posts.');
    return response.json();
};

export const getPostsBySearch = async (search: string) => {
    const response = await fetch(`http://localhost:3300/posts?q=${search}`);

    if (!response.ok) throw new Error('Unable to fetch posts.');

    return response.json();
};
