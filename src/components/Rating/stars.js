import React from 'react';
import './rating.css'

const Stars = (props) => {
    let stars = []
    for (let i = 0; i < props.value; i++) {

        let star =
            <div className='star' key={i}></div>


        stars.push(star)
    }
    return (
        stars
    )
}
export default Stars