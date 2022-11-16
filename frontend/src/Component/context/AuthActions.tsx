export const LoginStart = (_userCredentials: any) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user: any) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
});


export const CLEAR_ERRORS='CLEAR_ERRORS';