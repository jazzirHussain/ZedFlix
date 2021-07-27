import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import {API_key, imageUrl} from '../../Constants'
import { useHistory } from 'react-router-dom'
function Banner(props) {
    const [movie, setMovie] = useState('')
    const Str = require('@supercharge/strings')
    const [desc, setDesc] = useState('')
    const history = useHistory()
    
    useEffect(() => {
        if (props.isHome){
            axios.get(props.url).then((response)=>{ 
                const min = 0
                const max = 20
                const rand_int = Math.floor(min+Math.random()*(max-min))
                setMovie(response.data.results[rand_int])
                const overview = Str(response.data.results[rand_int].overview).limit(250,'...').get()
                setDesc(overview)
                
            },[movie, desc])
        }else{
            axios.get(props.url).then((response)=>{ 
                setMovie(response.data)
                const overview = Str(response.data.overview).limit(250,'...').get()
                setDesc(overview)
            })
        }
        
        
    }, [])


    const handlePlay = (id,epi,ssn)=>{
        if (props.isEpi){
            const tv_id = window.location.pathname.split('/')[2]
            history.push(`/play_tv/${tv_id}/${ssn}/${epi}`)
        }else{
            history.push(`/play_movie/${id}`)

        }
    }
    
    return (
        <div className='banner_in' style={{backgroundImage:`url(${movie.still_path ? imageUrl+movie.still_path : movie ? imageUrl+movie.backdrop_path:''})`}}>
            
            <div className='content'>
    <h1 className='title' onClick={()=>history.push(`movies/${movie.id}`)}>{ movie.name ? movie.name: movie.title}</h1>
                
                <div className='desc'><p className='desc'> {movie ? desc: ''} </p></div>
                
                <div className='banner_butns'>
                    {props.isSrs ? props.isEpi ? <button onClick={()=>handlePlay(movie.id, movie.episode_number, movie.season_number)} className='button'>Play</button> : ''  : <button onClick={()=>handlePlay(movie.id)} className='button'>Play</button>}
                    
                    <button className='button'>My list</button>
                </div>
                
            </div> 
            <div className="fade"></div>
            
            
           
        </div>
    )
}

export default Banner
