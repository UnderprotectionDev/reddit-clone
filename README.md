<div align="center">
  <h1>Reddit Clone 🚀</h1>

<p>A full-featured Reddit clone built with Next.js 15 and Sanity CMS. Experience the power of modern web development with real-time updates, community management, and intelligent content organization.</p>

</div>

![Reddit Clone Home](/public/readme-images/home-page.png)

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)](https://sanity.io/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

## ✨ Features

<div align="center">

| Feature                 | Description                                                       |
| ----------------------- | ----------------------------------------------------------------- |
| 🏘️ Community Management | Create, manage, and moderate communities with custom branding.    |
| 📝 Rich Post Creation   | Create posts with text, images, and rich formatting capabilities. |
| 💬 Nested Comments      | Multi-level comment system with threaded discussions.             |
| 🗳️ Voting System        | Upvote/downvote posts and comments with real-time score updates.  |
| 🔐 User Authentication  | Secure authentication and user management powered by Clerk.       |
| 🔍 Advanced Search      | Search communities with intelligent filtering and suggestions.    |
| 📊 Content Moderation   | Report inappropriate content and admin management tools.          |
| 🎨 Modern UI            | Beautiful, responsive design with dark/light mode support.        |
| ⚡️ Real-time Updates   | Live content updates and synchronization with Sanity CMS.         |
| 📱 Mobile Responsive    | Perfect experience across all devices and screen sizes.           |
| 🔧 Type Safety          | Full TypeScript support with auto-generated types.                |
| 🛠️ Admin Panel          | Comprehensive admin dashboard for content management.             |

</div>

## 🌟 Tech Highlights

- **Next.js 15** with App Router, React 19, and Turbopack for lightning-fast development
- **Sanity CMS** for scalable content management and real-time data synchronization
- **Clerk Auth** for secure, production-ready authentication
- **TypeScript** for complete type safety and better developer experience
- **Shadcn/ui** components for consistent, accessible, and beautiful UI
- **Tailwind CSS** for rapid styling and responsive design
- **Server Actions** for seamless server-side operations
- **Real-time Features** with live updates and optimistic UI patterns

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/reddit-clone.git

cd reddit-clone

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application in action.

## 🛠️ Tech Stack

<details>
  <summary>Click to expand tech stack details</summary>

### Core Framework & Libraries

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://reactjs.org/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[React TimeAgo](https://github.com/nmn/react-timeago)** - Human-readable time formatting

### Backend & CMS

- **[Sanity CMS](https://sanity.io/)** - Headless CMS with real-time capabilities
- **[Sanity Vision](https://www.sanity.io/docs/the-vision-plugin)** - GROQ query tool
- **[Next Sanity](https://github.com/sanity-io/next-sanity)** - Sanity integration for Next.js

### Authentication

- **[Clerk](https://clerk.com/)** - Complete authentication solution

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and formatting

</details>

## 📸 Screenshots

<div align="center">

### 🏠 Home Page

![Home Page](/public/readme-images/home-page.png)

### 🏘️ Community Page

![Community Page](/public/readme-images/community-page.png)

### 🏗️ Create Community

![Create Community](/public/readme-images/create-community.png)

### ✍️ Create Post

![Create Post 1](/public/readme-images/create-post-01.png)

![Create Post 2](/public/readme-images/create-post-02.png)

### 🔍 Search Results

![Search Page](/public/readme-images/search-page.png)

</div>

## 🔐 Environment Variables

Create a `.env.local` file in the root of your project:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_ADMIN_TOKEN=your_sanity_admin_token

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Application
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

| Variable                            | Description                                | Required |
| ----------------------------------- | ------------------------------------------ | -------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`     | Sanity project identifier                  | ✅       |
| `NEXT_PUBLIC_SANITY_DATASET`        | Sanity dataset name (usually 'production') | ✅       |
| `SANITY_API_ADMIN_TOKEN`            | Sanity API token with read/write access    | ✅       |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key                      | ✅       |
| `CLERK_SECRET_KEY`                  | Clerk secret key                           | ✅       |
| `NEXT_PUBLIC_BASE_URL`              | Your application URL (for development)     | ✅       |

## 🗂️ Project Structure

```
reddit-clone/
├── app/                    # Next.js App Router
│   ├── (admin)/           # Admin panel routes
│   ├── (app)/             # Main application routes
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/                # Shadcn/ui components
│   ├── post/              # Post-related components
│   ├── comment/           # Comment system components
│   └── header/            # Navigation components
├── sanity/                # Sanity CMS configuration
│   ├── schemaTypes/       # Content schemas
│   ├── lib/               # Sanity utilities
│   └── structure.tsx      # Studio structure
├── action/                # Server actions
├── lib/                   # Utility functions
└── public/                # Static assets
```
