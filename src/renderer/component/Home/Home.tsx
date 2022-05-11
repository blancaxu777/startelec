import React, {useContext, useState, useRef, useEffect} from 'react'
import StoreContext from '../../state/context'
import css from './index.module.css'
const {getPreloadNum} = window.electronAPI
const Home: React.FC = () => {
  const [state, dispatch] = useContext(StoreContext)
  const [num, setNum] = useState<number>(0)
  const init = async () => {
    let num = await getPreloadNum()
    setNum(num)
  }
  useEffect(() => {
    init()
  })
  return (
    <div className={css.box}>
      <div className={css.btn}>
        <span className={css.font_S}>S</span>tart<span className={css.font_E}>E</span>lec
      </div>
      <div className={css.tool}>
        <div>Electron - React{num}</div>
      </div>
    </div>
  )
}

export default Home
