# Pulse — Сайт на React (Vite)

**Что внутри**
- React Router (5 страниц)
- Тёмная/светлая тема 
- Галерея 
- Блог из JSON
- График на Recharts
- Форма с валидацией

## Запуск локально
```bash
npm install
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173).

## Деплой на GitHub Pages
Вариант через GitHub Actions.

1. Создайте репозиторий **react-moderate-site** (или своё имя).
2. Скопируйте проект в репозиторий и сделайте push.
3. В `vite.config.js` установите:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/<ВАШ_РЕПОЗИТОРИЙ>/'
   })
   ```
4. Создайте файл `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy Vite to Pages
   on:
     push:
       branches: [ main ]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 20 }
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with: { path: 'dist' }
         - uses: actions/deploy-pages@v4
   ```
5. В настройках репозитория включите **Pages** → Source: *GitHub Actions*.
6. После успешного workflow, ваша ссылка на результат будет:
   ```
   https://<ВАШ_НИК>.github.io/<ВАШ_РЕПОЗИТОРИЙ>/
   ```

## Где взять 2 ссылки для зачёта
- **Ссылка на код (GitHub):** `https://github.com/<ВАШ_НИК>/<ВАШ_РЕПОЗИТОРИЙ>`
- **Ссылка на результат (Pages):** `https://<ВАШ_НИК>.github.io/<ВАШ_РЕПОЗИТОРИЙ>/`

## Полезно
- Для разработки можно не менять `base`. Перед деплоем на Pages поменяйте как указано выше.