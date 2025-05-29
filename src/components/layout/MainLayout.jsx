import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Header />
      </header>
      <main className="flex-grow container mx-auto px-4 pt-10 pb-10">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout