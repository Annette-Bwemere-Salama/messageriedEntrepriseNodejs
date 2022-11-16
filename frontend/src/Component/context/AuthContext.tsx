import React from "react";
import {
    createContext, useEffect, useReducer
} from "react";
import AuthReducer from "./AuthReducer";


interface AppContextInterface {
    user: string;
    isFetching: boolean;
    error: boolean;
}

const INITIAL_STATE = {
    // user: JSON.parse(localStorage.getItem("user")!),
    user: "username",
    isFetching: false,
    error: false,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                // dispatch: any,

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

