// create your App component here

import React from 'react';

class App extends React.Component {
    state = {
        objects: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(r => r.json())
        .then(objects => this.setState({objects}))
    }

    render() { 
        return (
            <div>
                <h3>Hello, World.</h3>
            </div>
          );
    }
}
 
export default App;

// 