# Mo Aslam Khan - Portfolio

React 19, Vite 7, React Router 7, Framer Motion and Tailwind CSS 4.

Pages: Home (`/`), About (`/about`), Projects (`/projects`), Skills (`/skills`), Contact (`/contact`).
`vercel.json` rewrites every path to `index.html`, so direct URLs work after deployment.

## Run
```bash
npm install
npm run dev
npm run build && npm run preview
```

## Content
- `src/data/projects.js` holds the projects (screenshots live in `src/assets/projects`).
- `src/data/profile.js` holds the summary, skills, experience, education and certifications.
- Replace `public/resume.pdf` to update the downloadable resume.

## Contact form
Set `VITE_FORM_ENDPOINT` (see `.env.example`) to a form service URL such as a Formspree endpoint.
On Vercel add it under Project Settings, Environment Variables. Without it, the form opens the visitor's email app.
