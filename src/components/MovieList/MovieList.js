import { useState } from "react"
import Filter from "../Filter"
import MovieCard from "../MovieCard"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    list: {
        background: 'aliceblue',
        paddingTop: 50,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 400px)',
        justifyContent: 'center'
    }
})

const MovieList = ({movies}) => {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(0)
    const { list: listClass } = useStyles()
    return <>
        <Filter {...{ title, rating, setTitle, setRating }} />
        <div className={listClass }>
            {movies.map((m, key) => ({ ...m, key })).filter(m => m.title.includes(title) && (!rating || m.rating === rating)).map(m => <MovieCard {...m} />)}
        </div>
        {/* <MovieCard key={movies.length} submit={r => setMovies([...movies, r])} /> */}
    </>
}



export default MovieList