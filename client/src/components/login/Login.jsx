import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(
        { email: '', password: '' }, ({ email, password }) => {
            login(email, password);

            navigate(`/`);
        });

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

                    <button type="button" className="login">Login</button>

                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </fieldset>
            </form>
        </section>
    );
}