import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import { useHistory } from 'react-router'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
		background: 'linear-gradient(-90deg, #1e3c72, #264C8C, #3a7bd5, #1e3c72)',
		animation: '$animation 5s ease infinite',
		backgroundSize: '500% 500%',
		position: 'relative'
    },
	'@keyframes animation': {
		'0%': {
			backgroundPosition: '0 50%'
		},
		'50%': {
			backgroundPosition: '100% 50%'
		},
		'100%': {
			backgroundPosition: '0 50%'
		}
	},
	div: {
		width: '100vw',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.2)'
	},
	button: {
		maxWidth: '550px',
		minWidth: '250px',
		width: '40%',
		height: '75px',
		margin: '50px 0',
		backgroundColor: 'rgba(200,235,250,0.4)',
		color: 'black',
		transition: '0.3s',
		'&:hover': {
			color: 'white',
			transition: '0.3s'
		},
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            margin: '25px 0',
			height: '60px'
        }
	},
	h3: {
		fontSize: '20px',
		marginBottom: '0',
		color: 'white'
	}
}))

const Layout = ({ children }) => {
	const classes = useStyles()
	const { push } = useHistory()

	const openDashBoard = () => {
		push('/dashboard')
    }

	const openRegistro = () => {
		push('/registro')
    }

	const openLista = () => {
		push('/lista')
    }

	return (
		<Grid container component='main' className={classes.root}>
			<Header />
			<div className={classes.div}>
				<h3 className={classes.h3}>Bienvenido, Andy!</h3>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={openRegistro}
				>Ingresar un registro
				</Button>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={openDashBoard}
				>Dashboard
				</Button>
				<Button
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={openLista}
				>Lista de movimientos
				</Button>
			</div>
		</Grid>
	)
}

export default Layout