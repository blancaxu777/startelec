import {createContext} from 'react'
import {Istate, Iaction, defaultState} from './reducer'
const StoreContext = createContext<any>(null)

export default StoreContext
