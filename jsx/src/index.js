import React from 'react';
import ReactDOM from 'react-dom';

// if (module.hot) {
//     module.hot.accept();
// }

function getButtonText() {
    return 'Click on me!';
}

const App = function() {
    const buttonText = 'Click Me!';

    return (
        <div>
            <label className="label" for="name">Enter name: </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                { buttonText }
                { getButtonText() }
            </button>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);