import React from 'react';

export default class TodoPage extends React.Component {

    static path = '/';

    constructor(props){
        super(props);

        this.state = {
            todoName: '',
            todoList: [
                {
                    todoId: 1,
                    todoText: 'Todo 1'

                }
            ]
        };
    }

    changeInput(e) {
        const todoName = e.target.value;
        this.setState({ todoName });
        console.log(this.state.todoName);
    }

    renderTodoList() {
       // -------------------------
    }

    render() {
        return (
            <div>
                <h1>TODO List</h1>
                <div className='col-sm-8'>
                    <ul>
                        { this.state.todoList.map(this.renderTodoList.bind(this)) }
                    </ul>
                    <div className='col-sm-6 mt-5'>
                        <input type='text' className='form-control' value={ this.state.todoName } onChange={this.changeInput.bind(this)} />
                        <button className='btn btn-primary mt-3'>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }
}
