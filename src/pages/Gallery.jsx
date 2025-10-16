import { useEffect, useState } from 'react'
import data from '../shared/gallery.json'

export default function Gallery() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Галерея</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((item) => (
          <button key={item.id} onClick={() => setActive(item)} className="group relative">
            <img src={item.thumb} alt={item.title} className="aspect-square object-cover rounded-xl border" />
            <span className="absolute bottom-2 left-2 text-xs bg-black/60 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm grid place-items-center p-4 z-50" onClick={() => setActive(null)}>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active.full} alt={active.title} className="w-full rounded-2xl border" />
            <div className="mt-3 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{active.title}</h3>
                <p className="text-sm opacity-80">{active.desc}</p>
              </div>
              <button className="px-3 py-1.5 rounded-xl border" onClick={() => setActive(null)}>Закрыть</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}