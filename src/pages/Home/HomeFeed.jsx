import axios from "axios";
import React, { useState, useEffect } from "react";
import PostHome from "../../components/PostHome";
import MyJson from './posts.json'

const HomeFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(MyJson)
            setPosts(response.json())
        }
        getPosts();
    }, []);

    return <div className="grid grid-cols-1 justify-items-center gap-8"></div>;
};

export default HomeFeed;
