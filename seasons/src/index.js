import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // specific to js, not react: iitialize state
    constructor(props) {
        super(props);
        this.state = { lat: null };
    }
     
    render() {
        if (module.hot) {
            module.hot.accept();
        }
    
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return (
            <div>
                Latitude: 
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
