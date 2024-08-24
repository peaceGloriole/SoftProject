import { useEffect } from "react";
import { useState } from "react";

export function useForm(initialData, submitCallback) {
    const [values, setValues] = useState(initialData);

    useEffect(() => {
        setValues(initialData);
    }, [initialData]);

    const changeHandler = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);

        setValues(initialData);
    }

    return {
        values,
        changeHandler,
        submitHandler,
    };
};