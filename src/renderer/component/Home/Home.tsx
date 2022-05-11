import React, {useContext, useState, useRef, useEffect} from 'react'
import StoreContext from '../../state/context'
import css from './index.module.css'
const {sendmessage} = window.electron
const Home: React.FC = () => {
  const [state, dispatch] = useContext(StoreContext)
  return (
    <div className={css.box}>
      <div className={css.btn}>
        <span className={css.font_S}>S</span>tart<span className={css.font_E}>E</span>lec
      </div>
      <div className={css.tool}><div>Electron - React{sendmessage()}</div></div>
    </div>
  )
}

export default Home
