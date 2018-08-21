import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends React.Component {

    render() {
        return (
            <div>
                <h1>Ошибка 404</h1>
                <p>Перейти на <Link to='/'> главную </Link> </p>
            </div>
        );
    }
}
