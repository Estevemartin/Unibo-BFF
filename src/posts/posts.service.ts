import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { post, user, comment, detailedPost } from '../types';

const Axios = axios.create({
  baseURL: 'http://localhost:3000/posts'
});

@Injectable()
export class PostsService {

  async getPosts(): Promise<post[]> {
    const data: post[] = await Axios.get("/").then(res=>res.data)
    return data
  }
  async getPost(id):Promise<post>{
    const data:post = await Axios.get(`/${id}`).then(res=>res.data)
    return data
  }

  async createPost(post:post): Promise<number>{
    const status: number = await Axios.post("/",{post}).then(res=>res.status)
    return status
  }

  async editPost(post:post): Promise<post>{
    const data: post = await Axios.put(`/${post.id}`,post).then(res=>res.data)
    return data
  }

  async getPostDetails(id):Promise<detailedPost>{
    // console.log(id);
    const post: post = await Axios.get(`/${id}`).then(res=>res.data)
    const user: user = await axios.get(`http://localhost:3000/users/${id}`).then(res=>res.data)
    const comments: comment[] = await Axios.get("http://localhost:3000/comments/").then(res=>res.data)
    const filteredData: comment[] = comments.filter(post=>post.postId==id)
    const detailedPost : detailedPost ={
      post,
      user,
      comments:filteredData
    }
    return detailedPost
  }
}
