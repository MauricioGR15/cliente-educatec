import React, { useState, useEffect } from "react";
import PostsWrapper from "../../layout/PostsWrapper";
import Axios from "../../Axios";
import { useParams } from "react-router-dom";
import Post from "../../components/Posts";
import LoadingSpin from "../../components/LoadingSpin";

const PostDetails = () => {
    const { id } = useParams();
    const [detalle, setDetalle] = useState(null);
    console.log(id);

    useEffect(() => {
        Axios.get(`api/posts/${id}`).then((response) => {
            setDetalle(response.data);
        });
    }, []);

    return (
        <PostsWrapper>
            {detalle ? <Post post={detalle} /> : <LoadingSpin />}
        </PostsWrapper>
    );
};

export default PostDetails;
