import React from 'react'
// all routes 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home'

// end of routes 
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/automotive-translation-service/s' element={<Home/>}></Route>
        <Route path='/aviation-aerospace-translation-services' element={<Home/>}></Route>
        <Route path='/biotech-translation-services' element={<Home/>}></Route>
        <Route path='/business-documents-translation-services' element={<Home/>}></Route>
        <Route path='/chemicals-translation-services' element={<Home/>}></Route>
        <Route path='/clinical lrials-translation-services' element={<Home/>}></Route>
        <Route path='/corporate-financial-translation-services' element={<Home/>}></Route>
        <Route path='/corporate-legal-translation-services' element={<Home/>}></Route>
        <Route path='/court-certified-translation-services' element={<Home/>}></Route>
        <Route path='/creative-marketing-translation-services' element={<Home/>}></Route>
        <Route path='/e-learning-translation-services' element={<Home/>}></Route>
        <Route path='/energy-and-utility-translation-services' element={<Home/>}></Route>
        <Route path='/engineering-translation-services' element={<Home/>}></Route>
        <Route path='/food-beverage-industry-translation-services' element={<Home/>}></Route>
        {/* ul 1 end  */}
        {/* ul 2 start */}

        <Route path='/human-resources-translation-services' element={<Home/>}></Route>
        <Route path='/it-and-telecoms-translation-services' element={<Home/>}></Route>
        <Route path='/journalism-and-editorial-translation-services' element={<Home/>}></Route>
        <Route path='/leisure-entertainment-translation-services' element={<Home/>}></Route>
        <Route path='/manufacturing-translation-services' element={<Home/>}></Route>
        <Route path='/non-profit-translation-services' element={<Home/>}></Route>
        <Route path='/official-documents-translation-services' element={<Home/>}></Route>
        <Route path='/pharmaceutical-translation-services' element={<Home/>}></Route>
        <Route path='/retail-translation-services' element={<Home/>}></Route>
        <Route path='/software-translation-services' element={<Home/>}></Route>
        <Route path='/transport-logistics-translation-services' element={<Home/>}></Route>
        <Route path='/uscis-certified-translation-services' element={<Home/>}></Route>
        <Route path='/all-translation-service-translation-services' element={<Home/>}></Route>
        {/* ul 2 end  */}
        
        <Route path='/-translation-services' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App