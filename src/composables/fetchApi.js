const fetchApi = async (url, fullPath, email, password) => {
    if (fullPath === '/signin') {
        const res = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })
        if (res.ok) {
            return true;
        }
    } else if (fullPath === '/signup') {
        const res = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })
        if (res.ok) {
            return true;
        }
    }
}

export default fetchApi;