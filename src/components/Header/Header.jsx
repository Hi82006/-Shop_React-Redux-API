import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'
import { useDispatch, useSelector } from 'react-redux'

import Logo from "../../images/logo.svg"
import AVATAR from "../../images/avatar.jpg"
import { toggleForm } from '../../features/user/userSlice'
import { useGetProductsQuery } from '../../features/api/apiSlice'

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({ name: " Guest", avatar: AVATAR });

  const { data, isLoading } = useGetProductsQuery({ title: searchValue });


  useEffect(() => {
    if(!currentUser)return;

    setValues(currentUser);
  },[currentUser]);

  const handleClick = () => {
    if(!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };
const handleSearch = ({ target: { value } }) => {
  setSearchValue(value)
}

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to={ROUTES.HOME}>
            <img src={Logo} alt="Stuff" />
        </Link>
      </div>
      <div className={classes.info} >
        <div className={classes.user} onClick={handleClick}>
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
                onChange={handleSearch}
                value={searchValue}
                />
            </div>

            {searchValue && (
            <div className={classes.box}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={classes.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={classes.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={classes.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
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
