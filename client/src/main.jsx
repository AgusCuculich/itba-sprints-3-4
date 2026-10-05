import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/700.css'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { Home } from './pages/Home/Home'
import { Layout } from './components/Layout/Layout'
import { Contacto } from './pages/Contacto/Contacto.jsx'
import { Producto } from './pages/Producto/Producto.jsx'
import { Productos } from './pages/Catalogo/Productos.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/producto/:id', element: <Producto /> },
      { path: '/productos', element: <Productos/> },
      { path: '/contacto', element: <Contacto /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
