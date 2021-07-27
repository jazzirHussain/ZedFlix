import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner'
import { API_key } from '../../Constants'
import Saesons from '../../Components/Seasons/Saesons'
import NavBar from '../../Components/NavBar/NavBar'

function Episode() {
    const tv_id = window.location.pathname.split('/')[2]
    const ssn_no = window.location.pathname.split('/')[3]
    const epi_no = window.location.pathname.split('/')[4]

    return (
        <div className='banner'>
            <NavBar notHome></NavBar>
            <Banner url={`https://api.themoviedb.org/3/tv/${tv_id}/season/${ssn_no}/episode/${epi_no}?api_key=${API_key}&language=en-US`} isSrs isEpi></Banner>
            <Saesons url={`https://api.themoviedb.org/3/tv/${tv_id}/season/${ssn_no}?api_key=${API_key}&language=en-US`} isEpi epi_no={epi_no} tv_id={tv_id}></Saesons>
        </div>
    )
}

export default Episode
