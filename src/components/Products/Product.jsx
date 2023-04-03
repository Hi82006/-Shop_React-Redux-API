import { current } from '@reduxjs/toolkit';
import React from 'react'

import styles from "../../styles/Product.module.css";

const Product = ({ images, price, title }) => {
    const currentImage = images[0]
  return (
    <section className={styles.product}>
        <div className={styles.images}>
            <div className={styles.current}
                style={{ background: `irl(${currentImage})` }}
            />
            {images.map((image, i) => (
                <div
                key={i}
                className={styles.image}
                style={{ background: `irl(${image})` }}
                onClick={() => {}}
                />
            ))}
        </div>
        <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.price}>
                {price}
            </div>
        </div>
    </section>
  )
}

export default Product;
