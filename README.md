# Chill Gamer: A Game Review Application

## Live Site

[Visit Chill Gamer Live](https://jade-tiramisu-6c88cc.netlify.app/)

## Features

- **User Authentication**: Secure login and registration with email and password, featuring Google/GitHub login options.
- **Game Reviews**: Explore all reviews, add your own reviews, and view detailed reviews with user-specific features.
- **Watchlist Management**: Add favorite games to your personalized watchlist for easy access.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Interactive UI**: Includes a dynamic dark/light theme toggle, React Awesome Reveal animations, and tooltips for an engaging user experience.

## Key Pages

### 1. **Home Page**

- A visually appealing banner/slider with game highlights.
- "Highest Rated Games" section showcasing top-rated games.
- Two extra meaningful sections for gaming trends and news.

### 2. **Authentication Pages**

- Login and Register pages with intuitive user feedback and password strength validation.
- Sweet alerts/toasts for error and success messages.

### 3. **Add Review Page**

- Submit detailed reviews with fields like Game Title, Cover Image, Description, Rating, Genres, and more.
- Accessible only to logged-in users.

### 4. **Review Management**

- **All Reviews Page**: Explore all submitted reviews with sorting and filtering options.
- **My Reviews Page**: Manage your reviews with update and delete options.
- **Review Details Page**: View detailed information and add games to your Watchlist.

### 5. **Game Watchlist Page**

- Manage your personalized list of favorite games added from the Review Details page.

### 6. **Additional Pages**

- **404 Page**: Custom-designed error page for invalid routes.
- **Loading Spinner**: Smooth spinner for better user experience during data fetch.

## Technologies Used

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase
- **Hosting**: Netlify (Client) & Vercel (Server)

## Environment Variables

Ensure to create a `.env` file to securely store:

- Firebase Configuration Keys
- MongoDB Credentials

## Deployment

1. **Client-side Deployment**:
   - Hosted on Netlify with domain authorization for Firebase.
2. **Server-side Deployment**:
   - Hosted on Vercel.

## Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chill-gamer.git
   ```
2. Install dependencies:
   ```bash
   cd chill-gamer
   npm install
   ```
3. Set up environment variables in `.env`.
4. Start the development server:
   ```bash
   npm start
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Challenges Implemented

- Sort and filter functionality on the All Reviews page.
- Modal for updating reviews to enhance the user experience.
- Dark/light theme toggle integrated seamlessly with the design.

## License

This project is licensed under the MIT License.
