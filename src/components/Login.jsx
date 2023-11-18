
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [indata, changeindta] = useState({


        "email": "",
        "password": ""
    })
    const InputHandler = (event) => {
        changeindta({ ...indata, [event.target.name]: event.target.value })


    }

    const readValue = () => {
        console.log(indata)

        if ( indata.email=="admin@gmail.com" && indata.password == "12345"){
            navigate("/add")
        } else {
            alert("invalid credentcials")
        }
        
    }
    return (
        <div>
            
            <div className="container">
                
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <center>
                            <div class="card"  >
                                <img src="https://t4.ftcdn.net/jpg/04/60/71/01/240_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div className="row g-5">
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <label htmlFor="" className="form-label">Email</label>
                                            <input type="text" className="form-control" name='email' value={indata.email} onChange={InputHandler} />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <label htmlFor="" className="form-label">password</label>
                                            <input type="password" name="password" id="" className="form-control" value={indata.password} onChange={InputHandler} />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <button onClick={readValue} className="btn btn-danger">Login</button>
                                        </div>
                                        <div><a href="/regi" class="btn btn-primary">New User</a></div>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div></div>
    )
}

export default Login