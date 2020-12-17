import React, {useEffect, useState} from 'react';
import {Post} from "../post/post";

export const PostsScreen = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        }
        fetchData();
    })


    return (
        <div className="posts">
            {posts.map(({id, title, body, userId}) => {
                return(
                <Post
                key={id}
                userId={userId}
                title={title}
                content={body}
                />
                )
            })}
        </div>
    )
}
