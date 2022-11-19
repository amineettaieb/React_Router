import { useStyles } from "./MovieCard.styles"
import { Rating } from 'react-simple-star-rating'
import { useState } from "react"

const MovieCard = (props) => {
    const { submit } = props
    const { card, button, header, desc: descStyles, urlInput: urlInputStyles, img: imgStyles } = useStyles()
    const [description, setDescription] = useState(props.description ?? '')
    const [rating, setRating] = useState(props.rating ?? 0)
    const [url, setUrl] = useState(props.posterURL ?? '')
    const [title, setTitle] = useState(props.title ?? '')

    const handleSubmit = e => {
        e.preventDefault()
        if (!rating) {
            alert('Please rate at least with 1 star')
            return
        }
        submit({ posterURL: url, description, rating, title })
    }

    return <form className={card} onSubmit={handleSubmit}>
        {!submit && <div className={imgStyles} style={{backgroundImage: `url(${url})`}}/>}
        <header className={header}>
            {submit ? <input required placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /> : <h1>{title}</h1>}
            <Rating size={24} readonly={!submit} ratingValue={rating} onClick={setRating} />
        </header>
        {!submit ? <div className={descStyles}>{description}</div> : <textarea required placeholder="Description ..." className={descStyles} onChange={e => setDescription(e.target.value)} value={description} />}
        {submit && <input required className={urlInputStyles} value={url} onChange={e => setUrl(e.target.value)} type='url' placeholder='https://url...' />}
        {submit && <button className={button}>Add</button>}
    </form>
}


export default MovieCard