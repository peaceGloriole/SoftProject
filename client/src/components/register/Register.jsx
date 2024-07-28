import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Register() {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [rePass, setRePass] = useState(``);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3030/jsonstore/albums`);
            const result = response.json();

            return result;
        })();
    }, []);

    const submitClickHandler = (e) => {
        e.preventDefault;

        setEmail(e.target.email.value);
        setUser(e.target.user.value);
        setPassword(e.target.password.value);
    };

    return (
        <section id="registerPage">
            <form onSubmit={submitClickHandler}>
                <fieldset>
                    <legend>Register</legend>

                    <label htmlFor="email" className="vhide">Email</label>
                    <input
                        id="email"
                        className="email"
                        name="email"
                        value={email.email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email" />

                    <label htmlFor="password" className="vhide">Password</label>
                    <input
                        id="password"
                        className="password"
                        name="password"
                        value={password.password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password" />

                    <label htmlFor="conf-pass" className="vhide">Confirm Password:</label>
                    <input
                        id="conf-pass"
                        className="conf-pass"
                        name="rePass"
                        value={rePass.rePass}
                        onChange={(e) => setRePass(e.target.value)}
                        type="password"
                        placeholder="Confirm Password" />

                    <button type="button" className="register">Register</button>

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </fieldset>
            </form>
        </section>
    );
}