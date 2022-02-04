import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ExitToApp as ExitToAppIcon } from '@material-ui/icons'
import Header from '../../Layout/Header/Header'
import SelectList from '../../Layout/Select/SelectList'
import axios from 'axios'
import { useHistory } from 'react-router'

const useStyles = makeStyles(theme => ({
    root: {
        // height: '100vh',
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
            height: '100vh'
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
    container: {
        maxWidth: '400px',
        maxHeight: '85vh',
        marginTop: theme.spacing(10),
        background: 'rgba(255,255,255,0.8)',
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: '0',
            width: '100%',
            height: '100%',
            maxHeight: 'none',
            background: 'rgba(255,255,255,0.1)'
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
    select: {
        marginTop: '16px',
        marginBottom: '8px'
    }
}))

const Registro = () => {
    const classes = useStyles()
    const { push } = useHistory()

    const [body, setBody] = useState({
        fecha: '',
        concepto: '',
        importe: '',
        nota: ''
    })

    const onSubmit = () => {
        axios.post('https://app-api-gastos.herokuapp.com/registrar', body)
            .then(({data}) => {
                alert('Datos ingresados correctamente')
                push('/registro')
            })
            .catch(({response}) => {
                alert('Ocurrió un error')
            })
    }

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    return (
        <Grid container component='main' className={classes.root}>
            <Header />
            <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className={classes.avatar}>
                        <ExitToAppIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5' className={classes.h1}>Registro de movimientos</Typography>
                    <form className={classes.form}>
                        <TextField
                            fullWidth
                            autoFocus
                            type='date'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            value={body.fecha}
                            onChange={inputChange}
                            name='fecha'
                            className={classes.input}
                            InputLabelProps={{
                                shrink: false
                            }}
                            autoComplete='off'
                        />

                        <SelectList
                            idtitle='idtipomovimiento'
                            title='movimiento'
                            url='https://app-api-gastos.herokuapp.com/tipomovimiento'
                            handleChange={(e) => {inputChange(e)}}
                        />

                        {body.movimiento && <SelectList
                            idtitle='idtipomotivo'
                            title='motivo'
                            url={`https://app-api-gastos.herokuapp.com/tipomotivo/${body.movimiento}`}
                            handleChange={(e) => {inputChange(e)}}
                        />
                        }

                        <TextField
                            fullWidth
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label={body.concepto === "" ? "Concepto" : ""}
                            value={body.concepto}
                            onChange={inputChange}
                            name='concepto'
                            className={classes.input}
                            InputLabelProps={{ shrink: false }}
                            autoComplete='off'
                        />

                        <TextField
                            fullWidth
                            type='number'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label={body.importe === "" ? "Importe" : ''}
                            value={body.importe}
                            onChange={inputChange}
                            name='importe'
                            className={classes.input}
                            InputLabelProps={{ shrink: false }}
                        />

                        <TextField
                            fullWidth
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label={body.nota === "" ? "Nota" : ""}
                            value={body.nota}
                            onChange={inputChange}
                            name='nota'
                            className={classes.input}
                            InputLabelProps={{ shrink: false }}
                            autoComplete='off'
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

export default Registro