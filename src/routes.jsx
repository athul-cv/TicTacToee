import React from 'react'
import App from './Game'
import { Route, Routes} from 'react-router-dom'
// import { Route } from 'react-router-dom'

const Routers = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    </div>
  )
}

export default Routers