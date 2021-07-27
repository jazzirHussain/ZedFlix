import React, { useEffect, useState } from 'react'
import RowPost from '../../Components/RowPost/RowPost'
import {originals, action, ComedyMovies, HorrorMovies, RomanceMovies, DocumentaryMovies,banner, API_key} from '../../Constants'
import NavBar from '../../Components/NavBar/NavBar'
import Banner from '../../Components/Banner/Banner'

import axios from 'axios'
import RowPostZed from '../../Components/RowPost/RowPostZed'

function Home() {
    
    
    return (
        <div className='banner'>
        <NavBar></NavBar>
      <Banner url={banner} isHome ></Banner>
      <RowPost title='Netflix Originals' url={originals} srs/>
      <RowPostZed title='ZedFlix Originals' srs></RowPostZed>
      <RowPost title='Action' isSmall url={action} isHome/>
      <RowPost title='Comedy' isSmall url={ComedyMovies} isHome/>
      <RowPost title='Horror' isSmall url={HorrorMovies} isHome/>
      <RowPost title='Romance' isSmall url={RomanceMovies} isHome/>
      <RowPost title='Documnetaries' isSmall url={DocumentaryMovies} isHome/>
        </div>
    );
}

export default Home
