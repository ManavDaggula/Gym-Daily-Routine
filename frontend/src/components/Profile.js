import React from 'react'
import photo from "../images/profile-photo.png"
export default function Profile() {
    return (
        <>
            <div className="container mt-5 d-flex flex-column justify-content-around" style={{height:"85vh"}}>
                <div className="img">
                    <img src={photo} className="rounded mx-auto d-block" alt="..." />
                </div>

                <div className="container text-center">
                    <label className='text-decoration-underline text-ascent-light' htmlFor="profilePhoto">
                        Edit your Profile photo
                        <input type="file" className='d-none' name="profilePhoto" id="profilePhoto" accept='image/png, image/jpg, image/jpeg"' />
                    </label>
                </div>

                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label for="fullName" className="form-control  profile-label ">Full Name</label>
                            <input type="text" className="form-control  profile-form" id="fullName" name='fullName'/>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-control  profile-label">Email address</label>
                            <input type="email" className="form-control  profile-form" id="email" name='email' disabled="true"/>
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-control  profile-label">Phone No.</label>
                            <input type="tel" className="form-control  profile-form" id="phone" name='phone'/>
                        </div>

                        <div className="container-flud row">
                            <div className="mb-3 col-6">
                                <label for="dob" className="form-control  profile-label">DOB</label>
                                <input type="date" className="form-control  profile-form" id="dob" name='dob'/>
                            </div>
                            <div className="mb-3 col-6">
                                <label for="age" className="form-control  profile-label">Age</label>
                                <input type="text" className="form-control  profile-form" id="age" name='age'/>
                            </div>
                        </div>
                        <div className=" container d-flex justify-content-center">
                            <button type="submit" className="mt-5 btn btn-primary align-self-center">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
