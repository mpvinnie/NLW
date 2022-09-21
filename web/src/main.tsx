import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)
