import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import React from "react";

type FormValues = {
    email: string;
    password: string;
    "conf-pass": string;
};

export default function Register() {
    const form = useForm<FormValues>();
    const { register, control, handleSubmit } = form;

    const onSubmit = (data: FormValues) => {
        console.log('submit', data);
    };

    return (
        <section id="registerPage">
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Register</legend>

                    <label htmlFor="email" className="vhide">Email</label>
                    <input
                        id="email"
                        className="email"
                        {...register("email")}
                        type="text"
                        placeholder="Email" />

                    <label htmlFor="password" className="vhide">Password</label>
                    <input
                        id="password"
                        className="password"
                        {...register("password")}
                        type="password"
                        placeholder="Password" />

                    <label htmlFor="conf-pass" className="vhide">Confirm Password:</label>
                    <input
                        id="conf-pass"
                        className="conf-pass"
                        {...register("conf-pass")}
                        type="password"
                        placeholder="Confirm Password" />

                    <button className="register">Register</button>

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </fieldset>
            </form>
            <DevTool control={control} />
        </section >
    );
}