import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    
    handle(e) {
        console.log('TEST TEST', e.target);
    }
    
    render() {
        return (
            <div style={{backgroundColor: 'red'}} className="test">
                <h1>AAAAA</h1>
                <h6>sdfghjkl</h6>
                <button onClick={this.handle}>Click me {this.props.children} </button>
            </div>
        );
    }
}

ReactDOM.render(
    <App>BBBBBBBBB</App>,
    document.getElementById('app')
);
