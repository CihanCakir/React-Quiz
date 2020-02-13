import { SignUpService, LoginUser } from '../services/AuthService';


export const signUp = (credentials, history) => {
    console.log(credentials);
    return (dispatch) => {
        if (credentials.password.length < 6) {
            return dispatch({ type: 'SHORT_PASSWORD' })
        }

        SignUpService(credentials).then((res) => {
            console.log(res)
            if (res.token !== null) {
                localStorage.setItem("user", 'Bearer ' + res.token);
                localStorage.setItem("role", res.role_id);
                dispatch({ type: 'SIGNUP_SUCCESS' })
                setTimeout(() => {
                    history.push("/dashboard")

                }, 3000);
            }
            else {
                dispatch({ type: 'SIGNUP_ERROR', res })
            }

        },
            error => {
                dispatch({ type: 'CODE_ERROR', error });
            }
        )
    }

}

export const UserLogin = (credentials, history) => {
    return (dispatch) => {
        if (credentials.password.length < 6) {
            return dispatch({ type: 'SHORT_PASSWORD' });
        }
        LoginUser(credentials, history).then((res) => {
            console.log(res)
            // change === to ==
            if (res.success === true) {
                localStorage.setItem("user", 'Bearer ' + res.token);
                localStorage.setItem("role", res.role_id);

                dispatch({ type: 'LOGIN_SUCCESS' })
                setTimeout(() => {
                    if (res.role_id === 1) {

                        history.push("admin/dashboard")

                    } else if (res.role_id === 2) {

                        history.push("support/dashboard")
                    }
                    else {
                        history.push("/dashboard")
                    }
                }, 3000);
            }
            else {
                dispatch({ type: 'LOGIN_ERROR', res })
            }
        },
            error => {
                dispatch({ type: 'CODE_ERROR', error });
                console.log(error);
            }
        )
    }

}