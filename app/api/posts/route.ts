import { NextResponse } from "next/server"; 

import {posts} from './posts'
export async function GET(req:Request) {
    return NextResponse.json(posts)
    
}
