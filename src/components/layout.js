import React from "react"

import Header from './header'
import Footer from './footer'

import style from './layout.module.css'


const Layout = (props) => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <Header />
            {props.children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout