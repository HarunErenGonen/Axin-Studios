# GitHub Repository Setup Instructions

## Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Fill in the details:
   - **Repository name:** `AxinStudios.com`
   - **Description:** `Enterprise Analytics Platform - Modern responsive website built with React, Vite, Tailwind CSS v4`
   - **Visibility:** Choose Public or Private
   - **Initialize:** Leave unchecked (we already have git initialized)
5. Click **Create repository**

## Push Your Local Repository to GitHub

After creating the repository, GitHub will show you the commands. Run these in your terminal:

```bash
# Navigate to your project
cd C:\Users\chubb\Downloads\AxinStudios.com

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/AxinStudios.com.git

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Verify Your Repository

1. Go to `https://github.com/YOUR_USERNAME/AxinStudios.com`
2. You should see all your project files and the commit history

## Clone Your Repository Later

To clone this repository on another machine:
```bash
git clone https://github.com/YOUR_USERNAME/AxinStudios.com.git
cd AxinStudios.com
npm install
npm run dev
```

## GitHub Repository Features

Your repository now includes:
- ✅ Full project source code
- ✅ Git history with all commits
- ✅ .gitignore file for dependencies
- ✅ Comprehensive README.md

## Optional: Add GitHub Pages (Deployment)

To deploy your site with GitHub Pages:

1. In your repository settings, go to **Pages**
2. Select **Deploy from a branch**
3. Choose `main` branch and `/root` folder
4. Your site will be available at `https://YOUR_USERNAME.github.io/AxinStudios.com/`

Note: You may need to build the project first:
```bash
npm run build
```
