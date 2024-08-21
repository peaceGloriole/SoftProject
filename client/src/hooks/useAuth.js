import { login, register } from "../api/auth-api";
import { useAuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const result = await login(email, password);

        changeAuthState(result);
    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {
        const result = await register(email, password);

        changeAuthState(result);
    };

    return registerHandler;
};