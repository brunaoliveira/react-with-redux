import React from 'react';

const CommentDetail = () => {
    return (
        <div className="coment">
            <a href="/" className="avatar">
                <img alt="avatar" style={{ width: "80px" }} src={faker.image.image()} />
            </a>
            <div className="content" className="author">
                <a href="/">
                    Anna
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">
                    Nice blog post!
                </div>
            </div>
        </div> 
    );
};