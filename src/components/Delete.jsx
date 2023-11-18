import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {
    const [indata, changeindata] = useState({



        "user_id": ""
    })


    const InputHandler = (event) => {
        changeindata({ ...indata, [event.target.name]: event.target.value })


    }

    const readValue = () => {
        console.log(indata)
        


    }
  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">User Id</label>
                            <input type="text" className="form-control" name='user_id' value={indata.user_id} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-dark">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Delete