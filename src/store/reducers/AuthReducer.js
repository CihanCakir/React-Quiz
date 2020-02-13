const initState = {
    authResponse: null
};


const ContactReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SHORT_PASSWORD':
            console.log(action);
            return {
                ...state,
                authResponse: 'Şifre Çok Kısa',
            }
        case 'SIGNUP_SUCCESS':
            console.log(action);
            return {
                ...state,
                authResponse: 'Giriş Başarılı',
            }
        case 'SIGNUP_ERROR':
            console.log(action);
            return {
                ...state,
                authResponse: action.error.message,
            }
        case 'CODE_ERROR':
            console.log(action);
            return {
                ...state,
                authResponse: 'Bir problem yakalandı daha sonra tekrar deneyiniz',
            }
        case 'LOGIN_SUCCESS':
            console.log(action);
            return {
                ...state,
                authResponse: 'Tebrikler Giriş Yaptınız Teste yönlendiriliyorsunuz',
            }
        case 'LOGIN_ERROR':
            console.log(action);
            return {
                ...state,
                authResponse: action.res.message,
            }
        default:
            return state;


    }

}
export default ContactReducer;