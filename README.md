# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/41d22f00-fe60-4f44-a6d1-6c3a2bc76a5a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/41d22f00-fe60-4f44-a6d1-6c3a2bc76a5a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/41d22f00-fe60-4f44-a6d1-6c3a2bc76a5a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Deployment to GitHub Pages

This project can be deployed to GitHub Pages using the included GitHub Actions workflow. The workflow builds the site with `npm run build` and publishes the `dist/` folder to the `gh-pages` branch.

Steps to enable automatic deploys:

1. Push this repository to GitHub and ensure your default branch is `main`.
2. The workflow in `.github/workflows/deploy-pages.yml` runs on each push to `main` and will publish the `dist/` folder.
3. In your GitHub repository settings -> Pages, set the source to the `gh-pages` branch (the action will create/update that branch).

Notes:
- The build command used is `npm run build` (Vite). Ensure your `package.json` has that script — it already does.
- Because this is a single page app (React + react-router), the site uses client-side routing. GitHub Pages serves static files; if you use client-side routes other than `/`, configure a 404.html fallback to `index.html` or use an alternative hosting like Vercel for full SPA routing support.
