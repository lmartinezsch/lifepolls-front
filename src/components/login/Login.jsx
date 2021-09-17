import React from 'react';
import logo from './logo-poll.png';
import avatar from './avatar.png';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import styles from './styles.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <Grid container justify="center">
            <img src={logo} width={330}/>
            <Grid container justify="center" xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid item  sx={{display: 'inline'}}>
                        <Typography variant="body1" align='right'>
                            ¿No tienes una cuenta POLL? <Link href="#" color="secondary" variant="body1">REGISTRARSE</Link>
                        </Typography>
                        <Box border={1} p={5}>
                            <Typography variant="h4" color="initial" paragraph >
                                Inicia sesión para seguir ganando recompensas!
                            </Typography>
                            <Typography variant="body1" color="initial" paragraph>
                                Miles de encuestas a diario para poder recibir recompensas. Inicia sesión y responde las mejores encuenstas de la web.
                            </Typography>
                            <img src={avatar} width={330}></img>

                        </Box>
                        <Box border={1} p={5}>
                            <Typography variant="h4" color="initial" paragraph>Inicia sesión</Typography>
                            <Typography variant="body1" color="initial" paragraph>Ingresa tus datos de inicio de sesión!</Typography>
                            <TextField variant="outlined" label="Usuario" fullWidth margin="normal"></TextField>
                            <TextField variant="outlined" label="Contraseña" fullWidth margin="normal"></TextField>
                            <Button size="large" variant="contained" color="primary">INICIAR SESIÓN</Button>
                            <Typography variant="body2" align="center" ><Link>¿Olvidaste tu contraseña?</Link></Typography>
                            <Typography variant="body2" align="center" paragraph><Link>¿Necesitas ayuda?</Link></Typography>
                        </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login;