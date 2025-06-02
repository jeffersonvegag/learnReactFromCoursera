import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { HomePage } from "@/screens/HomePage"
import { Funcion2Page } from "@/screens/Funcion2Page"
import { Dashboard } from "@/screens/Dashboard"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/funcion2" element={<Funcion2Page />} />
          {/* Aquí puedes agregar más rutas en el futuro */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/buscar" element={<div>Página de Búsqueda (próximamente)</div>} />
          <Route path="/configuracion" element={<div>Página de Configuración (próximamente)</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App