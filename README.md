<div align="center">
  <h1>🎬 Netflix Verse</h1> 
  
  <h3>
    👉 <a href="https://netflix-verse-eight.vercel.app/">Live Demo</a> 👈 
  </h3>
</div>

<div align="center">
  <img src="/public/Netflix-Verse.gif" alt="Netflix Verse" width="800"/>
</div>


## ♾️ About The Project

Netflix Verse is a clone project that recreates the interface and core functionalities of the popular streaming platform Netflix using modern web technologies. It allows users to watch movie and TV show trailers, browse content by category, register/login, and experience the platform's general user interface. This project was developed primarily using Next.js, Firebase Authentication, and the TMDB API, aiming to showcase modern frontend development skills.

### ✨ Key Features

- 🔐 **User Authentication:**
    - Sign Up and Sign In with Email/Password
    - Sign In with Google (Social Login)
    - Forgot Password functionality
    - Session Management
    - Protected Routes - Only logged-in users can access main movie pages.
- 🎬 **Movie/TV Show Content:**
    - Listing movies in categories like Popular, Now Playing, Top Rated, Upcoming (from TMDB API).
    - Featured movie/show in the Hero Section on the main page.
    - Navigation to movie detail pages.
    - Playing movie/show trailers via YouTube integration.
- 🎨 **UI & User Experience:**
    - Modern, dark-themed, and clean interface similar to Netflix.
    - Fully responsive design (Mobile, Tablet, Desktop).
    - Navbar background color change on scroll.
    - Visual feedback for Loading and Error states.
    - Toast notifications for user actions.
- ⚙️ **Technical Features:**
    - Page routing and layout management with Next.js App Router.
    - Server-Side Rendering (SSR) and Static Site Generation (SSG) capabilities (via Next.js).
    - Firebase Authentication integration.
    - Data fetching from the TMDB API.
    - Global state management for authentication status using React Context API.
    - Fast and efficient styling with Tailwind CSS.
- 🔍 **Search Functionality:**
    - Real-time movie search with debounced input (1.5 second delay)
    - Dynamic routing to search results page (`/search/[term]`)
    - Search results display with movie posters and titles
    - URL-based search terms for shareable links
    - Search input only available for authenticated users

### 🛠️ Built With

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [Firebase Authentication](https://firebase.google.com/docs/auth)
- **State Management:** [React Context API](https://reactjs.org/docs/context.html)
- **API:** [TMDB API](https://www.themoviedb.org/documentation/api)
- **API Requests:** [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (within Next.js)
- **UI Components:** [Headless UI](https://headlessui.com/) (for Navbar Dropdown)
- **Icons:** [Heroicons](https://heroicons.com/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Loading Indicator:** [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/)
- **Search Optimization:** [use-debounce](https://github.com/xnimorz/use-debounce) (for debounced search input)

## 💻 Getting Started

To set up and run the project locally, follow these steps:

```bash
# 1. Clone the repository
git clone https://github.com/Caner-Yesiltas/Netflix-Verse 

# 2. Navigate to the project directory
cd Netflix-Verse

# 3. Install the necessary packages
npm install 
# or
# yarn install

# 4. Set Up Environment Variables
# Create a file named `.env.local` in the project root directory.
# Fill in the following variables with your own Firebase and TMDB API keys:
# Example .env.local content:
# NEXT_PUBLIC_apiKey=YOUR_FIREBASE_API_KEY
# NEXT_PUBLIC_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
# NEXT_PUBLIC_projectId=YOUR_FIREBASE_PROJECT_ID
# NEXT_PUBLIC_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
# NEXT_PUBLIC_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
# NEXT_PUBLIC_appId=YOUR_FIREBASE_APP_ID
# TMDB_KEY=YOUR_TMDB_API_KEY

# 5. Start the development server
npm run dev
# or
# yarn dev

Note: You need to obtain Firebase and TMDB API keys for free from their respective platforms.


## 📁 Project Structure

The project follows the Next.js App Router structure:

netflix-verse/
├── src/
│   ├── app/                  # Next.js App Router main directory
│   │   ├── (private)/        # Group for routes requiring login
│   │   │   ├── movies/       # Movie listing and detail pages
│   │   │   │   ├── [movieId]/
│   │   │   │   │   └── page.jsx  # Movie Detail Page
│   │   │   │   ├── components/   # Components specific to /movies route
│   │   │   │   │   ├── HeroSection.jsx
│   │   │   │   │   ├── MovieCard.jsx
│   │   │   │   │   ├── MovieSection.jsx
│   │   │   │   │   └── VideoSection.jsx
│   │   │   │   └── page.jsx    # Main Movie Listing Page
│   │   │   ├── profile/      # User profile/selection page
│   │   │   │   ├── components/   # Components specific to /profile route
│   │   │   │   │   ├── CardContainer.jsx
│   │   │   │   │   └── UserCard.jsx
│   │   │   │   ├── layout.jsx    # Layout for the profile page (if needed)
│   │   │   │   └── page.jsx      # Profile Page itself
│   │   │   ├── search/       # Search functionality
│   │   │   │   └── [term]/   # Dynamic search results page
│   │   │   │       └── page.jsx  # Search Results Page
│   │   │   └── layout.jsx    # Private area layout (Auth check)
│   │   ├── (public)/         # Group for publicly accessible pages
│   │   │   ├── login/
│   │   │   │   └── page.jsx    # Login Page
│   │   │   └── register/
│   │   │       └── page.jsx    # Register Page
│   │   ├── error.jsx         # UI for error states
│   │   ├── favicon.ico       # Favicon
│   │   ├── globals.css       # Global styles (including Tailwind)
│   │   ├── layout.jsx        # Root (Root) layout
│   │   ├── loading.jsx       # UI for loading state
│   │   ├── not-found.jsx     # UI for 404 Page
│   │   └── page.jsx          # Main Landing Page (Home)
│   ├── auth/                 # Firebase configuration
│   │   └── firebase.js
│   ├── components/           # Globally reusable UI components
│   │   └── Navbar.jsx        # Navigation component with search functionality
│   ├── context/              # React Context API
│   │   └── AuthContext.js
│   └── helpers/              # Helper functions
│       ├── movieFunctions.js # TMDB API requests
│       └── ToastNotify.js    # Toast notifications
├── public/                   # Static files (images, icons)
│   ├── images/
│   └── icons/
├── .env.local                # Environment variables (Keep secret)
├── .gitignore                # Files ignored by Git
├── next.config.mjs           # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration (for Tailwind)
├── README.md                 # Project description (This file)
└── tailwind.config.js        # Tailwind CSS configuration

```
## 🎯 Core Features Details

### Authentication Flow
- **Sign Up/Sign In:** Users can easily register and log in using their email/password or Google accounts.
- **Protected Routes:** Unauthenticated users can only access public pages (home, login, register). They are automatically redirected to the login page if they attempt to access protected routes like `/movies` (Handled by `PrivateLayout`).
- **Session Management:** The user's session status is managed globally using `AuthContext` and dynamically reflected in UI components like the Navbar (displaying user name, profile picture, and appropriate Login/Logout buttons).
- **Password Reset:** A password reset function via email is available for users who forget their passwords.

### Content Presentation & Interaction
- **Categorized Browsing:** The main movie page (`/movies`) displays movies fetched from the TMDB API, organized into different categories (Now Playing, Popular, Top Rated, Upcoming) within horizontally scrollable `MovieSection` components.
- **Hero Section:** Features a prominent movie (typically the first from the "Now Playing" list) with a large background video/image and essential information.
- **Movie Cards:** `MovieCard` components display movie posters and ratings, redirecting to the respective movie's detail page (`/movies/[movieId]`) upon clicking.
- **Trailer Playback:** On the movie detail page, the `VideoSection` component embeds and plays the movie trailer using a YouTube video key obtained via the `getVideoKey` helper function.

### Technical Architecture & Optimization
- **Next.js App Router:** Employs a balanced use of Next.js's Server Components (for data fetching, server-side logic) and Client Components (`"use client"` for interactivity, state hooks, context usage).
- **API Data Fetching:** Uses the `fetch` API within server-side helper functions (`movieFunctions.js`) to retrieve data from the TMDB API.
- **Incremental Static Regeneration (ISR):** Leverages Next.js's `revalidate` option in `fetch` calls to periodically update cached data (like movie details and video keys) at specified intervals (e.g., every 24 hours), ensuring data freshness without needing a rebuild for every request.
- **Convention-Based UI States:** Utilizes Next.js's file-based conventions by implementing `loading.jsx` and `error.jsx` files to automatically provide loading and error UIs for the corresponding route segments.

## 📝 License

This project is licensed under the MIT License - see the `LICENSE` file for details. 

## 📫 Contact

Caner Yesiltas - [caneryesiltas1@gmail.com](mailto:caneryesiltas1@gmail.com)

- **Project Repository:** [https://github.com/Caner-Yesiltas/Netflix-Verse](https://github.com/Caner-Yesiltas/Netflix-Verse) 
- **Live Demo:** [https://netflix-verse-eight.vercel.app/](https://netflix-verse-eight.vercel.app/)

<div align="center">
  Made with 🎬 by Caner Yesiltas
</div>