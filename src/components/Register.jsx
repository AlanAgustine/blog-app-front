import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Register = () => {
    const [indata, changeindata] = useState({



        "name": "",
        "email": "",
        "user_id": "",
        "password": "",

    })



    const InputHandler = (event) => {
        changeindata({ ...indata, [event.target.name]: event.target.value })







    }

    const readValue = () => {
        console.log(indata)

        axios.post("http://127.0.0.1:8000/api/useradd/", indata).then(
            (response) => {
                alert(response.data.status)
            }
        )



    }
    return (
        <div>
            <Navbar />


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-6">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={indata.name} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={indata.email} onChange={InputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">USer_id</label>
                                <input type="text" className="form-control" name='user_id' value={indata.user_id} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" id="" className="form-control" value={indata.password} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-danger">Submit</button>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><a href="/" class="btn btn-primary">Login</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register