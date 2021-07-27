import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Reviews.css'
import Collapsible from 'react-collapsible';
import {imageUrl} from '../../Constants'

function Reviews(props) {

    const [reviews, setReviews] = useState([])
    const [baseReview, setBaseReview] = useState([])
    let x

    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setBaseReview([response.data.results.shift()])
            setReviews(response.data.results)
            
        })
    
    }, [])
    const cut_url = (url)=>{
        return url.substring(1)
    }


    return (
        <div className='rev-top'>
            <h1>Reviews</h1>
            
            {baseReview[0] ? baseReview.map((obj)=>
                <div className='rev'>
                   
                <div className='auth-avatar'><img src={obj.author_details.avatar_path ? obj.author_details.avatar_path.split('/')[5] ? cut_url(obj.author_details.avatar_path) : imageUrl+obj.author_details.avatar_path : 'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'}></img></div>
    
                <div className='auth-name'><h3>{obj.author_details.username}</h3></div>
                <div className='review'><p>{obj.content}</p></div>
                </div>


            ): <p className='no_rev'>No reviews available</p>}
            {baseReview[0] ? 
                <Collapsible triggerWhenOpen='Less Reviews' contentContainerTagName='collapse' trigger='More Reviews' >
                <p>{reviews.map((obj)=>
                <div className='rev'>
        
                <div className='auth-avatar'><img src={obj.author_details.avatar_path ? obj.author_details.avatar_path.split('/')[5] ? cut_url(obj.author_details.avatar_path) : imageUrl+obj.author_details.avatar_path : 'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'}></img></div>
    
                <div className='auth-name'><h3>{obj.author_details.username}</h3></div>
                <div className='review'><p>{obj.content}</p></div>
                </div>


            )}</p>

            </Collapsible>
            :''}
            
            
        </div>
    )
}

export default Reviews
