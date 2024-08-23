import { createContext, useContext, useState } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

const AuthContext = createContext();

export function AuthContextProvider(props) {

    const [authState, setAuthState] = usePersistedState(`auth`, {});

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const logout = () => {
        setAuthState(null);
    };

    const contextData = {
        userId: authState?._id,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
}