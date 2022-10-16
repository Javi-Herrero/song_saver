import { createSlice } from '@reduxjs/toolkit'

export const songManagerSlice = createSlice({
    name: 'songManager',
    initialState: {
        song: '',
        artist: '',
        genre: '',
        rating: 0,
        arrow: {
            song: 'arrow up',
            artist: 'arrow up',
            genre: 'arrow up',
            rating: 'arrow up'
        },
        list: []
    },
    reducers: {
        addSong: (state, action) => {
            state[action.payload.name] = action.payload.value
        },
        showSong: (state) => {
            let song = {
                song: state.song,
                artist: state.artist,
                genre: state.genre,
                rating: state.rating,
            }

            state.list.push(song)
            state.song = ''
            state.artist = ''
            state.genre = ''
            state.rating = 0


        },
        reorderList: (state, action) => {

            if (state.arrow[action.payload] === 'arrow up') {
                state.list.sort((a, b) => {
                    if (a[action.payload].toLowerCase() < b[action.payload].toLowerCase()) { return -1; }
                    if (a[action.payload].toLowerCase() > b[action.payload].toLowerCase()) { return 1; }
                    return 0;
                })

            } else {
                state.list.sort((a, b) => {
                    if (a[action.payload].toLowerCase() < b[action.payload].toLowerCase()) { return -1; }
                    if (a[action.payload].toLowerCase() > b[action.payload].toLowerCase()) { return 1; }
                    return 0;
                })
                state.list.reverse()

            }
            state.arrow[action.payload] === 'arrow up' ? state.arrow[action.payload] = 'arrow down' : state.arrow[action.payload] = 'arrow up'




        },
        deleteSong: (state, action) => {
            state.list.splice(action.payload, 1)
        }
    }
})
export const { addSong, showSong, reorderList, deleteSong } = songManagerSlice.actions
export default songManagerSlice.reducer