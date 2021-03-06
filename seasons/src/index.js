import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    if (module.hot) {
        module.hot.accept();
    }

    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return (
        <div>
            ssss
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
