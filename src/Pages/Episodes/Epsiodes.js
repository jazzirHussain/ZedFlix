import React, { useEffect, useState } from 'react'
import './Episodes.css'
import axios from 'axios'
import { API_key, imageUrl } from '../../Constants'
import NavBar from '../../Components/NavBar/NavBar'
import { useHistory } from 'react-router-dom'

function Epsiodes() {
    const tv_id = window.location.pathname.split('/')[2]
    const ssn_no = window.location.pathname.split('/')[3]
    const [season, setSeason] = useState('')
    const [episodes, setEpisodes] = useState([])
    const Str = require('@supercharge/strings')
    const history = useHistory()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/season/${ssn_no}?api_key=${API_key}&language=en-US`).then((response)=>{
            setSeason(response.data)
            setEpisodes(response.data.episodes)

        })
    }, [])

    const cut = (str, int)=>{
        const string = Str(str).limit(int, '...').get()
        return string
    }
    const handleEpisode = (epi_no)=>{
        history.push(`/episode/${tv_id}/${ssn_no}/${epi_no}`)
    }    

    return (
        <div>
            <NavBar notHome></NavBar>
        <div className='top'>
            {episodes.map((obj)=>
            <div onClick={()=>handleEpisode(obj.episode_number)} className='cards'>
                <div className='ssn-img'>
                    <img src={imageUrl+obj.still_path}></img>
                </div>
                <div className='ssn-cont'>
                    <div className='epi-name'>
                        <h2>{`${obj.episode_number} . ${obj.name}`}</h2>
                        <p><span>❤️️</span>{`${obj.vote_average}`}</p>
                    </div>
                    <div className='epi-detail'>
                        <p> {cut(obj.overview, 500)} </p>
                    </div>
                </div>
            </div>
            )}
            
        </div>
        </div>
        
    )
}

export default Epsiodes
