import { createUseStyles} from 'react-jss'
export const useStyles = createUseStyles({
    card: {
        '& input, & textarea': {
            padding: 6,
            border: ['solid', 1, '#ddd'],
            borderRadius: 2,
        },
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        gap: 10,
        padding: 10,
        margin: 10,
        borderRadius: 4,
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    },
    button: {
        alignSelf: 'center',
        padding: 6,
        minWidth: 120,
        background: 'white',
        color: '#1976d2',
        border: ['solid', 1, 'currentColor'],
        borderRadius: 4,
        cursor: 'pointer',
        '&:hover': {
            color: '#1565c0',
            background:'rgba(25, 118, 210, 0.2)'
        }
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&>h1': {
            fontSize: 24,
            margin: 0,
        }
    },
    desc: {
        resize: 'none'
    },
    urlInput: {},
    img: {
        height: 400,
        backgroundPosition: 'center'
    },
})