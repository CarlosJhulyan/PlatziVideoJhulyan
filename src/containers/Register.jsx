import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/Register.scss'

const Register = (props) => {
    const [form, setForm] = useState({
        email: '',
        name: '',
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
        props.registerRequest(form);
        props.history.push('/');
    }

    return (
        <>  
            <Header isRegister/>
            <section className="register">
                <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input className="input" 
                        type="text" 
                        name="name"
                        onChange={handleInput}
                        placeholder="Nombre" />
                    <input className="input" 
                        type="text"
                        name="email" 
                        onChange={handleInput}
                        placeholder="Correo" />
                    <input className="input" 
                        type="password" 
                        name="password"
                        onChange={handleInput}
                        placeholder="Contraseña" />
                    <button className="button" type="submit">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
                </section>
            </section>
        </>
    )
};

const mapDispatchToProps = {
    registerRequest
}

export default connect(null, mapDispatchToProps)(Register);