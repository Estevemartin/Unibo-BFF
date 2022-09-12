export type user = {
  id:number,
  name:string,
  userName:string,
  email:string,
  adress:{
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo:{
      lat:string,
      lng:string
    }
  },
  phone:string,
  website:string,
  company:{
    name:string,
    catchPhrase:string,
    bs:string
  }
}

export type post = {
  id:number,
  userId:number,
  title:string,
  body:string,
  // user:User
} 

export type comment = {
  postId:string,
  id:number,
  name:string,
  email:string,
  body:string
}

export type detailedPost = {
  post: post,
  user:user,
  comments:comment[],
}