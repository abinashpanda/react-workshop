import CompoundComponent from 'pages/compound-component'
import Login from 'pages/login'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="compound-component" element={<CompoundComponent />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}
