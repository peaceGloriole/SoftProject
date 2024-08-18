import { useState } from "react";

export function useForm(initialData, submitCallback) {
    const [values, setValues] = useState(initialData);

    const changeHandler = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);
    }

    return {
        values,
        changeHandler,
        submitHandler,
    };
};