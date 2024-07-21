import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Register() {
    const [email, setEmail] = useState(``);
    const [user, setUser] = useState(``);
    const [password, setPassword] = useState(``);

    const submitClickHandler = (e) => {
        e.preventDefault;


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
                        type="text"
                        placeholder="Email" />

                    <label htmlFor="password" className="vhide">Password</label>
                    <input
                        id="password"
                        className="password"
                        name="password"
                        type="password"
                        placeholder="Password" />

                    <label htmlFor="conf-pass" className="vhide">Confirm Password:</label>
                    <input
                        id="conf-pass"
                        className="conf-pass"
                        name="conf-pass"
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