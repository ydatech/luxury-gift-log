import { Link, Outlet } from 'react-router'

function App() {


  return (
    <div className="app">
      <header className="header">
      <h1>Luxury Gift Log</h1>
      <nav className="nav">
      
        <Link to="/">Dashboard</Link>
        <Link to="/gifts/new">Add Gift</Link>
      </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}

export default App
