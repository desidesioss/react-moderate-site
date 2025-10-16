import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Введите имя'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Некорректный email'
    if (form.message.trim().length < 10) e.message = 'Сообщение должно быть ≥ 10 символов'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setTimeout(() => setSent(true), 300)
  }

  if (sent) return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Спасибо!</h2>
      <p className="opacity-80">Мы получили ваше сообщение и ответим на почту: <b>{form.email}</b></p>
    </div>
  )

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Связаться с нами</h2>
      <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
        <div>
          <label className="text-sm">Имя</label>
          <input className="mt-1 w-full border rounded-xl px-3 py-2" value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Иван" />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input className="mt-1 w-full border rounded-xl px-3 py-2" value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})} placeholder="name@example.com" />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="text-sm">Сообщение</label>
          <textarea className="mt-1 w-full border rounded-xl px-3 py-2 min-h-[120px]" value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Коротко опишите вопрос..." />
          {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
        </div>
        <button className="justify-self-start px-4 py-2 rounded-xl border hover:bg-muted">Отправить</button>
      </form>
    </div>
  )
}