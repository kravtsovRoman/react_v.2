import React, {Component} from 'react';
import classes from './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/input/Input';

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите коректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите коректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };

    registrHandler = () => {

    };

    loginHandler = () => {

    };

    submitHandler = (e) => {
        e.preventDefault();
    };

    onChangeHandler(e, controlName) {

    }

    renderInputs() {
        return (
            Object.keys(this.state.formControls).map((controlName, index) => {
                const control = this.state.formControls[controlName];
                return (
                    <Input
                        key={controlName + index}
                        type={control.type}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        label={control.label}
                        shouldValidate={!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={e => this.onChangeHandler(e, controlName)}
                    />
                )
            })
        )
    }

    render() {
        return(
            <div className={classes.Auth}>
                <div>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        {this.renderInputs()}

                        <Button type={'success'}
                                onClick={this.loginHandler}
                        >Войти</Button>
                        <Button type={'primary'}
                                onClick={this.registrHandler}
                        >Регистрация</Button>
                    </form>
                </div>
            </div>
        )
    }
}
