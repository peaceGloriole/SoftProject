import { changeAuthState } from "../contexts/AuthContext";

export const useRegister = () => { 
    const { changeAuthState } = useContext(AuthContext);
};