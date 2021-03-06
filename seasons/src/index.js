import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    if (module.hot) {
        module.hot.accept();
    }
    
    return (
        <div>

        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
