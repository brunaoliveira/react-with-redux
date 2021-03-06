import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        if (module.hot) {
            module.hot.accept();
        }
    
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        
        <div>
            Latitude: {}
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);