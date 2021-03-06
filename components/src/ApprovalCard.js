import React from 'react';

const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra floated content" style={{padding: '.75em 1em .75em 3.5em'}}>
                <div className="two buttons" >
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;