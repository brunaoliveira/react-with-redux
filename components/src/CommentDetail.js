import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="coment" style={{display: 'flex', flexDirection: 'row'}}>
            <a href="/" className="ui middle aligned rounded tiny image">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content" style={{marginLeft: '0.8em'}}>
                <a href="/" className="author">
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