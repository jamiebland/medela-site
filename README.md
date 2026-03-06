# Medela Learning Site -- Setup & Editing Guide

A complete beginner's guide to running, editing, and managing the Medela Learning website.

---

## Table of Contents

1. [What You Need Installed](#what-you-need-installed)
2. [Getting the Code](#getting-the-code)
3. [Setting Up Environment Variables](#setting-up-environment-variables)
4. [Running the Site Locally](#running-the-site-locally)
5. [Project Structure (What's Where)](#project-structure-whats-where)
6. [Editing Pages](#editing-pages)
7. [Vibe Coding with Gemini (Free AI-Assisted Editing)](#vibe-coding-with-gemini-free-ai-assisted-editing)
8. [Using the Blog Admin](#using-the-blog-admin)
9. [Managing Blog Posts via Markdown Files](#managing-blog-posts-via-markdown-files)
10. [Services Overview](#services-overview)
11. [Git Basics -- Saving and Sharing Your Changes](#git-basics----saving-and-sharing-your-changes)
12. [Deploying the Site](#deploying-the-site)
13. [Troubleshooting](#troubleshooting)

---

## What You Need Installed

Before you start, install these on your computer:

1. **Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org) -- choose the LTS version
   - To check if it's installed, open Terminal and type: `node --version`

2. **Git**
   - Mac: Open Terminal and type `git --version`. If it's not installed, it will prompt you to install it.
   - Windows: Download from [git-scm.com](https://git-scm.com)

3. **A code editor** (recommended: [VS Code](https://code.visualstudio.com))

---

## Getting the Code

Open Terminal (Mac) or Command Prompt (Windows) and run:

```bash
# Navigate to where you want the project
cd ~/Documents

# Clone the repository (replace URL with your actual repo URL)
git clone <your-repo-url> medela-site

# Move into the project folder
cd medela-site

# Install all the dependencies
npm install
```

`npm install` reads the `package.json` file and downloads everything the site needs to run. You only need to do this once (or again if dependencies change).

---

## Setting Up Environment Variables

The site needs secret keys to connect to external services. These are stored in a file called `.env.local` which is **never uploaded to Git** (it's in `.gitignore` for security).

Create a file called `.env.local` in the project root with these values:

```
MAILERLITE_API_KEY=your-mailerlite-api-key
ADMIN_PASSWORD=your-chosen-admin-password
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Ask the project owner (Rob) for the actual values if you don't have them.

**What each one does:**

| Variable | Purpose |
|---|---|
| `MAILERLITE_API_KEY` | Connects to MailerLite to handle newsletter signups |
| `ADMIN_PASSWORD` | The password you type to log into the blog admin panel |
| `NEXT_PUBLIC_SUPABASE_URL` | The URL of the Supabase database where blog posts are stored |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | The public key to read/write to Supabase |

---

## Running the Site Locally

```bash
npm run dev
```

This starts two things:
- The **Next.js dev server** at [http://localhost:3000](http://localhost:3000)
- The **Decap CMS proxy server** (for local content editing)

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will automatically reload when you save changes to any file.

To stop the server, press `Ctrl + C` in Terminal.

---

## Project Structure (What's Where)

```
medela-site/
├── content/
│   └── blog/               # Markdown blog posts (filesystem fallback)
├── public/                  # Static files (images, etc.)
├── src/
│   ├── app/
│   │   ├── page.tsx             # Homepage
│   │   ├── about/page.tsx       # About page
│   │   ├── blog/page.tsx        # Blog listing page
│   │   ├── blog/[slug]/page.tsx # Individual blog post page
│   │   ├── contact/page.tsx     # Contact page
│   │   ├── aldeia/page.tsx      # Aldeia page
│   │   ├── learning-resources/  # Learning resources page
│   │   ├── admin/               # Blog admin panel (login, list, edit, new)
│   │   ├── api/                 # Backend API routes
│   │   ├── layout.tsx           # Shared layout (nav, footer, fonts)
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Nav.tsx              # Navigation bar
│   │   ├── Footer.tsx           # Footer
│   │   ├── CtaBand.tsx          # Call-to-action banner
│   │   └── Newsletter.tsx       # Newsletter signup form
│   └── lib/
│       ├── blog.ts              # Blog data fetching (Supabase or files)
│       ├── supabase.ts          # Supabase database connection
│       └── config.ts            # Site configuration (email, etc.)
├── .env.local                   # Secret keys (NOT in Git)
├── package.json                 # Dependencies and scripts
└── tailwind.config.ts           # Tailwind CSS configuration
```

---

## Editing Pages

Each page is a `.tsx` file inside `src/app/`. The file path maps to the URL:

| File | URL |
|---|---|
| `src/app/page.tsx` | `/` (homepage) |
| `src/app/about/page.tsx` | `/about` |
| `src/app/blog/page.tsx` | `/blog` |
| `src/app/contact/page.tsx` | `/contact` |
| `src/app/aldeia/page.tsx` | `/aldeia` |
| `src/app/learning-resources/page.tsx` | `/learning-resources` |

**To edit a page:**
1. Open the file in your code editor
2. Change the text or layout (it's React + Tailwind CSS)
3. Save -- the browser refreshes automatically

**Quick Tailwind CSS primer:** Styling is done with class names directly on elements. For example:
- `text-lg` = larger text
- `font-bold` = bold text
- `bg-blue-500` = blue background
- `p-4` = padding on all sides
- `mt-8` = margin on top

You don't need to write separate CSS files. See [tailwindcss.com/docs](https://tailwindcss.com/docs) for the full list.

---

## Vibe Coding with Gemini (Free AI-Assisted Editing)

You don't need to know how to code to make changes to this site. You can use Google's **Gemini AI** for free to help you edit pages, fix bugs, and build new features -- all from the command line. This is sometimes called "vibe coding": you describe what you want in plain English and the AI writes the code for you.

### Step 1: Get a Free Gemini API Key

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in with a Google account
3. Click **"Get API Key"** in the left sidebar
4. Click **"Create API key"** and copy it somewhere safe

This is completely free -- no credit card needed. The free tier gives you plenty of usage for editing a site like this.

### Step 2: Install Aider

Aider is an open-source tool that connects AI to your codebase. It reads your files, understands the project, and makes edits based on your instructions.

```bash
# Install aider (requires Python -- it comes pre-installed on Mac)
pip install aider-chat

# If that doesn't work, try:
pip3 install aider-chat

# If you don't have pip at all, install Python from python.org first
```

### Step 3: Set Your API Key

Add this line to your shell config so the key is always available:

```bash
# Mac/Linux -- run this once in Terminal:
echo 'export GEMINI_API_KEY=your-key-here' >> ~/.zshrc
source ~/.zshrc

# Replace "your-key-here" with the actual key you copied from Google AI Studio
```

### Step 4: Start Vibe Coding

Make sure you're in the project folder, then:

```bash
cd medela-site
aider --model gemini/gemini-2.5-flash
```

Aider opens an interactive chat in your terminal. Now you can just **describe what you want in plain English**. Examples:

```
> Change the homepage headline to "Empowering Young Learners"

> Make the nav background darker blue

> Add a new section to the about page with a team photo grid

> The contact form submit button isn't working, can you fix it?

> Change the footer copyright year to 2026
```

Aider will:
1. Read the relevant files
2. Show you a diff (what it wants to change)
3. Ask you to confirm before saving

You can review every change before it's applied. If something looks wrong, just say "undo that" or press `Ctrl + C`.

### Tips for Effective Vibe Coding

- **Be specific.** "Make the blog page look better" is vague. "Add more spacing between blog cards and make the titles bigger" gets better results.
- **Reference pages by URL.** "On the /about page, change the intro paragraph to..." helps the AI find the right file.
- **One thing at a time.** Ask for one change, review it, then ask for the next. This keeps things easy to undo if something goes wrong.
- **Check the browser.** After each change, look at `localhost:3000` to make sure it looks right. The dev server auto-refreshes.
- **Use Git after each good change.** Once something looks right, commit it (see the Git section below) so you have a save point to go back to.

### Model Options

| Model | Command | Best For |
|---|---|---|
| Gemini 2.5 Flash | `aider --model gemini/gemini-2.5-flash` | Fast, good for most edits (recommended) |
| Gemini 2.5 Pro | `aider --model gemini/gemini-2.5-pro` | Slower but smarter, for complex changes |

Both are free. Flash is faster and has higher rate limits, so start there. Switch to Pro if Flash isn't getting something right.

### If You Hit Rate Limits

The free tier has limits on how many requests you can make per minute. If you see a rate limit error:
- Wait 30-60 seconds and try again
- Switch to Flash if you're using Pro (Flash has higher limits)
- For heavy sessions, just take natural pauses between requests

---

## Using the Blog Admin

The site has a built-in admin panel for creating and editing blog posts. Blog posts are stored in **Supabase** (an online database).

### Accessing the Admin

1. Go to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Enter the admin password (the `ADMIN_PASSWORD` value from `.env.local`)
3. You'll be taken to the post list at `/admin`

### Creating a New Post

1. Click **"+ New Post"** in the admin panel
2. Fill in the post details:
   - **Title** -- the headline
   - **Date** -- publication date
   - **Category** -- e.g. "Homework", "Reading", "Learning Support"
   - **Author** -- defaults to "Rebecca Bland"
   - **Excerpt** -- a short summary shown on the blog listing page
   - **Featured Image** -- a URL to the header image
   - **Featured** -- tick this to highlight the post on the blog page
   - **Content** -- write the post body using the rich text editor
3. Click **Save/Publish**

### Editing an Existing Post

1. In the admin panel at `/admin`, click **"Edit"** next to any post
2. Make your changes
3. Save

### Deleting a Post

1. In the admin panel, click **"Delete"** next to a post
2. Confirm -- this is permanent

### Logging Out

The admin session lasts 7 days. To log out manually, clear your browser cookies for localhost, or the session will expire on its own.

---

## Managing Blog Posts via Markdown Files

There's also a **fallback system**: if Supabase isn't configured, the site reads blog posts from markdown files in `content/blog/`.

Each file looks like this:

```markdown
---
title: Homework Time Without Tears
date: '2026-02-06'
excerpt: >-
  Research shows that support from adults can help maintain motivation.
category: Homework
author: Rebecca Bland
readTime: 6
featuredImage: https://example.com/image.webp
featured: false
---

### Why routines matter

Your blog content goes here in Markdown format.

**Bold text**, *italic text*, [links](https://example.com), etc.
```

The part between `---` lines is called **frontmatter** (metadata about the post). Everything after is the post content.

---

## Services Overview

The site uses three external services:

### 1. Supabase (Database)

- **What it does:** Stores blog posts in an online database
- **Dashboard:** Log in at [supabase.com](https://supabase.com) to view/manage data directly
- **Table:** `posts` -- contains all blog post data (title, content, date, etc.)
- **When you'd use the dashboard:** To check data, run queries, or fix something that the admin panel can't handle
- **Free tier:** Generous -- more than enough for this site

### 2. MailerLite (Newsletter)

- **What it does:** Manages the email subscriber list and sends newsletters
- **Dashboard:** Log in at [mailerlite.com](https://www.mailerlite.com)
- **How it connects:** When someone fills in the newsletter signup form on the site, the API sends their email to MailerLite and adds them to the "Aldeia" subscriber group
- **When you'd use the dashboard:** To view subscribers, create and send email campaigns, set up automations
- **The site only handles signups** -- you compose and send actual newsletters from the MailerLite dashboard

### 3. Vercel (Hosting & Deployment)

- **What it does:** Hosts the live website and automatically deploys when you push to Git
- **Dashboard:** [vercel.com](https://vercel.com)
- **How it works:** Every time you push code to the `main` branch on GitHub, Vercel automatically builds and deploys the new version
- **Environment variables:** You also need to add your `.env.local` values in the Vercel dashboard under Settings > Environment Variables so the live site has access to them

---

## Git Basics -- Saving and Sharing Your Changes

Git tracks every change you make. Think of it as a "save system" with history.

### Key Concepts

- **Repository (repo):** The project folder, tracked by Git
- **Commit:** A saved snapshot of your changes (like a save point)
- **Branch:** A separate line of work (the main one is called `main`)
- **Push:** Upload your commits to GitHub (the online copy)
- **Pull:** Download the latest changes from GitHub to your computer

### Daily Workflow

#### 1. Before you start working, get the latest changes:

```bash
git pull
```

This downloads any changes others have made. **Always do this before you start editing.**

#### 2. Make your changes

Edit files, add content, fix bugs -- whatever you need to do.

#### 3. See what you've changed:

```bash
git status
```

This shows which files you've modified, added, or deleted.

#### 4. Stage your changes (tell Git what to include):

```bash
# Stage specific files
git add src/app/about/page.tsx

# Or stage everything at once
git add .
```

#### 5. Commit (save a snapshot):

```bash
git commit -m "Update about page text"
```

The message in quotes should briefly describe what you changed. Good examples:
- `"Fix typo on homepage"`
- `"Add new blog post about reading"`
- `"Update contact form layout"`

#### 6. Push to GitHub (share your changes):

```bash
git push
```

This uploads your commits. If the site is on Vercel, this also triggers a new deployment automatically.

### Common Situations

**"I want to undo changes I haven't committed yet":**
```bash
# Undo changes to a specific file
git checkout -- src/app/about/page.tsx

# Undo ALL uncommitted changes (careful!)
git checkout -- .
```

**"I made a mistake in my last commit message":**
```bash
git commit --amend -m "Better commit message"
```

**"Someone else pushed changes and now my push is rejected":**
```bash
git pull
# Fix any conflicts if there are any, then:
git push
```

**"I want to see what changed recently":**
```bash
git log --oneline -10
```

---

## Deploying the Site

### First-Time Setup on Vercel

If the site isn't on Vercel yet, here's how to set it up:

1. **Create a Vercel account** at [vercel.com](https://vercel.com) -- sign up with your GitHub account (this is the easiest way)
2. **Push the repo to GitHub** if it isn't already (see the Git section above)
3. **Import the project:**
   - On the Vercel dashboard, click **"Add New..." > "Project"**
   - Select your GitHub repo from the list
   - Vercel will auto-detect that it's a Next.js project -- leave the default settings as they are
4. **Add environment variables:**
   - Before clicking Deploy, expand the **"Environment Variables"** section
   - Add each variable from your `.env.local` file, one at a time:

   | Name | Value |
   |---|---|
   | `MAILERLITE_API_KEY` | *(paste the full key)* |
   | `ADMIN_PASSWORD` | *(paste the password)* |
   | `NEXT_PUBLIC_SUPABASE_URL` | *(paste the Supabase URL)* |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | *(paste the Supabase key)* |

   **This step is essential.** Without these, the live site won't be able to connect to Supabase, MailerLite, or the admin panel.

5. Click **"Deploy"** -- Vercel will build and publish the site. You'll get a live URL like `your-project.vercel.app`.

### Adding or Changing Environment Variables Later

1. Go to your project on [vercel.com](https://vercel.com)
2. Click **Settings** (top nav) > **Environment Variables** (left sidebar)
3. Add, edit, or delete variables as needed
4. **Important:** After changing environment variables, you need to redeploy for them to take effect. Go to the **Deployments** tab and click the three-dot menu on the latest deployment > **"Redeploy"**

### Automatic Deployment (After Setup)

Once connected, deployment is automatic:
1. Push your changes to the `main` branch: `git push`
2. Vercel detects the push and builds the site automatically
3. The live site updates within a couple of minutes
4. If the build fails, Vercel will email you and the previous version stays live (nothing breaks)

You can check build status and logs on the **Deployments** tab of your Vercel project.

### Custom Domain

To use a custom domain (e.g. `medelalearning.com`) instead of the default `.vercel.app` URL:
1. Go to your project on Vercel > **Settings** > **Domains**
2. Type in your domain and click **Add**
3. Vercel will give you DNS records to add at your domain registrar (wherever you bought the domain)
4. Once DNS propagates (can take a few minutes to a few hours), the site will be live on your custom domain with automatic HTTPS

### Manual Build (Testing Locally)

To test that the site builds correctly before pushing:

```bash
npm run build
```

If this succeeds without errors, the site will deploy fine. If there are errors, fix them before pushing.

---

## Troubleshooting

**"npm run dev" fails or shows errors:**
- Make sure you ran `npm install` first
- Check that your `.env.local` file exists and has all 4 variables
- Try deleting `node_modules` and `.next`, then run `npm install` again

**Admin login doesn't work:**
- Check that `ADMIN_PASSWORD` is set correctly in `.env.local`
- Make sure the dev server is running (`npm run dev`)

**Blog posts aren't showing:**
- If using Supabase: check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
- If using markdown files: check that posts exist in `content/blog/` with correct frontmatter

**Newsletter signups fail:**
- Check the `MAILERLITE_API_KEY` in `.env.local`
- Check the MailerLite dashboard to make sure the API key is still active

**"git push" is rejected:**
- Run `git pull` first, then try `git push` again
- If there are merge conflicts, open the affected files, look for `<<<<<<<` markers, choose which version to keep, save, then `git add .` and `git commit`

**Site looks broken after pulling changes:**
- Run `npm install` in case new dependencies were added
- Restart the dev server (`Ctrl + C`, then `npm run dev`)
