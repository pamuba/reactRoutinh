import React from 'react'

function HomePage({history}) {
    const login = () => {
        history.push("/login")
    }
    const register = () => {
        history.replace("/register")//a-b-d
    }
    return (
        <div>
            HomePage<br></br>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
        </div>
    )
}

export default HomePage
