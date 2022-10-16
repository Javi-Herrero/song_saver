import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { deleteSong, reorderList } from '../App/Redux/songManagerReducer'
import '../Rating/rating.css'
import Stars from '../Rating/stars';


const SongList = () => {
    const { list, arrow } = useSelector(state => state.songManager)
    const dispatch = useDispatch()


    const sortList = (e) => {
        let sortBy = e.target.closest('th').className

        dispatch(reorderList(sortBy))
    }

    const deleteItem = (e) => {
        dispatch(deleteSong(e.target.parentNode.parentNode.id))
    }

    let songList = list.map((element, key) => {

        let item =

            <tr name='song' id={key} key={key}  >
                <td className='song'>{element.song}</td>
                <td className='artist'>{element.artist}</td>
                <td className='genre'>{element.genre}</td>
                <td className='starCell' >
                    <div><Stars value={element.rating} /><br></br></div>
                </td>
                <td className='delete'><div><button onClick={deleteItem} type='button'>X</button></div></td>
            </tr>


        return item
    });


    return (
        <div className='header'>


            <table id='table' name='songsTable'>
                <thead>
                    <tr>
                        <th className='song'>Song
                            <button onClick={sortList} className='sort' type='button'>
                                <i className={arrow.song}></i>
                            </button >
                        </th>
                        <th className='artist'>Artist
                            <button onClick={sortList} className='sort' type='button'>
                                <i className={arrow.artist}> </i>
                            </button >
                        </th>
                        <th className='genre'>Genre
                            <button onClick={sortList} className='sort' type='button'>
                                <i className={arrow.genre}> </i>
                            </button >
                        </th>
                        <th className='rating'>Rating
                            <button onClick={sortList} className='sort' type='button'>
                                <i className={arrow.rating}> </i>
                            </button >
                        </th>
                        <th className='delete'></th>
                    </tr>
                </thead>
            </table>
            <div className='content'>

                <table >
                    <tbody>
                        {songList}
                    </tbody>

                </table>
            </div>
        </div>

    )
}
export default SongList