import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    if (module.hot) {
        module.hot.accept();
    }

    return (
        <div className="ui container comments">
            
        </div>
        
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);