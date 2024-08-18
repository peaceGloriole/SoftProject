import { login } from "../api/auth-api";

export const useLogin = () => {
    const loginHandler = async (email, password) => {
        try {
            const result = await login(email, password);

            console.log(result);
        } catch (error) {
            console.log(error.message);
        }

        return;
    };

    return loginHandler;
};