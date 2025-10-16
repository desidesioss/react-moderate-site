import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 text-sm border px-3 py-1.5 rounded-xl hover:bg-muted"
      aria-label="toggle theme"
    >
      {isDark ? <Sun size={16}/> : <Moon size={16}/>}
      {isDark ? 'Свет' : 'Тьма'}
    </button>
  )
}