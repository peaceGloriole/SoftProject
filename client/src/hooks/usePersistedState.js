import { useState } from "react";

export function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (!persistedState) {
            return typeof initialState === `function`
                ? initialState()
                : initialState;
        }

        const authData = JSON.parse(persistedState);
        return authData;
    });

    const updateState = (value) => {
        const newState = typeof value === `function`
            ? value(state)
            : value;

        localStorage.setItem(key, JSON.stringify(newState));

        setState(newState);
    };

    return [state, updateState];
}