import React from 'react'

export default function Login() {
    return (
        <>
            <div className="container d-flex justify-content-around align-items-center flex-column" style={{height:"90vh"}}>
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Username</label>
                        <input type="text" className="form-control" id="name" name='name'/>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password'/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
