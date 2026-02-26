# Managerial Accounting Review Lab

A static, all-English web app for reviewing:
- Financial vs managerial accounting
- Cost terms and classifications
- Cost behavior and high-low method
- CVP analysis and break-even
- Target profit, margin of safety, and operating leverage

## Run locally
Open `index.html` directly in a browser.

## Deploy to GitHub Pages
1. Create an empty GitHub repository.
2. Add your remote:
   ```bash
   git remote add origin <YOUR_GITHUB_REPO_URL>
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "Initial app + GitHub Pages deploy"
   git branch -M main
   git push -u origin main
   ```
4. In GitHub repo settings: `Settings -> Pages -> Build and deployment -> Source`, choose **GitHub Actions**.
5. Wait for the `Deploy static site to GitHub Pages` workflow to finish.
6. Your site URL will be:
   - `https://<your-username>.github.io/<your-repo-name>/`

