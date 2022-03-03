import React, {ChangeEvent, useState} from 'react';
import {MyButton} from "./components/UI/button/MyButton";
import PostList from "./components/PostList";
import '../src/components/styles/App.css';
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: ' JavaScript', body: 'Язык программирования'},
    {id: 2, title: 'React', body: 'Библиотека для взаимодействия с пользователем'},
    {id: 3, title: 'Redux', body: 'Уровень с логикой'}
  ])
  const [post, setPost] = useState({ title:'', body:''})
  //const [body, setBody] = useState('')
  const [error, setError] = useState('')


  const addNewPost = (e: any) => {
    e.preventDefault()
    const newPost = {...post, id: Date.now()}
    if (newPost.title.trim() === '' || newPost.body.trim() === '') {
      setError('введите значение!')
    } else {
      setPosts([...posts, newPost])
      setPost({title: '', body: ''})


    }
  }
  const currentHandlerTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({...post, title: e.currentTarget.value})
    setError('')
  }

  const currentHandlerBody = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({...post, body: e.currentTarget.value})
    setError('')
  }
  return (
    <div className="App">
      <form>
        <MyInput placeholder={'Название поста'} value={post.title} onChange={currentHandlerTitle}/>
        <MyInput placeholder={'Описание поста'} value={post.body} onChange={currentHandlerBody}/>
        <MyButton onClick={addNewPost}>Add</MyButton>
      </form>
      <h3>{error}</h3>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
