import React from 'react'
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core'
import { useHistory, Route } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    navbar: {
        backgroundColor: 'black'
    }
}))

const Header = ({ setOpen }) => {
    const history = useHistory()
    const classes = useStyles()

    return (
        <AppBar color='primary' className={classes.navbar}>
            <Toolbar>
                <Typography style={{ flexGrow: 1 }}>Control de gastos</Typography>
                <Route path='/app'>
                    <Button variant='text' color='inherit' onClick={() => {
                        localStorage.clear()
                        history.push('/login')
                    }}>Log out</Button>
                </Route>
                <Route exact path='/dashboard'>
                    <Button variant='text' color='inherit' onClick={() => {
                        history.push('/app')
                    }}>Regresar</Button>
                </Route>
                <Route exact path='/registro'>
                    <Button variant='text' color='inherit' onClick={() => {
                        history.push('/app')
                    }}>Regresar</Button>
                </Route>
                <Route exact path='/lista'>
                    <Button variant='text' color='inherit' onClick={() => {
                        history.push('/app')
                    }}>Regresar</Button>
                </Route>
            </Toolbar>
        </AppBar>
    )
}

export default Header
