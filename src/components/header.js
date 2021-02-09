import React from "react"
import style from './header.module.css'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.poster}>آرگو</div>
      <div className={style.links}>
        <Link className={style.link} to='#one'>صفحه اول</Link>
        <Link className={style.link} to='#one'>نمونه کارها</Link>
        <Link className={style.link} to='#one'>درباره ما</Link>
        <Link className={style.link} to='#one'>تماس با ما</Link>
      </div>
    </div>
  )
}

export default Header

