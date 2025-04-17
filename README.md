<div align="center">
  <h1>🎬 Netflix Verse</h1> 
  
  <h3>
    👉 <a href="[PLACEHOLDER_PROJECT_LINK]">Live Demo</a> 👈 
  </h3>
</div>

<div align="center">
 
  <p><em>(Project demo GIF or screenshot will be added here)</em></p> 
</div>

## 🚀 About The Project

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
Use code with caution.
Markdown
Note: You need to obtain Firebase and TMDB API keys for free from their respective platforms.
📁 Project Structure
The project follows the Next.js App Router structure:
netflix-verse/
├── src/
│   ├── app/                  # Next.js App Router main directory
│   │   ├── (private)/        # Group for routes requiring login
│   │   │   ├── movies/       # Movie listing and detail pages
│   │   │   │   ├── [movieId]/
│   │   │   │   │   └── page.jsx  # Movie Detail Page
│   │   │   │   └── page.jsx    # Main Movie Listing Page
│   │   │   └── layout.jsx    # Private area layout (Auth check)
│   │   ├── (public)/         # Group for publicly accessible pages
│   │   │   ├── login/
│   │   │   │   └── page.jsx    # Login Page
│   │   │   └── register/
│   │   │       └── page.jsx    # Register Page
│   │   ├── error.jsx         # UI for error states
│   │   ├── favicon.ico       # Favicon
│   │   ├── globals.css       # Global styles (including Tailwind)
│   │   ├── layout.jsx        # Root layout
│   │   ├── loading.jsx       # UI for loading state
│   │   ├── not-found.jsx     # UI for 404 Page
│   │   └── page.jsx          # Main Landing Page (Home)
│   ├── auth/                 # Firebase configuration
│   │   └── firebase.js
│   ├── components/           # Reusable UI components
│   │   ├── HeroSection.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieSection.jsx
│   │   ├── Navbar.jsx
│   │   └── VideoSection.jsx
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
Use code with caution.
🎯 Core Features Details
Authentication Flow
Users can easily register and log in using their email/password or Google accounts.
Unauthenticated users can only access the home, login, and register pages. They are redirected to the login page if they try to access protected routes like /movies (PrivateLayout).
The user's session status is managed globally using AuthContext and dynamically displayed in components like the Navbar (User name, profile picture, Login/Logout buttons).
A password reset function via email is available for users who forget their passwords.
Content Presentation & Interaction
The main movie page (/movies) displays movies from different categories fetched from the TMDB API within horizontally scrollable MovieSection components.
The HeroSection typically showcases the first movie from the "Now Playing" category with a large background video/image and information.
MovieCard components display movie posters and ratings, redirecting to the respective movie's detail page (/movies/[movieId]) upon clicking.
On the movie detail page, the VideoSection component plays the movie trailer using a YouTube video key obtained via the getVideoKey function.
Technical Architecture & Optimization
A balanced use of Next.js's Server Components and Client Components ("use client") is employed. Operations like API requests are generally handled in Server Components, while components requiring user interaction (forms, context usage, etc.) are marked as Client Components.
fetch is used for API requests within movieFunctions.js, and Next.js's revalidate option enables Incremental Static Regeneration (ISR) by revalidating data at specified intervals (e.g., 86400 seconds - 24 hours for video keys and movie details).
loading.jsx and error.jsx files provide automatic loading and error UIs for corresponding route segments, following Next.js's file-based conventions.
📝 License
This project is licensed under the MIT License - see the LICENSE file for details. <!-- You can add a LICENSE file to your repo (e.g., with MIT License text) -->
📫 Contact
Caner Yesiltas - caneryesiltas1@gmail.com
Project Repository: https://github.com/Caner-Yesiltas/Netflix-Verse 
Project Link: []()
<div align="center">
Made with 🎬 by Caner Yesiltas
</div>
```
