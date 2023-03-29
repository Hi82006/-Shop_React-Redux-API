import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'

import Logo from "../../images/logo.svg"
import AVATAR from "../../images/avatar.jpg"
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to={ROUTES.HOME}>
            <img src={Logo} alt="Stuff" />
        </Link>
      </div>
      <div className={classes.info}>
        <div className={classes.user}>
            <div className={classes.avatar} 
            style={{ backgroundImage: `url(${AVATAR})` }}
            />
            <div className={classes.username}>Guest</div>
        </div>
        <form className={classes.form}>
            <div className={classes.icon}>
                <svg className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                </svg>
            </div>
            <div className={classes.input}>
                <input type='search' name="search"
                placeholder='Search for anithing...'
                autoComplete='off'
                onChange={ () => {}}
                value=''
                />
            </div>
            {false && <div className={classes.box}></div>}
        </form>
        <div className={classes.account}>
          <Link to={ROUTES.HOME} className={classes.favourites}>
            <svg className={classes["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={classes.cart}>
            <svg className={classes["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={classes.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
