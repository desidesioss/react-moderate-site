import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { to: '/', label: 'Главная' },
  { to: '/gallery', label: 'Галерея' },
  { to: '/blog', label: 'Блог' },
  { to: '/analytics', label: 'Аналитика' },
  { to: '/contact', label: 'Контакты' },
]

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b bg-white/70 dark:bg-black/30 backdrop-blur sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl">Pulse<span className="text-primary">.</span></Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => 
              `text-sm hover:text-primary transition ${isActive ? 'text-primary font-semibold' : ''}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button className="md:hidden p-2 rounded-lg border" onClick={() => setOpen(!open)} aria-label="menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col gap-2">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1">
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}