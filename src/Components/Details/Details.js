import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Details.css'

function Details(props) {
    const [epi, setEpi] = useState([])

    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setEpi(response.data)
        })
    }, [])

    return (
        <div>
            <div className='det_out'>
                <div className='heading'>
                <h1>Now Playing</h1>
                </div>
                <div className='title_det'>
    <h2>{epi.episode_number} {`.`} {epi.name ? epi.name : epi.original_title} </h2>
                </div>
                <div className='det'>
                    <p> {epi.overview} </p>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Details
