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
    }

    renderTodoList(item, index) {
        return (
            <li key={ index }>
                { item.todoText }
            </li>
        );
    }

    addTodo() {
        if (this.state.todoName !== '') {
            const todoId = this.state.todoList.length + 1;
            const todoText = this.state.todoName;
            const todoList = this.state.todoList;
            todoList.push({todoId, todoText});

            this.setState({ todoList });
            this.setState({ todoName: '' });
        }
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
                        <button className='btn btn-primary mt-3' onClick={ this.addTodo.bind(this) }>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }
}
