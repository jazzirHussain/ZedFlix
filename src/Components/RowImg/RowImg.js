import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function RowImg(props) {
const [imgs, setImgs] = useState([])

    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setImgs(response.data.backdrops)
        })
       
    },[imgs])
    return (
        <div>
            
        </div>
    )
}

export default RowImg
