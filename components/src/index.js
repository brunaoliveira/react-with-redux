import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    if (module.hot) {
        module.hot.accept();
    }

    return (
        <div className="ui container comments">
            <CommentDetail author="Blair"/>
            <CommentDetail author="Charlie"/>
            <CommentDetail author="Taylor"/>
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);