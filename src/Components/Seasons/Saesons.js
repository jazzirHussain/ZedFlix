import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { API_key, imageUrl } from '../../Constants'
import './seasons.css'
import { useHistory } from 'react-router-dom'

function Saesons(props) {
    const [seasons, setSeasons] = useState([])
    const [id, setId] = useState('')
    const history = useHistory()
    const Str = require('@supercharge/strings')
    const [seasons_trunc, setSeasons_trunc] = useState([])
    var isTrue = false

    useEffect(() => {
        if (props.isEpi){
            axios.get(props.url).then((response)=>{
                setSeasons(response.data.episodes)       
            })
            up_epi()
            
        }else{
            axios.get(props.url).then((response)=>{
                setSeasons(response.data.seasons)
            })
        }
        
    }, [seasons])

const handleMovie = (id, sno,epi)=>{
    
    if(props.isEpi){
        history.push(`/episode/${props.tv_id}/${sno}/${epi}/`)
        window.location.reload()
        console.log(history.location)
    }else{
        history.push(`/episodes/${props.id}/${sno}`)
    }
   
}
const show_name= (id)=>{
    var elem = document.getElementById(id);
    elem.style.visibility = 'visible'
    elem.style.opacity = '1'
    var elem2 = document.getElementById(`$${id}`);
    elem2.style.visibility = 'visible'
    elem2.style.opacity = '1'
}
const hide_name= (id)=>{
    var elem = document.getElementById(id);
    elem.style.visibility = 'hidden'
    elem.style.opacity = '0'
    var elem2 = document.getElementById(`$${id}`);
    elem2.style.visibility = 'hidden'
    elem2.style.opacity = '0'
    setId('')
    
        
    
}
const cut = (str, int)=>{
    const string = Str(str).limit(int, '...').get()
    return string
}
const up_epi = ()=>{
    var i =0
    const x = props.epi_no - 1
    while(i<x+1){ 
        seasons.splice(0 ,1) 
        setSeasons_trunc(seasons)
        i = i+1

    }
    
    
}

    return (
        <div className='row'>
            <div className='title-row'>
             <h1>{props.isEpi ? 'Upcoming Episodes': 'Seasons'}</h1>
            </div>
            <div className="posters">
               {props.isEpi ? seasons_trunc.map((obj)=>
               
                <div onClick={()=>handleMovie(obj.id, obj.season_number, obj.episode_number)} onMouseOver={()=> show_name(obj.id)} onMouseOut={()=>hide_name(obj.id)} className={props.isSmall ? 'small-poster': 'poster'} style={{backgroundImage:`url(${props.isEpi ? imageUrl+obj.still_path : imageUrl+obj.poster_path})`}}>
                    <h2 className='hide text' id={obj.id} style={{paddingTop:props.isSmall ? '3em': '6em'}}> {obj.name} </h2>
                    <p className='hide rating ' id={`$${obj.id}`}>{props.isEpi ? obj.episode_number :`Episodes: ${obj.episode_count}`}</p>
                </div>
                    
                ):seasons.map((obj)=>
               
                <div onClick={()=>handleMovie(obj.id, obj.season_number)} onMouseOver={()=> show_name(obj.id)} onMouseOut={()=>hide_name(obj.id)} className={props.isSmall ? 'small-poster': 'poster'} style={{backgroundImage:`url(${props.isEpi ? imageUrl+obj.still_path : imageUrl+obj.poster_path})`}}>
                    <h2 className='hide text' id={obj.id} style={{paddingTop:props.isSmall ? '3em': '6em'}}> {obj.name} </h2>
                    <p className='hide rating ' id={`$${obj.id}`}>{props.isEpi ? obj.episode_number :`Episodes: ${obj.episode_count}`}</p>
                </div>
                    
                )}
               
            </div>
            
        </div>
    )
}

export default Saesons
