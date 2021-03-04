import React from 'react';
import ReactDOM from 'react-dom';

// if (module.hot) {
//     module.hot.accept();
// }

const App = function() {
    const buttonText = { text: 'Click me!' };
    const style = { backgroundColor: 'blue', color: 'white' };

    return (
        <div>
            <label className="label" for="name">Enter name: </label>
            <input id="name" type="text" />
            <button style={ style }>
                { buttonText.text }
            </button>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);