import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../../Layout/Header/Header'
import MovimientosList from '../../Layout/Movimientos/MovimientosList'

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(-90deg, #1e3c72, #264C8C, #3a7bd5, #1e3c72)',
        animation: '$animation 5s ease infinite',
        backgroundSize: '500% 500%',
        position: 'relative',
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            height: 'calc(100%)'
        }
    },
    '@media (min-height: 550px)': {
        root: {
            // height: '100vh'
        }
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
    container:{
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: '0',
            width: '100%',
            height: '100%',
            maxHeight: 'none',
            background: 'rgba(255,255,255,0.1)'
        }
    }
}))

const Lista = () =>{
    const classes = useStyles()

    return (
        <Grid container component='main' className={classes.root}>
            <Header />
            <Container className={classes.container}>
                <MovimientosList
                 className={classes.table}
                 url='https://app-api-gastos.herokuapp.com/movimientos'
                />
            </Container>
        </Grid>
    )
}

export default Lista