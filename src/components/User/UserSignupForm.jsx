import React, { useState } from 'react'

import styles from "../../styles/User.module.css"

const UserSignupForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    })
  return (
  <div className={styles.wrapper}>
    <div className={styles.close}>
        <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
    </div>
    <div className={styles.title}>
        Sign Up
    </div>
    <form className={styles.form}>
        <div className={styles.group}>
            <input 
            type='email' 
            name='email'
            value=""
            autoComplete='off'
            onChange={() => {}}
            placeholder='Your email'
            required
            />
            <input 
            type='name' 
            name='name'
            value=""
            autoComplete='off'
            onChange={() => {}}
            placeholder='Your name'
            required
            />
            <input 
            type='password' 
            name='password'
            value=""
            autoComplete='off'
            onChange={() => {}}
            placeholder='Your password'
            required
            />
            <input 
            type='avatar' 
            name='avatar'
            value=""
            autoComplete='off'
            onChange={() => {}}
            placeholder='Your avatar'
            required
            />
        </div>
        <div className={styles.link}>
            I alredy have an account
        </div>
        <button type='submit' className={styles.submit}>
            Create an account
        </button>
    </form>
  </div>
  )
};

export default UserSignupForm