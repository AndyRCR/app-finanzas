import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../../Layout/Header/Header'

const useStyles = makeStyles(theme => ({
    root: {
		background: 'linear-gradient(-45deg, #1e3c72, #2a5298, #3a7bd5, #3a6073)',
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
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.2)',
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            height: '100vh',
        }
	},
    iframe: {
        margin: '100px 0 30px',
        width: '95%',
		maxWidth:'1500px',
        height: '100vw',
        minHeight: '600px',
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            height: '100vh',
            minHeight: 'auto',
            maxHeight: '450px'
        }
    }
}))

const Dashboard = () => {
    const classes = useStyles()

    return (
        <Grid container component='main' className={classes.root}>
			<Header />
			<div className={classes.div}>
                <iframe title="dataStudio" className={classes.iframe} src="https://datastudio.google.com/embed/reporting/6eacb256-4f92-424f-bc1d-26117ac123ef/page/bIzkC" frameBorder="0"></iframe>
			</div>
		</Grid>
    )
}

export default Dashboard