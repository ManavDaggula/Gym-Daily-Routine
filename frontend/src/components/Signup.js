import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <>
            <div className="text-center container d-flex justify-content-center align-items-center flex-column" style={{height:"90vh"}}>
                <h1 className="display-3 fw-bold mb-5 text-ascent">Welcome to the community</h1>
                <form className='w-75'>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="name" name='name' placeholder='Username'/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="email" name='email' placeholder='Email Address'/>
                    </div>
                    <div className="mb-4">
                        <input type="password" className="form-control" id="password" name='password' placeholder='Password'/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm px-3">Sign Up</button>
                </form>
                <div className='mt-4 justify-content-center text-ascent'>
                    <span>Already have an Account?</span>
                    <Link to="/login" className="mx-2 text-ascent text-decoration-underline">Login</Link>
                </div>
            </div>
        </>
    )
}
