import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { gravatar } from '../utils/Gravatar';
import '../assets/styles/Header.scss'

import logo from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';

const Header = (props) => (
  <header className="header">
    <Link to="/"><img className="header__img" src={logo} alt="Platzi Video" /></Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        {
          Object.keys(props.user).length > 0 ?
            <img src={gravatar(props.user.email)} alt="Icon user" /> :
            <img src={userIcon} alt="Icon user" />
        }
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><Link to="/login">Cerrar Sesión</Link></li>
      </ul>
    </div>
  </header>
)

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Header);
