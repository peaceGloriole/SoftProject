import { Link, useNavigate } from 'react-router-dom';

import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

import { useState } from 'react';

const initialValues = { email: '', password: '' };

export default function Login() {
    const [error, setError] = useState(``);
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        if (!email || !password) {
            setError(`Incorrect email or password!`);
        }

        try {
            await login(email, password);

            navigate(`/`);
        } catch (error) {
            setError(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, loginHandler);

    return (
        <section id="loginPage">
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Login</legend>

                    <label htmlFor="email" className="vhide">Email</label>
                    <input
                        id="email"
                        className="email"
                        name="email"
                        type="text"
                        onChange={changeHandler}
                        value={values.email}
                        placeholder="Email" />

                    <label htmlFor="password" className="vhide">Password</label>
                    <input
                        id="password"
                        className="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={changeHandler}
                        placeholder="Password" />

                    {error ? <div className="error">{error}</div> : null}

                    <button className="login">Login</button>

                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </fieldset>
            </form>
        </section>
    );
}