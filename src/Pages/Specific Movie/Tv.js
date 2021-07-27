import React, { useState, useEffect } from 'react'
import { API_key } from '../../Constants';
import NavBar from '../../Components/NavBar/NavBar';
import Banner from '../../Components/Banner/Banner';
import YouTube from 'react-youtube';
import RowImg from '../../Components/RowImg/RowImg';
import RowPost from '../../Components/RowPost/RowPost';
import axios from 'axios';
import Saesons from '../../Components/Seasons/Saesons';
import Reviews from '../../Components/Reviews/Reviews';

function Tv() {
    const id = window.location.pathname.split('/')[2]

    const [data, setData] = useState('')
    
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_key}&language=en-US`).then((response)=>{
            setData(response.data.results[0] ? response.data.results[0].key: '') 
        })
    
    },[])

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
            <Banner url={`https://api.themoviedb.org/3/tv/${id}?api_key=${API_key}&language=en-US`} isSrs></Banner>
            <YouTube videoId={data} opts={opts} containerClassName={'video'}/>
            <Saesons url={`https://api.themoviedb.org/3/tv/${id}?api_key=${API_key}&language=en-US`} id={id}></Saesons>
            <RowImg url={`https://api.themoviedb.org/3/tv/${id}/images?api_key=${API_key}&language=en-US`}></RowImg>
            <RowPost url={`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_key}&language=en-US&page=1`} isSmall title='Similar Originals' srs></RowPost>
            <Reviews url={`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${API_key}&language=en-US&page=1`}></Reviews>
            
        </div>
    )

}

export default Tv
