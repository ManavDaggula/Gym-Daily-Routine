import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="text-center container d-flex justify-content-center align-items-center flex-column" style={{height:"90vh"}}>
                <h1 className="display-3 fw-bold mb-5 text-ascent">Welcome Back!!!</h1>
                <form className='w-75'>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="name" name='name' placeholder='Username'/>
                    </div>
                    <div className="mb-4">
                        <input type="password" className="form-control" id="password" name='password' placeholder='Password'/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm px-3">Login</button>
                </form>
                <div className='mt-4 justify-content-center text-ascent'>
                    <span>Don't have account?</span>
                    <Link to="/signup" className="mx-2 text-ascent text-decoration-underline">Sign Up</Link>
                </div>
            </div>
        </>
    )
}
