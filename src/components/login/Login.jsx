import React from 'react';
import logo from './logo-poll.png';
import avatar from './avatar.png';
import styles from './styles.css';
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core'

const Login = () => {
    return(
        <div className="body">
            <img src={logo} />
            <div className="container">
                        <div className="container-img">
                            <p>¿No tienes una cuenta POLL? <a href="#">REGISTRARSE</a></p>
                        </div>
                        <div className="container-cards">
                                <div className="container-intro">
                                <h1>Inicia sesión para seguir ganando recompensas!</h1>
                                <p>Miles de encuestas a diario para poder recibir recompensas. Inicia sesión y responde las mejores encuenstas de la web.</p>
                                <img src={avatar}></img>
                            </div>
                            <div className="container-formulario">
                                <h2>Inicia sesión</h2>
                                <p>Ingresa tus datos de inicio de sesión!</p>
                                <Input type="text" placeholder="Nombre de usuario"></Input>
                                <Input type="password" placeholder="Contraseña"></Input>
                                <Button color='default' type="submit">INICIAR SESIÓN</Button>
                                <div className="ayudas">
                                    <a href="#">¿Olvidaste tu contraseña?</a>
                                    <a href="#">¿Necesitas ayuda?</a>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Login;