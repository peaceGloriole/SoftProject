import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: '', password: '', 'conf-pass': '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ email, password, repassword }) => {
        if (!email || !password || !repassword) {
            setError('All fields are required!');
            return;
        }

        if (password !== repassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            await register(email, password, repassword);

            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <section id="registerPage">
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Register</legend>

                    <label htmlFor="email" className="vhide">Email</label>
                    <input
                        id="email"
                        className="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        type="text"
                        placeholder="Email" />

                    <label htmlFor="password" className="vhide">Password</label>
                    <input
                        id="password"
                        className="password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        placeholder="Password" />

                    <label htmlFor="conf-pass" className="vhide">Confirm Password:</label>
                    <input
                        id="conf-pass"
                        className="conf-pass"
                        type="password"
                        name="repassword"
                        values={values.repassword}
                        onChange={changeHandler}
                        placeholder="Confirm Password" />

                    {error &&
                        <p>
                            <span>⚠️</span>
                            <span>{error}</span>
                        </p>
                    }

                    <button className="register">Register</button>

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </fieldset>
            </form>
        </section >
    );
}