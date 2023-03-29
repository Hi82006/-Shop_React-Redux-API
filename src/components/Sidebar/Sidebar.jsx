import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classes from '../../styles/Sidebar.module.css'
const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories)
  return (
    <section className={classes.sidebar}>
        <div className={classes.title}>
          Categories
        </div>
          <nav>
            <ul className={classes.menu}>
              {list.map(({ id, name }) => 
              <li key={id}>
                <NavLink
                className={({ isActive }) => 
                `${classes.link} ${isActive ? classes.active : ""}`
              }
                to={`/categories/${id}`}>
                  {name}
                </NavLink>
              </li>
              )}
            </ul>
          </nav>
          <div className={classes.footer}>
            <a href='/help' target="_blank" 
            className={classes.link}>
              Help
            </a>
            <a href='/terms' target="_blank" 
            className={classes.link} 
            style={{textDecoration: "Underline"}}>
              Terms & Conditions
            </a>
          </div>
    </section>
  )
}

export default Sidebar
