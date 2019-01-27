import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component{

    state = {
        titleText: 'Ответьте на все вопросы',
        isFinished: true,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4}
                ]
            },
            {
                id: 2,
                question: 'В каком году основали Питер?',
                rightAnswerId: 3,
                answers: [
                    {text: '1701', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1704', id: 4}
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        // processing double click
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {
            this.setState({
               answerState: {[answerId]: 'success'}
            });
            // change question
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout);
            }, 500);
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render() {
        return(
            <div className={classes.Quiz }>
                <div className={classes.QuizWrapper}>
                    <h1>{this.state.titleText}</h1>
                    {
                        this.state.isFinished
                        ? <FinishedQuiz />
                        : <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;
