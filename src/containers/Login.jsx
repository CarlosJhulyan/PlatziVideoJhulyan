import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { loginRequest } from '../actions'
import { Link } from 'react-router-dom';
import '../assets/styles/Login.scss'

import GoogleIcon from '../assets/images/google-icon.png';
import TwitterIcon from '../assets/images/twitter-icon.png';

const Login = (props) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleInput = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
        
    }

    return (
        <>
            <Header isLogin/>
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input className="input" 
                            name="email"
                            type="text" 
                            onChange={handleInput}
                            placeholder="Correo" />
                        <input className="input" 
                            name="password"
                            type="password" 
                            onChange={handleInput}
                            placeholder="Contraseña" />
                        <button className="button">Iniciar sesión</button>
                        <div className="login__container--remember-me">
                            <label>
                                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                            </label>
                            <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div><img src={GoogleIcon} /> Inicia sesión con Google</div>
                        <div><img src={TwitterIcon} /> Inicia sesión con Twitter</div>
                    </section>
                    <p className="login__container--register">No tienes ninguna cuenta <Link to="/register">Regístrate</Link></p>
                </section>
            </section>
        </>
    );
}

const mapDispatchToProps = {
    loginRequest
}

export default connect(null, mapDispatchToProps)(Login);