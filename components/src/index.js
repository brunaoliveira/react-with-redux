import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    if (module.hot) {
        module.hot.accept();
    }
    console.log(faker.name.findName());
    return (
        <div className="ui container comments">
            <br/>
            <ApprovalCard>
                <CommentDetail 
                    author={ faker.name.findName() } 
                    timeAgo={ faker.date.recent().toLocaleString() } 
                    content={ faker.lorem.words() } 
                    avatar={ faker.image.image() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={ faker.name.findName() } 
                    timeAgo={ faker.date.recent().toLocaleString() } 
                    content={ faker.lorem.words() } 
                    avatar={ faker.image.image() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={ faker.name.findName() } 
                    timeAgo={ faker.date.recent().toLocaleString() } 
                    content={ faker.lorem.words() } 
                    avatar={ faker.image.image() }
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);