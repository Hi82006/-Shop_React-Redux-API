import React from 'react'
import { Link } from 'react-router-dom'

import classes from "../../styles/Products.module.css"

const Products = ({ title, style = {}, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount);

  return <section className={classes.products} style={style}>
    {title && <h2>{title}</h2>}
    <div className={classes.list}>
    {list.map(({ id, images, title, category: { name: cat}, price }) => (
        <Link className={classes.product} to={ `/products/${id}` } key={id}>
            <div
            className={classes.image}
            style={{ backgroundImage: `url(${images[0]})`}}
            />
     <div className={classes.wrapper}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.cat}>{cat}</div>
        <div className={classes.info}>
            <div className={classes.prices}>
                <div className={classes.price}>{price}$</div>
                <div className={classes.oldPrice}>
                    {Math.floor(price / 0.8)}$
                </div>
            </div>
            <div className={classes.purchases}>
                {Math.floor(Math.random() * 20 + 1)} purchased
            </div>
        </div>
     </div>
            
        </Link>
))}
    </div>
    </section>
}

export default Products
