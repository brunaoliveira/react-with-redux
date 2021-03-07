import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // specific to js, not react: iitialize state
    constructor(props) {
        super(props);
        // the only time direct assignment to this.state is allowed! (use setState)
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }
     
    render() {
        if (module.hot) {
            module.hot.accept();
        }

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } 

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        } 
        
        return <div>Loading..</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
