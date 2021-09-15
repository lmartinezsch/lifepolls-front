import React from 'react';
import logo from './logo-poll.png';
import avatar from './avatar.png';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import styles from './styles.css'

const Login = () => {
    return(
        <Grid>
            <Container maxWidth="lg">
                <Grid 
                    container
                    justify="center">
                    <Grid>
                        <img src={logo} width={330}/>
                    </Grid>
                </Grid>
                <Box borderRadius={9} p={10} boxShadow={6}>
                            <Box borderBottom={1}>
                                <Typography variant="body1" align='right'>
                                    ¿No tienes una cuenta POLL? REGISTRARSE
                                </Typography>
                            </Box>
                            <Grid
                                container
                                justify="center">                              
                                <Box display="flex">
                                    <Grid
                                        container
                                        justify="center">
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
                                    <Grid
                                        container
                                        justify="center">
                                        <Box p={3}>
                                        <Typography variant="h4" color="initial" paragraph>Inicia sesión</Typography>
                                            <Typography variant="body1" color="initial" paragraph>Ingresa tus datos de inicio de sesión!</Typography>
                                            <Box display="block" textAlign='center'>
                                                <TextField variant="outlined" label="Usuario" fullWidth margin="normal"></TextField>
                                                <TextField variant="outlined" label="Contraseña" fullWidth margin="normal"></TextField>
                                                <Button size="large" variant="contained" color="primary">INICIAR SESIÓN</Button>
                                            </Box>
                                            <Box className="ayudas">
                                                <Typography variant="body2" align="center" paragraph >¿Olvidaste tu contraseña?</Typography>
                                                <Typography variant="body2" align="center" paragraph>¿Necesitas ayuda?</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Box>
                            </Grid>  
                </Box>
            </Container>
        </Grid>
    )
}

export default Login;