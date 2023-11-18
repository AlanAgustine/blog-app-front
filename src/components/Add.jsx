import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const [indata, changeindata] = useState({



        "title": "",
        "post": "",
        "user_id": "",
        "profile": "",
        
    })
   


    const InputHandler = (event) => {
        changeindata({ ...indata, [event.target.name]: event.target.value })
       

        

        


    }

    const readValue = () => {
        console.log(indata)

        axios.post("http://127.0.0.1:8000/api/addblog/", indata).then(
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
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" name='title' value={indata.title} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Post</label>
                                <textarea name="post" id="" cols="30" rows="10" className="form_cotrol" value={indata.post} onChange={InputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">USer_id</label>
                                <input type="text" className="form-control" name='user_id' value={indata.user_id} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Profile pic url</label>
                                <input type="text" className="form-control" name='profile' value={indata.profile} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-danger">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add