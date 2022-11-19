import { Rating } from 'react-simple-star-rating'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineAppstoreAdd, AiOutlineUnorderedList } from 'react-icons/ai'

const useStyles = createUseStyles({
    filter: {
        padding: [16, 0],
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100vw',
        right: 0,
        background: 'white',
        gap: 50,
        zIndex: 999,
        boxShadow: '0 0 7px #00000063',
        '& a': {
            color: '#333',
            width: 25,
            height: 25,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            '&:hover': {
                color: 'white',
                background: '#777',
            }
        }
    }

})

const Filter = ({ title, setTitle, rating, setRating }) => {
    const { filter } = useStyles()
    return <div className={filter}>
        <Link to='/'><AiOutlineHome /></Link>
        <Link to='/movies'><AiOutlineUnorderedList/></Link>
        <Link to='/add'><AiOutlineAppstoreAdd /></Link>
        {setTitle && <>
            <input placeholder="Search Title ..." value={title} onChange={e => setTitle(e.target.value)} />
            <Rating size={24} ratingValue={rating} onClick={e => e === rating ? setRating(0) : setRating(e)} />
        </>}
    </div>
}


export default Filter