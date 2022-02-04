import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import axios from 'axios'
import { useHistory } from 'react-router'

const useStyles = makeStyles(theme => ({
    root: {
        background: 'url("https://i.ibb.co/bR5C3mb/music-instrument-doodle-seamless-pattern-6997-572-modified.webp") repeat 0 0',
        height: '100vh',
        animation: '$animation 10s infinite',
        animationTimingFunction: 'linear',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            height: '100%'
        }
    },
    container: {
        overflow: 'hidden',
        height: '60%',
        maxWidth: '400px',
        minHeight: '450px',
        background: 'rgba(255,255,255,0.9)',
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: '0',
            paddingTop: '50px',
            width: '100%',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)'
        }
    },
    input: {
        backgroundColor: 'white',
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '4px',
            border: 'none'
        }
    },
    div: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    h1: {
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            color: 'white',
            opacity: 1
        }
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(3, 0, 2)
    },
    '@keyframes animation': {
        '100%': {
            backgroundPosition: '626px 599px'
        }
    }
}))

const Login = () => {
    const [body, setBody] = useState({ username: '', password: '' })
    const { push } = useHistory()
    const classes = useStyles()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }
   
    const onSubmit = () => {
        axios.post('https://app-api-gastos.herokuapp.com/api/login', body)
            .then(({ data }) => {
                localStorage.setItem('auth', '"yes"')
                push('/app')
            })
            .catch(({ response }) => {
                alert('Usuario y/o contraseña incorrecta')
                body.username = ''
                body.password = ''
            })
    }

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5' className={classes.h1}>Sign In</Typography>
                    <form className={classes.form}>
                        <TextField
                            fullWidth
                            autoFocus
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label={body.username === "" ? "Usuario": ""}
                            value={body.username}
                            onChange={inputChange}
                            name='username'
                            className={classes.input}
                            InputLabelProps={{
                                shrink: false
                            }}
                            autoComplete='off'
                        />
                        <TextField
                            fullWidth
                            type='password'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label={body.password === "" ? "Contraseña": ""}
                            value={body.password}
                            onChange={inputChange}
                            name='password'
                            className={classes.input}
                            InputLabelProps={{shrink: false}}
                        />
                        <Button
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={onSubmit}
                        >
                            Ingresar
                        </Button>
                    </form>
                </div>
            </Container>
        </Grid>
    )
}

export default Login