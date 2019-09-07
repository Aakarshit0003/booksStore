import jwt from 'jsonwebtoken'

export function login(data) {
    console.log('here');
    console.log(data);
    return dispatch => {
        fetch(`http://localhost:7000/login`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res=>res.json())
        .then((response) => {
            if(response !== null) {
                let token = jwt.sign(response, 'authenticate', { expiresIn: 1 });
                console.log('token is', token);
                localStorage.setItem("token", token)
                response.token = token;
            }
            dispatch({
                type: 'login',
                payload: response
              });
        });
    }
}


export function signUp(data) {
    return dispatch => {
        fetch(`http://localhost:7000/signup`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res=>res.json())
        .then((response) => {
            if(response !== null) {
                let token = jwt.sign(response, 'authenticate', { expiresIn: 1 });
                localStorage.setItem("token", token)
                response.token = token;
            }
            dispatch({
                type: 'signup',
                payload: response
              });
        });
    }
}

export function logout() {
    return dispatch => {
        dispatch({
            type: 'logout'
        })
    }
}
