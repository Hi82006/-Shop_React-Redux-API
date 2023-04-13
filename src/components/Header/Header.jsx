import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'
import { useDispatch, useSelector } from 'react-redux'

import Logo from "../../images/logo.svg"
import AVATAR from "../../images/avatar.jpg"
import { toggleForm } from '../../features/user/userSlice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({ name: " Guest", avatar: AVATAR });

  useEffect(() => {
    if(!currentUser)return;

    setValues(currentUser);
  },[currentUser])

  const handleClick = () => {
    if(!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE)
  }
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to={ROUTES.HOME}>
            <img src={Logo} alt="Stuff" />
        </Link>
      </div>
      <div className={classes.info} onClick={handleClick}>
        <div className={classes.user}>
            <div className={classes.avatar} 
            style={{ backgroundImage: `url(${values.avatar})` }}
            />
            <div className={classes.username}>{values.name}</div>
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
