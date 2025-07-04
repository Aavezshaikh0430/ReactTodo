import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import {App} from './App.jsx'
// import App2 from './App2.jsx'
import { App3 } from './App3.jsx'
// import { Practice } from './Practice.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practice /> */}
    {/* <App2 /> */}
    <App3 />
  </StrictMode>,
)
