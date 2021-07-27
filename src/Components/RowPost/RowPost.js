 import React, { useEffect, useState } from 'react'
 import './RowPost.css'
import axios from 'axios'
import {imageUrl, API_key } from '../../Constants'
import {useHistory} from 'react-router-dom'

function RowPost(props) {
    const [results, setResluts] = useState([])
    const [id, setId] = useState('')
    const history = useHistory()
    const Str = require('@supercharge/strings')
    
    useEffect(() => {
            axios.get(props.url).then((response)=>{
                setResluts(response.data.results) 
                

            })
        
        
    }, [false])
    const handleMovie = (id)=>{
        if (props.srs){
            history.push(`/tv/${id}/#`)
            window.location.reload()
        }else{
            history.push(`/movies/${id}/#`)
        }
        window.location.reload()
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
             <h1>{props.title}</h1>
            </div>
            <div className="posters">
               {results.map((result)=>
                <div onClick={()=>handleMovie(result.id)} onMouseOver={()=> show_name(result.id)} onMouseOut={()=>hide_name(result.id)} className={props.isSmall ? 'small-poster': 'poster'} style={{backgroundImage:`url(${imageUrl+result.backdrop_path})`}}>
                    <h2 className='hide text' id={result.id} style={{paddingTop:props.isSmall ? '3em': '6em'}}>{result.original_name ? cut(result.original_name, 30):cut(result.original_title, 15)}</h2>
                    <p className='hide rating ' id={result.id+1}>{result.vote_average}</p>
                </div>
                    
                )}
               
            </div>
            
        </div>
    )
    
}

export default RowPost

