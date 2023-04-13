import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import styles from "../../styles/User.module.css"
import { loginUser } from '../../features/user/userSlice';


const UserSignupForm = ({ toggleCurrentFormType, closeForm }) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).some((val) => !val);

        if(isNotEmpty) return;

        dispatch(loginUser(values));
        closeForm();
    };
  return (
  <div className={styles.wrapper}>
    <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
    </div>
    <div className={styles.title}>
        Log In
    </div>
    <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
            <input 
            type='email' 
            name='email'
            value={values.email}
            autoComplete='off'
            onChange={handleChange}
            placeholder='Your email'
            required
            />
        </div>
        <div className={styles.group}>
            <input 
            type='password' 
            name='password'
            value={values.password}
            autoComplete='off'
            onChange={handleChange}
            placeholder='Your password'
            required
            />
        </div>
        <div className={styles.link}
        onClick={() => toggleCurrentFormType("signup")}>
            Create an account
        </div>
        <button type='submit' className={styles.submit}>
            Login
        </button>
    </form>
  </div>
  )
};

export default UserSignupForm