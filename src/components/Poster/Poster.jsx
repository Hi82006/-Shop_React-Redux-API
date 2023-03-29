import React from 'react';

import classes from "../../styles/Home.module.css";

import BG from "../../images/computer.png";

const Poster = () => (
  <section className={classes.home}>
    <div className={classes.title}>BIG SALE 20%</div>
    <div className={classes.product}>
        <div className={classes.text}>
            <div className={classes.subtitle}>The bestseller of 2023</div>
            <h1>LENNON r2d2 with NVIDIA 4090 TI</h1>
            <button className={classes.button}> Shop Now</button>
        </div>
        <div className={classes.image}>
        <img src={BG} alt="" /> 
        </div>
    </div>
  </section>
)

export default Poster
