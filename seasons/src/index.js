import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // specific to js, not react: iitialize state
    constructor(props) {
        super(props);
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }
     
    render() {
        if (module.hot) {
            module.hot.accept();
        }

        return (
            <div>
                Latitude: {this.state.lat}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
