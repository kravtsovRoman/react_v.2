import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text: ''
        };
    }

    handleChange(e) {
        console.log(e.target.value);
        const text = e.target.value;
        this.setState({text: text});
    }
    
    render() {
        return (
            <div>
                <h1 style={{color: 'red'}}> {this.state.text} </h1>
                <input type="text" value={ this.state.text } onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);


