import React from 'react';
import './rating.css'
import { useDispatch } from 'react-redux'
import { addSong } from '../App/Redux/songManagerReducer'


const Rating = (props) => {

    const dispatch = useDispatch()


    const eventHandler = (e) => {
        let { name, value } = e.target
        let data = { name, value }
        dispatch(addSong(data))
    }

    return (
        <div className='stars' >
            <input type='radio' id='star1' name='rating' value='1' onChange={eventHandler} checked={props.value === '1'} />
            <input type='radio' id='star2' name='rating' value='2' onChange={eventHandler} checked={props.value === '2'} />
            <input type='radio' id='star3' name='rating' value='3' onChange={eventHandler} checked={props.value === '3'} />
            <input type='radio' id='star4' name='rating' value='4' onChange={eventHandler} checked={props.value === '4'} />
            <input type='radio' id='star5' name='rating' value='5' onChange={eventHandler} checked={props.value === '5'} />

            <label htmlFor='star1' aria-label='Banana'>1 star</label>
            <label htmlFor='star2'>2 stars</label>
            <label htmlFor='star3'>3 stars</label>
            <label htmlFor='star4'>4 stars</label>
            <label htmlFor='star5'>5 stars</label>
        </div>
    )
}
export default Rating