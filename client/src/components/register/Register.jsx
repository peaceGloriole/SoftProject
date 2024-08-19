import { Link } from "react-router-dom";
// import { useForm } from 'react-hook-form';
// import { DevTool } from "@hookform/devtools";
// import React from "react";

// type FormValues = {
//     email: string;
//     password: string;
//     "conf-pass": string;
// };

export default function Register() {
    // const form = useForm<FormValues>();
    // const { register, control, handleSubmit, formState } = form;
    // const { errors } = formState;

    // const onSubmit = (data: FormValues) => {
    //     console.log('submit', data);
    // };

    // const BASE_URL = 'http://localhost:3030/users';

    return (
        <section id="registerPage">
            {/* <form action="http://localhost:3030/users"  onSubmit={handleSubmit(onSubmit)}> */}

            <form>
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
                        type="text"
                        placeholder="Email" />

                    <label htmlFor="password" className="vhide">Password</label>
                    <input
                        id="password"
                        className="password"
                        type="password"
                        placeholder="Password" />

                    <label htmlFor="conf-pass" className="vhide">Confirm Password:</label>
                    <input
                        id="conf-pass"
                        className="conf-pass"
                        type="password"
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