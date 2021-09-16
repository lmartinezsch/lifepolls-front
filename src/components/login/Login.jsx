import React from 'react';
import logo from './logo-poll.png';
import avatar from './avatar.png';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import styles from './styles.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <Grid>
                <Grid container justify="center">
                    <Grid>
                        <img src={logo} width={330}/>
                    </Grid>
                </Grid>
                <Grid border={2} container justify="center">
                    <Grid item xs={12} sm={6}>
                                <Box borderBottom={1} p={10}>
                                    <Typography variant="body1" align='right'>
                                        ¿No tienes una cuenta POLL? <Link href="#" color="secondary" variant="body1"
                                        >REGISTRARSE</Link>
                                    </Typography>
                                </Box>
                                <Grid container justify="center">                              
                                    <Box display="flex">
                                        <Grid container justify="center">
                                            <Box borderRight={1} p={3}>
                                                <Typography variant="h4" color="initial" paragraph >
                                                    Inicia sesión para seguir ganando recompensas!
                                                </Typography>
                                                <Typography variant="body1" color="initial" paragraph>
                                                    Miles de encuestas a diario para poder recibir recompensas. Inicia sesión y responde las mejores encuenstas de la web.
                                                </Typography>
                                                <img src={avatar} width={330}></img>
                                            </Box>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={12}>
                                                <Box p={3}>
                                                    <Typography variant="h4" color="initial" paragraph>Inicia sesión</Typography>
                                                    <Typography variant="body1" color="initial" paragraph>Ingresa tus datos de inicio de sesión!</Typography>
                                                    <Grid>
                                                        <Box display="block" textAlign='center'>
                                                            <TextField variant="outlined" label="Usuario" fullWidth margin="normal"></TextField>
                                                            <TextField variant="outlined" label="Contraseña" fullWidth margin="normal"></TextField>
                                                            <Button size="large" variant="contained" color="primary">INICIAR SESIÓN</Button>
                                                        </Box>
                                                        <Box className="ayudas">
                                                            <Typography variant="body2" align="center" ><Link>¿Olvidaste tu contraseña?</Link></Typography>
                                                            <Typography variant="body2" align="center" paragraph><Link>¿Necesitas ayuda?</Link></Typography>
                                                        </Box>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>  
                    </Grid>
                </Grid>
        </Grid>
    )
}

export default Login;