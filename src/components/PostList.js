import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';

export default function PostList() {

  const [ posts, setPosts ] = useState([]);
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then( response => 
              response.json()
                .then( data => setPosts(data))
      )
  }, []);

  const add = () => {
    setPosts([ { id: Math.random(), title, body }, ...posts ]);
    setTitle('');
    setBody('');
  }

  return (
    <>
      <input value={title} placeholder="Title" onChange={ e => setTitle( e.target.value ) } />

      <input value={body} placeholder="Body" onChange={ e => setBody( e.target.value ) } />

      <button onClick={add}>Add</button>

      <hr/>

      <ul>
        { posts.map( post => <PostItem key={post.id} post={post} /> ) }
      </ul>
    </>
  );
}
