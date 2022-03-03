import React from 'react';
import {ObjectType} from "./PostList";

type PropsType = {
  post: ObjectType
  number: number
}

const PostItem = ({post, number}: PropsType) => {

  return (
    <div className='post'>
      <div className='post-content'>
        <strong>{number}. {post.title}</strong>
        <div>
          {post.body}
        </div>

      </div>
      <div className="post-btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;