import React, {Component} from 'react';
import classes from './QuizList.css';
import {NavLink} from 'react-router-dom';
import axias from 'axios';

export default class QuizList extends Component {

    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return(
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz}>
                        Test {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axias.get('https://react-quiz-1abfd.firebaseio.com/Quiz.json').then(response => {
            console.log(response);
        })
    }


    render() {
        return(
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        )
    }
}
