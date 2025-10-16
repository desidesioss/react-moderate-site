import posts from '../shared/posts.json'

export default function Blog() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Блог</h2>
      <div className="grid gap-4">
        {posts.map((p) => (
          <article key={p.id} className="border rounded-2xl p-5 bg-card">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-xs opacity-70 mt-1">{p.date}</p>
            <p className="mt-3 text-sm opacity-90">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}