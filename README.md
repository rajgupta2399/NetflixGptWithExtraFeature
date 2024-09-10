Netflix React App

<p>Netflix-like React App powered by TMDB API and Firebase Authentication.</p> <br />

<h2>Setup</h2> <p>Client Folder: Front-end</p> <li>Install the Node Module folder: <code>npm install</code></li> <li>Run the development server: <code>npm run dev</code></li> <br /> <p>Create a .env file and add the following configuration:</p> <li><code>REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY_HERE</code></li> <br /> <h2>Features</h2>

- Home Page (Accessible after login via Firebase Authentication)
- Firebase-based SignIn/SignUp Page
- Watch Trailers directly from TMDB
- Browse Movies by categories such as Trending, Top Rated, and more
- Search for your favorite movies or TV shows
- Add to Watchlist feature (Movies added to a personalized watchlist)
- Watchlist Page for easy access to saved movies
- Responsive UI for mobile and desktop screens
<h2>Firebase Authentication</h2>
Firebase handles user authentication for secure login/signup
After login, users can browse movies, view details, and save to their watchlist
Protected Routes: Only authenticated users can access the home and watchlist pages
Authentication: Firebase handles the login state, providing secure user access
<h2>React UI Libraries</h2> <li>Tailwind CSS</li> <li>Shadcn UI</li> <li>Headless UI</li> <li>React Router</li> <h2>API Integration</h2>
This app integrates the TMDB API to fetch dynamic movie data:

Trending Movies: Displays the top trending movies.
Movie Details: Displays detailed information and trailers.
Search: Allows users to search for specific movies or TV shows by name.

<h2>💖 Support This Project</h2> <p>Thank you for taking the time to check out this Netflix React App. This project was inspired by my passion for learning React and exploring the vast capabilities of the TMDB API and Firebase. It’s a project built with love and dedication to bring movie-lovers a fun experience.</p> <p>If you have any questions, suggestions, or just want to connect, feel free to reach out.</p> <br /> <p>Made with ❤️ and React.</p>
