import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [indata, changeindata] = useState({



        "user_id": ""
    })


    const InputHandler = (event) => {
        changeindata({ ...indata, [event.target.name]: event.target.value })


    }

    const readValue = () => {
        console.log(indata)
        axios.post("http://127.0.0.1:8000/api/search/",indata).then((response)=>{
            changeresult(response.data)

        })
        


    }
    const [result, changeresult]= useState([])
  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">User id</label>
                            <input type="text" className="form-control" name='admno' value={indata.user_id} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-dark">search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-6">

{(result.map(
    (value, index) => {
        return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

            <div class="card" >
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">Name:{value.name}</p>
                </div>
                <ul class="list-group list-group-flush">

                    <li class="list-group-item">Adm No:{value.admno}</li>
                    <li class="list-group-item">Rollno:{value.rollno}</li>
                    <li class="list-group-item">College:{value.college}</li>

                </ul>

            </div>
        </div>
    }
))}

</div>
        </div>

    </div>
  )
}

export default Search