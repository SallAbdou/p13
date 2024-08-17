const URL_LOGIN = 'http://localhost:3001/api/v1/user/login'

export const postLogin = data => {
    return fetch(URL_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.json())

}