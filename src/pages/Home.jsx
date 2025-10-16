import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChartLine, Images } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  { icon: <Images />, title: 'Галерея', text: 'Адаптивная сетка изображений с модальным просмотром.' },
  { icon: <ChartLine />, title: 'Аналитика', text: 'Интерактивные графики посещаемости на Recharts.' },
  { icon: <Sparkles />, title: 'Тёмная тема', text: 'Переключение темы и хранение выбора в localStorage.' },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <motion.h1
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Сайт на React
        </motion.h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Демонстрирует маршруты, анимации, локальное состояние, форму с валидацией и графики.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border hover:bg-muted">
            Открыть галерею <ArrowRight size={16}/>
          </Link>
          <Link to="/analytics" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border hover:bg-muted">
            Смотреть аналитику <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.4, delay: i * 0.08}}
            className="border rounded-2xl p-6 bg-card"
          >
            <div className="mb-3 opacity-80">{f.icon}</div>
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-sm opacity-80 mt-2">{f.text}</p>
          </motion.div>
        ))}
      </section>
    </div>
  )
}