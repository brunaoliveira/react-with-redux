import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    if (module.hot) {
        module.hot.accept();
    }
    console.log(faker.name.findName());
    return (
        <div className="ui container comments">
            <CommentDetail 
                author={ faker.name.findName() } 
                timeAgo={ faker.date.recent().toLocaleString() } 
                content={ faker.lorem.text() } />
            <CommentDetail author={ faker.name.findName() } timeAgo={ faker.date.recent().toLocaleString() } content={ faker.lorem.text() } />
            <CommentDetail author={ faker.name.findName() } timeAgo={ faker.date.recent().toLocaleString() } content={ faker.lorem.text() } />
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);