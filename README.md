# TalentFlow - Cloud ATS Dashboard with Supabase & GitHub Pages

A high-fidelity, premium applicant tracking system (ATS) client interface. The app provides a fully interactive dashboard experience to oversee applicant stages, complete technical reviews, and manage interview schedules.

It supports **Offline Mode** (saving to your browser's local storage and caching resumes in IndexedDB) and **Cloud Sync Mode** (connected to a shared, live Supabase PostgreSQL database and Storage Bucket) so multiple team members can view and update the data in real-time.

---

## Supabase Database & Storage Setup

To make the database and file storage accessible to everyone, follow these simple steps to configure your free cloud backend:

### 1. Create a Supabase Project
1. Go to [Supabase](https://supabase.com/) and sign up / log in.
2. Click **New Project** and select/create an organization.
3. Choose a project name (e.g., `TalentFlow ATS`), set a secure database password, choose a hosting region close to you, and click **Create New Project**.

### 2. Create the Database Table and Storage Bucket
1. Once your project is ready, click on **SQL Editor** in the left sidebar menu of the Supabase dashboard.
2. Click **New Query**.
3. Paste the following SQL script into the editor window to configure both the `candidates` table and the `resumes` storage bucket:

```sql
-- 1. Create candidates table
CREATE TABLE IF NOT EXISTS candidates (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    role TEXT NOT NULL,
    level TEXT NOT NULL,
    resume_url TEXT,
    score INTEGER DEFAULT 85,
    tags TEXT[] DEFAULT '{}',
    summary TEXT,
    notes TEXT,
    stage TEXT DEFAULT 'applied',
    ratings JSONB DEFAULT '{"technical": 5, "communication": 5, "fit": 5}',
    timeline JSONB DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;

-- Drop old wide-open CRUD policy
DROP POLICY IF EXISTS "Allow public CRUD" ON candidates;

-- Create public read-only policy (anyone can view)
DROP POLICY IF EXISTS "Allow public SELECT" ON candidates;
CREATE POLICY "Allow public SELECT" ON candidates 
    FOR SELECT USING (true);

-- Create secure write policy (only authenticated admin can modify)
DROP POLICY IF EXISTS "Allow admin write access" ON candidates;
CREATE POLICY "Allow admin write access" ON candidates 
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 2. Create the resumes storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Set storage object policies for Row Level Security (RLS)
-- Anyone can view resumes
DROP POLICY IF EXISTS "Public Read Resumes" ON storage.objects;
CREATE POLICY "Public Read Resumes" ON storage.objects 
    FOR SELECT USING (bucket_id = 'resumes');

-- Only authenticated admin can upload/update/delete resumes
DROP POLICY IF EXISTS "Admin Insert Resumes" ON storage.objects;
CREATE POLICY "Admin Insert Resumes" ON storage.objects 
    FOR INSERT TO authenticated WITH CHECK (bucket_id = 'resumes');

DROP POLICY IF EXISTS "Admin Update Resumes" ON storage.objects;
CREATE POLICY "Admin Update Resumes" ON storage.objects 
    FOR UPDATE TO authenticated USING (bucket_id = 'resumes') WITH CHECK (bucket_id = 'resumes');

DROP POLICY IF EXISTS "Admin Delete Resumes" ON storage.objects;
CREATE POLICY "Admin Delete Resumes" ON storage.objects 
    FOR DELETE TO authenticated USING (bucket_id = 'resumes');
```

4. Click **Run** in the bottom right of the editor. You should see a success message (`Success. No rows returned`).

### 3. Create your Administrator Account in Supabase
1. In your Supabase Project Dashboard, go to **Authentication** (user icon in the left menu sidebar).
2. Click the **Add User** dropdown and select **Create User**.
3. Enter your Administrator Email (e.g. `admin@mycompany.com`) and set a secure Password.
4. Click **Save**. The user will be created and instantly confirmed.
5. In your local `app.js` file, replace the values of `DEFAULT_SUPABASE_URL` and `DEFAULT_SUPABASE_KEY` (around lines 145-146) with your project's URL and Anon Key. This ensures visitors load your database immediately, with visitor lock-down mode active by default.

### 4. Connect the Web App
1. Go to **Project Settings** (gear icon in the left menu) -> **API** in the Supabase dashboard.
2. Find and copy your **Project URL** (under Project API keys).
3. Find and copy your **Anon Key / public** (under Project API keys).
4. Open the TalentFlow app in your browser, click **Settings** in the sidebar.
5. Paste the URL and API Key in the **Supabase Cloud Integration** card and click **Connect Database**.
6. (Optional) Click **Sync Local to Cloud** if you want to import your offline candidate records and cached resume PDFs into Supabase.

---

## Deploying to GitHub Pages 🚀

To share this app with your entire team using a public web address, follow these steps to host it for free on GitHub Pages:

### Step 1: Create a GitHub Repository
1. Log in to your [GitHub](https://github.com/) account.
2. Click the **+** icon in the top right and select **New repository**.
3. Set Repository name to `recruitment-ats` (or any name you prefer).
4. Select **Public** (required for free GitHub Pages).
5. Leave "Add a README file", "Add .gitignore", and "Choose a license" unchecked.
6. Click **Create repository**.

### Step 2: Push Your Local Files to GitHub
Open your terminal (PowerShell, Git Bash, or Command Prompt) in the `recruitment-ats` project directory and run the following commands:

```bash
# 1. Initialize Git in the project directory
git init

# 2. Add all files to the staging area
git add .

# 3. Create your initial commit
git commit -m "initial commit: TalentFlow ATS with Supabase storage and IndexedDB"

# 4. Rename the default branch to main
git branch -M main

# 5. Link your local project to your GitHub repository
# (Replace 'YOUR-GITHUB-USERNAME' with your actual GitHub username)
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/recruitment-ats.git

# 6. Push your files to GitHub
git push -u origin main -f
```

### Step 3: Enable GitHub Pages
1. Go to your repository page on GitHub.
2. Click the **Settings** tab in the repository navigation bar.
3. Select **Pages** from the left sidebar menu (under the "Code and automation" section).
4. Under **Build and deployment**, set the **Source** to **Deploy from a branch**.
5. Under **Branch**, select **main** and set the folder dropdown to **/ (root)**.
6. Click **Save**.
7. Wait 1-2 minutes. Refresh the page, and a banner will appear at the top showing your active web link (e.g., `https://yourusername.github.io/recruitment-ats/`).

---

## Core App Features

- **Resume PDF Uploads:** Supports drag-and-drop file uploads. Resumes are saved in the cloud (Supabase Storage) when online, or cached binary in browser **IndexedDB** when offline, with complete sync-to-cloud support.
- **Sidebar Navigation Routing:** Transitions instantly across 5 distinct views:
  - *Dashboard:* The Kanban candidate pipeline.
  - *Candidates:* Filterable table directory of all applicants showing resume icons.
  - *Jobs:* Applicant tracking statistics grouped dynamically by role.
  - *Interviews:* Chronological agenda listing candidates in the *Interviewing* stage.
  - *Settings:* Company title changer, database reset, and Supabase integration dashboard.
- **Custom Role Inputs:** Datalist combobox matching pre-existing roles or allowing manual typing.
- **Level Hierarchy System:** Standard employee tiers (`Non-Staff` up to `Director`) integrated across cards, profiles, tables, and filters.
- **Dynamic Connection Status Tag:** Shows real-time connection status (`Cloud Connected` with green pulse vs. `Offline Mode` in red).
