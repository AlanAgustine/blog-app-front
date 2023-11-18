import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'


const View = () => {
    const [data, changeData] = useState([])
    const [isloading, changeloading] = useState(true)

    const fetch = () => {
        axios.post("http://127.0.0.1:8000/api/viewblog/").then((response) => {
            (changeData(response.data))
            changeloading(false)

        })
    }
    useEffect(() => { fetch() }, [])

    return (

        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-6">

                            {(data.map(
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
                </div>
            </div>
        </div>

    )
}

export default View