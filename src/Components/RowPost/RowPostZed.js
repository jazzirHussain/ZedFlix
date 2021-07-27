import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { imageUrl, API_key } from '../../Constants'
import {useHistory} from 'react-router-dom'
import './RowPost.css'
import {fb} from '../../Firebase/config'

function RowPostZed(props) {
    const Str = require('@supercharge/strings')
    const [id_1, setId] = useState('')
    const history = useHistory()
    const [series, setSeries] = useState([])
    var count = [];
    useEffect(() => {
        
        fb.firestore().collection('originals').get().then(snapshot=>{
            snapshot.forEach((obj)=>{
                axios.get(`https://api.themoviedb.org/3/tv/${obj.data().id}?api_key=${API_key}&language=en-US`).then((response)=>{
                    setSeries(series => [...series, response.data])
                    
                });     
        })});
            
  }, []);

    const results = series



    const handleMovie = (id)=>{
        history.push(`/tv/${id}`)
    }
    const show_name= (id)=>{
        var elem = document.getElementById(id);
        elem.style.visibility = 'visible'
        elem.style.opacity = '1'
        var elem2 = document.getElementById(id+1);
        elem2.style.visibility = 'visible'
        elem2.style.opacity = '1'
    }
    const hide_name= (id)=>{
        var elem = document.getElementById(id);
        elem.style.visibility = 'hidden'
        elem.style.opacity = '0'
        var elem2 = document.getElementById(id+1);
        elem2.style.visibility = 'hidden'
        elem2.style.opacity = '0'
        setId('')
        
            
        
    }
    const cut = (str, int)=>{
        const string = Str(str).limit(int, '...').get()
        return string
    }
    
    return (
        <div className='row'>
            <div className='title-row'>
            <h1>{props.title}<span className='soon'>  (First 2 episodes available to watch. Rest will be uploaded soon...)</span></h1>
            </div>
             
             <div className='posters'>
                
            {results.map((obj)=>
                    <div>
                        <div onClick={()=>handleMovie(obj.id)} onMouseOver={()=> show_name(obj.id)} onMouseOut={()=>hide_name(obj.id)} className={props.isSmall ? 'small-poster': 'poster'} style={{backgroundImage:`url(${imageUrl+obj.backdrop_path})`}}>
                        <h2 className='hide text' id={obj.id} style={{paddingTop:props.isSmall ? '3em': '6em'}}>{cut(obj.name, 15)}</h2>
                        <p className='hide rating ' id={obj.id+1}>{obj.vote_average}</p>
                        </div>
                    
                    </div>
                    
            
                    
                   
                
            
            
                )}
            </div>
        </div>
    )
}

export default RowPostZed
