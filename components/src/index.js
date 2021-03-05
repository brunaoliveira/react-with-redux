import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    if (module.hot) {
        module.hot.accept();
    }

    return (
        <div className="ui container comments">
            <CommentDetail />
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);