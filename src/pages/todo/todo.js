import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import { likeTodo } from './actions';
import classnames  from 'classnames';


class TodoPage extends React.Component {

    static path = '/';
    static propTypes = {
        todo: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);

        this.state = {
            todoName: ''
        };
    }

    changeInput(e) {
        const todoName = e.target.value;
        this.setState({ todoName });
    }

    renderTodoList(item, index) {
        const todoClasses = classnames('todo-item', {
            'is-liked': item.liked
        });

        return (
            <div key={ index } >
                <li className={ todoClasses }>
                    { item.todoText }
                    <div>
                        <button onClick={ this.likeTodo.bind(this, item) } className={'btn-like'}>Like</button>
                        <button  className={'btn-delete'}>X</button>
                    </div>
                </li>
            </div>
        );
    }

    likeTodo(todo) {
        this.props.dispatch(likeTodo(todo));
    }

    addTodo() {
        /* Логика this.state */
        // if (this.state.todoName !== '') {
        //     const todoId = this.state.todoList.length + 1;
        //     const todoText = this.state.todoName;
        //     const todoList = this.state.todoList;
        //     todoList.push({todoId, todoText});
        //
        //     this.setState({ todoList });
        //     this.setState({ todoName: '' });
        // }

        /* Логика redux */
        const todoList = this.props.todo.todoList;
        const todoId = todoList.length + 1;
        const todoText = this.state.todoName;

        this.props.dispatch(addTodo(todoId, todoText));
        this.setState({ todoName: '' });

    }

    render() {
        const todoList = this.props.todo.todoList;

        return (
            <div>
                <h1>TODO List</h1>
                <div className='col-sm-5'>
                    <ul>
                        { todoList.map(this.renderTodoList.bind(this)) }
                    </ul>
                    <div className='col-sm-6 mt-5'>
                        <input
                            type='text'
                            className='form-control'
                            value={ this.state.todoName }
                            onChange={this.changeInput.bind(this)}
                        />
                        <button
                            className='btn btn-primary mt-3'
                            onClick={ this.addTodo.bind(this) }
                        >
                            Add todo
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todo
    };
}

export default connect(mapStateToProps)(TodoPage);
