import axios from "axios";
import React, { useState, useEffect } from "react";
import PostHome from "../../components/PostHome";

const HomeFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/posts.json")
            .then((resp)=>resp.json())
            .then(posts => setPosts(posts))
    }, []);

    return(
    <div className="grid grid-cols-1 justify-items-center gap-8">
        {
            posts.map((post,key)=>{
                return(
                    <PostHome key={key} post={post}/>
                )
            })
        }
    </div>
        ) 
    
};

export default HomeFeed;
