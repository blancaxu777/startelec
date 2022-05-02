import React, {useContext, useState, useRef, useEffect} from 'react'
import StoreContext from '../../config/context'
import css from './index.css'

const Home: React.FC = () => {
  const [state, dispatch] = useContext(StoreContext)
  const [isWel, setIsWel] = useState<boolean>(true)
  const videoRef = useRef(null)

  return (
    <div className={css.box}>
      <div
        className={css.btn}
        onClick={() => {
          setIsWel(!isWel)
          dispatch({type: 'changeTitle', title: isWel ? 'Make in blanca!' : 'Welcome to Startelec!'})
        }}>
        {state.title}
      </div>
    </div>
  )
}

export default Home
