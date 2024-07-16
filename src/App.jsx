import React from 'react'
import HomePage from './screen/home/HomePage'
import { Route, Routes } from 'react-router-dom'
import FinishPage from './screen/finish/FinishPage'
import BiodataPage from './screen/biodata/BiodataPage'
import ListAll from './screen/biodata/ListAll'
import UpdateBiodata from './screen/biodata/UpdateBiodata'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/finish" element={<FinishPage/>} />
        <Route path="/biodata" element={<BiodataPage/>} />
        <Route path="/list" element={<ListAll/>} />
        <Route path="/biodata/update" element={<UpdateBiodata/>} />
      </Routes>
  
  )
}

export default App
