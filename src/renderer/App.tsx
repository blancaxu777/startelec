import React, {useReducer, useContext} from 'react'
import {MemoryRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './component/Home/Home'
import StoreContext from './state/context'
import {reducer, defaultState} from './state/reducer'

const App: React.FC = () => {
  const store = useReducer(reducer, defaultState)
  return (
    <StoreContext.Provider value={store}>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    </StoreContext.Provider>
  )
}
export default App
