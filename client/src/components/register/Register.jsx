import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

// import { useForm } from 'react-hook-form';
// import { DevTool } from "@hookform/devtools";
// import React from "react";

// type FormValues = {
//     email: string;
//     password: string;
//     "conf-pass": string;
// };

const initialValues = { email: '', password: '', 'conf-pass': '' };

export default function Register() {
    // const form = useForm<FormValues>();
    // const { register, control, handleSubmit, formState } = form;
    // const { errors } = formState;

    // const onSubmit = (data: FormValues) => {
    //     console.log('submit', data);
    // };

    // const BASE_URL = 'http://localhost:3030/users';

    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ email, password, repassword }) => {
        try {
            await register(email, password);

            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <section id="registerPage">
            {/* <form action="http://localhost:3030/users"  onSubmit={handleSubmit(onSubmit)}> */}

            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Register</legend>

                    <label htmlFor="email" className="vhide">Email</label>
                    {/* <p className="error">{errors.email?.message}</p> */}
                    <input
                        id="email"
                        className="email"
                        // {...register("email", {
                        //     required: {
                        //         value: true,
                        //         message: `Email is required`,
                        //     },
                        //     validate: (value) => {
                        //         if (!value.includes('@')) {
                        //             return `Email should contain @`;
                        //         }
                        //     },
                        // })}
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

                    <button className="register">Register</button>

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </fieldset>
            </form>
        </section >
    );
}