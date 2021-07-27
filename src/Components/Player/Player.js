import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy';
import { storage } from "../../Firebase/config"
import './Player.css'
import { useHistory } from 'react-router-dom';
import Details from '../Details/Details';
import { API_key } from '../../Constants';
import Saesons from '../Seasons/Saesons';
import NavBar from '../NavBar/NavBar';

function Player(props) {
    const [vedio, loadVedio] = useState("");
    let tv_id,ssn_no,epi_no,mv_id
    const history = useHistory()
    if (props.isTv){
        tv_id = window.location.pathname.split('/')[2]
        ssn_no = window.location.pathname.split('/')[3]
        epi_no = window.location.pathname.split('/')[4]
    }else{
        mv_id = window.location.pathname.split('/')[2]
    }
    storage.ref().child(props.isTv ? `${tv_id}/${ssn_no}/${epi_no}.mkv`: `${mv_id}.mkv`).getDownloadURL().then(function (url) {
        
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
            var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        loadVedio(url)
        console.log(url)
    }).catch((error) => {
        history.push('/404')
    })
    

    return (
        <div className='player-box'>
            <NavBar notHome></NavBar>
            <ReactPlayer id="myVedio"
                            url={vedio}
                            width='100%'
                            height='80%'
                            playing={true}
                            controls={true}
                            volume={1}
                            progressInterval={5000}
                            pip={true}
                            light={'https://image.tmdb.org/t/p/original/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg'}
                        
                        />
            {props.isTv ? <Details url={`https://api.themoviedb.org/3/tv/${tv_id}/season/${ssn_no}/episode/${epi_no}?api_key=${API_key}&language=en-US`}></Details> : 
            <Details url={`https://api.themoviedb.org/3/movie/${mv_id}?api_key=${API_key}&language=en-US`}></Details>}
            <Saesons url={`https://api.themoviedb.org/3/tv/${tv_id}/season/${ssn_no}?api_key=${API_key}&language=en-US`} isEpi epi_no={epi_no} tv_id={tv_id}></Saesons>
            
            
            
        </div>
    )
}

export default Player
