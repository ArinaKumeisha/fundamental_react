import React from 'react';
import PostItem from "./PostItem";

type PropsType = {
  posts: ObjectType[]

}
export  type ObjectType = {
  id: number
  title: string
  body: string

}
const PostList = ({posts}: PropsType) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Список 1</h1>
      {posts.map((element, index)=>{
        return <PostItem
          key={element.id}
          number={index+1}
          post={element}/>
      })}
    </div>
  );
};

export default PostList;