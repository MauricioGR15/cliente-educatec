import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import useModal from "../../components/Modal/useModal";
import Axios from "../../Axios";
import PostsWrapper from "../../layout/PostsWrapper";
import LoadingSpin from "../../components/LoadingSpin";
import {RenderPostDetails} from "./PostDetails";

const ForumDetails = () => {

    const {id} = useParams()
    const [detalle, setDetalle] = useState(null)
    const {isShowing, toggle} = useModal()

    useEffect(() => {
        Axios.get(`api/posts/${id}`)
            .then(response => {
                setDetalle(response.data)
            })
    },[])

    return (
        <PostsWrapper>
            {
                detalle ? (
                    <RenderPostDetails
                        isShowing={isShowing}
                        detalle={detalle}
                        toggle={toggle}
                        setDetalle={setDetalle}
                    />
                ) : (
                    <LoadingSpin/>
                )
            }
        </PostsWrapper>
    );
};

export default ForumDetails;
