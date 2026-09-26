# Gad — Full-Stack Developer Portfolio

A high-performance, 100% static developer portfolio engineered with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

Designed specifically for **GitHub Pages** deployment with a decoupled, JSON-driven data layer so that new commercial showcases can be added in under a minute without modifying React component code.

---

## ⚡ Key Highlights
- **100% Static & Blazing Fast:** Built for GitHub Pages with sub-second page loads and zero server overhead.
- **Data-Driven Architecture:** All projects, skills, and profile details live in `src/data/` JSON files.
- **Embedded HD Walkthrough Video Player:** Built-in modal player supporting 1080p demo walkthroughs with lazy loading to prevent initial bandwidth bloat.
- **Enterprise Client Privacy:** Displays technical engineering highlights and live production URLs while gracefully preserving client repository confidentiality (`Private Client Repo`).
- **Automated CI/CD:** GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages automatically on `git push main`.

---

## 🚀 Adding a New Project in 60 Seconds

Whenever you finish a new project and want to add it to your portfolio:

### Step 1: Add the Walkthrough Video or Thumbnail
Save your video file in:
```
public/videos/MyNewProject.mp4
```

### Step 2: Add Entry to `src/data/projects.json`
Open [projects.json](file:///c:/Loccal_Disk_E/Portfolio/src/data/projects.json) and append your project object:

```json
{
  "id": "my-new-project",
  "title": "Project Name — Commercial Platform",
  "tagline": "Short high-impact tagline explaining the core business or technical achievement.",
  "category": "Full-Stack",
  "featured": true,
  "completedDate": "2026-10",
  "techStack": ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  "description": "Comprehensive explanation of what was built, business challenges solved, and architecture...",
  "keyFeatures": [
    "Key engineering achievement 1",
    "Key engineering achievement 2",
    "Key engineering achievement 3",
    "Key engineering achievement 4"
  ],
  "metrics": [
    "Sub-second API latency",
    "100% Mobile Responsive"
  ],
  "liveUrl": "https://my-project-domain.vercel.app/",
  "media": {
    "videoWalkthrough": "videos/MyNewProject.mp4",
    "videoAspectRatio": "16/9"
  }
}
```

### Step 3: Commit and Push
```bash
git add .
git commit -m "feat: add MyNewProject showcase"
git push origin main
```
GitHub Actions will automatically build and publish the update live within 60 seconds!

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
The static bundle will be exported to `/dist` with relative paths (`./`) ready for deployment.

---

## 🌐 Deploying to GitHub Pages

1. Create a repository on GitHub (e.g. `portfolio` or `<your-username>.github.io`).
2. Push your codebase:
   ```bash
   git init
   git add .
   git commit -m "initial commit: portfolio setup"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   * Go to **Settings** > **Pages**.
   * Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically trigger and deploy your portfolio live!
