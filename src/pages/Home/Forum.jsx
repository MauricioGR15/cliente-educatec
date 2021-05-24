import React, { useEffect, useState } from 'react'
import PostsWrapper from '../../layout/PostsWrapper'
import Wrapper from '../../layout/Wrapper'
import Axios from '../../Axios'
import Post from '../../components/Posts'

const Forum = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/postsForum.json")
            .then((resp) => resp.json())
            .then((posts) => setPosts(posts));
    }, []);

    useEffect(() => {
        Axios.get('api/foro')
            .then(response => {
                setPosts(response.data)
            })
    }, [])


    return (
        <Wrapper>
            <PostsWrapper>
                {posts.map((post, key) => {
                    return <Post key={key} post={post} />;
                })}
            </PostsWrapper>
        </Wrapper>
    );
}




export default Forum
