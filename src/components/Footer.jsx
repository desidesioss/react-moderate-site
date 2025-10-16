export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} Pulse — учебный проект на React.</p>
        <p className="opacity-70">Тема: светлая/тёмная • Маршрутизация • Валидация формы • Графики</p>
      </div>
    </footer>
  )
}