import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Пн', visits: 120 },
  { name: 'Вт', visits: 200 },
  { name: 'Ср', visits: 180 },
  { name: 'Чт', visits: 260 },
  { name: 'Пт', visits: 320 },
  { name: 'Сб', visits: 280 },
  { name: 'Вс', visits: 150 },
]

export default function Analytics() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Аналитика</h2>
      <div className="border rounded-2xl p-4 bg-card">
        <div style={{width: '100%', height: 320}}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visits" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm opacity-80 mt-3">
          Демо-график посещаемости за неделю.
        </p>
      </div>
    </div>
  )
}