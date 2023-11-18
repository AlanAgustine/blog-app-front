import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Userblog = () => {
    const [indata, changeindata] = useState({



        "user_id": ""
    })


    const InputHandler = (event) => {
        changeindata({ ...indata, [event.target.name]: event.target.value })


    }

    const readValue = () => {
        console.log(indata)
        axios.post("http://127.0.0.1:8000/api/viewblog/",indata).then((response)=>{
            changeresult(response.data)

        })
        


    }
    const [result, changeresult]= useState([{"user_id":"1"}])
  return (
    <div>
        <Navbar />
        
            <div className="row g-6">

{(result.map(
    (value, index) => {
        return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <div class="card mb-3">
            <img src={value.profile} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{value.title}</h5>
                    <p class="card-text">{value.post}</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
        </div>
    </div>
    }
))}

</div>
        </div>

    
  )
}

export default Userblog