import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import RowPostZed  from '../../Components/RowPost/RowPostZed'
import './Notfound_404.css'

function Notfound_404() {
    return (
        <div>
            <NavBar notHome></NavBar>
            <div className='content_fnd'>
            <h1>404 Movie/Original Not Found</h1>
            </div>
            <RowPostZed srs title='Currently Available'></RowPostZed>
        </div>
    )
}

export default Notfound_404

