import React from 'react'
import { useDispatch } from 'react-redux'
import { addSong, showSong } from '../App/Redux/songManagerReducer'
import { useSelector } from 'react-redux';
import Rating from '../Rating/rating'



const Form = () => {
    const { song, artist, genre, rating } = useSelector(state => state.songManager)
    const dispatch = useDispatch()

    let disabledButton
    ((song === '') || (artist === '') || (genre === '') || (rating === 0))
        ? disabledButton = true
        : disabledButton = false

    const eventHandler = (e) => {
        let { name, value } = e.target
        let data = { name, value }
        dispatch(addSong(data))

    }

    return (
        <div>
            <form >
                <input
                    name='song'
                    placeholder='Song'
                    type='text'
                    value={song}
                    onChange={eventHandler}
                ></input>
                <input
                    name='artist'
                    placeholder='Artist'
                    type='text'
                    value={artist}
                    onChange={eventHandler}
                ></input>
                <select
                    name='genre'
                    value={genre}
                    onChange={eventHandler}>
                    <option value=''>Genre</option>
                    <option value='Electronic'>Electronic</option>
                    <option value='Experimental'>Experimental</option>
                    <option value='Jazz'>Jazz</option>
                    <option value='Latin'>Latin</option>
                    <option value='Pop'>Pop</option>
                    <option value='Rock'>Rock</option>
                </select >
                <div className='rating'>
                    <Rating value={rating} name='input' />
                </div>
                <button disabled={disabledButton} type='button' onClick={() => dispatch(showSong())}  >+</button>
            </form>
        </div>
    )
}
export default Form