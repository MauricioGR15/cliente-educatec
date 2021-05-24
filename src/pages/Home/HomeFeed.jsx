import React, {useState, useEffect} from "react";
import {Post} from "../../components/Posts";
import PostsWrapper from "../../layout/PostsWrapper";
import Axios from "../../Axios";
import LoadingSpin from "../../components/LoadingSpin";

const HomeFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get("api/posts").then((response) => {
            setPosts(response.data);
        });
    }, []);

    return (
        <PostsWrapper>
            {
                posts ?
                    posts.map((post, key) => {
                        return <Post key={key} post={post} setPosts={setPosts}/>;
                    }) : <LoadingSpin/>}
        </PostsWrapper>
    );
};

export default HomeFeed;
