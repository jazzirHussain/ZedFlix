import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import RowPost from '../../Components/RowPost/RowPost'
import Banner from '../../Components/Banner/Banner'
import { API_key, action } from '../../Constants'
import Youtube from 'react-youtube'
import axios from 'axios'
import './Movie.css'
import RowImg from '../../Components/RowImg/RowImg'
import Reviews from '../../Components/Reviews/Reviews'

function SpecificMovie() {
    const id = window.location.pathname.split('/')[2]
    const [data, setData] = useState('')
    
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_key}&language=en-US`).then((response)=>{
            setData(response.data.results[0].key)
        })
    
    },[])
    console.log(data)
    const opts = {
        height: '390',
        width: '90%',
        playerVars: {
          autoplay: 0,
          controls: 0,
          iv_load_policy:3,
        },
      };

    return (
        <div style={{height:'100%'}}>
            <NavBar notHome/>
            <Banner url={`https://api.themoviedb.org/3/movie/${id}?api_key=${API_key}&language=en-US`}></Banner>
            <Youtube videoId={data} opts={opts} containerClassName={'video'}/>
            <RowImg url={`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_key}&language=en-US`}></RowImg>
            <RowPost url={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_key}&language=en-US&page=1`} isSmall title='Similar Movies'></RowPost>
            <Reviews url={`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_key}&language=en-US&page=1`}></Reviews>
        </div>
    )
}

export default SpecificMovie
