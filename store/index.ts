import { create } from "zustand";

type UsePosts = {
    posts: any[];
    loading: boolean;
    getAllPosts: ()=>Promise<void>;
    getPostsBySearch:(value:string)=>Promise<void>;
}

export const usePosts = create<UsePosts>()((get)=>({}))
