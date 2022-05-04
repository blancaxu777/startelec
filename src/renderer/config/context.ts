import {createContext} from 'react'
import {Istate, Iaction, defaultState} from './reducer'
const StoreContext = createContext<[Istate, React.Dispatch<Iaction>]|null>(null)

export default StoreContext
