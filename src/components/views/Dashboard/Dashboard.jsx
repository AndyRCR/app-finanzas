import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../../Layout/Header/Header'
import './Dashboard.css'

const useStyles = makeStyles(theme => ({
    root: {
		width: '100vw',
		height: '100vh',
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
	}
}))

const Dashboard = () => {
    const classes = useStyles()
	useEffect(() => {
		document.querySelector('.div').innerHTML = `<iframe title="dataStudio" class='iframe' src="https://datastudio.google.com/embed/reporting/42a58d1f-cf5e-49e6-926c-21970352691e/page/oaAlC" frameBorder="0"></iframe>`
	  return () => {
	  }
	}, [])
	

    return (
        <Grid container component='main' className={classes.root}>
			<Header />
			<div className="div">
			</div>
		</Grid>
    )
}

export default Dashboard