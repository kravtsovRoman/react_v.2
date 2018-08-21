import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container justify-content-start'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#'>React/Redux</a>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/' action='replace'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/contact' action='replace'>Contact</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/abcaa' action='replace'>404</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
