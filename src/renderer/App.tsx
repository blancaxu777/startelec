import React, {useReducer, useContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home/Home'
import StoreContext from './config/context'
import {reducer, defaultState} from './config/reducer'
const App: React.FC = () => {
  const store = useReducer(reducer, defaultState)
  return (
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  )
}
export default App
