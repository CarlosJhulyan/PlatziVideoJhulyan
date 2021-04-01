import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions/index';
import { gravatar } from '../utils/Gravatar';
import '../assets/styles/Header.scss'
import classNames from 'classnames';
import logo from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';

const Header = ({ user, isLogin, isRegister, logoutRequest }) => {
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    logoutRequest({});
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister
  })

  return (
    <header className={headerClass}>
      <Link to="/"><img className="header__img" src={logo} alt="Platzi Video" /></Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser ?
              <img src={gravatar(user.email)} alt="Icon user" /> :
              <img src={userIcon} alt="Icon user" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser && <li><Link to="/">{user.name}</Link></li>
          }
          {
            hasUser ? 
            <li><Link to="#" onClick={handleLogout}>Cerrar Sesión</Link></li> :
            <li><Link to="/login">Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
