import React from 'react'

const PostsWrapper = ({children}) => {
    return <div className="w-full flex flex-col items-center gap-4 md:w-3/4 lg:w-3/5 xl:w-2/5">
        {children}
    </div>;
}

export default PostsWrapper
