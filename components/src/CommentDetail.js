import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    return (
        <div className="coment">
            <a href="/" className="avatar">
                <img alt="avatar" style={{ width: "80px" }} src={faker.image.image()} />
            </a>
            <div className="content" className="author">
                <a href="/">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{ props.timeAgo }</span>
                </div>
                <div className="text">
                    { props.content }
                </div>
            </div>
        </div> 
    );
};

export default CommentDetail;